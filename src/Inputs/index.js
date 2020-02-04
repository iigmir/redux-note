import React from "react";
import { connect } from "react-redux";
import { alter_val } from "./store/action.js";

class Inputs extends React.Component {
    constructor( props )
    {
        super( props );
        this.state = { val: "FKC" };
    }

    watch_you( val )
    {
        // dispatches action
        this.props.alter_val( val );
        this.setState({ val });
    }
    render()
    {
        return (
        <div>
            <input className="fuck-you" onChange={ event => this.watch_you( event.target.value ) } value={ this.state.val } />
        </div>
        );
    }
}

//
export default connect( null, { alter_val } )( Inputs );
