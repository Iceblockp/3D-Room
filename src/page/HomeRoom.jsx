import React, { useEffect } from 'react'
import { useState } from 'react'
import _ from "lodash";
import 'animate.css'
import { BaseLayer, LeftLayer, RightLayer, SecondLayer, TopLayer } from '../components';

const HomeRoom = () => {
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

  
  
  
  return (
    <div
          style={{
            transform: `perspective(500px) rotateX(0deg) rotateY(${firstR}deg) translateZ(${pax}px)`,
          }}
          className=' relative view border-2 border-gray-700 w-full h-screen'>


          {/* start layer  */}


          <div className={`first absolute w-full h-full`}>
            <BaseLayer />
          </div>

          <div className={` second absolute w-full h-full  `}>
            <SecondLayer/>
          </div>
          <div className={`third  absolute w-full ${scrollY > 1400 ? "block" : "block"} h-full`}></div>
          <div className="under absolute w-full h-[2500px] bottom-[100px]"></div>
          <div className="toping absolute bg-orange-300 w-full h-[2500px] top-0"><TopLayer /></div>
          <div className="lefting absolute h-full w-[2500px] left-0">
            <LeftLayer/>
          </div>
          <div className="righting absolute h-full w-[2500px] right-0">
            <RightLayer/>
          </div>



          {/* end layer  */}
        </div>
  )
}

export default HomeRoom