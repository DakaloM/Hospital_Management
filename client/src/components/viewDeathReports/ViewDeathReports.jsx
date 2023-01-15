import React from 'react';
import Search from '../seach/Search';
import "./viewDeathReports.scss";

const ViewDeathReports = () => {
  return (
    <div className='viewDeathReports'>
      <div className="viewContainer">
          <div className="top">
            <div className="left">

                <Search />

            </div>
            <div className="right">
              <div className="pagination">
                <span>pagination</span>
              </div>
            </div>
          </div>

          <div className="content">
            <table>
                <thead>
                  <td className='num'>#</td>
                  <td>Patient</td>
                  <td>Cause Of Death</td>
                  <td>Date</td>
                  <td>Doctor</td>

                </thead>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>Operation Complications</td>
                  <td>2022-12-15</td>
                  <td>Dr Lesemi</td>                  
                </tr>
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>Operation Complications</td>
                  <td>2022-12-15</td>
                  <td>Dr Lesemi</td>                  
                </tr>
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>Operation Complications</td>
                  <td>2022-12-15</td>
                  <td>Dr Lesemi</td>                  
                </tr>
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>Operation Complications</td>
                  <td>2022-12-15</td>
                  <td>Dr Lesemi</td>                  
                </tr>
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>Operation Complications</td>
                  <td>2022-12-15</td>
                  <td>Dr Lesemi</td>                  
                </tr>
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>Operation Complications</td>
                  <td>2022-12-15</td>
                  <td>Dr Lesemi</td>                  
                </tr>
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>Operation Complications</td>
                  <td>2022-12-15</td>
                  <td>Dr Lesemi</td>                  
                </tr>
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>Operation Complications</td>
                  <td>2022-12-15</td>
                  <td>Dr Lesemi</td>                  
                </tr>

            </table>
          </div>
      </div>
    </div>
  )
}

export default ViewDeathReports