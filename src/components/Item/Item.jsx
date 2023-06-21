import PropTypes from 'prop-types';
import { Delete } from '../ContactList/ContactList.styled';

export const ItemContact = ({
  currentContact: { id, name, number },
  deleteContact,
}) => (
  <>
    <p>
      {name}: {number}
    </p>
    <Delete onClick={() => deleteContact(id)}>Delete</Delete>
  </>
);

ItemContact.propTypes = {
  currentContact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
