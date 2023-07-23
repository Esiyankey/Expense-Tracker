import React,{useState} from 'react'
import '../styles/Budget.css'
import { FaDollarSign } from 'react-icons/fa'



export const Budget = () => {

  
    const [SalaryAmount,setSalaryAmount]=useState(0.00)
    const salaryInputEvent =(amount)=>{
        setSalaryAmount(amount.target.value)
        
    }
    console.log(SalaryAmount)

  return (
    <div className='main'>
      <h3>Budget</h3>
      <div className='budget-results'>
          {/* This div checks the total budget */}
              <h3>Total Budget:</h3><FaDollarSign/>{SalaryAmount}
      </div>

      <div className='bottom'>
      
            <div >
             <form className='budget-setup'  action="">
              <input type="text" name="Salary Title" id="" placeholder='Salary Title' />
              <input onChange={salaryInputEvent} type="text"  name='Salary Amount' placeholder='Salary Amount'/>
              <input type='date' name="Enter a Date" id="" placeholder='Enter A Date' />
              <textarea name="reference" id="" cols="25" rows="10" placeholder='Add A Reference'></textarea>
             </form>
            </div>
            <div className='budgets'>

            </div>
          
      </div>
    </div>
  )
}
