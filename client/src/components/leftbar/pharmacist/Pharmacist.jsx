import React from 'react'
import "./pharmacist.scss";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PeopleIcon from '@mui/icons-material/People';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Link } from 'react-router-dom';

const Pharmacist = () => {
  return (
    <div className='pharmacist'>
        <div className="container">
        <Link to="/dashboard" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                <DashboardOutlinedIcon className='icon' />
                <span>Dashboard</span>
              </div>
            </Link>
            
            <Link to="/medication/viewMedications" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                  <AccountBalanceWalletIcon className='icon' />
                  <span>Manage Medication</span>
              </div>
            
            </Link>
            <Link to="/prescriptions/viewPrescriptions" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                  <AccountBalanceWalletIcon className='icon' />
                  <span>View Prescription</span>
              </div>
            
            </Link>
            

            <Link to="/patients/viewPatients" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                  <PeopleIcon className='icon' />
                  <span>View Patients</span>
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

export default Pharmacist