

import { createContext, useState } from 'react'
import './App.css'
import InputForm from './components/InputForm'
import QrCode from './components/QrCode'
import axios from 'axios'
export const InputContext = createContext()

function App() {
  const [inputValue, setInputValue] = useState({ url:'', color:''})
  const [response, setResponse] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  // 413cb590-54a8-11ed-b77d-5d711c3861f8

const configuracion = { headers: { Authorization: 'Bearer 413cb590-54a8-11ed-b77d-5d711c3861f8'}}
const params = {
    
  "colorDark": inputValue.color,
  "qrCategory": "url",
  "text": inputValue.url

}

const getQrCode = async  () => 
{ try {
  setLoading(true);
  const res = await axios.post('https://qrtiger.com/api/qr/static', params, configuracion);
    setResponse(res.data.url);
} catch (err) {
    setError(err)
} finally {
    setLoading(false)
}}

const value = {inputValue, setInputValue, getQrCode, response, loading, error }

  return (
    <div className='bg-[#f1f1f1] h-screen pt-8 md:pt-[8rem] px-2'>
      <div className='md:w-[1000px] rounded-lg container mx-auto mx-w-xl bg-white  bg-gradient-to-r p-[14px] from-[#6EE7B7] via-[#3B82F6] to-[#ce3ea5] animate-text'>
        <div className='flex flex-col justify-between h-full bg-[#f1f1f1] rounded-lg p-4 text-black'>
        <div className='md:grid md:grid-cols-2'>
          <InputContext.Provider value={value}>
          <InputForm/>
          <QrCode/>
          </InputContext.Provider>
        </div>
        </div>

      </div>
    </div>
  )
}

export default App
