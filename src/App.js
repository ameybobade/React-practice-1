import './App.css';
import AddUser from './Users/AddUser';
import UserList from './Users/UsersList';
import { useState } from 'react';

function App() {
  const [userList, setUserList] = useState([])
  const addUserHandler=(uName,uAge)=>
  {
    setUserList((prevUsersList)=>{
      return [...prevUsersList,{name:uName,age:uAge,id:Math.random().toString()}]
    })
  }
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={userList}></UserList>
    </div>
  );
}

export default App;
