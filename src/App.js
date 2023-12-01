import Conatiner from 'react-bootstrap/Container';
import Countdown from './Components/countdown';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Conatiner className='vw-100 vh-100 flex-fill bg-primary'>
      <Countdown/>
    </Conatiner>
  );
}

export default App;