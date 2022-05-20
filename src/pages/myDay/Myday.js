import React, { useState } from 'react';
import './Myday.css';
import { addTodo, updateTodo, deleteTodo, completeItems, importantItems } from "../../store/action/Actions";
import { useDispatch, useSelector } from 'react-redux';

export default function Myday() {
  var date = new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = months[date.getMonth()];
  let today = days[date.getDay()];
  let day = date.getDate();
  let todayDate = today + ', ' + month + " " + day;
  const dispatch = useDispatch();
  const [myIndex, setMyIndex] = useState();
  const [update, setUpdate] = useState(false);
  const [button, setButton] = useState(true);
  const [value, setValue] = useState("");
  const lists = useSelector((state) => state.todos);
  const onChangeHandler = (e) => {
    if (e.target.value) {
      setButton(false);
    }
    else {
      setButton(true);
    }
    setValue(e.target.value);
  }
  const editHandler = (items, index) => {
    setButton(false);
    setValue(items.text);
    setUpdate(true);
    setMyIndex(index);
  }
  const updateHandler = () => {
    const updatedTodo = {
      id: lists[myIndex].id,
      mark: lists[myIndex].mark,
      completed: lists[myIndex].completed,
      text: value
    }
    dispatch(updateTodo(updatedTodo, myIndex))
    setValue("");
    setUpdate(false);
    setButton(true);
  }
  const addHandler = () => {
    const addInTodo = {
      id: new Date().getTime(),
      mark: false,
      completed: false,
      text: value
    }
    dispatch(addTodo(addInTodo));
    setValue("");
    setButton(true);
  }
  const deleteHandler = (id) => {
    dispatch(deleteTodo(id))
  }
  const importants = (index) => {
    let importantList = lists.map((item, i) => {
      if (i == index && item.mark == false) {
        const important = {
          id: item.id,
          mark: true,
          completed: item.completed,
          text: item.text
        }

        return important;
      }
      else if (i == index && item.mark == true) {
        const important = {
          id: item.id,
          mark: false,
          completed: item.completed,
          text: item.text
        }
        return important;
      }
      else {
        return item;
      }
    });
    dispatch(importantItems(importantList));
  }
  const completes = (index) => {
    let completedList = lists.map((item, i) => {
      if (i == index && item.completed == false) {
        const completed = {
          id: item.id,
          mark: item.mark,
          completed: true,
          text: item.text
        }
        return completed;
      }
      else if (i == index && item.completed == true) {
        const completed = {
          id: item.id,
          mark: item.mark,
          completed: false,
          text: item.text
        }
        return completed;
      }
      else {
        return item;
      }
    });
    dispatch(completeItems(completedList))
  }
  return (
    <div className="mid-div py-4 px-2">
      <h5>My Day  ...</h5>
      <p>{todayDate}</p>
      <div className='task-div'>
        <input type="text" value={value} placeholder='Add a Task' onChange={(e) => onChangeHandler(e)} />
        <div className='input-btn'>
          {update ? <button disabled={button} onClick={updateHandler}>Update</button> :
            <button disabled={button} onClick={addHandler}>Add</button>}
        </div>
      </div>
      {lists.map((items, index) => {
        return <div className="items-container" key={items.id}>
          {
            items.completed ? <i className="bi bi-circle-fill color-blue icon-start" onClick={() => completes(index)}></i> : <i className="bi bi-circle icon-start" onClick={() => completes(index)}></i>
          }
          {items.mark ? <i className="bi bi-star-fill color-blue" onClick={() => importants(index)}></i> : <i className="bi bi-star" onClick={() => importants(index)}></i>}<li className='items'>{items.text} <i className="bi bi-trash" onClick={() => deleteHandler(items.id)}></i><i className="bi bi-pencil" onClick={() => editHandler(items, index)}></i></li>
        </div>
      })
      }
    </div>
  )
}
