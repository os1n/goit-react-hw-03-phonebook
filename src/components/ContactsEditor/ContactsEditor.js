import React, { Component } from 'react';
import Lister from '../Lister/Lister';
import ContactForm from '../ContactForm/ContactForm';
import { uuid } from 'uuidv4';

export default class ContactsEditor extends Component {
  state = {
    contacts: [
      {
        id: uuid(),
          name: 'Mango',
          number: '123',
      },
      {
        id: uuid(),
          name: 'Mango',
          number: '123',
      }
    ],
    filter: '',
  };

  render() {
    const { contacts } = this.state;
    console.log(this.state.contacts)
    return (
      <div>
        <h1>Contacts Editor</h1>
        <ContactForm contacts={contacts} />

        {/* <Filter ... /> */}

        {contacts.length > 0 && (
          <Lister inputArray={contacts} inputTitle={'Contacts list'} />
        )}
      </div>
    );
  }
}

// const styles = StyleSheet.create({});
