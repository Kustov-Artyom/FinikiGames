import React from 'react';
import './CrystalHuntBanner.css';
import girlReward from '../../../assets/girlReward.png';


export default function CrystalHuntBanner() {

    
  return (
    <div className="crystal-hunt-banner">
      <div className="crystal-hunt-banner__content">
        <h2 className="crystal-hunt-banner__title">
          НАЙДИ ВСЕ КРИСТАЛЛЫ И ПОЛУЧИ НАГРАДЫ
        </h2>

        <div className="crystal-hunt-banner__description">
          <p>На страницах нашего сайта спрятаны кристаллы, и только самые внимательные смогут найти их все.</p>
          <p>Заглядывайте в разные разделы, исследуйте страницы сайта и собирайте кристаллы в коллекцию.</p>
          <p>Если вам удастся обнаружить все 10 кристаллов, вы сможете получить за них особые награды внутри игры.</p>
          <p>Начните поиск прямо сейчас и получите особые награды</p>
        </div>
      </div>

      <div className="crystal-hunt-banner__image-wrapper">
        <img
          src={girlReward}
          alt="Девушка с синими волосами"
          className="crystal-hunt-banner__image"
        />
      </div>
    </div>
  );
}