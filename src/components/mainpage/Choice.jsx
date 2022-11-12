import React, { useContext, useRef, useState } from 'react'
import { CgArrowsExchange } from 'react-icons/cg'
import { FiSend } from 'react-icons/fi'
import { AppContext } from '../../store/appReducers'



const Choice = () => {
const [flightClass, setFlightClass] = useState('')
const [flightTrip, setFlightTrip] = useState('')
const [flightDestination, setFlightDestination] = useState('')
const [flightDeparture, setflightDeparture] = useState('')


// const whereRef = useRef('')
// const toRef = useRef('')
const numRef = useRef('')

const appCtx = useContext(AppContext)


const changeClass = (e) => {
  setFlightClass(e.target.value)
}
const changeDeparture = (e) => {
  setflightDeparture(e.target.value)
}
const changeDestination = (e) => {
  setFlightDestination(e.target.value)
}
const changeTrip = (e) => {
  setFlightTrip(e.target.value)
}

const submitSchedule = (e)=>{
  e.preventDefault()
const options = {
  where :flightDestination,
  to : flightDeparture
}
const people = numRef.current.value

const clientPrice = flightClass
const trip = flightTrip


  appCtx.getFlightSchedule(options, clientPrice, trip, people)
  console.log(options, clientPrice)
}





  return (
    <div className='w-full  mx-4 h-60 shadow-md flex flex-col justify-start items-center '>
      <form action='' className='space-y-2 -mb-2  w-full h-1/2'>
        <div className='flex w-full h-32 justify-between items-center'>
          <select
            name='flight-type'
            id='flight-type'
            onChange={changeTrip}
            className='border-0 cursor-pointer rounded-full drop-shadow-md bg-gray-200 w-72 duration-300 hover:bg-gray-100 p-4 mx-2 focus:bg-gray-100'>
            <option value='Round Trip'>Round Trip</option>
            <option value='One Way'>One Way</option>
            <option value='Multi City'>Multi City</option>
          </select>

          <input
            name='flight-type'
            ref={numRef}
            id='flight-type'
            placeholder='1'
            type='number'
            min='1'
            max='10'
            step='1'
            className='border-0 cursor-pointer rounded-full drop-shadow-md bg-gray-200 w-72 duration-300 hover:bg-gray-100 focus:bg-gray-100  p-4 mx-2'
          />

          <select
            name='flight-class'
            id='flight-class'
            onChange={changeClass}
            className='border-0 cursor-pointer rounded-full drop-shadow-md bg-gray-200 w-72 duration-300 hover:bg-gray-400 focus:bg-gray-300 p-4 mx-2'>
            <option value='Economy'>Economy</option>
            <option value='Premium Economy'>Premium Economy</option>
            <option value='Business'>Business</option>
            <option value='First Class'>First Class</option>
          </select>
        </div>
      </form>

      <form
        className='flex justify-center mb-2 items-center h-1/2 w-full'
        action=''>
        <div className='w-2/5 '>
          <select
            name='departure'
            id='departure'
            onChange={changeDeparture}
            className='border-0 cursor-pointer rounded-full drop-shadow-md bg-gray-200 w-full duration-300 hover:bg-gray-100 focus:bg-gray-100 p-4 mx-2'>
            <option value='YVR'>YVR</option>
            <option value='SFO'>SFO</option>
            {/* <option value='Business'>Business</option>
            <option value='First Class'>First Class</option> */}
          </select>
          {/* <input
            ref={whereRef}
            type='text'
            placeholder='from'
            className=' form-control inline-block w-full px-4 py-2 text-xl font-normal text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none   '
          /> */}
        </div>
        <div className='w-[60px]  rounded-full h-full flex  justify-center items-center'>
          <CgArrowsExchange className='w-full h-full text-gray-600 text-7xl' />
        </div>

        <div
          className='w-2/5
'>
          {/* <input
            type='text'
            ref={toRef}
            placeholder='to'
            className=' form-control inline-block w-full px-4 py-2 text-xl font-normal text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none   '
          /> */}

          <select
            name='destination'
            id='destination'
            onChange={changeDestination}
            className='border-0 cursor-pointer rounded-full drop-shadow-md bg-gray-200 w-full duration-300 hover:bg-gray-400 focus:bg-gray-300 p-4 mx-2'>
            <option value='SFO'>SFO</option>
            <option value='YVR'>YVR</option>
          </select>
        </div>
      </form>
      <form
        className='space-y-2 mb-2   flex justify-between items-center h-1/2 w-full'
        action=''>
        <div className='datepicker h-full w-2/5 relative form-floating border-gray-400'>
          <input
            type='date'
            className='form-control inline-block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='Select a date'
          />
        </div>

        <div className='datepicker h-full  w-2/5 relative form-floating border-gray-400'>
          <input
            type='date'
            className='form-control inline-block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='Select a date'
          />
        </div>
        <div
          onClick={submitSchedule}
          className='w-1/5  rounded-lg h-[50px] flex border-4  mb-4 bg-green-300  justify-start items-center'>
          <FiSend className='w-8 h-full text-gray-600 text-7xl' />
          <button
            type='submit'
            className='text-lg cursor-pointer'
            onClick={submitSchedule}>
            GET FLIGHTS
          </button>
        </div>
      </form>
    </div>
  )
}

export default Choice
