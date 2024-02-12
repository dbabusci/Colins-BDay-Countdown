import React, {useState, useEffect, useRef} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import '../App.css';

const ImageButton = () => {
    const theDay = "Nov 2 2024";
    const change = new Date(theDay);
    const currentDay = new Date();
    const totalSeconds = (change - currentDay) / 1000;
    const days = Math.floor(totalSeconds / 86400);

    const [imageState, setImageState] = useState();
    
    useEffect(() => {
        if(days > 30){setImageState("../Images/happy.png");}
        else if(days > 7){setImageState();}
        else if(days > 1){setImageState();}
        else{setImageState();}
    })

    console.log(days);
    return(
        <Container className="w-100 h-100">
            <Row className="w-100 h-100">
                <Col>
                    <Button variant="dark" size="lg">
                        How Are We Feeling?
                    </Button>
                </Col>
                <Col>
                    <Image src={imageState} fluid/>
                </Col>
            </Row>
        </Container>
    );
}

export default ImageButton;