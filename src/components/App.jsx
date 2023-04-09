import { useEffect, lazy } from 'react';
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

import { Layout } from './Layout';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
    // <Routes> 
    //   <Route path="/" element={<SharedLayout />}>
    //     <Route index element={<Home />} />
    //     <Route path="movies" element={<Movies />}/>
    //     <Route path="movies/:movieId" element={<MovieDetails />}>
    //       <Route path="cast" element={<Cast />} />
    //       <Route path="reviews" element={<Reviews />} />
    //     </Route>
    //     <Route path="*" element={<NotFound />} />
    //   </Route>
    // </Routes>

    // <Layout>
    //   <h1>Phonebook</h1>
    //   <ContactForm></ContactForm>

    //   {/* <h2>Contacts</h2>
    //   <Filter ></Filter>
    //   {isLoading && <p style={{paddingLeft:"120px"}}>Loading contacts...</p>}
    //   {error && <p style={{paddingLeft:"120px"}}>{error}</p>}
    //   {items && items.length > 0 && <ContactList/>} */}
      
    //   <GlobalStyle></GlobalStyle>
    // </Layout>
