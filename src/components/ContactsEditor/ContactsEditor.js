import React, { Component } from 'react';
import Contacts from '../Lister/Lister';
import ContactForm from '../ContactForm/ContactForm';
import ContactListFilter from '../ArrayFilter/ArrayFilter';

// External dependacies
import { v4 as uuid } from 'uuid';

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

    const getContactById = (arr, name) => arr.some(x => x.name === name);

    if (getContactById(this.state.contacts, newname))
      alert('Such contact exists, be attentive!!!');
    else
      this.setState(prevState => {
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

  setFilter = filterValue => {
    return this.setState({ filter: filterValue });
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Contacts Editor</h1>
        <ContactForm contacts={contacts} sendItemBack={this.addContact} />

        <ContactListFilter sendFilterBack={this.setFilter} />

        {contacts.length > 0 && (
          <Contacts
            contacts={contacts}
            inputTitle={'Contacts list'}
            filter={this.state.filter}
            deleteContact={this.deleteContact}
          />
        )}
      </div>
    );
  }
}
