import React from 'react'
import "./CSS/Sidebar.css"
import SidebarRow from './SidebarRow'
import { Chat, EmojiFlags, People, ExpandMoreOutlined, LocalHospital, Storefront, VideoLibrary, Person } from '@mui/icons-material'
import { useStateValue } from './StateProvider'
function Sidebar() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div  className='sidebar'>
      <SidebarRow src ={user.photoURL} title = {user.displayName}/>
      <SidebarRow Icon={LocalHospital} title = "COVID-19 Information Center"/>
      <SidebarRow Icon={EmojiFlags} title = "Pages"/>
      <SidebarRow Icon={People} title = "Friends"/>
      <SidebarRow Icon={Chat} title = "Messenger"/>
      <SidebarRow Icon={Storefront} title = "Marketplace"/>
      <SidebarRow Icon={VideoLibrary} title = "Videos"/>
      <SidebarRow Icon={ExpandMoreOutlined} title = "Marketplace"/>
    </div>
  )
}

export default Sidebar
