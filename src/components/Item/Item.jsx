import PropTypes from 'prop-types';
import { Delete, Item } from '../contactList/List.styled';

export const ItemContact = ({ visibleContacts, deleteContact }) => {
  return visibleContacts.map(({ name, id, number }) => (
    <Item key={id}>
      <p>
        {name}: {number}
      </p>
      <Delete onClick={() => deleteContact(id)}>Delete</Delete>
    </Item>
  ));
};

ItemContact.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
