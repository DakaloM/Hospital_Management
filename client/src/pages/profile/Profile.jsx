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
            <div className="top">
              <span>Work Information</span>
              <div className="info">
                  <div className="item">
                    <span className='label'>Current Position: </span>
                    <span className='value'>Admin</span>
                  </div>
                  <div className="item">
                    <span className='label'>Date Started: </span>
                    <span className='value'>24/06/2022</span>
                  </div>
                  <div className="item">
                    <span className='label'>Current salary: </span>
                    <span className='value'>R 18000</span>
                  </div>
              </div>
            </div>

            <div className="bottom">
              <span className='heading'>More Information</span>
              <div className="bio">
                <span className='label'>Bio:</span>
                <span className='value'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                  optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                  obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                  nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat
                </span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Profile