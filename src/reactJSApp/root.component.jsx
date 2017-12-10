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
        return (
            <div style={{marginTop: '100px'}}>
                <h1>Message from other framework: {this.state.message}</h1>
        This was rendered by app 1, which is written in React.
        </div>
        );
    }
}