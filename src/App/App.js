import React from "react";
import "./App.css";
import Count from "../Count/index.js";
import Intro from "../Intro/index.js";
import Inputs from "../Inputs/index.js";
import RenderInput from "../RenderInput/index.js";

class App extends React.Component {
    render()
    {
        return (
        <div className="App">
            <Intro />
            <Inputs />
            <RenderInput />
            <Count />
        </div>
        );
    }
}

export default App;
