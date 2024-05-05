import React, { useEffect } from 'react'
import { useState } from 'react'
import _ from "lodash";
import 'animate.css'
import { BaseLayer } from './components';

const App = () => {

  const [pax, setPax] = useState(0);
  const [firstR, setFirstR] = useState(20);



  // const handleScroll = _.debounce(() => {
  //   const zoom = Math.floor(window.scrollY / 2);
  //   setPax(zoom);
  // },10);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () =>{
  //     window.removeEventListener('scroll',handleScroll)
  //   }
  // },[])

  window.addEventListener('scroll', () => {

    if (scrollY <= 100) {
      setFirstR(20 - Math.ceil(scrollY / 5))
    }
    else {

      setFirstR(0);

      const zoom = Math.floor(scrollY / 2) - 100;
      // console.log(scrollY);
      setPax(zoom);
    }

  })

  const array1to50 = Array.from({ length: 5 }, (_, index) => index + 1);

  // console.log(array1to50)





  return (
    <div>
      <div className=' bg-blue-500 fixed flex justify-center items-center w-full h-screen'>
        <div
          style={{
            transform: `perspective(500px) rotateX(0deg) rotateY(${firstR}deg) translateZ(${pax}px)`,
          }}
          className=' relative view border-2 border-gray-700 w-full h-full'>



          <div className={`red  ${scrollY > 1300 ? "hidden" : "block"}  absolute w-full h-full`}>

          </div>

          <div className={` green absolute w-full h-full ${scrollY > 650 ? "block" : "hidden"} `}></div>
          <div className={`blue  absolute w-full ${scrollY > 1400 ? "block" : "hidden"} h-full`}></div>
          <div className="under absolute w-full h-[2500px] bottom-[100px]"></div>
          <div className="toping absolute w-full h-[2500px] top-0"></div>
          <div className="left absolute h-full w-[2500px] left-0"></div>
          <div className="right absolute h-full w-[2500px] right-0"></div>
        </div>
      </div>
      <div style={{ height: '5000px' }}></div>
    </div>
  )
}

export default App