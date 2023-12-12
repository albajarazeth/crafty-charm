import { useState } from "react";
import "./ItemCard.scss";

const handleClick = (myLink) => () => {
  window.location.href=myLink;
}

const ItemCard = (props) =>(
  <div onClick={handleClick(props.link)} className="card-container">
    <div className="item-card">
      <img src={props.img} alt={props.alt}/>
      <div className="item-desc">
        <p id="card-name">{props.name}</p>
        <p id="card-creator">{props.creator}</p>
        <div className="price-container">
          <div className="price-tag">
            <p id="card-price">{props.price}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ItemCard;
