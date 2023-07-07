import React, {useState} from 'react'

import List from './List';

export default function Input() {


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
    }
    console.log("hhhd",todo.text);
  return (
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
  )
}
