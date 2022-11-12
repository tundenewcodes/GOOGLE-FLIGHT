import React, { useContext } from 'react'
import { AppContext } from '../../store/appReducers'

const SidebarIcons = ( { Icons, title } ) =>


{
    const appCtxSidebar  = useContext(AppContext).toggleSideBar
    return ( <div onClick={appCtxSidebar} className='flex w-full justify-start cursor:pointer hover:scale-110  text-left items-center h-8 shadow-md m-2 ' >

            <Icons className='h-6 w-6 text-gray-500' />
            <p className='text-md ml-4 '>{title}</p>
        </div>


    )
}

export default SidebarIcons