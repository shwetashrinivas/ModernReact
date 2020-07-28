import React from 'react';
import ReactDOM from 'react-dom';


//React compnent
const App = () => {
  const buttonText = {text: "Click Me!"};
  const labelText = 'Enter name: ';


  return(
    <div>
    <label className="label" htmlFor="name">
      { labelText }
    </label>
    <input id="name" type="text" />
    <button style = {{ backgroundColor: 'blue', color: 'white'}}>
      { buttonText.text }
    </button>
    </div>
    )
};

//Show react component on screen
ReactDOM.render( 
  <App />,
  document.querySelector('#root')
);