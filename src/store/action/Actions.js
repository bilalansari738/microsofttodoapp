
export const addTodo = (data) => {
    return{
        type: "ADD_TODO",
        payload: data
    }
}
export const updateTodo = (item, index) => {
    return{
        type: "UPDATE_TODO",
        payload: item,
        data: index
    }
}
export const deleteTodo = (id) => {
    return{
        type: "DELETE_TODO",
        payload: id
    }
}
export const completeItems = (data) => {
    return{
        type: "COMPLETED",
        payload: data
    }
}
export const importantItems = (data) => {
    return{
        type: "IMPORTANT",
        payload: data
    }
}
export const addImportant = (data) => {
    return{
        type: "ADD_IMPORTANT",
        payload: data
    }
}
export const updateImportant = (item, index) => {
    return{
        type: "UPDATE_IMPORTANT",
        payload: item,
        data: index
    }
}
export const deleteImportant = (id) => {
    return{
        type: "DELETE_IMPORTANT",
        payload: id
    }
}
