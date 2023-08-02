import { useState } from "react";

const Filter = ({ persons }) => {
  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const [personsToShow, setPersonsToShow] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    setPersonsToShow(
      persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      )
    );
    console.log(personsToShow);
  };

  // const personsToShow = persons.filter((person) => person.name === search)

  return (
    <div>
      <form onSubmit={handleSearch}>
        filter shown with:{" "}
        <input value={search} onChange={handleSearchChange} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Filter;
