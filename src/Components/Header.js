import React from 'react';
import "./CSS/Header.css";
import { AddCircleOutline, ExpandMore, Flag, Forum, Home, NotificationsActive, Search, StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import { useStateValue } from './StateProvider';

function Header() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className='header__left'>
        <img src = "https://thumbs.dreamstime.com/b/tree-psychology-logo-illustration-represent-isolated-white-background-88604721.jpg" alt=""/>
        <div className="header__input">
          <Search />
          <input placeholder= "Search for Media" type="text"/>
        </div>
      </div>

      <div className='header__center'>
        <div className='header__option header__option--active'>
          <Home fontSize="large"/>
        </div>
        <div className='header__option'>
          <Flag fontSize="large"/>
        </div>
        <div className='header__option'>
          <SubscriptionsOutlined fontSize="large"/>
        </div>
        <div className='header__option'>
          <StorefrontOutlined fontSize="large"/>
        </div>
        <div className='header__option'>
          <SupervisedUserCircle fontSize="large"/>
        </div>
      </div>

      <div className='header__right'>
        <div className='header__info'>
          <Avatar src={user.photoURL}/>
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddCircleOutline/>
        </IconButton>
        <IconButton>
          <Forum/>
        </IconButton>
        <IconButton>
          <NotificationsActive/>
        </IconButton>
        <IconButton>
          <ExpandMore/>
        </IconButton>
      </div>
      
    </div>
  )
}

export default Header
