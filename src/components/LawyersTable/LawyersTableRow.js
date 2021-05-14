import { makeStyles } from '@material-ui/core/styles'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'



const useStyles = makeStyles({
  error: {
    background: 'rgba(255, 150, 150, .7)!important'
  }
})

export default function LawyersTableRow({ row }) {
  const classes = useStyles()

  const cells = ['id', 'fullName', 'phone', 'email', 'age', 'experience', 'yearlyIncome', 'hasChildren', 'licenseStates', 'expirationDate', 'licenseNumber', 'duplicate']

  return (
    <TableRow>
      {cells.map(i => <TableCell align="right" key={i} className={row.errors.includes(i) && i !== 'id' && i!=='fullName' && i!== 'duplicate' ? classes.error : ''}>{row[i]}</TableCell>)}
    </TableRow>
  )
}
