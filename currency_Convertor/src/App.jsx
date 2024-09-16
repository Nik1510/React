import { useState } from 'react'
import { InputBox } from './components' // Importing the InputBox component
import useCurrencyInfo from './hooks/useCurrencyInfo' // Importing custom hook to fetch currency information

function App() {
  // State variables to store the amount to be converted, currencies, and the converted amount
  const [amount, setAmount] = useState(0) // Amount to be converted
  const [from, setFrom] = useState("usd") // Currency to convert from (default: USD)
  const [to, setTo] = useState("inr") // Currency to convert to (default: INR)
  const [convertedAmount, setConvertedAmount] = useState(0) // Stores the converted amount

  // Fetching currency conversion data using the `from` currency
  const currencyInfo = useCurrencyInfo(from) // API fetch is done here, initially passing "usd" to fetch rates

  // Extract available currency options from the fetched data
  const options = Object.keys(currencyInfo); // This will give you ["inr", "eur", "jpy", ...]
 // Returns an array of available currency keys

  // Function to swap the 'from' and 'to' currencies, and also swap the amounts
  const swap = () => {
    setFrom(to) // Swaps the 'from' currency with 'to'
    setTo(from) // Swaps the 'to' currency with 'from'
    setConvertedAmount(amount) // Sets the converted amount to the current amount
    setAmount(convertedAmount) // Sets the current amount to the converted amount
  }

  // Function to convert the currency based on the current amount and exchange rate
  const convert = () => {
    // Multiplies the amount by the exchange rate of the 'to' currency and updates `convertedAmount`
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        // Inline style for setting background image
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                {/* Form for handling currency conversion */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault(); // Prevents the page from reloading when the form is submitted
                        convert() // Calls the convert function when the form is submitted
                    }}
                >
                    {/* Input box for the "from" currency and amount */}
                    <div className="w-full mb-1">
                        <InputBox
                            label="From" // Label for the input field
                            amount={amount} // Binds the amount state to the input field
                            currencyOptions={options} // Passes the currency options fetched from the API
                            onCurrencyChange={(currency) => setFrom(currency)} // Updates the 'from' currency
                            selectCurrency={from} // Specifies the selected 'from' currency
                            onAmountChange={(amount) => setAmount(amount)} // Updates the amount when input changes
                        />
                    </div>

                    {/* Button to swap 'from' and 'to' currencies */}
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap} // Calls the swap function to switch currencies
                        >
                            swap
                        </button>
                    </div>

                    {/* Input box for the "to" currency and converted amount */}
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To" // Label for the input field
                            amount={convertedAmount} // Displays the converted amount in the input field
                            currencyOptions={options} // Passes the currency options fetched from the API
                            onCurrencyChange={(currency) => setTo(currency)} // Updates the 'to' currency
                            selectCurrency={to} // Specifies the selected 'to' currency
                            amountDisable // Disables the amount input field for the "To" section
                        />
                    </div>

                    {/* Submit button to trigger conversion */}
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()} {/* Shows the conversion direction */}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App;
