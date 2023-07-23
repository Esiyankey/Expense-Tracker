import React from 'react'
import '../styles/Budget.css'

export const Budget = () => {
  return (
    <div className='main'>
      <h3>Budget</h3>
      <div className='budget-results'>
          {/* This div checks the total budget */}
              <h3>Total Budget:</h3>{16500}
      </div>

      <div className='bottom'>
      
            <div >
             <form className='budget-setup'  action="">
              <input type="text" name="Salary Title" id="" placeholder='Salary Title' />
              <input type="text"  name='Salary Amount' placeholder='Salary Amount'/>
              <input type='date' name="Enter a Date" id="" placeholder='Enter A Date' />
              <textarea name="reference" id="" cols="30" rows="10" placeholder='Add A Reference'></textarea>
             </form>
            </div>
            <div className='budgets'>

            </div>
          
      </div>
    </div>
  )
}
