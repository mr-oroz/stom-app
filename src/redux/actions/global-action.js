import {CLEAR_ERROR, SHOW_LOADING, HIDE_LOADING, SHOW_ERROR } from "../types"

export const showError = (text) => {
  return {
    type: SHOW_ERROR,
    payload: text
  }
}
export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  }
}
export const showLoading = () => {
  return {
    type: SHOW_LOADING,
  }
}
export const hideLoading = () => {
  return {
    type: HIDE_LOADING,
  }
}