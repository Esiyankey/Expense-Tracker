import React from 'react'
import '../styles/Homepage.css'
import avatar from '../assets/avatar.png'
import {GoGraph} from 'react-icons/go'
import {FaSignOutAlt} from 'react-icons/fa'
import { Expenses } from './Expenses'
import { Budget } from './Budget'


Navigator = ()=> {
  return (
    <div>homepage</div>
  )
}



export const Homepage = () => {
  return (
    <div className='home'>
      <div className='home-container'>
      <div className='left'>
        <div className='top'>
          <div className='user'>
            <img src={avatar} 
            alt="user image" 
            height={50} 
            width={50}/>
            <div className='details'>
            <h3>UserName</h3>
            <p>Your Money</p>
            </div>
          </div>
          <div className='navigations'>
            <ul>
              <li><a className='Dashboard' href="#"><GoGraph/>Dashboard</a></li>
              <li><a className='Budget' href="#">Budget</a></li>
              <li><a className='Expenses' href="#">Expenses</a></li>
            </ul>
          </div>
        </div>
        <div className='button'>
          <button><FaSignOutAlt/>Sign Out</button>
        </div>
      </div>
      <div className='components'>
        <Budget/>
      </div>
      </div>
      
    </div>
  )
}
