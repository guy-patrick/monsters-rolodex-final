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
      .then((monsters) => this.updateMonsters(monsters));
  }

  updateMonsters = (monsters) => this.setState(() => ({ monsters }));

  handleSearchField = (event) => {
    const { value } = event.target;
    this.setState(() => ({ searchField: value.toLowerCase() }));
  };

  render() {
    const { monsters, searchField } = this.state;
    const { handleSearchField } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className="search-box"
          placeholder="Search monsters"
          onSearchHandler={handleSearchField}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
