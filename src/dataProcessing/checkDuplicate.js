import { INSERT_DATA_FROM_CSV } from "../redux/types"

export function checkDuplicate({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === INSERT_DATA_FROM_CSV) {
        
        findDuplicateItem(action.payload, 'phone')
        findDuplicateItem(action.payload, 'email')

      }
      return next(action)
    } 
  }
}

function findDuplicateItem(data, attr) {
  data.forEach((item, index, array) => {
    let duplicate = array.findIndex((i, idx) => {
      return item[attr] === i[attr] && index !== idx
    })
    if (duplicate !== -1) {
      data[index].duplicate ?
        data[index].duplicate = data[index].duplicate + ', ' + (duplicate + 1) :
        data[index].duplicate = '' + (duplicate + 1)
    }
  })
}
