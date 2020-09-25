import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import propTypes from 'prop-types';

export default class ContactsLister extends Component {
  render() {
    const outputArray = this.props.inputArray.filter(item =>
      item.name.includes(this.props.filter),
    );

    return (
      <div>
        <h2>{this.props.inputTitle}</h2>
        <ul>
          {outputArray.map(item => (
            <ListItem
              id={item.id}
              name={item.name}
              number={item.number}
              handleSubmit={this.props.deleteContact}
            />
          ))}
        </ul>
      </div>
    );
  }
}

ContactsLister.propTypes = {
  id: propTypes.string,
  name: propTypes.string,
  number: propTypes.string,
  handleSubmit: propTypes.func,
};
