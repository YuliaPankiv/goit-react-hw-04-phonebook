// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

// export default class Form extends Component {
//   state = {
//     name: '',
//   };
//   nameInputId = nanoid();
//   handleInputState = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };
//   handleOnSubmit = e => {
//     console.log(e);
//     e.preventDefault();
//     this.props.OnSubmit(this.state);
//     this.reset();
//   };
//   reset = () => {
//     this.setState({ name: '' });
//   };
//   render() {
//     return (
//       <form onSubmit={this.handleOnSubmit}>
//         <label>
//           Name
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleInputState}
//             id={this.nameInputId}
//           />
//         </label>
//         <button type="submit">Add contact</button>
//       </form>
//     );

import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  
  handleInputState = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  nameInputId = nanoid();
  numberInputId = nanoid();


  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addNewContact({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label>
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
        </label>
        <label>
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
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
