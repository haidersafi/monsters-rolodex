import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchField } from './components/search-field/search-field.component';

class App extends Component {
  constructor()
  {
    super();
    this.state={
      monster:[],searchField:''
    }
  }

  onSearchChange=(event)=>{
this.setState({searchField:event.target.value},()=>console.log(this.state.searchField))
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(resp=>resp.json()).then(user=>this.setState({monster:user}))
  }
  render(){
    const { monster,searchField }=this.state;
const filterMonsters=monster.filter(monst=>monst.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className="App">
    <h1>Monsters Rolodex</h1>
    <SearchField onSearchChange={this.onSearchChange} placeholder="Search Monsters" />
    <CardList monster={filterMonsters}/>
  
    </div>
  );
}
}

export default App;
