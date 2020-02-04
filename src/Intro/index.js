import React from "react";
import IntroArticle from "./Article.js";
import logo from "./logo.svg";
import "./index.css";

class Intro extends React.Component {
    render()
    {
        return ( <div className="Intro">
            <div className="left item">
                <IntroArticle />
            </div>
            <div className="right item">
                <img src={ logo } className="App-logo" alt="logo" />
            </div>
        </div> );
    }
}

export default Intro;
