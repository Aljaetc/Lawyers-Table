import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { insertDataFromCSV } from '../../redux/actions'



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButton({ setData }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleInputOnChange = (e) => {
    dispatch(insertDataFromCSV(e))
  }

  useEffect(() => {
    const input = document.getElementById('contained-button-file')
    input.addEventListener('input', handleInputOnChange)
  })

  return (
    <div className={classes.root}>
      <input
        className={classes.input}
        id="contained-button-file"
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
}
