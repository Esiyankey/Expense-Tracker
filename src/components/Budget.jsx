import React, { useState } from 'react'
import { FaDollarSign } from 'react-icons/fa'
import '../styles/Budget.css'

export const Budget = () => {
    const [percentagesArray,setPercentageArray]=useState([])
    const [percentagevalue,setPercentageValue]=useState('')
    const [percentageTitle,setPercentageTitle]=useState('')
 

    const percentageValueEvent=(e)=>{
            setPercentageValue(e.target.value);
    };
    const percentageTitleEvent=(e)=>{
            setPercentageTitle(e.target.value);
    };

    const addPercentageObject =()=>{
        const newPercentageObject ={
            title:percentageTitle,
            value:percentagevalue
        };
        setPercentageArray ([...percentagesArray, newPercentageObject]);
        setPercentageValue('');
        setPercentageTitle('');
    };
    


  return (
    <div className='Main'> 
      <div className='balance'>
              <h3>Balance available for Spending:</h3><FaDollarSign/>{0}
      </div>
      <div className='bottom'>
        <div className='budget-divisions'>
            <div className="incomeValue"><label id='Income'>Enter Total Income</label><input type="text" /></div>
            <div className='divisions'> 
                <h3>Enter Budget percentages</h3>
                <div>
    <label htmlFor="">Budget Name</label> <input onChange={percentageTitleEvent}  type="text" placeholder='title' name="" id="" /> 
     <label htmlFor="">Bughet percentages</label><input onChange={percentageValueEvent} type="text" placeholder='Percentage'/>
     <button onClick={addPercentageObject} >Add</button>
                </div>
                <div className='budget-percentages'>
                    <ul>
                        {percentagesArray.map((percentagesObj, index) =>(
                            <div key={index}>
                                <h3>{percentagesObj.title}</h3>
                                <p>{percentagesObj.value}</p>
                            </div>
                        
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        <div className='amountsPerDivision'>
            
        </div>
        
      </div>
    </div>
  )
}
