import { useState } from "react"
import {InputBox} from "./components/index.js"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

export default function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState()

  //custom hooks
 const currencyInfo = useCurrencyInfo(from)
//  const options = Object.keys(currencyInfo)
const options = currencyInfo ? Object.keys(currencyInfo) : [];

 const swap =() =>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
 }

 const convert =() =>{
  setConvertedAmount(amount * currencyInfo[to])
 }


  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{backgroundImage :`url(https://store-images.s-microsoft.com/image/apps.3790.13746602931236419.ec145616-d3b2-4fef-b955-55708f912cfd.44b1adcc-6220-448a-ada7-ec31717c5e62?mode=scale&q=90&h=1080&w=1920)`}}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
         <form onSubmit={(e)=>{e.preventDefault()
          convert()
         }}>
          <div className="w-full mb-1"> 
            <InputBox  label="from" amount={amount} 
            currencyOptions={options} 
            onCurrencyChange={(currency)=> setFrom(currency)} 
            onAmountChange={(amount)=>setAmount(amount)} 
            selectedCurrency={from} />

          </div>
         </form>
        </div>
      </div>
    </div>
  )
}