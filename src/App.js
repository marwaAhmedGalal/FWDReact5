import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddBtn from './addBtn.js';
import DeleteItem from './DeleteItem';
import AllItems from './AllItems'
class App extends React.Component {
  state = {
    items: [],
  };



  handleAddItem = item => {
    this.setState(prevState => ({
      items: [...prevState.items, item],
    }));
  };
  

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  
  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
     	 <AddBtn passItem={this.handleAddItem}/>
      
		 <DeleteItem deleteLastItem={this.deleteLastItem} noItemsFound={this.noItemsFound()}/>

        <p className="items">Items</p>
       <AllItems items={this.state.items}/>
      </div>
    );
  }
}

export default App;
