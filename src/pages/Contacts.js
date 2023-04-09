import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';

const Contacts = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2> Your contacts</h2>
      <Filter></Filter>
      {isLoading && <h3 style={{ fontWeight: '400'}}>Processing...</h3>}
      {error && <p style={{ paddingLeft: '120px' }}>{error}</p>}
      {items && items.length > 0 && <ContactList />}
    </>
  );
};

export default Contacts;
