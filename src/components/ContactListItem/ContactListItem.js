import { ListItem } from './ContactListItem.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactListItem = ({ contact }) => {
  const { name, number, id } = contact;
  const dispatch = useDispatch();

  return (
    <ListItem key={id}>
      {name}: {number}
      <Button
        variant="outlined"
        size="small"
        startIcon={<DeleteIcon />}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </Button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
