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
    render()
    {
        return (
        <form method="get" className="RenderInput">
            <div>
                <label for="val">Remaintaing value: </label>
                <input type="text" name="val" id="val" value={ this.props.val } onChange={ event => this.emit_val( event.target.value ) } />
            </div>
            <div>
                <label for="count">Trigger this: </label>
                <button id="count" type="button">Add to favorites</button>
            </div>
        </form>
        );
    }
}

export default connect( state_to_local, action_to_local )( Form );
