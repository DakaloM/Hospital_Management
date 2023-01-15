import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import "./submenu.scss";

const Submenu = ({addLink, viewLink, page}) => {
  return (
    
        <div className="container">
            <nav className="menu">
                <NavLink className='link' to={viewLink}>
                  {`${page}s`}
                </NavLink>
                <NavLink className='link' to={addLink}>
                  Add {page}
                </NavLink>
            </nav>

            <Outlet />
        </div>

  )
}

export default Submenu