import React from 'react';
import './ItemContainer.scss';

const ItemContainer = (props) =>{
  return(
    <div className="item-container">
      <div className="item-title">
        {props.title}
      </div>
      <div className="wrapper">
        {props.children}
      </div>
    </div>
  );
}

export default ItemContainer;