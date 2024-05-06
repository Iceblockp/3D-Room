import React from 'react'

const TopLayer = () => {
    return (
        <div className=' w-full h-full'>
            <div className=' h-[500px] w-full relative'>
                <div className=' absolute w-full h-full bg-gradient-cover'></div>
            </div>
            {/* second */}
            <div className=' h-[1000px] view relative w-full bg-orange-300'>
                 <div className=" w-full h-full absolute bg-gradient-cover"></div>

            </div>

            {/* third  */}
            <div className=' h-[1000px] w-full'> Third</div>




        </div>
    )
}

export default TopLayer