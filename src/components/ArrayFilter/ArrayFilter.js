import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class ArrayFilter extends Component {
  state = {
    name: '',
  };

  handleChangeInput = e => {
    this.setState({ name: e.target.value });
    this.props.sendFilterBack(e.target.value);
  };

  render() {
    return (
      <div>
        <h3>Filter Contacts by name:</h3>
        <form>
          <label htmlFor="text">Name </label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChangeInput}
            name="name"
          />
        </form>
      </div>
    );
  }
}

ArrayFilter.propTypes = {
  sendFilterBack: propTypes.func,
};
