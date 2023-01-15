import React from 'react';
import "./viewAppointments.scss";
import SearchIcon from '@mui/icons-material/Search';
import Search from '../seach/Search';

const ViewAppointments = () => {
  return (
    <div className='viewAppointments'>
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
                  <td>Date</td>
                  <td>Doctor</td>
                  <td>Actions</td>
                  
                </thead>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>2022-06-25</td>
                  <td>Chabalala T</td>
                  
                  <td className='actions'>
                    <div className="option">
                      <button className='edit'>
                        Edit
                      </button>
                      <button className='delete'>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>2022-06-25</td>
                  <td>Chabalala T</td>
                  
                  <td className='actions'>
                    <div className="option">
                      <button className='edit'>
                        Edit
                      </button>
                      <button className='delete'>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>2022-06-25</td>
                  <td>Chabalala T</td>
                  
                  <td className='actions'>
                    <div className="option">
                      <button className='edit'>
                        Edit
                      </button>
                      <button className='delete'>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>2022-06-25</td>
                  <td>Chabalala T</td>
                  
                  <td className='actions'>
                    <div className="option">
                      <button className='edit'>
                        Edit
                      </button>
                      <button className='delete'>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>2022-06-25</td>
                  <td>Chabalala T</td>
                  
                  <td className='actions'>
                    <div className="option">
                      <button className='edit'>
                        Edit
                      </button>
                      <button className='delete'>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>2022-06-25</td>
                  <td>Chabalala T</td>
                  
                  <td className='actions'>
                    <div className="option">
                      <button className='edit'>
                        Edit
                      </button>
                      <button className='delete'>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>2022-06-25</td>
                  <td>Chabalala T</td>
                  
                  <td className='actions'>
                    <div className="option">
                      <button className='edit'>
                        Edit
                      </button>
                      <button className='delete'>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>2022-06-25</td>
                  <td>Chabalala T</td>
                  
                  <td className='actions'>
                    <div className="option">
                      <button className='edit'>
                        Edit
                      </button>
                      <button className='delete'>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                
            </table>
          </div>
        </div>
    </div>
  )
}

export default ViewAppointments