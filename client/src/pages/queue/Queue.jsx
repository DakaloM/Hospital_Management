import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import AddQueue from './addQueue/AddQueue';
import "./queue.scss";
import ViewQueue from './viewQueue/ViewQueue';

const Queue = () => {
    
  return (
    <div className='queue'>
        <div className="container">
            <nav className="menu">
                <NavLink className='link' to="viewQueue">
                Queue
                </NavLink>
                <NavLink className='link' to="addQueue">
                  Add Queue
                </NavLink>
            </nav>

            <Outlet />
        </div>
        
    </div>
  )
}

export default Queue