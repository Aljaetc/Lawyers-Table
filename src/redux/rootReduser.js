import { HIDE_LOADER, SHOW_LOADER, SHOW_ALERT, HIDE_ALERT, INSERT_DATA_FROM_CSV } from './types'

const initialState = {
  loading: false,
  data: null
}

export const rootReduser = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER: {
      return {...state, loading: true}
    }
    case HIDE_LOADER: {
      return {...state, loading: false}
    }
    case SHOW_ALERT: {
      return {...state, alert: action.payload}
    }
    case HIDE_ALERT: {
      return {...state, alert: null}
    }
    case INSERT_DATA_FROM_CSV: {
      return {...state, data: action.payload}
    }
    default: return state
  }
}