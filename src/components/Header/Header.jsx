import React, { useContext } from 'react'
import { AppContext } from '../../store/appReducers'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgMenuGridR } from 'react-icons/cg'
import logo from '../../assets/images/google.png'
import HeaderNav from './HeaderNav'
const Header = () => {
  const appCtx = useContext(AppContext)

  const signOutHandler =()=>{
if(window.confirm('do you want to sin out of this page?')){
appCtx.signOut()
}
  }
  return (
    <div className='   flex flex-col w-full  md:w-3/5 bg-white fixed z-20 top-0 h-20 justify-between items-center shadow-2 '>
      <div className='flex w-full mx-4 justify-between items-center h-1/2'>
        <div className='flex max-w-1/2 mx-4 justify-between items-center h-full cursor-pointer'>
          <GiHamburgerMenu
            onClick={appCtx.toggleSideBar}
            className='h-12 w-12 rounded-full  text-gray-700 bg-gray-100'
          />
          <img
            src={logo}
            alt='google-flight'
            className=' ml-4 h-12 w-12 rounded-full'
          />
        </div>{' '}
        <div className='flex max-w-1/2 mx-4 justify-between items-center h-full'>
          <CgMenuGridR className='h-12 w-12 rounded-full cursor-pointer'  onClick={signOutHandler} />
          <img
            src={appCtx.user.photoURL}
            alt='google-flight'
            className=' ml-4 h-12 w-12 rounded-full cursor-pointer'
          />
        </div>{' '}
      </div>

      <HeaderNav />
    </div>
  )
}

export default Header
