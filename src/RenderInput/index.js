import React from "react";
import { connect } from "react-redux";
import "./index.css";
import { state_to_local, action_to_local } from "./store.js";

class RenderInput extends React.Component {
    render()
    {
        return (
        <div className="RenderInput">
            <h1>輸出 state:</h1>
            <ul>
                <li>val: { this.props.val }</li>
                <li>count: { this.props.count }</li>
            </ul>
        </div>
        );
    }
}

export default connect( state_to_local, action_to_local )( RenderInput );

