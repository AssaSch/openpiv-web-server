import React, {Component} from 'react';  
import axios from 'axios';


class fileUpload extends Component {  
  
  state = {
    selectedFiles: null
  }


  fileSelectedHandler = (event) => {
    // console.log(event.target.files);
    event.preventDefault();
    this.setState({
      selectedFiles: event.target.files
    });  
  }

  fileUploadHandler = async () => {
    console.log(this.state.selectedFiles);
    const fd = new FormData();
    fd.append('image_1', this.state.selectedFiles[0], this.state.selectedFiles[0].name);
    fd.append('image_2', this.state.selectedFiles[1], this.state.selectedFiles[1].name);
    const response = await axios.post('/api/upload', fd);
    console.log(response);
  }

  render() {
    return (
      <div className="fileUpload" >
        <input type="file" onChange={this.fileSelectedHandler} required multiple/>
        <button onClick={this.fileUploadHandler}> Upload </button>
      </div>
    );
  }
}

export default fileUpload;
