import React, { useContext } from 'react'
import { saveAs } from 'file-saver'
import { InputContext } from '../App'

const QrCode = () => {

  const { response, loading, error } = useContext(InputContext)
  const downloadImage = () => {
   saveAs(response, 'qrCode.png')

  }
  
  if (loading) {
    
    return (

      <div className='animate-pulse col-span-2 px-3 md:m-6 py-3 gap-3 items-center justify-center'>
        <div className='h-32 w-full bg-orange-400 rounded-lg'></div>
      </div>
    )
  }

  if (error) {
    
return <div className='flex items-center text-gray-700 '> Sorry, the ice cream machine is broken.😔</div>

  }

  return (
    <div className=' col-span-2 p-6 grid gap-4 items-center justify-center rounded-lg'>
     {response ? (
      <div>
        <img className='w-[16rem] border border-black' src={response} alt="" />
        <button onClick={downloadImage} className='bg-black text-white px-4 mt-3  w-full'>Download</button>
      </div>
     ) : (
      
      <div className='bg-gradient-to-r bg-clip-text text-transparent from-cyan-500 to-green-500 animate-text my-10 text-2xl font-bold'> your QR code is nearby</div>

     )}
      
    </div>
  )
}

export default QrCode