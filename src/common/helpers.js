import attempt from 'lodash/attempt'
import isError from 'lodash/isError'
import { LOCAL_STORAGE_NAME } from './constants'
export { default as setValue } from 'lodash/set'
export { default as getValue } from 'lodash/get'
export { default as throttle } from 'lodash/throttle'

const parseLodash = string => attempt(JSON.parse.bind(null, string))

export const isValidJSON = string => !isError(parseLodash(string))

export const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem(LOCAL_STORAGE_NAME)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    window.localStorage.setItem(LOCAL_STORAGE_NAME, serializedState)
  } catch (err) {
    console.error('Error saving state: ', err)
  }
}
