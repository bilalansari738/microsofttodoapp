import React from 'react'

export default function Important() {
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
    const importants = useSelector((state) => state.todos);
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
      dispatch(updateImportant(updatedTodo, myIndex))
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
      dispatch(addImportant(addInTodo));
      setValue("");
      setButton(true);
    }
    const deleteHandler = (id) => {
      dispatch(deleteImportant(id))
    }
    return (
        <div className="mid-div py-4 px-2">
            <h5>Important  ...</h5>
            <p>{todayDate}</p>
            <div className='task-div'>
                <input type="text" value={value} placeholder='Add a Task' onChange={(e) => onChangeHandler(e)} />
                <div className='input-btn'>
                    {update ? <button disabled={button} onClick={updateHandler}>Update</button> :
                        <button disabled={button} onClick={addHandler}>Add</button>}
                </div>
            </div>
            {importants.map((items, index) => {
                return <div className="items-container" key={items.id}>
                    <li className='items'>{items.text} <i className="bi bi-trash" onClick={() => deleteHandler(items.id)}></i><i className="bi bi-pencil" onClick={() => editHandler(items, index)}></i></li>
                </div>
            })
            }
        </div>
    )
}
