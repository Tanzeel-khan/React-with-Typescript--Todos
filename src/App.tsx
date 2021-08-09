import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  interface currentInt {
    name:string;
    task:string;
    deadline:string;
  }
  interface allUsersInt {
    currentUser:currentInt;
    allUsers:Array<currentInt>;
  }
  const [user,setUser] = useState<allUsersInt>({
    currentUser:{
      name:"",
      task:"",
      deadline:""
    },
    allUsers : []
  })

  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) : void =>{
   setUser({
     ...user,
     currentUser:{
       ...user.currentUser,
       [e.target.name]:e.target.value
     }
   })   
   console.log(user.currentUser)
  }
  const submitForm = (e:React.SyntheticEvent) : void =>{
    e.preventDefault();
      setUser({
        currentUser:{
          name:"",
          task:"",
          deadline:""
        },
        allUsers:[
          ...user.allUsers,
          user.currentUser
        ]
      })
     
  }
  console.log(user)
  const AllUsersTodos = ()=>{
    return(
  user.allUsers.map((users,i)=>{
<div className="map_parent" key={i}>
  <div className="labels_parent">
  <label className="labels_map">Name:</label>
  <label className="labels_map">Task Assign:</label>
  <label className="labels_map">Deadline:</label>
  </div>
  <div className="headings_parent">
    <h2 style={{color:'black'}} className="headings_map">{users.name}</h2>
    <h2 style={{color:'black'}} className="headings_map">{users.task}</h2>
    <h2 style={{color:'black'}} className="headings_map">{users.deadline}</h2>
    </div>
    </div>
  })
    )
}
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form className="todo_form" onSubmit={submitForm}>
        <label htmlFor="username" className="labels">Name:</label>
        <input
        id="username"
        type="text"
        name="name"
        value={user.currentUser.name}
        className="inputs"
        onChange={onChangeHandler}
        />
        <label htmlFor="task" className="labels">Task Assign:</label>
        <input
        id="task"
        type="text"
        name="task"
        value={user.currentUser.task}
        className="inputs"
        onChange={onChangeHandler}
        />
        <label htmlFor="deadline" className="labels">Deadline:</label>
        <input
        id="deadline"
        type="text"
        name="deadline"
        value={user.currentUser.deadline}
        className="inputs"
        onChange={onChangeHandler}
        />
        <button type="submit" className="add_btn">ADD TASK</button>
      </form>
      <div>
        {AllUsersTodos}
      </div>
      
    </div>
  );
}

export default App;
