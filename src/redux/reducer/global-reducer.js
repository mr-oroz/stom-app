import {CLEAR_ERROR, SHOW_LOADING, HIDE_LOADING, SHOW_ERROR } from "../types"

const defaultState = {
  loading: false,
  error: null
}

export const globalReducer = (state = defaultState, action) => {
  switch(action.type) {
      case SHOW_LOADING: {
        return {
          ...state,
          loading: true
        }
      }
      case HIDE_LOADING: {
        return {
          ...state,
          loading: false
        }
      }
      case CLEAR_ERROR: {
        return {
          ...state,
          error: null
        }
      }
      case SHOW_ERROR: {
        return {
          ...state,
          error: action.payload
        }
      }
      default:
        return state
  }
}