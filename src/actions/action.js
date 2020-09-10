import {
  ADD_TODO,
  DELETE_TODO,
  FINISH_TODO,
  TOGGLE_TODO,
  CHANGE_TEXT,
  HIDDEN_TODO,
} from '../actions/actionType'

//新增
export const addTodo = (num) => ({
  type: ADD_TODO,
  payload: num,
})

//刪除
export const deleteTodo = (deleteId) => {
  return {
    type: DELETE_TODO,
    payload: deleteId,
  }
}
//修改
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  }
}
//修改內容
export const changeText = (id, text) => {
  return {
    type: CHANGE_TEXT,
    payload: { id, text },
  }
}
//完成
export const finishTodo = (id) => {
  return {
    type: FINISH_TODO,
    payload: id,
  }
}

//隱藏
export const CartHidden = (hidden) => {
  return {
    type: HIDDEN_TODO,
    payload: !hidden,
  }
}
