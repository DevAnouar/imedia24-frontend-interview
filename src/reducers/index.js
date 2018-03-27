import {CHANGE_INPUT_VALUE, CLEAR_FORM} from "../actions/constants";

const initialState = {
  form: {
    inputs: {
      strasse: 'Strasse',
      nr: 'Nr',
      zusatz: 'Zusatz',
      plz: 'Plz',
      ort: 'Ort'
    }
  }
}

const form = (state = initialState.form, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          ...action.payload
        }
      }
    case CLEAR_FORM:
      return {
        ...state,
        inputs: {
          strasse: '',
          nr: '',
          zusatz: '',
          plz: '',
          ort: ''
        }
      }
    default:
      return state
  }
}

const reducers = { form }

export default reducers