
import React, {useState} from 'react'
import Cards from './Cards';
import './nav.css'

import {BsThreeDots} from 'react-icons/bs';
import { IconButton } from "rsuite";
import Modall from './Modall';

export default function Boxes(props) {

  function boxSelect(){

    if(props.status=="Start"){
      return <div className='box'>
        <div className='boxesHead'>
        <h4 className='boxHead' >{props.status}</h4>
        <Modall />
        </div>
        
        <Cards status={props.status}/>
      </div>
    }

    else {
      return <div className='box'>
                  <div className='boxesHead'>
                    <h4 className='boxHead' >{props.status}</h4>
                  </div>
                  <Cards status={props.status} />
                </div>
    }

    

  }
  
  return <div>
    {boxSelect()}
  </div>

}




