import { useState } from 'react'
import './App.css'

const users = [
  { firstName: "robka", id: 1 },
  { firstName: "remigijus", id: 2 },
  { firstName: "boba", id: 3 },
  { firstName: "booba", id: 4 },
  { firstName: "Deividas Bauba", id: 5 },
  { firstName: "Adam", id: 6 },
  { firstName: "Adam", id: 7 },
  { firstName: "amogus", id: 8 },
  { firstName: "tauras", id: 9 },
  { firstName: "padekit", id: 10 }
]

function App() {
  const [searchItem, setSearchItem] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(users)

  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    const filteredItems = users.filter((user) =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  }

  return (
    <>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder='Type to search'
      />
      <ul>
        {filteredUsers.map(user => <li key={user.id}>{user.firstName}</li>)}
      </ul>
    </>
  )
}

export default App