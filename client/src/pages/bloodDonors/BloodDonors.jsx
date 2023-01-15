import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Submenu from '../../components/submenu/Submenu';
import "./bloodDonors.scss";

const BloodDonors = () => {
  return (
    <div className='bloodDonors'>
        
        <Submenu
          addLink="addDonor" 
          viewLink="viewDonors" 
          page="Donor"
        />
        
    </div>
  )
}

export default BloodDonors