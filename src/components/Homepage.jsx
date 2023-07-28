import React from 'react'
import '../styles/Homepage.css'
import { Budget } from '../components/Budget'
import {Expenses} from '../components/Expenses'
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
