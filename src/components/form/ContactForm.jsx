import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Button, Form, Label } from './Form.styled';

const ContactForm = ({ addNewContact }) => {
  const [form, setForm] = useState({
    name: '',
    number: '',
  });

  const handleInputState = e => {
    const { name, value } = e.target;
    setForm(prevForm => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    addNewContact({ ...form });

    reset();
  };

  const reset = () => {
    setForm({ name: '', number: '' });
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          value={form.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputState}
        />
      </Label>
      <Label>
        Tel
        <input
          type="tel"
          name="number"
          value={form.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputState}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};
