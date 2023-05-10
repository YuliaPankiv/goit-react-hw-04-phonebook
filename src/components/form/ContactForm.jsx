import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Button, Form, Label } from './Form.styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputState = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    const availableContacts = this.props.availableContacts;

    if (availableContacts.find(contact => contact.name === this.state.name)) {
      this.onNameExists();
    } else {
      this.props.addNewContact(this.state);
      this.reset();
    }
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  onNameExists = () => {
    alert(`${this.state.name} is already in contacts list`);
    this.setState({ name: this.state.name, number: this.state.number });
  };
  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleOnSubmit}>
        <Label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInputState}
            id={this.nameInputId}
          />
        </Label>
        <Label>
          Tel
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleInputState}
            id={this.numberInputId}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};
