import { useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  // let persons=[
  //   { name: "Arto Hellas", number: "040-123456", id: 1 },
  //   { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
  //   { name: "Dan Abramov", number: "12-43-234345", id: 3 },
  //   { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  // ]
  // const [newName, setNewName] = useState("");
  // const [newNumber, setNewNumber] = useState("");

  // const handleNameChange = (event) => {
  //   setNewName(event.target.value);
  // };
  // const handleNumberChange = (event) => {
  //   setNewNumber(event.target.value);
  // };


  // const handleAddPerson = (event) => {
  //   event.preventDefault();

  //   // check dup
  //   const isDupName = persons.some((person) => person.name === newName);
  //   if (isDupName) {
  //     alert(`${newName} is already added to phonebook`);
  //     return;
  //   }
  //   const isDupNumber = persons.some((person) => person.number === newNumber);
  //   if (isDupNumber) {
  //     alert(`${newNumber} is already added to phonebook`);
  //     return;
  //   }

  //   const personObject = {
  //     name: newName,
  //     number: newNumber
  //   };

  //   setPersons(persons.concat(personObject));
  // };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons}/>
      <PersonForm persons={persons} setPersons={setPersons}/>
      {/* <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={handleAddPerson}>
            add
          </button>
        </div>
      </form> */}
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  );
};

export default App;
