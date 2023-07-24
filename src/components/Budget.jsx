import React, { useState,useEffect } from 'react'
import { FaDollarSign } from 'react-icons/fa'
import '../styles/Budget.css'

export const Budget = () => {
    const [percentagesArray,setPercentageArray]=useState([]);
    const [percentageValue,setpercentageValue]=useState('');
    const [percentageTitle,setPercentageTitle]=useState('');
    const [percentageTracker,setPercentageTracker] = useState(0);
    const [inputError, setInputError] =useState('');
 

    const percentageValueEvent=(e)=>{
            setpercentageValue(e.target.value);
             // Clear the error when the user interacts with the input box
             setInputError('');
    };
    const percentageTitleEvent=(e)=>{
            setPercentageTitle(e.target.value);
            // Clear the error when the user interacts with the input box
            setInputError('');
    };

    const addPercentageObject =()=>{
        // Error validation
        if (!percentageTitle || !percentageValue) {
            setInputError('Both title and percentage fields are required.');
            return;
          }
      
          if (isNaN(percentageValue)) {
            setInputError('Percentage must be a valid number.');
            return;
          }
        const newPercentageObject ={
            title:percentageTitle,
            value:percentageValue,
        };
        setPercentageArray ([...percentagesArray, newPercentageObject]);
        setpercentageValue('');
        setPercentageTitle('');
    };
    
        useEffect(() =>{
            let totalPercentages =0;
        for(const percentagesObj of percentagesArray){
            totalPercentages += parseFloat(percentagesObj.value)
        }
        setPercentageTracker(totalPercentages);
        console.log(percentageTracker)
        },[percentagesArray]);
    


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
                 <label htmlFor="">Budget Name</label> 
                 <input 
                   onChange={percentageTitleEvent}
                   type="text"
                   placeholder='title'
                   value={percentageTitle} 
                 /> 

                 <label htmlFor="">Bughet percentage</label>
                 <input 
                  onChange={percentageValueEvent} 
                  type="text"
                  placeholder='Percentage' 
                  value={percentageValue}
                 />
                </div>
                {inputError && <div className='error-message'>{inputError}</div>}
                <div className="addButton">
                <button onClick={addPercentageObject}>Add</button>
                </div>
                <div className='budget-percentages'>
                    <ul>
                        <li>{percentagesArray.map((percentagesObj, index) =>(
                            <div key={index} className='title-percentages'>
                                <h3 >{percentagesObj.title}</h3>
                                <p>{percentagesObj.value}</p>
                            </div>
                        ))}</li>
                    </ul>
                </div>
            </div>
            <button className='createBudget'>Create Budget</button>
        </div>
        
        <div className='newBudget'>
            The total displays will appear here after the create budget button is clicked 
        </div>
        
      </div>
    </div>
  )
}
