import { createStore } from "redux";
import TodosReducer from "../store/reducers/TodosReducer";

const store = createStore(TodosReducer);

export default store;