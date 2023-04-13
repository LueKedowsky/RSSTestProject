import { Component } from 'react';
import './Card.scss';
import { CardData } from '../../types/CardData';

class Card extends Component<CardData> {
  render() {
    const {
      data: { cardData },
    } = this.props;
    return cardData.map((item) => {
      return (
        <div className="card-container" key={item.id}>
          <div className="card-container__title">{item.email}</div>
          <div className="card-container__img">
            <img
              src="https://images.wallpaperscraft.ru/image/single/pejzazh_gory_solntse_140434_1024x768.jpg"
              alt=""
            />
          </div>
          <div className="card-container__text">{item.body}</div>
        </div>
      );
    });
  }
}

export default Card;
