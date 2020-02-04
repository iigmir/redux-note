import React from "react";
import "./App.css";
import Form from "../Form/index.js";
import Intro from "../Intro/index.js";
import RenderInput from "../RenderInput/index.js";

class App extends React.Component {
    render()
    {
        return (
        <div className="App">
            <Intro />
            <RenderInput />
            <Form />
        </div>
        );
    }
}

export default App;
