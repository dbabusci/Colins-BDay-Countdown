import Conatiner from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from'react-bootstrap/Col';
import Countdown from './Components/countdown';
import Header from './Components/header';
import ImageButton from './Components/imageButton';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Conatiner className='vw-100 vh-100 flex-fill bg-success bg-gradient' fluid>
      <Row className=' h-25 w-100 pt-5'>
        <Col>
          <Header/>
        </Col>
      </Row>
      <Row className='w-100 h-50'>
        <Col className='w-100 h-100'>
          <Countdown/>
        </Col>
      </Row>
    </Conatiner>
  );
}

export default App;