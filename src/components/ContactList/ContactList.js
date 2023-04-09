import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectfilteredContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectfilteredContacts);

  return (
    <List>
      {filteredContacts.map(contact => (
        <ContactListItem
          contact={contact}
          key={contact.id}
        ></ContactListItem>
      ))}
    </List>
  );
} 
