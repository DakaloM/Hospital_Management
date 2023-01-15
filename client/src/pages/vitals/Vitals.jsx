import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Submenu from '../../components/submenu/Submenu';
import "./vitals.scss";

const Vitals = () => {
  return (
    <div className='vitals'>
      
      <Submenu
        addLink="addVitals" 
        viewLink="viewVitals" 
        page="Vital"
      />
    </div>
  )
}

export default Vitals