import React from "react";
import logo from "./logo.svg";

class LogoHeader extends React.Component {
    render()
    {
        const code_file = <code>src/App.js</code>;
        return (
        <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo" />
            <p> Edit { code_file } and save to reload. </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
            </a>
        </header>
        );
    }
}

export default LogoHeader;
