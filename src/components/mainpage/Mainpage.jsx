import React, { useContext } from 'react'
import bgImage from '../../assets/images/flighttt.png'
import { AppContext } from '../../store/appReducers'
import Choice from './Choice'
import Flights from './Flights'
import Intro from './Intro'
import MapImage from './MapImage'
const Mainpage = () => {
    const appCtxIntro = useContext(AppContext).showIntro
  return (
    <div className='  w-full h-full  bg-gray-100 mx-4 '>
      <div className='w-full h-[160px]'>
        <img
          className='w-full h-full object-cover'
          src={bgImage}
          alt='google-flight'
        />
      </div>{' '}
      <Choice />
     {appCtxIntro && <Intro />}
     <MapImage/>
     <Flights/>
    </div>
  )
}

export default Mainpage
