import React, {useState} from 'react'
import List from './List';

export default function Form() {
    const [subject, setSubject]=useState("");
    const [text,setText]=useState("");
    const [type, setType]=useState("");
    const [input, setInput]=useState("");
    const [todos , setTodos] = useState( [{
      heading: "",
      type: "",
      task: ""
    }]);
    const [temp, setTemp]=useState([{ id: 1, status: 'Start', type: 'DEVELOPMENT', heading: 'Gym', text: 'Chest Day is a very good way to start your workouts and make sure everything is going smoothly' },
    { id: 2, status:'Pending', type: 'TYPOGRAPHY', heading: 'Do Coding', text: 'Complete TODO APP' },
    { id: 3, status:'Done', type: 'DESIGN', headig: 'Sleep', text: 'you need 8 hrs sleep' },
    { id: 4, status:'Done', type: 'DEVELOPMENT', heading: 'Prepare interview', text: 'Revise all the concepts of OOP DSA and Design Patterns' },
    { id: 5, status:'Pending', type: 'TYPOGRAPHY', heading: 'Lorem Ipsum', text: 'Data Data Data Data Data' },
    { id: 6, status: 'Start', type: 'DEVELOPMENT', heading: 'Second Card', text: 'You are doing great' }]);
   
    

    function handleSubmit(event){
        event.preventDefault();
        setTemp([...temp,input]);
        setInput('');
        
    }

    
    console.log(temp);

    function handleChange(event){
        setInput(event.target.value);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
            value={input}
            onChange={handleChange}
        />


        <button onSubmit={handleSubmit}>ADD</button>
      </form>

      <List text={temp}/>
    </div>
  )
}
