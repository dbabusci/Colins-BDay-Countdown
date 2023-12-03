import React, {useState, useEffect, useRef} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

const CountdownTimer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [Minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    return(
        <Container className="w-100 h-100">
            <Row className="w -100 h-100">
                <Col className='d-flex justufy-content-center countCarry p-5'>
                    <div className="w-100 h-100 border border-dark rounded bg-light">
                        <div className="d-flex justify-content-center h-25 w-100">
                            <p className='fs-1'>Days:</p>
                        </div>
                        <div className="d-flex justify-content-center h-75 w-100">
                            <p className='labelFontSize fw-bolder'>365</p>
                        </div>
                    </div>
                </Col>
                <Col className='d-flex justufy-content-center countCarry p-5'>
                    <div className="w-100 h-100 border border-dark rounded bg-light">

                    </div>
                </Col>
                <Col className='d-flex justufy-content-center countCarry p-5'>
                    <div className="w-100 h-100 border border-dark rounded bg-light">

                    </div>
                </Col>
                <Col className='d-flex justufy-content-center countCarry p-5'>
                    <div className="w-100 h-100 border border-dark rounded bg-light">

                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default CountdownTimer;