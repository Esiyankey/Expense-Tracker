import React from 'react'
import '../styles/Homepage.css'
import avatar from '../assets/avatar.png'
import {GoGraph} from 'react-icons/go'
import {FaSignOutAlt} from 'react-icons/fa'
import { Expenses } from './Expenses'
import { Budget } from './Budget'
import LeftMenu from './leftMenu'




export const Homepage = () => {
  return (
    <div className='home'>
      <div className='home-container'>
      <LeftMenu/>
      <div className='components'>
        <Budget/>
      </div>
      </div>
      
    </div>
  )
}
