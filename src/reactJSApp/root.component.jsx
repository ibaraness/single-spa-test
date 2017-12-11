import React from 'react';
import {exampleEvent} from './../common/exampleEvent.js';
import Button from './Button.jsx';

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
            <div className="reactBox">
            (ReactJS)
            {shape}
                <h1>Message from other framework: {this.state.message}</h1>
                This was rendered by app 1, which is written in React.
                <h2>Modals</h2>
                <Button button_text="React open Angular2 modal" action="show-ng2-modal" />
                <Button button_text="React open AngularJS modal" button_color="green" action="show-ng2-modal" />
            </div>
        );
    }
}