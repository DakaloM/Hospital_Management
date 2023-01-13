import React from 'react';
import "./accountant.scss";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Link } from 'react-router-dom';

const Accountant = () => {
  return (
    <div className='accountant'>
        <div className="container">
            <Link to="/" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                <DashboardOutlinedIcon className='icon' />
                <span>Dashboard</span>
              </div>
            </Link>
            
            <Link to="/" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                  <AccountBalanceWalletIcon className='icon' />
                  <span>Payments</span>
              </div>
            
            </Link>
            <Link to="/" style={{width: "80%", padding: "0 ", textDecoration: "none"}}>
              <div className="item">
                  <ReceiptIcon className='icon' />
                  <span>Invoices</span>
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

export default Accountant