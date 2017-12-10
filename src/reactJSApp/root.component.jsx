import React from 'react';
import {exampleEvent} from './../common/exampleEvent.js';

export default class Root extends React.Component {

    constructor(){
        super();
        this.state = {
            message:''
        }
    }
    componentWillMount(){
        this.subscription = exampleEvent.subscribe(newMessage => this.setState({message: newMessage}));
    }
    render() {
        let shape = <div className="blue-ball">Blue Ball</div>;
        if(this.state.message === 'red-sqaure'){
            shape = <div className="red-sqaure">Red Square</div>;
        }
        return (
            <div className="reactBox" style={{marginTop: '100px'}}>
                <h2>ReactJS Box</h2>
            {shape}
                <h1>Message from other framework: {this.state.message}</h1>
        This was rendered by app 1, which is written in React.
        </div>
        );
    }
}