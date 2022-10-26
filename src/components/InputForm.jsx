import React, { useContext } from 'react'
import { InputContext } from '../App'
import InputColor from './InputColor'
import InputField from './InputField'

const InputForm = () => {

const { getQrCode, inputValue } = useContext(InputContext)
const handleSubmit = () => getQrCode();

  return (
    <div className='col-span-2 p-6 grid gap-4'>
        <div>
            <InputField/>
            <InputColor/>
            <button
            disabled={!inputValue.url}
            onClick={handleSubmit}
            className='bg-black max-w-xs mt-4 ml-auto px-4 py-2 text-white rounded-md hover:bg-gray-800'
            >Generate QR</button>
        </div>
    </div>
  )
}

export default InputForm