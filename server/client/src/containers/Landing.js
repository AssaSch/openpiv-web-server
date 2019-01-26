import React, {Component} from 'react';  

import FileUpload from './FileUpload';
import FormContainer from './FormContainer';

class Landing extends Component {  
    constructor(props) {
      super(props);
      }

    render() {
        return (
            <div>
                <FileUpload/>
                <FormContainer/>
            </div>
        );
    }
};

export default Landing;