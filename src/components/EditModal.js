import React, { useState } from "react";
import Modal from "react-modal";

import { editData } from "../redux/actions";
import { useDispatch } from "react-redux";
import { AiOutlinePlus, AiTwotoneEdit } from "react-icons/ai";

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
    height: 350,
    width: 280,
    margin: "auto",
  },
};

function EditModal(props) {
  const edittData = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [todo, setTodo] = useState({
    type: props?.modalData?.type,
    heading: props?.modalData?.heading,
    text: props?.modalData?.text,
    id: props.modalData.id,
    status: props.modalData.status,
  });

  function handleChange(event) {
    console.log("event");
    event.preventDefault();
    setTodo({
      ...todo,
      [event.target.name]: event.target.value,
      id: props.modalData.id,
      status: props.modalData.status,
    });
  }

  const handleClick = (e) => {
    setTodo({
      ...todo,
      type: props?.modalData?.type ? props?.modalData?.type : "",
      heading: props?.modalData?.heading ? props?.modalData?.heading : "",
      text: props?.modalData?.text ? props?.modalData?.text : "",
    });
    e.preventDefault();
    setModalOpen(true);
  };

  const editDataTodo = (e) => {
    e.preventDefault();
    edittData(editData(todo.id, todo.type, todo.heading, todo.text));
    setModalOpen(false);
  };

  return (
    <div className="Modallll">
      <button className="modalButton carrrdButton" onClick={handleClick}>
        <AiTwotoneEdit className="editButton" />
      </button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
        
      >
        <div className='modalForm'>
        <h3 className='modalHead'>Edit the Task</h3>
          <form >
          <label className='modalLabelType'>
            <h5>Type</h5>
            <input
              value={todo.type}
              onChange={handleChange}
              placeholder="Type"
              name="type"
              className='modalInput'
            />
            </label>
            
            <label className='modalLabelHeading'>
            <h5>Heading</h5>
              <input
              value={todo.heading}
              onChange={handleChange}
              placeholder="Heading"
              name="heading"
              className='modalInput'/>
            </label>
              
            <label className='modalLabelText'>
            <h5>Text</h5>
            <input
              value={todo.text}
              onChange={handleChange}
              placeholder="Text"
              name="text"
              className='modalInput'
            />
            </label>
            
            <button className='modalButt' onClick={(e) => editDataTodo(e)}>Edit</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default EditModal;
