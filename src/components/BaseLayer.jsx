import React from 'react'

const BaseLayer = () => {
  return (
    <div className=' w-full relative h-full bg-transparent'>
      
        <div className=' w-full h-[200px]  absolute bg-orange-200 bottom-0 border-t-2 border-black'>
          <div className=" w-full h-10 bg-gray-900 absolute top-20"></div>
        </div>
        <div className=" w-full h-full absolute bg-gradient-cover"></div>
        
    </div>
  )
}

export default BaseLayer