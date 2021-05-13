// insert id and empty array for errors in each rows
import { INSERT_DATA_FROM_CSV } from "../redux/types"

export function insertID({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === INSERT_DATA_FROM_CSV) {
        const newData = action.payload.map((i, idx) => {
          return ({
            id: idx + 1,
            errors: [],
            ...i
          })
        })
        action.payload = newData
      }
      return next(action)
    } 
  }
}
