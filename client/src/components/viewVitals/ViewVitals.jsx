import React from 'react';
import "./viewVitals.scss";
import SearchIcon from '@mui/icons-material/Search';
import Search from '../seach/Search';

const ViewVitals = () => {
  return (
    <div className='viewVitals'>
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
                  <td>Body Temp</td>
                  <td>Pulse Rate</td>
                  <td>Respiration Rate</td>
                  <td>Blood Pressure</td>

                </thead>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>32</td>
                  <td>50 p.m</td>
                  <td>66 p.m</td>
                  <td>55</td>
                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>32</td>
                  <td>50 p.m</td>
                  <td>66 p.m</td>
                  <td>55</td>
                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>32</td>
                  <td>50 p.m</td>
                  <td>66 p.m</td>
                  <td>55</td>
                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>32</td>
                  <td>50 p.m</td>
                  <td>66 p.m</td>
                  <td>55</td>
                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>32</td>
                  <td>50 p.m</td>
                  <td>66 p.m</td>
                  <td>55</td>
                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>32</td>
                  <td>50 p.m</td>
                  <td>66 p.m</td>
                  <td>55</td>
                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>32</td>
                  <td>50 p.m</td>
                  <td>66 p.m</td>
                  <td>55</td>
                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>32</td>
                  <td>50 p.m</td>
                  <td>66 p.m</td>
                  <td>55</td>
                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>32</td>
                  <td>50 p.m</td>
                  <td>66 p.m</td>
                  <td>55</td>
                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>32</td>
                  <td>50 p.m</td>
                  <td>66 p.m</td>
                  <td>55</td>
                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>32</td>
                  <td>50 p.m</td>
                  <td>66 p.m</td>
                  <td>55</td>
                  
                </tr>
                
              
            </table>
          </div>
      </div>
    </div>
  )
}

export default ViewVitals