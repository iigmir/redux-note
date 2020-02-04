import React from "react";
import { connect } from "react-redux";

class Form extends React.Component {
    render()
    {
        return (
        <form method="get" className="form-example">
            <div className="form-example">
                <label for="val">Remaintaing value: </label>
                <input type="text" name="val" id="val" />
            </div>
            <div className="form-example">
                <label for="count">Trigger this: </label>
                <button id="count" type="button">Add to favorites</button>
            </div>
        </form>
        );
    }
}

export default connect( null, null )( Form );
