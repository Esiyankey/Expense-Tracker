import React from 'react'
import '../styles/Homepage.css'

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
