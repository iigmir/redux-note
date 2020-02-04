import React from "react";
import { connect } from "react-redux";
import { state_to_local, action_to_local } from "./store/binding.js";

class Inputs extends React.Component {
    watch_you( val )
    {
        this.props.alter_val( val );
    }
    render()
    {
        return (
        <div>
            <input
                className="fuck-you"
                value={ this.props.val }
                onChange={ event => this.watch_you( event.target.value ) }
            />
        </div>
        );
    }
}

export default connect( state_to_local, action_to_local )( Inputs );
