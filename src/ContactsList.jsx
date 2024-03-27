const ContactsList = ({contacts, category}) => {

  return (
    <section className="category">
      <h2 className="title">{category}</h2>
      <ul>
        {contacts.map((currentContact) => {
          return <li key={currentContact.id}>{currentContact[category]}</li>
        })}
      </ul>
    </section>
  )
}


export default ContactsList;