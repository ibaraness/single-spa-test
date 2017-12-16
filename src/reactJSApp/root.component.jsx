import React from 'react';
import {exampleEvent} from './../common/exampleEvent.js';
import Button from './Button.jsx';
import {declareChildApplication} from 'single-spa';
function hashPrefix(prefix) {
    return function(location) {
        //console.log(location)
        return location.hash.startsWith(`#${prefix}`);
    }
}
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
    componentDidMount(){
        //Dynamically load another framework application
        declareChildApplication('angular2_gallery', ()=> import("./../angular2App_gallery/angular2App_gallery.js"), hashPrefix('/'));
    }
    render() {
        let shape = <div className="blue-ball">Blue Ball</div>;
        return (
            <div className="reactBox">
            (ReactJS)<br/>
                <h1>Message from other framework: {this.state.message}</h1>
                <div id="angular2Gallery"></div>
                
                <h2>Modals</h2>
                <Button button_text="React open Angular2 modal" action="show-ng2-modal" />
                <Button button_text="React open AngularJS modal" button_color="green" action="show-ng2-modal" />
            </div>
        );
    }
}