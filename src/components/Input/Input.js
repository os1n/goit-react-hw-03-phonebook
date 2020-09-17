import React from 'react';

export default function Input({ inputValue, handleInput, inputNumber }) {
    //console.log(handleInput);
    return (
      <>
        <label htmlFor="text">Name     </label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInput}
          name="name"
        />
        <br/>
        <br/>
        
        <label htmlFor="text">Number   </label>
        <input
          type="text"
          value={inputNumber}
          onChange={handleInput}
          name="number"
        />
      </>
    );
}
