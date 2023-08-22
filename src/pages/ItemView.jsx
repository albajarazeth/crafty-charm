import React from "react";
import "./ItemView.css";

const ItemView = () => {
  return (
    <section className="item-top-container">
      Item Info
      <div className="images-container">
        {/**Add Images here */}
        <div className="vertical-images"></div>
        <div className="main-image"></div>
      </div>
      <div className="item-info-container">
        {/**Add Item Information & Buy */}
        <div className="header-info"></div>
        <div className="description"></div>
        <div className="select-items"></div>
      </div>
    </section>
  );
};

export default ItemView;
