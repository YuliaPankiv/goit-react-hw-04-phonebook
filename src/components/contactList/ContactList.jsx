const ContactList = ({ visibleContacts, deleteContact }) => {
  return (
    <div>
      <ul>
        {visibleContacts.map(({ name, id, number }) => {
          return (
            <li key={id}>
              {name}: {number}
              <button onClick={() => deleteContact(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
