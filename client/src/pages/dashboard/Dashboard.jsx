import React from 'react';
import "./dashboard.scss";
import Nurse from '../../components/dashboards/Nurse';
import Receptionist from '../../components/dashboards/Receptionist';

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className="container">
          <Nurse />
        </div>
    </div>
  )
}

export default Dashboard