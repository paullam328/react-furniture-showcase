import React, { Component } from 'react';
import { Button, Form, FormControl, Row, Accordion, Card } from "react-bootstrap";
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'font-awesome/css/font-awesome.min.css';
import Unity, { UnityContent } from "react-unity-webgl";

class Folder extends Component {

    constructor(props) {
        super(props);
        this.unityContent = new UnityContent(
            //"file:///C:/Users/paull/Desktop/CareerPlans/Simple5D/react-unity-prototype/src/components/MyGame/ShowcaseBuild.json",
            //"file:///C:/Users/paull/Desktop/CareerPlans/Simple5D/react-unity-prototype/src/components/MyGame/UnityLoader.js"
            "./MyGame/Build/ShowcaseBuild.json",
            "./MyGame/Build/UnityLoader.js",
            )
    }

    render() {
        return (
        <Row className="border">
            <div className="col-md-8">
                <Row className="border-bottom">
                    Part 1
                </Row>
                <Row >
                    <Unity unityContent={this.unityContent} style={{width:"100%", height:"100%"}}/>
                </Row>
                <Row className="border-top">
                    Part 3
                </Row>
            </div>
            <div className="col-md-4">
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <b>
                                Project Breakdown
                                </b>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                Test
                            </Card.Body>
                        </Accordion.Collapse>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                <b>
                                Procurement Tracking
                                </b>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                Test
                            </Card.Body>
                        </Accordion.Collapse>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                <b>
                                Material Breakdown
                                </b>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                Test
                            </Card.Body>
                        </Accordion.Collapse>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                <b>
                                Vender List
                                </b>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                Test
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </Row>
        )
    }
}

export default Folder;