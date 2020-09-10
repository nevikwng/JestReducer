import {
  ADD_TODO,
  DELETE_TODO,
  FINISH_TODO,
  TOGGLE_TODO,
  CHANGE_TEXT,
} from '../actions/actionType'

const initialState = [
  {
    id: 1591256594282,
    text: '每週三交進度',
    completed: false,
    edited: false,
  },
]

const todos = (state = initialState, action) => {
  let newTodos = [...state]
  let todoItemIndex = -1
  // console.log('reducer')
  switch (action.type) {
    case ADD_TODO:
      const newTodo = [...state, action.payload]
      return newTodo

    case DELETE_TODO:
      return state.filter((v) => v.id !== action.payload)

    case TOGGLE_TODO:
      todoItemIndex = state.findIndex((v) => v.id === action.payload)
      if (todoItemIndex !== -1) {
        newTodos[todoItemIndex].edited = !newTodos[todoItemIndex].edited
      }
      return newTodos

    case CHANGE_TEXT:
      newTodos = [...state]
      todoItemIndex = state.findIndex((v) => v.id === action.payload.id)
      // console.log(todoItemIndex, action.payload)
      if (todoItemIndex !== -1) {
        newTodos[todoItemIndex].text = action.payload.text
      }
      // console.log(newTodos)
      return newTodos

    case FINISH_TODO:
      newTodos = [...state]
      todoItemIndex = state.findIndex((v) => v.id === action.payload)
      if (todoItemIndex !== -1) {
        newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed
      }
      return newTodos

    default:
      return state
  }
}

export default todos
