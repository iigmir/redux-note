import React from "react";
import { connect } from "react-redux";
import { state_to_local, action_to_local } from "./store/binding.js";

class Count extends React.Component {
    render()
    {
        return (
        <div className="RenderInput">
            <h2>Current input</h2>
            <p>{ this.props.inputs_val }</p>
        </div>
        );
    }
}

export default connect( state_to_local, action_to_local )( Count );
