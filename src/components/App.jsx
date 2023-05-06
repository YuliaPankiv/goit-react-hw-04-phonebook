import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';
import ContactForm from './form/ContactForm';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  deleteContact = contactId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contactId !== contact.id),
    }));
  };

  addNewContact = newContact => {
    const newUser = {
      id: nanoid(),
      ...newContact,
    };

    this.setState(prev => ({
      contacts: [...prev.contacts, newUser],
    }));
    this.reset();
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handleInputState = evt =>
    this.setState({ [evt.currentTarget.name]: evt.target.value });

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <ContactForm addNewContact={this.addNewContact} />
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          visibleContacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
