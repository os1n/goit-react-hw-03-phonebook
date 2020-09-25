import React, { Component } from 'react';
import ContactsLister from '../ContactsLister/ContactsLister';
import ContactForm from '../ContactForm/ContactForm';
import ArrayFilter from '../ArrayFilter/ArrayFilter';

// External dependacies
import { uuid } from 'uuidv4';

export default class ContactsEditor extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (newname, newnumber) => {
    const contact = {
      id: uuid(),
      name: newname,
      number: newnumber,
    };

    const getContactById = (arr, name) => arr.find(x => x.name === name);

    this.setState(prevState => {
      if (getContactById(prevState.contacts, newname)) {
        alert('Such contact exists, be attentive!!!');
        return;
      }
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  setfilter = filterValue => {
    return this.setState({ filter: filterValue });
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Contacts Editor</h1>
        <ContactForm contacts={contacts} sendItemBack={this.addContact} />

        <ArrayFilter sendFilterBack={this.setfilter} />

        {contacts.length > 0 && (
          <ContactsLister
            inputArray={contacts}
            inputTitle={'Contacts list'}
            filter={this.state.filter}
            deleteContact={this.deleteContact}
          />
        )}
      </div>
    );
  }
}
