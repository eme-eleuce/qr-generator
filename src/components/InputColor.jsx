import React, { useContext, useEffect, useState } from 'react'
import { BlockPicker } from 'react-color';
import { InputContext } from '../App';
import InputForm from './InputForm';

const InputColor = () => {

const [color, setColor] = useState('#000000');
const [displayColor, setDisplayColor] = useState(false)
const handleChange = color => setColor(color.hex);

const {inputValue, setInputValue} = useContext(InputContext);



useEffect(() => {

   setInputValue({...inputValue, color: color})

}, [color])



  return (
    <div>
        <label className='font-bold text-md'>Color</label>
        <div className='flex items-center gap-2'>
            <div 
            onClick={() => setDisplayColor(!displayColor)}
            style={{ background: color}}
            className='w-10 h-8 cursor-pointer border-4'>
            </div>

            <span> {color} </span>
        </div>

        {
            displayColor && (
                <div className='absolute'>
                    <BlockPicker color={color} onChange={handleChange} />
                </div>
            )
        }

    </div>
  )
}

export default InputColor