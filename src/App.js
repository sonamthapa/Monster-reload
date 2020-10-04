import React, { Component } from 'react';
import Cardlist from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box';

import './App.css'; 
class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  }
  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  render() {
    //destructuring -->pull property and set them const
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    return ( 
      <div className='app'>
        <h1>Monster Reload </h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={e => this.setState({searchField: e.target.value})} />
     {/* setState is asynchronous so if we want to see|do something with our state do right after we manipulate state. in  anynomus function ,() =>console.log(this.state)*/}
        <Cardlist monsters={filteredMonsters} />
      </div>
    )
  }

}

export default App;
