import React from "react";

class Inputs extends React.Component {
    constructor(props) {
        super( props );
        this.state = { fkc: "FKC" };
        this.watch_you = this.watch_you.bind(this);
    }

    watch_you( event )
    {
        console.log( event.target.value );
        this.setState({ fkc: event.target.value });
    }
    render()
    {
        return (
        <div>
            <input className="fuck-you" onChange={ this.watch_you } value={ this.state.fkc } />
        </div>
        );
    }
}

export default Inputs;
