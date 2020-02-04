import React from "react";
import { connect } from "react-redux";
import "./index.css";
import { state_to_local } from "../Inputs/store/binding.js";

class RenderInput extends React.Component {
    render()
    {
        return (
        <div className="RenderInput">
            <h1>Another state:
                <span>{ this.props.val }</span>
            </h1>
        </div>
        );
    }
}

export default connect( state_to_local )( RenderInput );

