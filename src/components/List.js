import React from 'react';






export default function List(props) {
    console.log("propss: " ,props)


  function displayer(todo) {
    return (
      <div key={todo.id}>
        <h1>
          {todo.type} {todo.heading} {todo.text}
          <button>Button</button>
        </h1>
      </div>
    );
  }

  return <div>
    <h2>hehehe</h2>
    {/* {props.data.map((item)=>displayer(item))} */}
    {props.data.map(displayer)}
  </div>
//   return <div>{props.data && props.data.map(ele)}</div>;
}

