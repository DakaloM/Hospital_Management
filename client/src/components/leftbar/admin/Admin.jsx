import React from 'react'
import "./admin.scss";
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
import Person4Icon from '@mui/icons-material/Person4';
import Face6Icon from '@mui/icons-material/Face6';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className='admin'>
        <div className="container">
            <Link to="/dashboard" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                <DashboardOutlinedIcon className='icon' />
                <span>Dashboard</span>
              </div>
            </Link>
            
            <Link to="/doctors" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                  <PeopleIcon className='icon' />
                  <span>View Doctors</span>
              </div>
            
            </Link>
            <Link to="/nurses" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                  <Person4Icon className='icon' />
                  <span>Manage Nurses</span>
              </div>
            
            </Link>
            <Link to="/receptionists" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                  <Face6Icon className='icon' />
                  <span>Manage Receptionists</span>
              </div>
            
            </Link>
            <Link to="/accountants" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                  <AccountBalanceIcon className='icon' />
                  <span>Manage Accountants</span>
              </div>
            
            </Link>
            <Link to="/pharmacists" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                  <LocalPharmacyIcon className='icon' />
                  <span>Manage Pharmacists</span>
              </div>
            
            </Link>
            
            <Link to="/patients/viewPatients" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                  <PeopleIcon className='icon' />
                  <span>Manage Patients</span>
              </div>
            
            </Link>
            <Link to="/" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                  <DeviceThermostatOutlinedIcon className='icon' />
                  <span>Patients Vitals</span>
              </div>
            </Link>

            <Link to="/" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                  <WatchLaterIcon className='icon' />
                  <span>Manage Appointments</span>
              </div>
            </Link>

            <Link to="/" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                  <BloodtypeIcon className='icon' />
                  <span>Manage Blood Donors</span>
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

export default Admin