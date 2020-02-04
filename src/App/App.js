import React from "react";
import "./App.css";
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
        </div>
        );
    }
}

export default App;
