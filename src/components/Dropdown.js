import React, { useState } from 'react';
import './dropdown.css'
import {RiArrowDropDownLine} from 'react-icons/ri'



const Dropdown = () => {
  const options = [
    { label: 'Today', value: 'today' },
    { label: 'This Week', value: 'This week' },
    { label: 'This Month', value: 'This month' }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    console.log('Selected option:', option);
  };

  return (
    <div className="dropdown">
    <h2>Board</h2>
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.label : 'This Week'}
        <RiArrowDropDownLine className='dropIcon'/>
      </button>
      {/* {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleOptionClick(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default Dropdown;

