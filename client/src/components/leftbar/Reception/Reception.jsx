import React from 'react'
import "./reception.scss";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleIcon from '@mui/icons-material/People';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { Watch } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Reception = () => {
  return (
    <div className='reception'>
        <div className="container">

            <Link to="/profile" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
                <div className="item">
                    <DashboardOutlinedIcon className='icon' />
                    <span>Dashboard</span>
                </div>
            </Link>
            <Link to="/profile" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
                <div className="item">
                    <PeopleIcon className='icon' />
                    <span>Patients</span>
                </div>
            </Link>
            <Link to="/profile" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
                <div className="item">
                    <WatchLaterIcon className='icon' />
                    <span>Doctors Appointments</span>
                </div>
            </Link>
            <Link to="/profile" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
                <div className="item">
                    <SettingsOutlinedIcon className='icon' />
                    <span>Profile</span>
                </div>
            </Link>

            
        </div>
    </div>
  )
}

export default Reception