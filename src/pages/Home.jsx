import React from "react";
import ItemCard from "../components/ItemCard";
import ItemContainer from "../components/ItemContainer";
import useWindowSize from "../components/useWindowSize";
import catMug from "../assets/catMug.png";
import ita from "../assets/ita.png";
import moon from "../assets/moon.png";
import pin from "../assets/pin.png";
import neck from "../assets/necklace.png";
import "./Home.scss";
import { useState, useEffect } from "react";
import earthData from '../data/earth.json';
import Globe from '../components/Globe.jsx';
import {FaArrowRight} from 'react-icons/fa';
import Footer from '../components/Footer';
import Navigation from "../components/Navigation";

const Home = () => {
  const size = useWindowSize();   
  // example use case - placeholder for real data
  return <div className="home-container">
    <Navigation name="CraftyCharm"/>
    <section className="welcome-message">
      <p>Welcome to the best place to sell online! <br/> What are you waiting for? </p>
        <a href="/register" rel="noreferrer">
          <button className="register-button">Join Us!</button>
        </a>
    </section>
    <ItemContainer className="item-container" title="New & Trending" color="#132743">
      <ItemCard link="/" img={catMug} size={size.width} alt="mug" name="Secretly Cat Mug" creator="kitty shop" price="$5.00"/>  
      <ItemCard img={ita} size={size.width} alt="ita" name="Ita bag - Magical Book" creator="FreezingCold" price="$70.66"/>  
      <ItemCard img={moon} size={size.width} alt="sailor moon" name="Sailor Moon Cat Neon" creator="NeonColorful" price="$60.00"/>  
      {size.width > 1100 && <ItemCard img={pin} size={size.width} alt="pin" name="Valentines Day Creepy" creator="sheselle" price="$15.00"/>}  
      {size.width > 1300 && <ItemCard img={neck} size={size.width} alt="necklace" name="Creative themes Necklace" creator="NewLifeCarving" price="$17.62"/> }
    </ItemContainer>
    <ItemContainer className="item-container" title="Featured Shops" color="#132743">
      <ItemCard img={catMug} alt="mug" name="Secretly Cat Mug" creator="kitty shop" price="$5.00"/>  
      <ItemCard img={ita} alt="mug" name="Ita bag - Magical Book" creator="FreezingCold" price="$70.66"/>  
      <ItemCard img={moon} alt="mug" name="Sailor Moon Cat Neon" creator="NeonColorful" price="$60.00"/>  
      {size.width > 1100 && <ItemCard img={pin} alt="mug" name="Valentines Day Creepy" creator="sheselle" price="$15.00"/>  }
      {size.width > 1300 && <ItemCard img={neck} alt="mug" name="Creative themes Necklace" creator="NewLifeCarving" price="$17.62"/> } 
    </ItemContainer>
    <hr className="divider"/>
    <section className="data-container">
      <Globe className="svg-container" geoJson={earthData}/>
      <div className="about-container">
        <h2>Discover what makes the CraftyCharm community so great!</h2>
        <p>Whether you’re building your brand or searching for a gift, our platform has everything you need.</p>
        {/* Link to about page or registration page */}
        <a href="/register" className="link">Learn More <FaArrowRight className="icon"/></a>
      </div>
    </section>
    <hr className="divider"/>
    <section className="wt-container">
      <div>
        <h3>Community</h3>
        <p>Join a global community of artists, suppliers and collectors whose constant efforts make all of these products possible.</p>
      </div>
      <div>
        <h3>Direct</h3>
        <p>Buy directly from artists and collectors that care about the quality of the items they are selling.</p>
      </div>
      <div>
        <h3>Secure</h3>
        <p>The security of our sellers and buyers comes first. Our platform is built to protect both parties so you can buy/sell with confidence.</p>
      </div>
    </section>
    <div className="footer">
      <Footer/>
    </div>
  </div>;
};

export default Home;
 