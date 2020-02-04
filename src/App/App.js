import React from "react";
import "./App.css";
import LogoHeader from "../LogoHeader/index.js";

class App extends React.Component {
    render()
    {
        return (
        <div className="App">
            <LogoHeader />
            {/* <Inputs /> */}
        </div>
        );
    }
}

export default App;
