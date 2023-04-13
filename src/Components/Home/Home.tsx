import { Component } from 'react';
import Card from '../Card/Card';
import { CardData } from '../../types/CardData';
import SearchInput from '../SearchInput/SearchInput';

class Home extends Component<CardData> {
  render() {
    const { data } = this.props;
    return (
      <div>
        <SearchInput />
        <Card data={data} />
      </div>
    );
  }
}

export default Home;
