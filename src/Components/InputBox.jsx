import React from 'react'

function InputBox({
    label,
    amount,
    setAmount,
    currencyList = [],
    currency = "usd",
    setCurrency,
    isAmountDisabled = false,
    isCurrencyDisabled = false
}) {

  return (
      <div className='flex flex-wrap w-full bg-white text-gray-600 rounded-lg p-3 m-2 '>
          <div className='w-1/2 bg-white my-2'>
              
              <p className='py-1'>{ label}</p>
              <input
                  type="number"
                  name="Amount Input"
                  id=""
                  placeholder='Amount Input'
                  value={amount}
                  onChange={(e) => setAmount && setAmount(Number(e.target.value))}
                  disabled={isAmountDisabled}
                  className='text-gray-800 bg-gray-200 h-8 p-2 rounded-lg'
              />
          </div>    
          <div className='w-1/2 bg-white justify-end text-right my-2'>
              <p className='py-1'>Select Currency</p>
              <select
                  name="SelectCurrency"
                  id=""
                  value={currency}
                  onChange={(e) => setCurrency && setCurrency(e.target.value)}
                  disabled={isCurrencyDisabled}
                  className='text-gray-800 h-8 p-2 rounded-lg'
              >
                  {
                      currencyList.map((currency) => (
                          <option key={currency} value={currency}>{ currency}</option>
                      ))
                  }
              </select>
          </div>
    </div>
  )
}

export default InputBox