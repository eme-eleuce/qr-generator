import React, { useContext } from 'react'
import { InputContext } from '../App'

const InputField = () => {

 const {inputValue, setInputValue} = useContext(InputContext);
 const handleOnChange = e => setInputValue({ ...inputValue, url: e.target.value})

 console.log(inputValue)

  return (
    <div>
        <label className='text-md font-bold mb-1'>Your URL</label>
        <input type="url" className='w-full border py-1 px-3 text-gray-900 rounded-md' 
        placeholder='insert url' value={inputValue.url} onChange={handleOnChange} />
    </div>
  )
}

export default InputField