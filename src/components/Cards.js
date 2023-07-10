import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateStatus, deleteData } from '../redux/actions';
import './nav.css';
import { GoDotFill } from 'react-icons/go';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import {ImCross} from 'react-icons/im'

const Cards = (props) => {
  const dispatch = useDispatch();
  const deleter=useDispatch();
  const data = useSelector((state) => state);
  console.log("card data", data);

  function displayer(dataItem) {
    let dotClass = "";
    if (dataItem.type === 'DEVELOPMENT') {
      dotClass = 'dev';
    } else if (dataItem.type === 'TYPOGRAPHY') {
      dotClass = 'typo';
    } else {
      dotClass = 'design';
    }

    function handleClick(typeStatus) {
      let newStatus="";
      if(typeStatus==="Start"){
        newStatus="In Progress";
      }
      else{
        newStatus="Completed";
      }
      
      dispatch(updateStatus(dataItem.id, newStatus));
    }

    function handleDelete(){
      deleter(deleteData(dataItem.id));
    }

    if (props.status === dataItem.status) {
      return (
        <div className="cardss" >
          
          <div className='cardButtons'>
          <h6 id="chHead">
            <GoDotFill className={dotClass} />
            {dataItem.type}
          </h6>
          {props.status !== "Completed" && (
            <button className='carrrdButton' onClick={()=>handleClick(props.status)}>
              <IoCheckmarkDoneSharp className='doneButton' />
            </button>
          )}
          {props.status==="Start" && (
            <button className='carrrdButton' onClick={handleDelete}>
              <ImCross className='delButton'/>
            </button>
          )}
          </div>
          
            
          
          <h4 id="cHead">{dataItem.heading}</h4>
          <p id="cText">{dataItem.text}</p>
        </div>
      );
    }
  }

  return <>{data.cardData.map(displayer)}</>;
};

export default Cards;





// import React from 'react';
// import { useSelector } from 'react-redux/es/hooks/useSelector';
// import './nav.css'
// import {GoDotFill} from 'react-icons/go'
// import {IoCheckmarkDoneCircle}from 'react-icons/io5'
// import { addData, updateStatus } from "../redux/actions";
// import { useDispatch } from "react-redux";

// const Cards = (props) => {

//   const updateStatuss=useDispatch();
//   const data = useSelector((state) => state);
//   console.log("card data", data);

//   function displayer(dataItem) {
//     if(dataItem.type=="DEVELOPMENT"){
//       var dotClass="dev";
//     }
//     else if (dataItem.type=="TYPOGRAPHY"){
//       var dotClass="typo";
//     }
//     else {
//       var dotClass="design";
//     }

//     function handleClick(e){
//         e.preventDefault();
//         updateStatuss(updateStatus(dataItem));
//     }

//     if(props.status==dataItem.status){
//       if(props.status=="Start"){
//         return <div className='cardss'>
//         <h6 id='chHead'><GoDotFill className={dotClass}/>{dataItem.type}</h6>
//         <button onClick={handleClick}>{<IoCheckmarkDoneCircle/>}</button>
//         <h4 id='cHead'>{dataItem.heading}</h4>
//         <p id='cText'>{dataItem.text}</p>
//         </div>
//       }
//       else{
//         return <div className='cardss'>
//         <h6 id='chHead'><GoDotFill className={dotClass}/>{dataItem.type}</h6>
//         <h4 id='cHead'>{dataItem.heading}</h4>
//         <p id='cText'>{dataItem.text}</p>
//         </div>
//       }
      
//     }
    
  
//   }
  
  
//   return (
//    data.cardData.map(displayer)  )
// };

// export default Cards;





