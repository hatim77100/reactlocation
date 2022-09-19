import React from 'react';
import PropTypes from "prop-types";

const input = (type, id, className, placeholder, value) => {
  return (
    <input
      type={type}
      id={id}
      className={className}
      placeholder={placeholder}
      value={value}
    ></input>
  );
};

input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};
input.defaultProps = {
    type: "default",
    id: "text",
    className: "default",
    placeholder: "default",
    value : "text"
}