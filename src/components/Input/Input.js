import React from 'react';
import propTypes from 'prop-types';

export default function Input({ inputValue, handleInput, inputName }) {
  //console.log(handleInput);
  return (
    <>
      <label htmlFor="text">{inputName} </label>
      <input
        type="text"
        value={inputValue}
        onChange={handleInput}
        name={inputName}
      />
    </>
  );
}

Input.propTypes = {
  inputValue: propTypes.string,
  inputName: propTypes.string,
  handleInput: propTypes.func,
};
