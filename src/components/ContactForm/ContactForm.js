import React, { Component } from 'react';
import Input from '../Input/Input';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      number: '',
    };
  }

  handleChangeInput = e => {
    const parName = e.target.name;
    this.setState({ [parName]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name === '' || this.state.number === '')
      alert('All fields must be filled.');
    else this.props.sendItemBack(this.state.name, this.state.number);
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <h2>Contact Form</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            handleInput={this.handleChangeInput}
            inputValue={name}
            inputName="name"
          />
          <br />
          <br />
          <Input
            handleInput={this.handleChangeInput}
            inputValue={number}
            inputName="number"
          />
          <br />
          <br />
          <button type="submit">Add the contact</button>
        </form>
      </div>
    );
  }
}
