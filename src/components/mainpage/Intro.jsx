import React, { useContext } from 'react'
import { RiErrorWarningLine } from 'react-icons/ri'
import { AppContext } from '../../store/appReducers'

const Intro = () => {
    const appCtxLocation = useContext(AppContext).from
    const appCtxTrip = useContext(AppContext).trip
    const appCtxPeople = useContext(AppContext).people




let departure;
if(appCtxLocation === 'YVR'){
    departure = 'California'
}
else if(appCtxLocation === 'SFO'){
    departure = 'Canada'
}



  return (
    <div className='flex flex-col w-2/3  mx-4 cursor-pointer bg-gray-100 shadow-md h-[100px] flex-start ml-2'>
      <h1 className='font-bold text-3xl mx-4'>Trips from {departure} </h1>
      <div className='flex  h-4/6 w-full justify-between mt-4 iems-center '>
        <p className='text-2xl ml-4 '>{appCtxTrip}</p>
        <p className='text-2xl ml-4 '>
          {appCtxPeople} passenger{+appCtxPeople > 1 ? 's' : ''}
        </p>
        <RiErrorWarningLine className=' text-amber-600 text-lg h-12 w-12  mr-20' />
      </div>
    </div>
  )
}

export default Intro
