import React from 'react';
import "./addQueue.scss";

const AddQueue = () => {
  return (
    <div className='addQueue'>
      <div className="wrapper">
          <span>Add Patient To The Queue</span>
          <hr />

          <form action="">
             <div className="item">
                <label htmlFor="name">First Name:</label>
                <input id="name" type="text" />
             </div>
             <div className="item">
                <label htmlFor="name">Last Name:</label>
                <input id="name" type="text" />
             </div>
             
             <div className="button">
              <button>Submit</button>
             </div>
             
             
          </form>
        </div>
    </div>
  )
}

export default AddQueue