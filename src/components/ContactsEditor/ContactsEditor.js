import React, { Component } from 'react';
import ContactsLister from '../Lister/Lister';
import ContactForm from '../ContactForm/ContactForm';
import ArrayFilter from '../ArrayFilter/ArrayFilter';

// External dependacies
import { v4 as uuid } from 'uuid';

export default class ContactsEditor extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      filter: '',
    };
  }

  componentDidMount(prevPops, prevState) {
    const contactsCheck = localStorage.getItem('contacts');
    if (contactsCheck) {
      this.setState({ contacts: JSON.parse(contactsCheck) });
    } else
      this.setState({
        contacts: [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
      });
  }

  componentDidUpdate(prevPops, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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
