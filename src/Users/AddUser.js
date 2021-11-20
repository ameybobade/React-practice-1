//Fragment lets you to list the HTML tags without adding extra DOM Node
import React,{useState} from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";


const AddUser = (props) => {

  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUserName.trim().length===0 || enteredAge.trim().length===0)
    {
      setError({
        title: "Invalid input",
        message: "Input fileds cannot be empty"
      });
      return;
    }
    if(enteredAge<1)
    {
      setError({
        title: "Invalid Age",
        message: "Age should be valid"
      });
      return;
    }
    // console.log(enteredUserName, enteredAge);
    props.onAddUser(enteredUserName,enteredAge)
    setEnteredAge("")
    setEnteredUserName("")
  };

  const errorHandler=()=>
  {
    setError(null);
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (in years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
