import Conatiner from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from'react-bootstrap/Col';
import Countdown from './Components/countdown';
import Header from './Components/header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Conatiner className='vw-100 vh-100 flex-fill bg-primary' fluid>
      <Row className='p-5'>
        <Col>
          <Header/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Countdown/>
        </Col>
      </Row>
    </Conatiner>
  );
}

export default App;