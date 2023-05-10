import PropTypes from 'prop-types';
import { Delete, Item } from '../contactList/List.styled';

export const ItemContact = ({
  currentContact: { id, name, number },
  deleteContact,
}) => (
  <Item>
    <p>
      {name}: {number}
    </p>
    <Delete onClick={() => deleteContact(id)}>Delete</Delete>
  </Item>
);

ItemContact.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  currentContact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
