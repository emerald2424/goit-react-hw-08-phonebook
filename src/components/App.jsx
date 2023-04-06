import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { getContacts, getIsLoading, getError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';


export const App = () => {
  const dispatch = useDispatch();
  
  // const { items, isLoading, error } = useSelector(getContacts);
  const items = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>

      <h2>Contacts</h2>
      <Filter ></Filter>
      {isLoading && <p style={{paddingLeft:"120px"}}>Loading contacts...</p>}
      {error && <p style={{paddingLeft:"120px"}}>{error}</p>}
      {items && items.length > 0 && <ContactList/>}
      
      <GlobalStyle></GlobalStyle>
    </Layout>
  );
};
