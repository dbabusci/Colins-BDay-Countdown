import React, {useState, useEffect, useRef} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

const CountdownTimer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const theDay = "Nov 2 2024";
    //const [currentDay, setCurrentDay] = useState(theDay);

    useEffect(() =>{
        const change = new Date(theDay);
        const interval = setInterval(() =>{
            const currentDay = new Date();
            const totalSeconds = (change - currentDay) / 1000;
            const hoursRemain = totalSeconds % 86400;
            setDays(Math.floor(totalSeconds / 86400));
            const minutesRemain = hoursRemain % 3600;
            setHours(Math.floor(hoursRemain / 3600));
            const secondsRemain = minutesRemain % 60;
            setMinutes(Math.floor(minutesRemain / 60));
            setSeconds(Math.floor(secondsRemain));
        },1000)
    })


    return(
        <Container className="w-100 h-100">
            <Row className="w -100 h-100">
                <Col className='d-flex justufy-content-center countCarry p-5'>
                    <div className="w-100 h-75 border border-dark shadow-lg rounded bg-light">
                        <div className="d-flex justify-content-center h-25 w-100">
                            <p className='fs-1'>Days:</p>
                        </div>
                        <div className="d-flex justify-content-center h-75 w-100">
                            <p className='labelFontSize fw-bolder'>{days}</p>
                        </div>
                    </div>
                </Col>
                <Col className='d-flex justufy-content-center countCarry p-5'>
                    <div className="w-100 h-75 border border-dark shadow-lg rounded bg-light">
                        <div className="d-flex justify-content-center h-25 w-100">
                            <p className='fs-1'>Hours:</p>
                        </div>
                        <div className="d-flex justify-content-center h-75 w-100">
                            <p className='labelFontSize fw-bolder'>{hours}</p>
                        </div>
                    </div>
                </Col>
                <Col className='d-flex justufy-content-center countCarry p-5'>
                    <div className="w-100 h-75 border border-dark shadow-lg rounded bg-light">
                        <div className="d-flex justify-content-center h-25 w-100">
                            <p className='fs-1'>Minutes:</p>
                        </div>
                        <div className="d-flex justify-content-center h-75 w-100">
                            <p className='labelFontSize fw-bolder'>{minutes}</p>
                        </div>
                    </div>
                </Col>
                <Col className='d-flex justufy-content-center countCarry p-5'>
                    <div className="w-100 h-75 border border-dark shadow-lg rounded bg-light">
                        <div className="d-flex justify-content-center h-25 w-100">
                            <p className='fs-1'>Seconds:</p>
                        </div>
                        <div className="d-flex justify-content-center h-75 w-100">
                            <p className='labelFontSize fw-bolder'>{seconds}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default CountdownTimer;