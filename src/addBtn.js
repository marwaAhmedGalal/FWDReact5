import React, {Component} from 'react';

class AddBtn extends Component{
 state = {
    value: '',
  } 

    handleChange = event => {
    this.setState({ value: event.target.value });
  };
  
   addItem = event => {
    event.preventDefault();
    this.props.passItem(this.state.value);
  };

     inputIsEmpty = () => {
    return this.state.value === '';
  };

render(){
return(
        <form onSubmit={this.addItem}>
       <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>  
  </form>
)
}}

export default AddBtn;