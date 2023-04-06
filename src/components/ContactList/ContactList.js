import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getfilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(getfilteredContacts);

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
