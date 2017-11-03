import React, { Component } from 'react';

import { nouns } from 'nouns';

class Form extends Component {
    constructor(props) {
        super(props);
        this.handlechange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.processText = this.processText.bind(this);
        this.state = {
            text: '',
            length: 0,
            processed: ''
        };
    }
    handleChange(event) {
        this.setState({
            text: event.target.value,
            length: event.target.value.length
        });
    }
    handleSubmit(event) {
        event.preventDefault();

        let processed = this.processText(this.state.text);

        this.setState({
            processed
        })

    }
    processText(text) {
        return text
            .split(' ')
            .map( (word) => {
                if ( nouns.includes(word) || word === 'books' ) {
                    return 'b' + ( ['o', 'i', 'q'][Math.floor(Math.random() * 3)] ).repeat((Math.floor(Math.random() * 6) + 1)) + 'ks';
                } else {
                    return word;
                }
            } )
            .join(' ');
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea name="text" id="" cols="30" rows="10" value={this.state.text} onChange={(e) => { this.handleChange(e) }}></textarea>
                    <p>{this.state.length}</p>
                    <input type="submit" value="SUBMIT" />
                </form>
                <p>{this.state.processed}</p>
            </div>
        );
    }
}

export default Form;
