import { Component } from 'react';
import './SearchInput.scss';

type StateMessage = {
  message: string;
};

class SearchInput extends Component<object, StateMessage> {
  constructor(props: object) {
    super(props);
    this.state = {
      message: localStorage.getItem('message') || '',
    };
  }

  changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const message: string = e.target.value;

    localStorage.setItem('message', message);
    this.setState({ message });
  };

  render() {
    const { message } = this.state;
    return (
      <div className="search-input__container">
        <div className="search-input__icon">
          <img
            className="search-input__img"
            src="https://www.svgrepo.com/show/506553/search.svg"
            alt=""
          />
        </div>
        <input
          className="search-input__input"
          type="text"
          onChange={this.changeHandler}
          value={message}
        />
        <div className="search-input__button">
          <button type="button">Search</button>
        </div>
      </div>
    );
  }
}

export default SearchInput;
