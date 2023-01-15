import React from 'react';
import Submenu from '../../components/submenu/Submenu';
import "./doctors.scss";

const Doctors = () => {
  return (
    <div className='doctors'>
        <Submenu
        addLink="addDoctor" 
        viewLink="viewDoctors" 
        page = "Doctor"
      />
    </div>
  )
}

export default Doctors