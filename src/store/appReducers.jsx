import React, { useState, useEffect } from 'react'
import { prices, flights_schedules } from './data'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, provider } from '../components/Firebase'


let schedule;
let price;
const defaultState = {
  user: [],
  signIn: () => {},
  signOut: () => {},
  showSidebar: false,
  toggleSideBar: () => {},
  price: {},
  schedule: [],
  getFlightSchedule: (options, clienPrice) => {},
  trip: '',
  from:'',whereTo:'', people:'', showIntro:false
}

export const AppContext = React.createContext(defaultState)

const AppContextProvider = ({ children }) => {
  const [user] = useAuthState(auth)
  const [userData, setUserData] = useState([])
  const [showSidebar, setShowSidebar] = useState(false)
  const [realPrice, setRealPrice] = useState({})
  const [realSchedule, setRealSchedule] = useState([])
  const [realTrip, setRealTrip] = useState('')
  const [realFrom, setRealFrom] = useState('')
  const [realWhereTo, setRealWhereTo] = useState('')
  const [realPeople, setRealPeople] = useState('')
  const [intro, setIntro] = useState(false)

  useEffect(() => {
    setUserData(user)
  }, [user])
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .catch((error) => console.log(error.message))
  }

const getPeople = (people)  =>{
  setRealPeople(people)
}
  const getPrice = (clientPrice) => {

    if (clientPrice === 'Economy') {
      price = prices.Economy
    } else if (clientPrice === 'Premium Economy') {
      price = prices['Premium Economy']
    } else if (clientPrice === 'Business') {
      price = prices.Business
    } else if (clientPrice === 'First Class') {
      price = prices['First Class']
    } else {
      alert('please fill all entries ')
    }

    setRealPrice(price)
     console.log(realPrice)
  }

  const getTrip = (flightTrip) => {
    let trip

    if (flightTrip === 'One Way') {
      trip = 'One Way'
    } else if (flightTrip === 'Round Trip') {
      trip = 'Round Trip'
    } else if (flightTrip === 'Multi City') {
      trip = 'Multi City'
    } else {
      alert('please fill all entry')
    }

    setRealTrip(trip)
  }
const getSchedule = (options)=> {

    const where = options.where
    const to = options.to

    if (where === 'YVR' && to === 'SFO') {
      schedule = flights_schedules.YVR.SFO[0]
    } else if (where === 'SFO' && to === 'YVR') {
      schedule = flights_schedules.SFO.YVR[1]
    } else {
      alert('please fill all entry ')
    }

      setRealSchedule(schedule)
       setRealFrom(where)
       setRealWhereTo(to)
     console.log(realSchedule)
}
  const getFlightSchedule = (options, clientPrice, flightTrip, people) => {
    //const fromoptions = options.fromoptions
    // const tooptions = options.tooptions
    // let schedule
    // const where = options.where
    // const to = options.to

    // if (where === 'YVR' && to === 'SFO') {
    //   schedule = flights_schedules.YVR.SFO[0]
    // } else if (where === 'SFO' && to === 'YVR') {
    //   schedule = flights_schedules.SFO.YVR[1]
    // } else {
    //   alert('please fill all entry')
    // }

    // setRealSchedule(schedule)
    getSchedule(options)
    getPrice(clientPrice)
    getTrip(flightTrip)
    getPeople(people)

setIntro(true)




    console.log(prices.Business)
    console.log(flights_schedules.SFO.YVR)
    console.log(flights_schedules.YVR.SFO)
    console.log(realTrip)
  }
  const showSideBarHandler = () => {
    setShowSidebar(!showSidebar)
  }
  const signOut = () => {
    auth.signOut()
  }

  const value = {
    user: userData,
    signIn,
    signOut,
    showSidebar,
    trip: realTrip,
    toggleSideBar: showSideBarHandler,
    price: realPrice,
    schedule: realSchedule,
    getFlightSchedule,
     from:realFrom,
      whereTo:realWhereTo,
       people:realPeople, showIntro:intro
  }
  return (
    <AppContext.Provider value={value}>
      {' '}
      {children}{' '}
    </AppContext.Provider>
  )
}

export default AppContextProvider
