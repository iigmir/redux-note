import React from "react";
import { connect } from "react-redux";
import { state_to_local, action_to_local } from "./store/binding.js";

class Inputs extends React.Component {
    render()
    {
        return (
        <div>
            <h2>Current input</h2>
            {/* <p>{  }</p> */}
        </div>
        );
    }
}

export default connect( state_to_local, action_to_local )( Inputs );
