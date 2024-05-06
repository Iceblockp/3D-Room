import React, { useEffect } from 'react'
import { BaseLayer, TopLayer } from './components';
import { HomeRoom } from './page';

const App = () => {


window.addEventListener('scroll',() => {
  console.log(scrollY)
})



  return (
    <div>
      

      <div  className={`bg-[#040724] fixed flex  justify-center items-center w-full h-screen`}>
        <HomeRoom />
        
      </div>
      
      <div style={{ height: '7000px' }} className=' bg-white'></div>
    </div>
  )
}

export default App