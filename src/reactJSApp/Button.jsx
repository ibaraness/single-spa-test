import React from 'react';
import {exampleEvent} from './../common/exampleEvent.js';

export default class Button extends React.Component {

    constructor(){
        super();
        this.state = {
            message:''
        }
    }
    componentWillMount(){

    }
    showMessage(){
        //alert("Message!");
        //show-ng2-modal
        if(this.props.action){
            //alert(this.props.action);
            exampleEvent.next(this.props.action);
        }
    }
    render() {
        const customColor = this.props.button_color || "";
        return (
            <button className={"reactButton" + " " + customColor}  onClick={this.showMessage.bind(this)}>
                <h2>{this.props.button_text}</h2>
            </button>
        );
    }
}