import React from 'react'
import '../App.css';
import {RxDashboard} from 'react-icons/rx'
import {MdOutlineSpaceDashboard} from 'react-icons/md'
import {BsDatabase} from 'react-icons/bs'
import {FiSettings, FiLogOut} from 'react-icons/fi'



export default function Sidebar() {
  return (
    <div className='sideBar'>
        <h3 className='s-Head'>ToDo Application</h3> 
        <ul>
            
            <li><RxDashboard className='icon sIcon'/><span className='sIcon'>Dashboard</span></li>
            <li><MdOutlineSpaceDashboard className='icon sIcon'/><span className='sIcon'>Board</span></li>
            <li><BsDatabase className='icon sIcon'/><span className='sIcon'>Analytics</span></li>
            <li><FiSettings className='icon sIcon'/><span className='sIcon'>Settings</span></li>
        </ul>
        <h3 className='s-Bottom'><FiLogOut className='icon'/>LogOut</h3>

        
    </div>
  )
}
