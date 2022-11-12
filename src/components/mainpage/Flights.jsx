import React, { useContext } from 'react'
import { AppContext } from '../../store/appReducers'
import flightLogo from '../../assets/images/fl.jpeg'
const Flights = () => {
      const appCtxLocationFrom = useContext(AppContext).from
      const appCtxLocationTo = useContext(AppContext).to
    // const appCtxTrip = useContext(AppContext).trip
    // const appCtxPeople = useContext(AppContext).people
    const appCtxSchedule = useContext(AppContext).schedule
    const appCtxPrice = useContext(AppContext).price
    const appCtxPeople = useContext(AppContext).people




// let departure;
// if(appCtxLocationFrom === 'YVR'){
//     departure = 'Canada'
// }
// else if(appCtxLocationFrom === 'SFO'){
//     departure = 'California'
// }

  return (
    <div className='w-full h-[150px] bg-gray-100 flex flex-col  shadow-md cursor-pointer mx-4'>
      {appCtxSchedule.map((schedule) => (
        <div className='w-full h-full flex  cursor-pointer shadow-md'>
          <div className='w-1/5 h-2/3 flex justify-center items-center my-4 rounded-full'>
            <img
              src={flightLogo}
              className=' h-full w-full mt-4 mx-8  object-cover cursor-pointer'
              alt='real_img'
            />
          </div>
          <div className='h-full w-4/5 m-2 justify-between items-center flex flex-col'>
            <div className='flex w-full h-1/2  flex-col my-4'>
              <div className='flex w-full h-1/2 justify-between'>
                <p className='text-2xl text-amber-700 ml-12'>
                  departure: <span className='italic text-2xl text-gray-800 ml-2'>
                    {schedule.depart}
                  </span>
                </p>
                <p className='text-2xl text-green-700 ml-12'>
                  arrival:{' '}
                  <span className='italic text-2xl text-gray-800 ml-2'>
                    {schedule.arrive}
                  </span>
                </p>

                <p className='text-2xl text-blue-600 ml-12'>
                  total time:{' '}
                  <span className='italic text-2xl text-gray-800 ml-2'>
                    {schedule.totalTime}
                  </span>
                </p>
              </div>
              <div className='flex w-full h-1/2 justify-between mt-2 items-center '>
                <p className='text-2xl text-yellow-500 ml-12'>
                  airline:{' '}
                  <span className='italic text-2xl text-gray-800 ml-2'>
                    {schedule.airline}
                  </span>
                </p>
                <p className='text-2xl text-red-600 ml-12'>
                  airline code:{' '}
                  <span className='italic text-2xl text-gray-800 ml-2'>
                    {schedule.airlineCode}
                  </span>
                </p>
              </div>
            </div>

            <div className='flex w-full h-1/2 items-center justify-start mb-2'>
              <p className='text-2xl text-orange-400 ml-12'>
                low price:{' '}
                <span className='italic ml-2 font-mono font-bold text-2xl text-gray-600'>
                  &#8358;{appCtxPrice.low * appCtxPeople}
                </span>
              </p>
              <p className='text-2xl text-violet-800 ml-12 '>
                high price:
                <span className='italic ml-2 font-mono font-bold text-2xl text-gray-600'>
                  &#8358;{appCtxPrice.high * appCtxPeople}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

}

export default Flights