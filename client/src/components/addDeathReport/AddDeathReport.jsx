import React from 'react';
import "./addDeathReport.scss";

const AddDeathReport = () => {
  return (
    <div className='addDeathReport'>
      <div className="wrapper">
          <span>Add Report</span>
          <hr />

          <form action="">
             <div className="item">
                <label htmlFor="name">Patient</label>
                <input id="name" type="text" />
             </div>
             <div className="item">
                <label htmlFor="name">Cause of Death</label>
                <input id="name" type="text" />
             </div>
             <div className="item">
                <label htmlFor="name">date Time</label>
                <input id="name" type="text" />
             </div>
             <div className="item">
                <label htmlFor="name">Doctor</label>
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

export default AddDeathReport