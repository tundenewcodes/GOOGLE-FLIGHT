import React, { useContext } from 'react'

import Header from './components/Header/Header'
import Mainpage from './components/mainpage/Mainpage'
import Sidebar from './components/Sidebar/Sidebar'
import { AppContext } from './store/appReducers'

function App() {
  const appCtx = useContext(AppContext)
  const user = appCtx.user
  console.log(user)
  return (
    <div className='w-screen h-screen bg-gray-100  md:flex md:justify-center md:items-center '>
      {' '}
      {!user ? (
        <div className='w-full h-full md:w-3/5  flex items-center justify-center'>
          <button
            className='bg-green-400 p-4 w-80 h-20 cursor-pointer shadow-md'
            onClick={appCtx.signIn}>
            SignIn with Google{' '}
          </button>{' '}
        </div>
      ) : (
        <div className='w-full md:w-3/5   h-full flex '>
          <Header /> {appCtx.showSidebar && <Sidebar />}
          <Mainpage />
        </div>
      )}{' '}
    </div>
  )
}
export default App
