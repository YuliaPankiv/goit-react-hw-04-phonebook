import { Delete, Item, List } from './List.styled';

const ContactList = ({ visibleContacts, deleteContact }) => {
  return (
    <div>
      <List>
        {visibleContacts.map(({ name, id, number }) => {
          return (
            <Item key={id}>
              <p>
                {name}: {number}
              </p>
              <Delete onClick={() => deleteContact(id)}>Delete</Delete>
            </Item>
          );
        })}
      </List>
    </div>
  );
};

export default ContactList;
