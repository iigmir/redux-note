import React from "react";
import "./App.css";
import LogoHeader from "../LogoHeader/index.js";
import Inputs from "../Inputs/index.js";
import RenderInput from "../RenderInput/index.js";

class App extends React.Component {
    render()
    {
        return (
        <div className="App">
            <LogoHeader />
            <Inputs />
            <RenderInput />
        </div>
        );
    }
}

export default App;
