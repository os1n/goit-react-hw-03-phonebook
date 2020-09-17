import React, { Component} from 'react';
// import ArrayFilter from '../ArrayFilter/ArrayFilter';

export default class Lister extends Component {

   constructor(props) {
     super(props);
    
    this.state = {
      outputArray: props.inputArray,
      outputTitle: props.inputTitle
      };
  }

render() {
  console.log(this.props.inputArray);
  const { outputArray, outputTitle} = this.state;
  return (
    <div>
    <h2>{outputTitle}</h2>
    {/* <ArrayFilter inputArray = {inputArray}/> */}
    <ul>
      {outputArray.map(item => (
        <li key={item.id}>
          <span>Name: {item.name}</span>
          <br />
          <span>Number: {item.number}</span>
        </li>
      ))}
    </ul>
  </div>
  )
}

};



// const Lister = ({ inputTitle, inputArray }) => (
  
// );

// export default Lister;
