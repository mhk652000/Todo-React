
import React, {useState} from 'react'
import Cards from './Cards';
import './nav.css'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'
import Modall from './Modall';

export default function Boxes({ dat }) {

  
  if (!dat || !Array.isArray(dat)) {
    return null;
  }

  function displayer(data, index) {
    return <Cards key={index} dat={data} />;
  }

 
  return (
    
    <div className='box'>
      <h4 className='boxHead'>To Do {<AiOutlinePlus className='bhIcon'/> }{<Modall/>}</h4>
      {dat.map(displayer)}
    </div>
  );
}




