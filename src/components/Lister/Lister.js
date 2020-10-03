import React from 'react';
import ListContact from '../ListItem/ListItem';
import propTypes from 'prop-types';

export default function Contacts(props) {
  const outputArray = props.contacts.filter(item =>
    item.name.includes(props.filter),
  );

  return (
    <div>
      <h2>{props.inputTitle}</h2>
      <ul>
        {outputArray.map(item => (
          <ListContact
            key={item.id}
            id={item.id}
            name={item.name}
            number={item.number}
            deleteContact={props.deleteContact}
          />
        ))}
      </ul>
    </div>
  );
}

Contacts.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.string,
  deleteContact: propTypes.func.isRequired,
};
