import { useEffect, useState } from 'react'
import './App.css'
import ContactsList from './ContactsList';

function App() {

  const [contacts, setContacts] = useState([]);
  console.log(`contacts:`, contacts);

  useEffect(() => {

    const getContacts = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const json = await response.json();
      setContacts(json);
    }

    getContacts();
  }, []);

  return (
    <>
      <h1>Your contacts</h1>

      <section>
        <ContactsList contacts={contacts} category={`name`}/>
        <ContactsList contacts={contacts} category={`email`}/>
        <ContactsList contacts={contacts} category={`phone`}/>
      </section>

    </>
  )
}

export default App;