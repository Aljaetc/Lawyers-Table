import { useSelector } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import UploadButton from './components/UploadButton'
import LawyersTable from './components/LawyersTable'
import './dataProcessing/dataValidate'

function App() {
const data = useSelector(state => state.data)

  return (
    <div className="App">
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to the best lawers app
      </Typography>
      {data && <LawyersTable data={data}/>}
      <Typography variant="h5" gutterBottom>
        Please, choose the CSV file you want to parse
      </Typography>
      <UploadButton />
    </div>
  );
}

export default App;
