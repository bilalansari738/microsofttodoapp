
const initial_state = {
    todos: [],
    importants: []
};

const TodosReducer = (state = initial_state, actions) => {
    switch (actions.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    actions.payload
                ]
            };
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter((item) => {
                    return item.id !== actions.payload
                })
            };
        case "UPDATE_TODO":
            return {
                ...state,
                todos: state.todos.map((item, index) => {
                    if (index == actions.data) {
                        return actions.payload
                    }
                    else return item
                })
            }
        case "COMPLETED":
            return {
                ...state,
                todos: actions.payload
            }
        case "IMPORTANT":
            return {
                ...state,
                todos: actions.payload,
                importants: [
                    state.todos.map((item) => {
                        if (item.mark == true) {
                            return item;
                        }
                    })
                ]
            }
        case "ADD_IMPORTANT":
            return {
                ...state,
                importants: [
                    ...state.importants,
                    actions.payload
                ]
            };
        case "DELETE_IMPORTANT":
            return {
                ...state,
                importants: state.importants.filter((item) => {
                    return item.id !== actions.payload
                })
            };
        case "UPDATE_TODO":
            return {
                ...state,
                importants: state.importants.map((item, index) => {
                    if (index == actions.data) {
                        return actions.payload
                    }
                    else return item
                })
            }
        default: return state;
    }
}
export default TodosReducer;