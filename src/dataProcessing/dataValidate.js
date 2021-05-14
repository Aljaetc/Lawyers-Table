import { INSERT_DATA_FROM_CSV } from "../redux/types"
import { stateMap } from './stateMap'
import moment from 'moment'
var validate = require("validate.js")


validate.extend(validate.validators.datetime, {
  parse: function(value, options) {
    return +moment.utc(value, ["YYYY-MM-DD", "MM/DD/YYYY"], true)
  },
  format: function(value, options) {
    var format = "YYYY-MM-DD"
    return moment.utc(value).format(format)
  }
});

const constraints = {
  age: {
    numericality: {
      onlyInteger: true,
      greaterThan: 20,
    }
  },
  experience: function(value, attributes) {
    return {
      numericality: {
        greaterThanOrEqualTo: 0,
        lessThan: attributes.age
      }
    }
  },
  yearlyIncome: {
    numericality: {
      lessThan: 1000000
    }
  },
  email: {
    presence: true,
    email: true
  },
  hasChildren: {
    inclusion: {
      within: ['true', 'false']
    }
  },
  licenseStates: function(value) {
    for (let prop in stateMap) {
      let regexp = new RegExp(`(^| |\\|)${stateMap[prop]}( |$|\\|)`, 'gi')
      value = value.replace(regexp, '')
    }
    let regexp = /\|/g
    value = value.replace(regexp, '')
    if (value.trim() === '') {
      return false
    }
    return {
      inclusion: {
        within: ['AL']
      }
    }
  },
  licenseNumber: {
    format: {
      pattern: "[a-z0-9]{6}",
      flags: "i"
    }
  },
  expirationDate: {
    presence: true,
    datetime: {
      // dateOnly: true,
      earliest: moment.utc()
    }
  }
}

export function dataValidate({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === INSERT_DATA_FROM_CSV) {
        const newData = action.payload.map((i, idx) => {
          let error = validate(i, constraints)
          if (error) return {...i, errors: [...i.errors, ...Object.keys(error)]}
          return i
        })
        action.payload = newData
      }

      return next(action)
    } 
  }
}
