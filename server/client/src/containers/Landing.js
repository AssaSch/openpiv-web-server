import React, {Component} from 'react';  

import FileUpload from './FileUpload';
import Start from '../components/Start';


class Landing extends Component {  

    render() {
        return (
            <div>
                <FileUpload/>
                <Start/>
            </div>
        );
    }
};

export default Landing;