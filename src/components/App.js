import React, { Component } from "react";
import "./App.css";
import ContactsEditor from './ContactsEditor/ContactsEditor'


class App extends Component {
 

  render() {
    return (
      <div className="App">
        <ContactsEditor />
      </div>
    );
  }
}
 
export default App;
