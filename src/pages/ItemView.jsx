import "./ItemView.css";
import mugOne from "../assets/mug1.jpg";
import mugTwo from "../assets/mug2.jpg";
import mugThree from "../assets/mug3.jpg";
import mugFour from "../assets/mug4.jpg";
import { useState } from "react";
import StarsRating from "../components/StarsRating";

const ItemView = () => {
  const images = [mugOne, mugTwo, mugThree, mugFour];
  const quanitity = Array.from({ length: 200 }, (_, index) => index + 1);

  const [currentImage, setCurrentImage] = useState(mugOne);

  const onImgChange = (img) => {
    setCurrentImage(img);
  };

  return (
    <section className="item-top-container">
      <div className="images-container">
        <image src={mugOne} alt="Item Photo" width="100" height="50" />
        <div className="vertical-images">
          {images.map((img, key) => {
            return (
              <div onClick={() => onImgChange(img)} key={key}>
                <img className="s-images" src={img} />
              </div>
            );
          })}
        </div>
        <div className="main-image">
          <img className="l-image" src={currentImage} />
        </div>
      </div>
      <div className="item-info-container">
        <div className="header-info">
          <div>
            <h1>Secretly Cat Mug</h1>
            <div className="shop">
              <span>kitty shop</span>
            </div>
            <div>
              <StarsRating size={25} />
            </div>
          </div>
          <button className="price-btn">$5.00</button>
        </div>
        <div className="description">
          <p>
            Six signs that you are secretly a cat | crazy cat lady mug | cat mug
            | gifts for cat lovers | Cat Lover Gift Mug | mg2aa
          </p>
        </div>
        <div className="select-items">
          <div className="m-group">
            <div>
              <label htmlFor="p-quanitity">Quantity</label>
            </div>
            <select id="p-quantity">
              {quanitity.map((el, id) => {
                return <option key={id}>{id}</option>;
              })}
            </select>
          </div>
        </div>
        <button className="add-btn">Add to cart</button>
      </div>
    </section>
  );
};

export default ItemView;
