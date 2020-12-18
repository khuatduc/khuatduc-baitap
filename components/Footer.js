import { Row, Col, Container} from 'reactstrap'
import React from "react";
    const Footer =() => {
        return (
            <div style={{backgroundColor:"#666"}}>
                <Container >
                    <br/>
                <Row>
                    <Col md={3}>About
                        <p>a</p>
                        <p>a</p>
                        <p>a</p>
                    </Col>
                    <Col md={3}>Download
                        <p>a</p>
                        <p>a</p>
                        <p>a</p>
                    </Col>
                    <Col md={3}>Sale
                        <p>a</p>
                        <p>a</p>
                        <p>a</p>
                    </Col>
                    <Col md={3}>Support
                        <p>a</p>
                        <p>a</p>
                        <p>a</p>
                    </Col>
                    <style jsx>
                        {`
                        p{color:white;},
                       
                        `}
                    </style>
                </Row>
                </Container>
            </div>

        );
    }
    export default Footer;