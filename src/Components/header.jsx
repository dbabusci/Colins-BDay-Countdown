import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

const CustomHeader = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <p className='headerFontSize fw-bolder text-center'>
                        How Long Until Colin's Birthday?
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default CustomHeader;