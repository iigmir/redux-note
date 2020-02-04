import React from "react";
import "./App.css";
import Form from "../Form/index.js";
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
            <Form />
        </div>
        );
    }
}

export default App;
