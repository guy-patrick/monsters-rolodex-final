import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const updateMonsters = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setMonsters(users);
    };

    updateMonsters().catch(console.error);
  }, []);

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) =>
        monster.name.toLowerCase().includes(searchField)
      )
    );
  }, [monsters, searchField]);

  const handleSeachField = (event) => {
    const searchString = event.target.value.toLowerCase();
    setSearchField(searchString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="search-box"
        placeholder="Search monsters"
        onChangeHandler={handleSeachField}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
