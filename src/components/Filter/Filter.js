import {Label} from './Filter.styled';
import {Form } from './Filter.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <Form>
      <Label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
      </Label>
    </Form> 
  );
}
