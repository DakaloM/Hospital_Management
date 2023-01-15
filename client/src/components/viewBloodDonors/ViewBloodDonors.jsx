import React from 'react';
import Search from '../seach/Search';
import "./viewBloodDonors.scss";

const ViewBloodDonors = () => {
  return (
    <div className='viewBloodDonors'>
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
                  <td>Names</td>
                  <td>Contact Number</td>
                  <td>Age</td>
                  <td>Gender </td>
                  <td>Blood Type</td>

                </thead>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>+27 072 134 4014</td>
                  <td>22</td>
                  <td>Female</td>
                  <td>AA+</td>
                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>+27 072 134 4014</td>
                  <td>22</td>
                  <td>Female</td>
                  <td>AA+</td>
                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>+27 072 134 4014</td>
                  <td>22</td>
                  <td>Female</td>
                  <td>AA+</td>
                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>+27 072 134 4014</td>
                  <td>22</td>
                  <td>Female</td>
                  <td>AA+</td>
                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>+27 072 134 4014</td>
                  <td>22</td>
                  <td>Female</td>
                  <td>AA+</td>
                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>+27 072 134 4014</td>
                  <td>22</td>
                  <td>Female</td>
                  <td>AA+</td>
                  
                </tr>
                
                
                
                
                
              
            </table>
          </div>
      </div>
    </div>
  )
}

export default ViewBloodDonors