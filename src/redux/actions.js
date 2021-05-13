import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, INSERT_DATA_FROM_CSV } from './types'
import { stateMap } from '../dataProcessing/stateMap'

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 1500)
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function insertDataFromCSV(event) {
  return async dispatch => {
    try {
      dispatch(showLoader())
      var Papa = require("papaparse/papaparse.min.js")
      Papa.parse(event.target.files[0], {
        header: true,
        transform: function(value, header) {
          value = value.trim()
          if (header === 'yearlyIncome') {
            if (!isNaN(parseFloat(value))) {
              value = parseFloat(value).toFixed(2)
            }
          }
          if (header === 'age' || header === 'experience') {
            if (!isNaN(parseInt(value))) {
              value = parseInt(value)
            }
          }
          if (header === 'hasChildren') {
            if (value === '') {
              value = 'false'
            }
          }
          if (header === 'licenseStates') {
            for (let prop in stateMap) {
              let regExp = new RegExp(`${prop}`, 'ig')
              value = value.replace(regExp, stateMap[prop])
            }
          }
          return value
        },
        complete: function(results) {
          dispatch({type: INSERT_DATA_FROM_CSV, payload: results.data})
          dispatch(hideLoader())
        }
      })
    } catch (e) {
      dispatch(showAlert('Что-то пошло не так'))
      dispatch(hideLoader())
    }
  }
}
