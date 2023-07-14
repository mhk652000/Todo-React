import React, { useState } from "react";
import Modal from "react-modal";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {ImCross} from "react-icons/im";
import {  deleteData } from "../redux/actions";


const customStyles = {
  content: {
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#EEF2F5",
    borderRadius: "20px",
    height: 100,
    width: 250,
    margin: "auto",
  },
};

function DeleteModal(props) {
  const deleter = useDispatch();
  
  const [modalOpen, setModalOpen] = useState(false);
  

  const handleDelete = (e) => {
    e.preventDefault();

    deleter(deleteData(props.itemId));
    setModalOpen(false);
  };

  const handleClick= (e) =>{
    e.preventDefault();
    !modalOpen?setModalOpen(true):setModalOpen(false);
    
  }
  const handleClose=(e)=>{
    e.preventDefault();
    setModalOpen(false);
  }
  return (
    <div className="Modallll">
      <button className="carrrdButton" onClick={(e)=>handleClick(e)}>
                <MdDelete className="delButton" />
      </button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
        
      >
        <div className='modalForm'>
        <button className="newCancelButton" onClick={handleClose}>
        <ImCross className="crossIcon" />
      </button>
        <h3 className='delModalHead'>Are you sure you want to delete?</h3>
          
          <button className='newModalButt' onClick={(e)=>handleDelete(e)}>Yes</button>
          
        </div>
      </Modal>
    </div>
  );
}

export default DeleteModal;
