import React from "react";

class Inputs extends React.Component {
    constructor(props)
    {
        super( props );
        this.state = { val: "FKC" };
        this.watch_you = this.watch_you.bind(this);
    }

    watch_you( event )
    {
        this.setState({ val: event.target.value });
    }
    render()
    {
        return (
        <div>
            <input className="fuck-you" onChange={ this.watch_you } value={ this.state.val } />
        </div>
        );
    }
}

export default Inputs;
