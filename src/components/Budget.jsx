import React, { useState, useEffect } from 'react';
import { FaDollarSign } from 'react-icons/fa';
import '../styles/Budget.css';

export const Budget = () => {
  const MAX_PERCENTAGE = 100;
  const [percentagesArray, setPercentageArray] = useState([]);
  const [percentageValue, setpercentageValue] = useState('');
  const [percentageTitle, setPercentageTitle] = useState('');
  const [percentageTracker, setPercentageTracker] = useState(0);
  const [inputError, setInputError] = useState('');
  const [incomeValue, setIncomeValue] = useState('');
  const [incomeInputError, setIncomeInputError] = useState('');

  const percentageValueEvent = (e) => {
    setpercentageValue(e.target.value);
    setInputError('');
  };

  const percentageTitleEvent = (e) => {
    setPercentageTitle(e.target.value);
    setInputError('');
  };

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
    setpercentageValue('');
    setPercentageTitle('');
  };

  useEffect(() => {
    let totalPercentages = 0;
    for (const percentagesObj of percentagesArray) {
      totalPercentages += parseFloat(percentagesObj.value);
    }
    setPercentageTracker(totalPercentages);
    console.log(percentageTracker);
  }, [percentagesArray]);

  const createBudget = () => {
    if (!incomeValue) {
      setIncomeInputError('Income value is required.');
      return;
    }

    // Rest of the create budget logic...
  };

  return (
    <div className='Main'>
      <div className='balance'>
        <h3>Total Income:</h3>
        <FaDollarSign />
        {incomeValue}
      </div>
      <div className='bottom'>
        <div className='budget-divisions'>
          <div className="incomeValue">
            <label id='Income'>Enter Total Income</label>
            <input
              className='income'
              type="text"
              onChange={handleIncomeValueChange}
              value={incomeValue}
            />
          </div>
          {incomeInputError && <div className='error-message'>{incomeInputError}</div>}
          <div className='divisions'>
            <h3>Enter Budget percentages</h3>
            <div className='cylinder'>
              <div
                className='fill'
                style={{ width: `${(percentageTracker / MAX_PERCENTAGE) * 100}%` }}
              >
              </div>
            </div>
            <div className='inputs'>
              <label htmlFor="">Budget Name</label>
              <input
                onChange={percentageTitleEvent}
                onFocus={() => setInputError('')}
                type="text"
                placeholder='title'
                value={percentageTitle}
              />

              <label htmlFor="">Budget percentage</label>
              <input
                onChange={percentageValueEvent}
                onFocus={() => setInputError('')}
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
                <li>{percentagesArray.map((percentagesObj, index) => (
                  <div key={index} className='title-percentages'>
                    <h3>{percentagesObj.title}</h3>
                    <p>{percentagesObj.value}</p>
                  </div>
                ))}</li>
              </ul>
            </div>
          </div>
          <div className="createBudget">
            <button className='createButton' onClick={createBudget}>Create Budget</button>
          </div>
        </div>
        <div className='newBudget'>
          The total displays will appear here after the create budget button is clicked
        </div>
      </div>
    </div>
  );
};
