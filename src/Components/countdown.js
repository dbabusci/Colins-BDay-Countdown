import React, {useState, useEffect, useRef} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CountdownTimer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [Minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    return(
        <Container>
            <Row>
                <Col className='bg-light border border-dark'>
                    <p className="d-flex justify-content-center">Days</p>
                </Col>
                <Col className='bg-light border border-dark'>
                    <p className="d-flex justify-content-center">Hours</p>
                </Col>
                <Col className='bg-light border border-dark'>
                    <p className="d-flex justify-content-center">Minutes</p>
                </Col>
                <Col className='bg-light border border-dark'>
                    <p className="d-flex justify-content-center">Seconds</p>
                </Col>
            </Row>
        </Container>
    );
}

export default CountdownTimer;