import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.updateState("monsters", users));
  }

  handleSeachText = (event) => {
    const { value } = event.target;
    this.updateState("searchField", value.toLowerCase());
  };

  /* His job is to update the state no matter the 
  object property concerned */
  updateState = (state, data) => {
    this.setState(() => ({ [state]: data }));
  };

  filterMonsters = (monsters, searchField) =>
    monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

  render() {
    const { monsters, searchField } = this.state;
    const { handleSeachText, filterMonsters } = this;

    const filteredMonsters = filterMonsters(monsters, searchField);

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className="search-box"
          placeholder="Search monsters"
          onChangeHandler={handleSeachText}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
