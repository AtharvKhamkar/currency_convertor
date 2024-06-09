import { useState } from 'react';
import './App.css';
import InputBox from './Components/InputBox';
import useCurrencyInfo from './Hooks/useCurrencyInfo';


function App() {
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr')
  const [inputAmount, setInputAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  const currencyInfo = useCurrencyInfo(from);
  console.log(currencyInfo)
  const options = Object.keys(currencyInfo)

  const convert = () => {
    setConvertedAmount(inputAmount * currencyInfo[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setInputAmount(convertedAmount)
    setConvertedAmount(inputAmount)
  }


return (
    <div className='w-full h-screen bg-slate-800 flex justify-center items-center'>
    <div className='w-1/2 bg-gray-700 p-8 rounded-lg backdrop-blur-sm'>
    <h1 className='text-3xl text-white font-extrabold p-2'>Currency Convertor</h1>
      <form action=""
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }  
      }
      >
        <div className='w-full mb-1'>
        <InputBox
            label="From"
            amount={inputAmount}
            currencyList={options}
            currency={from}
            setAmount={(amount)=> setInputAmount(amount)}
            setCurrency={(currency)=> setFrom(currency)}
          />
          <div className='flex justify-center items-center bg-slate-400 w-20 h-10 rounded-lg mx-auto text-xl font-bold text-white cursor-pointer'
            onClick={swap}
          >
            Swap
          </div>
         
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyList={options}
            currency={to}
            setAmount={setConvertedAmount}
            setCurrency={(currency) => setTo(currency)}
            isAmountDisabled={true}
            
          />
          <div className='bg-slate-400 w-full rounded p-3 m-2 text-xl text-center font-bold text-white cursor-pointer' onClick={convert}>
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </div>
        </div>
        </form>
      </div>
    </div>
  )
}

export default App
