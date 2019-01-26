import React, {Component} from 'react';  
// import { Link } from 'react-router-dom';

/* Import Components */
import FileUpload from './FileUpload';
import Input from '../components/Input';  
import Button from '../components/Button';
import axios from 'axios';

class FormContainer extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newPiv: {
        width: '',
        height: '',
        horizontal: '',
        vertical: ''
      },

    }
    this.handleAge = this.handleAge.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */
  
  handleFullName(e) {
   let value = e.target.value;
   this.setState( prevState => ({ newPiv : 
        {...prevState.newPiv, width: value
        }
      }), () => console.log(this.state.newPiv))
  }

  handleAge(e) {
       let value = e.target.value;
   this.setState( prevState => ({ newPiv : 
        {...prevState.newPiv, height: value
        }
      }), () => console.log(this.state.newPiv))
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState( prevState => ({ newPiv : 
      {...prevState.newPiv, [name]: value
    }
      }), () => console.log(this.state.newPiv))
  }


  async handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newPiv;

    const response = await axios.post('/api/openpiv', userData);
    this.props.history.push('/results')
    console.log(response);
    
  }   

  handleClearForm(e) {
  
      e.preventDefault();
      this.setState({ 
        newPiv: {
            width: '',
            height: '',
            horizontal: '',
            vertical: ''
        },
      })
  }

  render() {
    return (
    <div>
        <FileUpload/>
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
            <div className='first_row'>
                <Input inputType={'number'}
                    name= {'width'}
                    title= {'Width'} 
                    value={this.state.newPiv.width} 
                    placeholder = {'Enter width'}
                    handleChange = {this.handleInput} />
            
                <Input inputType={'number'} 
                    name={'Height'}
                    title= {'Height'} 
                    value={this.state.newPiv.height} 
                    placeholder = {'Enter height'}
                    handleChange={this.handleInput} />
            </div>
            <div className='first_row'>
              <Input inputType={'number'}
                    name= {'Horizontal'}
                    title= {'Horizontal'} 
                    value={this.state.newPiv.horizontal} 
                    placeholder = {'Enter horizontal'}
                    handleChange = {this.handleInput} /> 
          
              <Input inputType={'number'} 
                  name={'Vertical'}
                  title= {'Vertical'} 
                  value={this.state.newPiv.vertical} 
                    placeholder = {'Enter vertical'}
                  handleChange={this.handleInput} />
            </div>

              <Button 
                  className = {'start-button'}
                  action = {this.handleFormSubmit}
                  type = {'primary'} 
                  title = {'Start'} 
                  style={buttonStyle}
              /> { /* Start processing */ }
            
              <Button 
                action = {this.handleClearForm}
                type = {'secondary'}
                title = {'Stop'}
                style={buttonStyle}
              /> {/* stop processing */}
          
        </form>
    </div>    
    );
  }
}

const buttonStyle = {
  margin : '10px 10px 10px 10px'
}



export default FormContainer;