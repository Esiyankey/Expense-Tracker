import React from 'react'

export const Expenses = () => {
  return (
    <div className='main'>
      <h3>Expenses</h3>
      <div className='expense-results'>
          {/* This div checks the total Expenses */}
              <h3>Total Expenses:</h3><FaDollarSign/>{SalaryAmount}
      </div>

      <div className='bottom'>
      
            <div >
             <form className='Expenses-setup'  action="">
              <input type="text" name="Salary Title" id="" placeholder='Salary Title' />
              <input onChange={salaryInputEvent} type="text"  name='Salary Amount' placeholder='Salary Amount'/>
              <input type='date' name="Enter a Date" id="" placeholder='Enter A Date' />
              <textarea name="reference" id="" cols="25" rows="10" placeholder='Add A Reference'></textarea>
             </form>
            </div>
            <div className='Expenses'>

            </div>
          
      </div>
    </div>
  )
}
