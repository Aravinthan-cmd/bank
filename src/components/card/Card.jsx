import React from "react";
import '../card/card.scss';

const Card = ({categories}) => {
  return (
    <div className="card">
      <div className="info-card">
        <div className="logo">
          {categories}
        </div>
        <div className="title_card">
          <p>Central Burger</p>
          <span>Cafe and Restaturent</span>
        </div>
      </div>
      <div className="price">
        <h2>₹ 189.00</h2>
      </div>
    </div>
  );
};

export default Card;
