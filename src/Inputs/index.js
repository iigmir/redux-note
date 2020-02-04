import React from "react";

class Inputs extends React.Component {
    watch_you( dom )
    {
        console.log( dom );
    }
    render()
    {
        return (
        <div>
            <input className="fuck-you" onChange={ this.watch_you } value="FKC" />
        </div>
        );
    }
}

export default Inputs;
