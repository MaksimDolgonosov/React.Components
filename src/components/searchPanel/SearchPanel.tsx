import { Component } from 'react';

import './searchPanel.css';

class SearchPanel extends Component {
  constructor(props: null | string) {
    super(props!);
    this.state = {
      text: null,
    };
  }
  render() {
    return (
      <div className="search__panel">
        <input className="search__input"></input>
        <button className="search__btn">Search</button>
      </div>
    );
  }
}

export default SearchPanel;
