import React from 'react'
import { NavLink } from 'react-router-dom'

const Nurse = () => {
  return (
    <div className='dashboards'>
      <div className="container">
        <div className="top">
          <div className="item">
            <span>10</span>
            <NavLink to="/patients/viewPatients">Patients</NavLink>
          </div>
          <div className="item">
            <span>7</span>
            <NavLink to="/patients/viewPatients">Queue</NavLink>
          </div>
          <div className="item">
            <span>2</span>
            <NavLink to="/patients/viewPatients">Appointments</NavLink>
          </div>
          <div className="item">
            <span>@</span>
            <NavLink to="/patients/viewPatients">Profile</NavLink>
          </div>
        </div>

        <hr />
      </div>
    </div>
  )
}

export default Nurse