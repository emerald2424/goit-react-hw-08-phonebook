import { ListItem } from "./ContactListItem.styled";
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from "redux/operations";


export const ContactListItem = ({contact}) => {
  const {name, phone, id} = contact;
  const dispatch = useDispatch();

  return (
    <ListItem key={id}>
      {name}: {phone}
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }),
}