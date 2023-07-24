import React from 'react'
import '../styles/Homepage.css'
import { Budget } from './Budget'
import LeftMenu from './leftMenu'
import { NavSmall } from './NavSmall'




export const Homepage = () => {
  return (
    <div className='home'>
      
      <div className='home-container'>
      <LeftMenu/>
      <div className='components'>
        <NavSmall/>
        <Budget/>
      </div>
      </div>
      
    </div>
  )
}
