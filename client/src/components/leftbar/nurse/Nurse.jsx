import React from 'react';
import "./nurse.scss";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleIcon from '@mui/icons-material/People';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import ReportIcon from '@mui/icons-material/Report';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import FeedIcon from '@mui/icons-material/Feed';
import ErrorIcon from '@mui/icons-material/Error';
import { Link } from 'react-router-dom';

const Nurse = () => {
  return (
    <div className='nurse'>
        <div className="container">
            <Link to="/" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                <DashboardOutlinedIcon className='icon' />
                <span>Dashboard</span>
              </div>
            </Link>
            
            <Link to="/" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                  <PeopleIcon className='icon' />
                  <span>Manage Patients</span>
              </div>
            
            </Link>
            <Link to="/" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                  <DeviceThermostatOutlinedIcon className='icon' />
                  <span>Manage Vitals</span>
              </div>
            </Link>

            <Link to="/" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                  <WatchLaterIcon className='icon' />
                  <span>View Doctors Appointments</span>
              </div>
            </Link>

            <Link to="/" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                  <BloodtypeIcon className='icon' />
                  <span>Blood Donors</span>
              </div>
            </Link>

            <Link to="/" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                  <FeedIcon className='icon' />
                  <span>Operation Reports</span>
              </div>
              </Link>

            <Link to="/" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
            <div className="item">
                <ChildFriendlyIcon className='icon' />
                <span>Birth Reports</span>
            </div>
            </Link>

            <Link to="/" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                  <ErrorIcon className='icon' />
                  <span>Dearth Reports</span>
              </div>
            </Link>
            <Link to="/" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                  <SettingsOutlinedIcon className='icon' />
                  <span>Profile</span>
              </div>
            </Link>
        </div>
    </div>
  )
}

export default Nurse