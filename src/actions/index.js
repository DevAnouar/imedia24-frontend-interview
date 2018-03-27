import {CHANGE_INPUT_VALUE, CLEAR_FORM} from "./constants";

export const changeInputValue = (inputName, inputValue) => ({
  type: CHANGE_INPUT_VALUE,
  payload: {
    [inputName]: inputValue
  }
})

export const clearForm = () => ({
  type: CLEAR_FORM
})