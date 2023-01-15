import React, { useState } from 'react';
import "./appointments.scss";
import AddAppointment from "../../components/addAppointment/AddAppointmet";
import ViewAppointments from '../../components/viewAppointments/ViewAppointments';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Submenu from '../../components/submenu/Submenu';

const Appointments = () => {
    
  return (
    <div className='appointments'>
        
        <Submenu
        addLink="addAppointment" 
        viewLink="viewAppointments" 
        page="Appointment"
      />
    </div>
  )
}

export default Appointments