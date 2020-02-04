import React from "react";
import { connect } from "react-redux";
import { state_to_local, action_to_local } from "./store.js";

class Form extends React.Component {
    emit_val( val )
    {
        this.props.alter_val( val );
    }
    emit_count()
    {
        this.props.alter_count( this.props.count + 1 );
    }
    reset_count()
    {
        this.props.alter_count( 0 );
    }
    render()
    {
        return (
        <form method="get" className="RenderInput">
            <div>
                <label htmlFor="val">Remaintaing value: </label>
                <input type="text" name="val" id="val" value={ this.props.val } onChange={ event => this.emit_val( event.target.value ) } />
            </div>
            <div>
                <label htmlFor="count">Trigger this: </label>
                <button id="count" type="button" onClick={ event => this.emit_count() }>Add to favorites</button>
            </div>
        </form>
        );
    }
}

export default connect( state_to_local, action_to_local )( Form );
