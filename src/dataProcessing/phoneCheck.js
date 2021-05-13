// check phone number and convert it to the +1xxxxxxx format
import { INSERT_DATA_FROM_CSV } from "../redux/types"

export function phoneCheck({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === INSERT_DATA_FROM_CSV) {
        const newData = action.payload.map((i, idx) => {
          let regexp = /^(\+1|1)?(\d{10})$/
          if (regexp.test(i.phone)) {
            return {...i, phone: `${i.phone}`.replace(regexp, '+1$2' )}
          }
          return {...i, errors: ['phone', ...i.errors]}
        })
        action.payload = newData
      }

      return next(action)
    } 
  }
}
