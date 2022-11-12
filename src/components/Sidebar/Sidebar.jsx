import React from 'react'
import SidebarIcons from './SidebarIcons'
import {
  MdTravelExplore,
  MdEditLocation,
  MdOutlineFeedback,
  MdOutlineFlight,
} from 'react-icons/md'
import { AiOutlineGlobal } from 'react-icons/ai'
import { BiHomeHeart, BiHotel } from 'react-icons/bi'
import { GiSwordSmithing, GiDialPadlock } from 'react-icons/gi'

import { SiMicrosoftexchange } from 'react-icons/si'
import { FiHelpCircle, FiSettings } from 'react-icons/fi'
import { DiGoogleAnalytics } from 'react-icons/di'

const Sidebar = () => {
  return (
    <div className='flex flex-col w-[400px]  h-full mt-20 z-15  text-left'>
      <SidebarIcons Icons={GiDialPadlock} title='Travel' />
      <SidebarIcons Icons={MdTravelExplore} title='Explore' />
      <SidebarIcons Icons={GiSwordSmithing} title='Things to do' />
      <SidebarIcons Icons={MdOutlineFlight} title='Flights' />
      <SidebarIcons Icons={BiHotel} title='Hotels' />
      <SidebarIcons Icons={BiHomeHeart} title='Vacation rentals' />
      <SidebarIcons
        Icons={DiGoogleAnalytics}
        title='Track flight prices'
      />
      <SidebarIcons Icons={AiOutlineGlobal} title='Change language' />
      <SidebarIcons
        Icons={SiMicrosoftexchange}
        title='Change currency'
      />

      <SidebarIcons Icons={MdEditLocation} title='Change location' />
      <SidebarIcons Icons={FiSettings} title='Travel setting' />
      <SidebarIcons Icons={MdOutlineFeedback} title='Feedback' />
      <SidebarIcons Icons={FiHelpCircle} title='Help' />
    </div>
  )
}
export default Sidebar
