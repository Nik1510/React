import {useEffect, useState} from "react"

// Custom React hook to fetch currency information based on the provided currency parameter
function useCurrencyInfo(currency){
    // useState is used to store the fetched data. Initially, it is an empty object.
    const [data, setData] = useState({})

    // useEffect is triggered whenever the `currency` changes, ensuring fresh data is fetched when a different currency is passed
    useEffect(() => {
        // Fetches the currency data from the API, dynamically inserting the currency parameter into the URL
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json`)
        
        // Converts the API response, which is a string, into a JSON object for easier manipulation
        .then((res) => res.json()) 
        
        // Sets the fetched data (specific currency info) into the `data` state using setData
        .then((res) => {
            // Assuming the API response has a structure like { "date": "2024-09-11", "usd": { "inr": ..., "eur": ... }}
            setData(res[currency]); // Only set the object of rates for the selected currency (e.g., "usd")
        }) 
        
        // Logs the data to the console for debugging purposes
        console.log(data);
        
    }, [currency]) // Dependency array ensures the effect runs only when `currency` changes

    // Logs the current state of `data` for debugging purposes
    console.log(data);
    

    // Returns the fetched data for use in the component that uses this hook
    return data
}


export default useCurrencyInfo;

// Note: Uncomment the following if you need to fetch a list of all currencies instead of a specific one
// `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json`);
