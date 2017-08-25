import React, { Component } from 'react';
import {render} from 'react-dom';

// Parent Component
class GroceryList extends Component {
  render() {
    return (
      <h1>
        Hello React
      </h1>
    );
  }
}

render(<GroceryList/>, document.getElementById('root'));
