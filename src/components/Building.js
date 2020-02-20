import React, { Component } from 'react';
import { Button, Form, FormControl } from "react-bootstrap";
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'font-awesome/css/font-awesome.min.css';
import Unity, { UnityContent } from "react-unity-webgl";

class Building extends Component {
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
            <Unity unityContent={this.unityContent} style={{width:"100%", height:"100%"}}/>
        );
    }
}

export default Building;