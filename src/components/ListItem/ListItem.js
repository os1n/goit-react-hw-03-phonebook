import React from 'react';
import propTypes from 'prop-types';

export default function ListItem({ id, name, number, deleteContact }) {
  function handlePress(e) {
    deleteContact(id);
  }

  return (
    <li>
      <span>Name: {name}</span>
      <br />
      <span>Number: {number}</span>
      <br />
      <button onClick={handlePress}>Delete contact</button>
    </li>
  );
}

ListItem.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  deleteContact: propTypes.func.isRequired,
};
