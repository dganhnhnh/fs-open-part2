import { useState } from "react";

const PersonForm = ({ persons,setPersons}) => {
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [newPersonsList, setNewPersonsList]=useState(persons);
  
    const handleNameChange = (event) => {
      setNewName(event.target.value);
    };
    const handleNumberChange = (event) => {
      setNewNumber(event.target.value);
    };
    
  const handleAddPerson = (event) => {
    event.preventDefault();
    console.log(newPersonsList)
    console.log(persons)

    // check dup
    const isDupName = newPersonsList.some((person) => person.name === newName);
    if (isDupName) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const isDupNumber = newPersonsList.some((person) => person.number === newNumber);
    if (isDupNumber) {
      alert(`${newNumber} is already added to phonebook`);
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber
    };

    setNewPersonsList(newPersonsList.concat(personObject));
    setPersons(newPersonsList.concat(personObject))
    console.log(newPersonsList)
  };
  
return <form>
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
      </form>
    //   ,newPersonsList]
}
export default PersonForm