import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import * as actions from '../actions/action'
import * as types from '../actions/actionType'

import reducer from '../reducers/todos'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('addTodo', () => {
  // 每一次測試後清除 fetchMock 的紀錄
  afterEach(() => {
    fetchMock.restore()
  })

  test('test actions addTodo', () => {
    const newToDo = {}
    const expectAction = {
      type: types.ADD_TODO,
      payload: newToDo,
    }
    expect(actions.addTodo(newToDo)).toEqual(expectAction)
  })

  test('test actions del', () => {
    const id = 1
    const expectAction = {
      type: types.DELETE_TODO,
      payload: id,
    }
    expect(actions.deleteTodo(id)).toEqual(expectAction)
  })

  test('test actions hidden', () => {
    const hidden = true
    const expectAction = {
      type: types.HIDDEN_TODO,
      payload: !hidden,
    }
    expect(actions.CartHidden(hidden)).toEqual(expectAction)
  })

  test('test reducer', () => {
    // 確認初始資料
    const initialState = [
      {
        id: 1591256594282,
        text: '每週三交進度',
        completed: false,
        edited: false,
      },
    ]
    expect(reducer(undefined, {})).toEqual(initialState)

    const newToDo = {
      id: 1591256594282,
      text: '每週三交進度',
      completed: false,
      edited: false,
    }

    expect(reducer(initialState, actions.addTodo(newToDo))).toEqual([
      {
        id: 1591256594282,
        text: '每週三交進度',
        completed: false,
        edited: false,
      },
      {
        id: 1591256594282,
        text: '每週三交進度',
        completed: false,
        edited: false,
      },
    ])

    expect(reducer(initialState, actions.finishTodo(newToDo.id))).toEqual([
      {
        id: 1591256594282,
        text: '每週三交進度',
        completed: !newToDo.completed,
        edited: false,
      },
    ])

    expect(reducer(initialState, actions.toggleTodo(newToDo.id))).toEqual([
      {
        id: 1591256594282,
        text: '每週三交進度',
        completed: !newToDo.completed,
        edited: !newToDo.edited,
      },
    ])

    expect(reducer(initialState, actions.deleteTodo(newToDo.id))).toEqual([])

    newToDo.text = '修改進度'
    expect(
      reducer(initialState, actions.changeText(newToDo.id, newToDo.text))
    ).toEqual([
      {
        id: 1591256594282,
        text: '修改進度',
        completed: !newToDo.completed,
        edited: !newToDo.edited,
      },
    ])
  })
})
