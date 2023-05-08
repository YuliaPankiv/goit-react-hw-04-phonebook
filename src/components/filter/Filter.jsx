import PropTypes from 'prop-types';
import { Label, Wrapper } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <Wrapper>
    <Label>
      Find ny name
      <input
        type="text"
        name="filter"
        value={value}
        required
        onChange={onChange}
      />
    </Label>
  </Wrapper>
);

export default Filter;
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
