import React, { useState } from "react";
import List from "./List";
import Modal from "react-modal";
import { addData } from "../redux/actions";
import { useDispatch } from "react-redux";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 400,
  },
};

function Modall() {
  const addDataa = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [allTodo,setallTodo] = useState([]);

  
    const [todo, setTodo]=useState({
        type: "",
        heading: "",
        text: ""
    })

    function handleChange(event){
        console.log("event");
        event.preventDefault();
        setTodo({
           ...todo, [event.target.name]:event.target.value,
           id: Math.floor(Math.random()*1000),
           status:"Start",
        })
    }

    function handleSubmit(event){
        

      
        event.preventDefault();
        setallTodo([...allTodo, todo]);
        setTodo({
            type: "",
            heading: "",
            text: ""
        });
        addDataa(addData(allTodo));

        


    }

  return (
    <div className="App">
      <button onClick={setModalOpen}>Open Modal</button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
      >
        <div>
      <form onSubmit={handleSubmit}>
        <input
            value={todo.type}
            onChange={handleChange}
            placeholder='Type'
            name='type'
        />
        <input
            value={todo.heading}
            onChange={handleChange}
            placeholder='Heading'
            name='heading'
        />
        <input
            value={todo.text}
            onChange={handleChange}
            placeholder='Text'
            name='text'
        />

        <button type='submit'>ADD</button>
      </form>
        <List data={allTodo}/>
    </div>

        <button onClick={() => setModalOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default Modall;