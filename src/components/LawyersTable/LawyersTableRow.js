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

  return (
    <TableRow>
      <TableCell>{row.id}</TableCell>
      <TableCell align="right">{row.fullName}</TableCell>
      <TableCell align="right" className={row.errors.includes('phone') ? classes.error : ''}>{row.phone}</TableCell>
      <TableCell align="right" className={row.errors.includes('email') ? classes.error : ''}>{row.email}</TableCell>
      <TableCell align="right" className={row.errors.includes('age') ? classes.error : ''}>{row.age}</TableCell>
      <TableCell align="right" className={row.errors.includes('experience') ? classes.error : ''}>{row.experience}</TableCell>
      <TableCell align="right" className={row.errors.includes('yearlyIncome') ? classes.error : ''}>{row.yearlyIncome}</TableCell>
      <TableCell align="right" className={row.errors.includes('hasChildren') ? classes.error : ''}>{row.hasChildren}</TableCell>
      <TableCell align="right" className={row.errors.includes('licenseStates') ? classes.error : ''}>{row.licenseStates}</TableCell>
      <TableCell align="right" className={row.errors.includes('expirationDate') ? classes.error : ''}>{row.expirationDate}</TableCell>
      <TableCell align="right" className={row.errors.includes('licenseNumber') ? classes.error : ''}>{row.licenseNumber}</TableCell>
      <TableCell align="right">{row.duplicate}</TableCell>
    </TableRow>
  )
}
