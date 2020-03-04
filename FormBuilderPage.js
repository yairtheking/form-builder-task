import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           inputType: '',
           name: '',
           label: '',
           data: []
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      };

      handleChange(event) {
        
        this.setState({
            [event.target.name]: event.target.value
            
        });



      }

      handleSubmit(event){
          //alert('You have picked ' + this.state.value);
         
          event.preventDefault();
      }

      render(){
          return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick the type:
                    <select value={this.state.value} name="inputType" onChange={this.handleChange}>
                        <option value="number" type="number">Number</option>
                        <option value="color" type="color">Color</option>
                        <option value="date" type="date">Date</option>
                        <option value="email" type="email">email</option>
                        <option value="tel" type="tel">Tel Number</option>
                        <option value="text" type="text">Text</option>
                    </select>
                </label>
                <input type="submit" value="Add Field"></input>
                <br />
                <label>
                    Enter name: 
                </label>
                <input type="text" name="name"></input>
                <input type="submit" value="Add Field"></input>
                <br />
                <lable>
                    Enter label:
                </lable>
                <input type="text" name="label"></input>
                <input type="submit" value="Add Field"></input>
                <br />
                <button>
                    Save
                </button>
            </form>
          );
      }
    

};

export default Form;

