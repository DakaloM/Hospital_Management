import React from 'react';
import "./navbar.scss";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="left">
                <LocalHospitalIcon className='logo' />
                <span>Admin</span>
            </div>

            <div className="right">
                <span>Dakalo Mbulaheni</span>
                <button>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar