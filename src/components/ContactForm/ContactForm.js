import React, { Component } from 'react';
import Input from '../Input/Input';
import { uuid } from 'uuidv4';

export default class ContactForm extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      contacts: props.contacts,
      name: '',
      number: '',
    };
  }

  handleChangeInput = e => {
    //console.log(e.target.name);
    const parName = e.target.name;
    this.setState({ [parName]: e.target.value });
    //console.log(this.state.name);
  };

  handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: uuid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.contacts.push(contact);
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });
    //console.log(this.state.contacts);
  };

  render() {
    const { name, number } = this.state;
    //console.log(this.state.contacts);
    return (
      <div>
        <h2>Contact Form</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            handleInput={this.handleChangeInput}
            handleSubmit={this.handleSubmit}
            inputValue={name}
            inputNumber={number}
          />
          <br />
          <br />
          <button type="submit">Add the contact</button>
        </form>
      </div>
    );
  }
}
