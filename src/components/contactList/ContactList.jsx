import PropTypes from 'prop-types';
import { ItemContact } from 'components/Item/Item';
import { List } from './List.styled';

export const ContactList = ({ visibleContacts, deleteContact }) => {
  return (
    <div>
      <List>
        <ItemContact
          visibleContacts={visibleContacts}
          deleteContact={deleteContact}
        />
      </List>
    </div>
  );
};
ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
