import React from 'react'
import './nav.css'
import Dropdown from './Dropdown'
import {BsSearch} from 'react-icons/bs'
import {BiImageAlt} from 'react-icons/bi'
import {IoNotificationsOutline} from 'react-icons/io5'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import Boxes from './Boxes'
import options from './options'
import options2 from './options2'
import options3 from './options3'

export default function Navbar() {
  return (
    <div className='navBar'>
        <form>
        <BsSearch className='searchIcon'/>
        <input className='searchInput' 
        placeholder='Search'></input>
        <IoNotificationsOutline className='notiIcon'/>
        <AiOutlineQuestionCircle className='notiIcon'/>
        <BiImageAlt className='notiIcon'/>
        </form>
        <Dropdown/>
        <div className='allBoxes'>
          <Boxes dat={options} />
          <Boxes dat={options2} />
          <Boxes dat={options3} />
        </div>
        

    </div>
  )
}


// import React from 'react';
// import './nav.css';
// import Dropdown from './Dropdown';
// import { BsSearch } from 'react-icons/bs';
// import { BiImageAlt } from 'react-icons/bi';
// import { IoNotificationsOutline } from 'react-icons/io5';
// import { AiOutlineQuestionCircle } from 'react-icons/ai';
// import Boxes from './Boxes';
// import options from './options';
// import options2 from './options2';
// import options3 from './options3';

// export default function Navbar() {
//   const handleDelete = (boxId, cardId) => {
//     const boxIndex = options.findIndex((box) => box.hHead === boxId);
//     if (boxIndex === -1) {
//       console.log('Box not found');
//       return;
//     }
  
    
//     const cardIndex = options[boxIndex].cards.findIndex((card) => card.head === cardId);
//     if (cardIndex === -1) {
//       console.log('Card not found');
//       return;
//     }
  
    
//     const updatedOptions = [...options];
//     updatedOptions[boxIndex].cards.splice(cardIndex, 1);
//     console.log('Deleted card:', options[boxIndex].cards[cardIndex]);
  
    
//   };
  

//   return (
//     <div className='navBar'>
//       <form>
//         <BsSearch className='searchIcon' />
//         <input className='searchInput' placeholder='Search'></input>
//         <IoNotificationsOutline className='notiIcon' />
//         <AiOutlineQuestionCircle className='notiIcon' />
//         <BiImageAlt className='notiIcon' />
//       </form>
//       <Dropdown />
//       <div className='allBoxes'>
//         <Boxes dat={options} onDelete={handleDelete} />
//         <Boxes dat={options2} onDelete={handleDelete} />
//         <Boxes dat={options3} onDelete={handleDelete} />
//       </div>
//     </div>
//   );
// }
