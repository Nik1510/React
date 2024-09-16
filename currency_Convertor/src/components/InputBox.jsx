import React, {useId} from 'react'

// Functional component `InputBox` that renders an input field for an amount and a dropdown for selecting currency
function InputBox({
    label, // Label for the input field (e.g., "Amount")
    amount, // Current value of the amount input field
    onAmountChange, // Callback function to handle changes to the amount input field
    onCurrencyChange, // Callback function to handle changes to the currency selection
    currencyOptions = [], // Array of available currency options for the dropdown
    selectCurrency = 'usd', // Default selected currency (e.g., "usd")
    amountDisable = false, // Boolean to control whether the amount input field is disabled
    currencyDisable = false, // Boolean to control whether the currency dropdown is disabled
    className = "", // Additional CSS class names to style the component
}) {
    // Generates a unique ID for the amount input field
    const amountInputId = useId()

    return (
        // Outer container div styled with background, padding, and flexbox layout
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            {/* Left section for the amount input */}
            <div className="w-1/2">
                {/* Label for the amount input field */}
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                {/* Input field for entering the amount */}
                <input
                    id={amountInputId} // Associates the label with this input field using the unique ID
                    className="outline-none w-full bg-transparent py-1.5" // Input styling
                    type="number" // Specifies input type as number
                    placeholder="Amount" // Placeholder text for the input field
                    disabled={amountDisable} // Disables the input if `amountDisable` is true
                    value={amount} // Binds the input's value to the `amount` prop
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} // Calls the `onAmountChange` function if provided, converting the input value to a number
                
                />
            </div>

            {/* Right section for the currency dropdown */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                {/* Label for the currency selection dropdown */}
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                {/* Dropdown to select currency */}
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" // Dropdown styling
                    value={selectCurrency} // Binds the selected currency to the `selectCurrency` prop
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // Calls the `onCurrencyChange` function 
                    // when a new currency is selected
                    disabled={currencyDisable} // Disables the dropdown if `currencyDisable` is true
                >
                    {/* Maps over `currencyOptions` and renders an <option> for each currency */}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
