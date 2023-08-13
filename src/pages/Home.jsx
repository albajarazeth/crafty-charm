import React from "react";
import ItemCard from "../components/ItemCard";
import ItemContainer from "../components/ItemContainer";
import catMug from "../assets/catMug.png";
import ita from "../assets/ita.png";
import moon from "../assets/moon.png";
import pin from "../assets/pin.png";
import neck from "../assets/necklace.png";

import "./Home.scss";

const Home = () => {
  return <div className="home-container">
    <ItemContainer title="New & Trending">
      <ItemCard img={catMug} alt="mug" name="Secretly Cat Mug" creator="kitty shop" price="$5.00"/>  
      <ItemCard img={ita} alt="mug" name="Ita bag - Magical Book" creator="FreezingCold" price="$70.66"/>  
      <ItemCard img={moon} alt="mug" name="Sailor Moon Cat Neon" creator="NeonColorful" price="$60.00"/>  
      <ItemCard img={pin} alt="mug" name="Valentines Day Creepy" creator="sheselle" price="$15.00"/>  
      <ItemCard img={neck} alt="mug" name="Creative themes Necklace" creator="NewLifeCarving" price="$17.62"/>  
    </ItemContainer>
  </div>;
};

export default Home;
 