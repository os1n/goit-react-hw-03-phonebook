import React from 'react';
import propTypes from 'prop-types';

export default function ListItem({ id, name, number, handleSubmit }) {
  function handlePress(e) {
    e.preventDefault();
    handleSubmit(id);
  }

  return (
    <li key={id}>
      <span>Name: {name}</span>
      <br />
      <span>Number: {number}</span>
      <br />
      <button onClick={handlePress}>Delete contact</button>
    </li>
  );
}

ListItem.propTypes = {
  id: propTypes.string,
  name: propTypes.string,
  number: propTypes.string,
  handleSubmit: propTypes.func,
};
