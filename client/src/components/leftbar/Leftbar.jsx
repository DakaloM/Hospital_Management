import React, { useContext, useState } from 'react';
import "./leftbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import {DarkModeContext} from "../../contex/colorContex"
import Reception from './Reception/Reception';
import Nurse from './nurse/Nurse';
import Doctor from './doctor/Doctor';
import Accountant from './accountant/Accountant';
import Pharmacist from './pharmacist/Pharmacist';
import Admin from './admin/Admin';

const Leftbar = () => {
  const { darkMode, toggle } = useContext(DarkModeContext)
  return (
    <div className='leftbar'>
      <div className="top">
              <div className="search">
                <input type="text" placeholder='Search' />
                <SearchIcon  className='icon'/>
              </div>
              <div className="topRight">

                <div className="icons">
                  {darkMode? <LightModeOutlinedIcon className='icon' onClick={toggle}/> 
                  : <DarkModeOutlinedIcon className='icon' onClick={toggle}/> }
                  <NotificationsOutlinedIcon className='icon' />
                  <PersonOutlinedIcon className='icon'/>
                </div>

                <div className="hamburger">
                  <MenuOutlinedIcon className="icon" />
                </div>

              </div>
              
          </div>
        <div className="container">
          

          <div className="profile">
            <img src="https://images.pexels.com/photos/3781543/pexels-photo-3781543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className="info">
              <span className='name'>Dakalo Mbulaheni</span>
              <span className='role'>Doctor</span>
            </div>
          </div>

          <Reception />
        </div>
    </div>
  )
}

export default Leftbar