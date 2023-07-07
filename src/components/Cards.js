

// import React, { useState } from 'react';
// import './nav.css';
// import { GoDotFill } from 'react-icons/go';

// const Cards = ({ dat, onDelete }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [updatedText, setUpdatedText] = useState(dat.text);

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {

//     console.log(updatedText);

//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setIsEditing(false);
//     setUpdatedText(dat.text);
//   };

//   const handleDelete = () => {
//     onDelete(dat.id);
//   };

//   if (dat.hHead === 'DEVELOPMENT') {
//     var dotClass = 'dev';
//   } else if (dat.hHead === 'TYPOGRAPHY') {
//     var dotClass = 'typo';
//   } else {
//     var dotClass = 'design';
//   }

//   return (
//     <div className='cardss'>
//       <h6 id='chHead'>
//         <GoDotFill className={dotClass} />
//         {dat.hHead}
//       </h6>
//       <h4 id='cHead'>{dat.head}</h4>
//       {isEditing ? (
//         <textarea
//           id='cText'
//           value={updatedText}
//           onChange={(e) => setUpdatedText(e.target.value)}
//         />
//       ) : (
//         <p id='cText'>{dat.text}</p>
//       )}
//       <div className='card-actions'>
//         {isEditing ? (
//           <>
//             <button onClick={handleSave}>Save</button>
//             <button onClick={handleCancel}>Cancel</button>
//           </>
//         ) : (
//           <>
//             <button onClick={handleEdit}>Edit</button>
//             <button onClick={handleDelete}>Delete</button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cards;




import React from 'react';
import './nav.css'
import {GoDotFill} from 'react-icons/go'

const Cards = ({ dat }) => {
  
  if(dat.hHead=="DEVELOPMENT"){
    var dotClass="dev";
  }
  else if (dat.hHead=="TYPOGRAPHY"){
    var dotClass="typo";
  }
  else {
    var dotClass="design";
  }
  return (
    <div className='cardss'>
      <h6 id='chHead'><GoDotFill className={dotClass}/>{dat.hHead}</h6>
      <h4 id='cHead'>{dat.head}</h4>
      <p id='cText'>{dat.text}</p>
    </div>
  );
};

export default Cards;