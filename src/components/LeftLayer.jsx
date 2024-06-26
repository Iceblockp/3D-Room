import React from 'react'

const LeftLayer = () => {
    return (
        <div className=' w-full h-full flex'>
            <div className=" h-full w-[500px] relative bg-[#008080]">
                <div className=' w-full h-[200px]  absolute bg-orange-200 bottom-0 border-t-2 border-black'>
                    <div className=" w-full h-10 bg-gray-900 absolute top-20"></div>
                </div>
                <div className=" w-full h-full absolute bg-gradient-cover"></div>

                <div className=" w-full h-full absolute bg-gradient-cover"></div>
            </div>
            <div className=" h-full w-[1000px] relative bg-[#008080]">
            <div className=' w-full h-[200px]  absolute bg-orange-200 bottom-0 border-t-2 border-black'>
          <div className=" w-full h-10 bg-gray-900 absolute top-20"></div>
        </div>
        <div className=" w-full h-full absolute bg-gradient-cover"></div>
        
                <div className=" w-full h-full absolute bg-gradient-cover"></div>
            </div>
            <div className=" h-full w-[1000px] relative bg-[#008080]"></div>
        </div>
    )
}

export default LeftLayer