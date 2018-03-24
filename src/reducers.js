import { combineReducers } from 'redux'
import { emptyItem } from './common/constants'
// import { getValue } from './common/helpers'

const accounts = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_ACCOUNT':
      return {
        ...state,
        amount: action.value,
      }
    default:
      return state
  }
}

const expenses = (state = [], action) => {
  const { event = {}, index } = action
  const { key, target: { name, value } = {} } = event

  switch (action.type) {
    case 'EDIT_EXPENSE':
      return [
        ...state.slice(0, index),
        {
          ...state[index],
          [name]: ['amount', 'timing'].includes(name) ? Number(value) : value,
        },
        ...state.slice(index + 1),
      ]
    case 'ADD_EXPENSE':
      return [...state, emptyItem]
    case 'REMOVE_EXPENSE':
      const isSure = window.confirm('Are you sure you want to delete this expense?')
      return isSure ? [...state.slice(0, index), ...state.slice(index + 1)] : state
    default:
      return state
  }
}

const editingIndex = (state = -1, action) => {
  switch (action.type) {
    case 'TOGGLE_EDIT':
      return action.editingIndex === action.index ? -1 : action.index
    default:
      return state
  }
}

const reducers = combineReducers({
  accounts,
  editingIndex,
  expenses,
})

export default reducers
