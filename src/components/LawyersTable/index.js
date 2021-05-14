import { makeStyles } from '@material-ui/core/styles'
import  TableContainer  from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import LawyersTableRow from './LawyersTableRow'

const useStyles = makeStyles({
  tableWrapper: {
    marginBottom: '2em',
  },
  table: {
    minWidth: 650,
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

  const cells = ['ID', 'Full Name', 'Phone', 'Email', 'Age', 'Experience', 'Yearly Income', 'Has children', 'License states', 'Expiration date', 'License number', 'Duplicate with']

  return (
    <TableContainer component={Paper} className={classes.tableWrapper}>
      <Table className={classes.table} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            {cells.map(i => <TableCell key={i} align="right">{i}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => <LawyersTableRow row={row}  key={row.id} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
