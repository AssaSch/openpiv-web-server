import React, { Component } from 'react';
import axios from 'axios';

class Start extends Component {
    constructor(props) {
        super(props);
    
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick() {
        const response = await axios.post('/api/openpiv', "test data");
        console.log(response);
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleClick}> 
                    Start
                </button>
            </React.Fragment>
        )
    }
}

export default Start;