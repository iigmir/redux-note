import React from "react";
import { connect } from "react-redux";
import "./index.css";

const link_state_to_local = state => ({
    val: state.inputs.val
});

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

export default connect( link_state_to_local )( RenderInput );

