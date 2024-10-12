import React, { useState } from 'react';

const CurrencyForm = () => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleConvert = async () => {
    if (amount && fromCurrency && toCurrency) {
      try {
        const apiKey = '24de2ce9f9aa12a4aaf15509'; 
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`);
        const data = await response.json();
        const rate = data.conversion_rates[toCurrency];
        const result = amount * rate;
        setConvertedAmount(result.toFixed(2));
      } catch (error) {
        alert('Error fetching exchange rates. Please try again later.');
        console.error(error);
      }
    } else {
      alert('Please enter a valid amount and select currencies.');
    }
  };

  return (
    <section className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Convert Currency</h2>
      
      {/* From Currency */}
      <div className="mb-4">
        <label htmlFor="from-currency" className="block text-sm font-medium">From Currency</label>
        <select
          id="from-currency"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          {/* Add more currencies as needed */}
        </select>
      </div>

      {/* Amount Input */}
      <div className="mb-4">
        <label htmlFor="amount" className="block text-sm font-medium">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter amount"
        />
      </div>

      {/* To Currency */}
      <div className="mb-4">
        <label htmlFor="to-currency" className="block text-sm font-medium">To Currency</label>
        <select
          id="to-currency"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="EUR">EUR - Euro</option>
          <option value="USD">USD - US Dollar</option>
          <option value="GBP">GBP - British Pound</option>
          {/* Add more currencies as needed */}
        </select>
      </div>

      {/* Convert Button */}
      <div className="mt-6">
        <button onClick={handleConvert} className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700">
          Convert
        </button>
      </div>

      {/* Conversion Result */}
      {convertedAmount && (
        <div className="mt-6 text-center text-xl font-semibold">
          Converted Amount: {convertedAmount} {toCurrency}
        </div>
      )}
    </section>
  );
};

export default CurrencyForm;
