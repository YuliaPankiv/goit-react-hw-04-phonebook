import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../form/ContactForm';
import Filter from '../filter/Filter';
import { Container } from './App.styled';
import { ContactList } from 'components/contactList/ContactList';
import startContacts from '../../startContacts';
const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? startContacts
  );
  const [filter, setFilter] = useState('');
  const addNewContact = ({ name, number }) => {
    contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts list`)
      : createContact({ name, number });
  };

  const createContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prev => [...prev, newContact]);
  };
  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  const deleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contactId !== contact.id));
  };

  const handleChangeFilter = e => setFilter(e.currentTarget.value);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />
      <h2>Contacts</h2>
      <Filter filterValue={filter} onChange={handleChangeFilter} />
      <ContactList
        visibleContacts={visibleContacts}
        deleteContact={deleteContact}
      />
    </Container>
  );
};
export default App;

// class AppClass extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };
//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     parsedContacts && this.setState({ contacts: parsedContacts });
//   }

//   componentDidUpdate(_, prevState) {
//     this.state.contacts !== prevState.contacts &&
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
//   deleteContact = contactId => {
//     this.setState(prev => ({
//       contacts: prev.contacts.filter(contact => contactId !== contact.id),
//     }));
//   };

//   addNewContact = ({ name, number }) => {
//     this.state.contacts.find(contact => contact.name === name)
//       ? alert(`${name} is already in contacts list`)
//       : this.createContact({ name, number });
//   };

//   createContact = ({ name, number }) => {
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     this.setState(prev => ({
//       contacts: [...prev.contacts, newContact],
//     }));
//   };
//   handleChangeFilter = e => this.setState({ filter: e.currentTarget.value });

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <Container>
//         <h1>Phonebook</h1>
//         <ContactForm addNewContact={this.addNewContact} />
//         <h2>Contacts</h2>
//         <Filter filterValue={filter} onChange={this.handleChangeFilter} />
//         <ContactList
//           visibleContacts={visibleContacts}
//           deleteContact={this.deleteContact}
//         />
//       </Container>
//     );
//   }
// }
