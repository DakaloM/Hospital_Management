import React from 'react';
import Search from '../seach/Search';
import "./viewBirthReports.scss";

const ViewBirthReports = () => {
  return (
    <div className='viewBirthReports'>
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
                  <td>Mother</td>
                  <td>Date of Birth</td>
                  <td>Doctor</td>

                </thead>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>2023-01-14</td>
                  <td>Dr Lesemi</td>                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>2023-01-14</td>
                  <td>Dr Lesemi</td>                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>2023-01-14</td>
                  <td>Dr Lesemi</td>                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>2023-01-14</td>
                  <td>Dr Lesemi</td>                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>2023-01-14</td>
                  <td>Dr Lesemi</td>                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>2023-01-14</td>
                  <td>Dr Lesemi</td>                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>2023-01-14</td>
                  <td>Dr Lesemi</td>                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>2023-01-14</td>
                  <td>Dr Lesemi</td>                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>2023-01-14</td>
                  <td>Dr Lesemi</td>                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>2023-01-14</td>
                  <td>Dr Lesemi</td>                  
                </tr>
                
                
                
              
            </table>
          </div>
      </div>
    </div>
  )
}

export default ViewBirthReports