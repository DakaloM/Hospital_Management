import React from 'react';
import "./profile.scss";

const Profile = () => {
  return (
    <div className='profile'>
        <div className="container">
          <div className="left">
              <img src="/img/avatar.svg" alt="" />
              <div className="userInfo">
                <span>Personal Info</span>
                <div className="item">
                  <span className='label'>First Name: </span>
                  <span className='value'>Dakalo</span>
                </div>
                <div className="item">
                  <span className='label'>Last Name: </span>
                  <span className='value'>Mbulaheni</span>
                </div>
                <div className="item">
                  <span className='label'>Email: </span>
                  <span className='value'>dakalo997@gmail.com</span>
                </div>
                <div className="item">
                  <span className='label'>Contact Number: </span>
                  <span className='value'>+27 072 134 4014</span>
                </div>
                <div className="item">
                  <span className='label'>Gender: </span>
                  <span className='value'>Male</span>
                </div>
                <div className="item">
                  <span className='label'>Age: </span>
                  <span className='value'>24</span>
                </div>
              </div>
          </div>
          <div className="right">
            
          </div>
        </div>
    </div>
  )
}

export default Profile