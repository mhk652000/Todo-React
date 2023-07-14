import React, { useState } from "react";
import Modal from "react-modal";
import { addData } from "../redux/actions";
import { useDispatch } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import {ImCross} from "react-icons/im";
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

function Modall() {
  const addDataa = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [allTodo, setallTodo] = useState([]);

  const [todo, setTodo] = useState({
    type: "",
    heading: "",
    text: "",
  });

  function handleChange(event) {
    console.log("event");
    event.preventDefault();
    setTodo({
      ...todo,
      [event.target.name]: event.target.value,
      id: Math.floor(Math.random() * 1000),
      status: "Start",
    });
  }



  function handleSubmit(event) {
    
    event.preventDefault();
    setallTodo([...allTodo, todo]);
    addDataa(addData(todo));
    setTodo({
      type: "",
      heading: "",
      text: "",
    });
    setModalOpen(false);
  }

  const handleClick=(e)=>{
    setModalOpen(true);
    
  }

  const handleClose=(e)=>{
    e.preventDefault();
    setModalOpen(false);
  }
  

  return (
    <div className="Modallll">
      <button className="modalButton" onClick={(e)=>handleClick(e)}>
        <AiOutlinePlus className="bhIcon" />
      </button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
        
      >
        <div className='modalForm'>
        <button className="cancelButton" onClick={handleClose}>
        <ImCross className="crossIcon" />
      </button>
          <h3 className='modalHead'>Add a new task</h3>
          <form>
          <label className='modalLabelType'>
            <h5>Type</h5>
            <input
              value={todo.type}
              onChange={handleChange}
              placeholder="Development, Typography etc."
              name="type"
              className='modalTypeInput'
            />
          </label>
            
          <label className='modalLabelHeading'>
          <h5>Heading</h5> 
          <input
              value={todo.heading}
              onChange={handleChange}
              placeholder="Task"
              name="heading"
              className='modalHeadingInput'
            />
          </label>
            

          <label className='modalLabelText'>
          <h5>Text</h5>
          <input
              value={todo.text}
              onChange={handleChange}
              placeholder="Write your Task details"
              name="text"
              className='modalText'
            />
          </label>
            
            <button className='modalButt' onClick={(e) => handleSubmit(e)}>ADD</button>
            
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default Modall;


