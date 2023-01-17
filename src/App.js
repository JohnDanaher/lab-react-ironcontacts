import contactsData from './contacts.json';
import {useState} from 'react';
import "./App.css";

function App() {
  const firstFiveContacts = contactsData.slice(0, 5);
  const [contacts, setContacts] = useState(firstFiveContacts)
  const handleSubmit = () => {
    const updateContacts = [...contacts, contactsData[5 + Math.floor(52 * Math.random())]];
    setContacts(updateContacts);
    console.log(updateContacts)
  }
  const nameSubmit = () => {
    const newNameOrder = [...contacts.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))]
    setContacts(newNameOrder)
  }
  const popSubmit = () => {
    const newPopOrder = [...contacts.sort((a,b) => b.popularity - a.popularity)]
    setContacts(newPopOrder)
  }
  const deleteContact = (id) => {
    const filteredContacts = contacts.filter(contact => contact.id !== id);
    console.log(id)
    setContacts(filteredContacts)
  }
  return (
  <div className="App">
  <h1>IronContacts</h1>
  <button onClick={handleSubmit}>Add Random Contact</button>
  <button onClick={popSubmit}>Sort by popularity</button>
  <button onClick={nameSubmit}>Sort by name</button>
  <table>
  <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
    <th>Won Oscar</th>
    <th>Won Emmy</th>
    <th>Actions</th>
  </tr>
  {contacts.map(actor => {
    return (    
  <tr key={actor.id}>
    <td><img src={actor.pictureUrl} alt="actor"/></td>
    <td>{actor.name}</td>
    <td>{actor.popularity}</td>
    {actor.wonOscar && <td>🏆</td>}
    {actor.wonEmmy && <td>🏆</td>}
    <td><button onClick={() => deleteContact(actor.id)}>Delete</button></td>
  </tr>
    )
  })}
  </table>
  </div>
  )
}

export default App;