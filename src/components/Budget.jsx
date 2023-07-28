import React, { useState, useEffect } from 'react';
import { FaDollarSign } from 'react-icons/fa';
import '../styles/Budget.css';

export const Budget = () => {
  const MAX_PERCENTAGE = 100;
  const [percentagesArray, setPercentageArray] = useState([]);
  const [percentageValue, setPercentageValue] = useState('');
  const [percentageTitle, setPercentageTitle] = useState('');
  const [percentageTracker, setPercentageTracker] = useState(0);
  const [inputError, setInputError] = useState('');
  const [incomeValue, setIncomeValue] = useState('');
  const [incomeInputError, setIncomeInputError] = useState('');

  // Event handler for percentage value input
  const percentageValueEvent = (e) => {
    setPercentageValue(e.target.value);
    setInputError('');
  };

  // Event handler for percentage title input
  const percentageTitleEvent = (e) => {
    setPercentageTitle(e.target.value);
    setInputError('');
  };

  // Event handler for income value input
  const handleIncomeValueChange = (e) => {
    const input = e.target.value;
    const isValidInput = /^\d*\.?\d*$/.test(input);

    if (isValidInput) {
      setIncomeValue(input);
      setIncomeInputError('');
    } else {
      setIncomeInputError('Income value must be a valid number (float or integer).');
    }
  };

  // Function to add a new budget percentage object
  const addPercentageObject = () => {
    if (!percentageTitle || !percentageValue) {
      setInputError('Both title and percentage fields are required.');
      return;
    }

    if (isNaN(percentageValue)) {
      setInputError('Percentage must be a valid number.');
      return;
    }

    const newPercentageObject = {
      title: percentageTitle,
      value: percentageValue,
    };

    const newTotalPercentage = percentageTracker + parseFloat(percentageValue);

    if (newTotalPercentage > MAX_PERCENTAGE) {
      setInputError(`Total percentage exceeds ${MAX_PERCENTAGE}%`);
      return;
    }

    setPercentageArray([...percentagesArray, newPercentageObject]);
    setPercentageTracker(newTotalPercentage);
    setPercentageValue('');
    setPercentageTitle('');
  };

  // Calculate the total percentage when percentagesArray changes
  useEffect(() => {
    let totalPercentages = 0;
    for (const percentagesObj of percentagesArray) {
      totalPercentages += parseFloat(percentagesObj.value);
    }
    setPercentageTracker(totalPercentages);
    console.log(percentageTracker); // Note: This may show the previous value due to closure, but the correct value is being used.
  }, [percentagesArray]);

  // Function to create the budget when "Create Budget" button is clicked
  const createBudget = () => {
    if (!incomeValue) {
      setIncomeInputError('Income value is required.');
      return;
    }

    // Rest of the create budget logic...
  };

  return (
      <div className='Main'>
        {/* Display total income */}
        <div className='balance'>
          <h3>Total Income:</h3>
          <FaDollarSign />
          {incomeValue}
        </div>
    
        <div className='bottom'>
          <div className='budget-divisions'>
            {/* Input field for Total Income */}
            <div className="incomeValue">
              <label id='Income'>Enter Total Income</label>
              <input
                className='income'
                type="text"
                onChange={handleIncomeValueChange}
                value={incomeValue}
              />
            </div>
    
            {/* Display error message for income input */}
            {incomeInputError && <div className='error-message'>{incomeInputError}</div>}
    
            {/* Input field for Budget percentages */}
            <div className='divisions'>
              <h3>Enter Budget percentages</h3>
              <div className='cylinder'>
                <div
                  className='fill'
                  style={{ width: `${(percentageTracker / MAX_PERCENTAGE) * 100}%` }}
                >
                  {percentageTracker}%
                </div>
              </div>
              <div className='inputs'>
                {/* Input field for Budget Name */}
                <label htmlFor="">Budget Name</label>
                <input
                  onChange={percentageTitleEvent}
                  onFocus={() => setInputError('')}
                  type="text"
                  placeholder='title'
                  value={percentageTitle}
                />
    
                {/* Input field for Budget Percentage */}
                <label htmlFor="">Budget percentage</label>
                <input
                  onChange={percentageValueEvent}
                  onFocus={() => setInputError('')}
                  type="text"
                  placeholder='Percentage'
                  value={percentageValue}
                />
              </div>
    
              {/* Display error message for percentage input */}
              {inputError && <div className='error-message'>{inputError}</div>}
    
              {/* Add button to add a new budget percentage */}
              <div className="addButton">
                <button onClick={addPercentageObject}>Add</button>
              </div>
    
              {/* Display the list of budget percentages */}
              <div className='budget-percentages'>
                <ul>
                  {percentagesArray.map((percentagesObj, index) => (
                    <li key={index} className='title-percentages'>
                      <h3>{percentagesObj.title}</h3>
                      <p>{percentagesObj.value}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
    
            {/* Create Budget button */}
            <div className="createBudget">
              <button className='createButton' onClick={createBudget}>Create Budget</button>
            </div>
          </div>
    
          {/* Placeholder for displaying the created budget */}
          <div className='newBudget'>
            The total displays will appear here after the create budget button is clicked
          </div>
        </div>
      </div>
  );
};
