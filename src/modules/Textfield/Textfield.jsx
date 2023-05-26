import { PropTypes } from "prop-types";

const TextField = ({ text, handleChange, name, value }) => {
  return (
    <input
      onChange={handleChange}
      value={value}
      className=" text-black placeholder-md-text-18 placeholder-text-15 text-capitalize w-100 border border-gray rounded p-2 placeholder-font-weight-bold placeholder-text-secondary focus-outline-none focus-ring-0"
      placeholder={text}
      type="text"
      name={name}
    />
  );
};

TextField.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default TextField;
