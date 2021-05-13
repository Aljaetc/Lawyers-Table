import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import LawyersTableRow from './LawyersTableRow'



const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginBottom: '2em',
    '& th': {
      background: '#9999FF',
      borderLeft: '1px solid #CCCCCC',
    },
    '& td': {
      borderLeft: '1px solid #CCCCCC',
    },
    '& tr:nth-of-type(odd)': {
      background: '#ECECEC'
    }
  }
})

export default function LawyersTable({ data }) {
  const classes = useStyles();

  return (
      <Table className={classes.table} size="small" aria-label="simple table" component={Paper}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Full Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Experience</TableCell>
            <TableCell align="right">Yearly Income</TableCell>
            <TableCell align="right">Has children</TableCell>
            <TableCell align="right">License states</TableCell>
            <TableCell align="right">Expiration date</TableCell>
            <TableCell align="right">License number</TableCell>
            <TableCell align="right">Duplicate with</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => <LawyersTableRow row={row}  key={row.id} />)}
        </TableBody>
      </Table>
  );
}
