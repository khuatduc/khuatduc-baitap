import React from 'react';
import { InputGroup, Input, Container, Row, Col, Card, CardBody, CardText, CardTitle } from 'reactstrap';

class plan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          bgColor: ""
        }
    }


    boxClick = (e) => {
        this.setState({
          bgColor: "red",
           bgColor1: "rgba(0,0,0,.125)",
          bgColor2: "rgba(0,0,0,.125)"

        })
    }

    boxClick1 = (e) => {
        this.setState({
          bgColor1: "yellow",
          bgColor:"rgba(0,0,0,.125)",
          bgColor2: "rgba(0,0,0,.125)"
        })
        
    }

     boxClick2= (e) => {
        this.setState({
          bgColor2: "blue",
          bgColor1: "rgba(0,0,0,.125)",
          bgColor:"rgba(0,0,0,.125)"
        })
    }

    render() {
        return (
            <>
                <Container>
                    <h3>How many meeting licenses do you want to purchase?</h3>
                    <InputGroup style={{width: "300px"}}>
                        <Input placeholder="1" min={1} max={100} type="number" step="1"/>
                    </InputGroup>
                    <br/>
                    <h3>How many meeting licenses do you want to purchase?</h3>
                    <Row>
                        <Col sm={3}>
                            <Card style={{ borderColor:this.state.bgColor}} onClick={this.boxClick}>
                                <CardBody>
                                    <CardTitle><h2>Pro</h2></CardTitle>
                                    <CardText>9</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card style={{ borderColor:this.state.bgColor1}} onClick={this.boxClick1}>
                                <CardBody>
                                    <CardTitle><h2>Bussiness</h2></CardTitle>
                                    <CardText>19</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card style={{ borderColor:this.state.bgColor2}} onClick={this.boxClick2}>
                                <CardBody>
                                    <CardTitle><h2>Education</h2></CardTitle>
                                    <CardText>99</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <br/>
                </Container>
            </>
        );
    }
}
export default plan;