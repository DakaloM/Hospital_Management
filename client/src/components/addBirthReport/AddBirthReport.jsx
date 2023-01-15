import React from 'react';
import "./addBirthReport.scss"

const AddBirthReport = () => {
  return (
    <div className='addBirthReport'>
      <div className="wrapper">
          <span>Add Report</span>
          <hr />

          <form action="">
             <div className="item">
                <label htmlFor="name">Mother</label>
                <input id="name" type="text" />
             </div>
             <div className="item">
                <label htmlFor="name">Date Of Birth</label>
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

export default AddBirthReport