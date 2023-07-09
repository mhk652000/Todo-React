




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