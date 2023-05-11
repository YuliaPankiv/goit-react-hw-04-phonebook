import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../form/ContactForm';
import Filter from '../filter/Filter';
import { Container } from './App.styled';
import { ContactList } from 'components/contactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contactId !== contact.id),
    }));
  };

  addNewContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };

  handleChangeFilter = e => this.setState({ filter: e.currentTarget.value });

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    parsedContacts && this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(_, prevState) {
    this.state.contacts !== prevState.contacts &&
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          addNewContact={this.addNewContact}
          availableContacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Filter filterValue={filter} onChange={this.handleChangeFilter} />
        <ContactList
          visibleContacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
