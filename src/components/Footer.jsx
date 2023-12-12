import { AiFillInstagram, AiOutlineTwitter, AiOutlineYoutube} from 'react-icons/ai';
import "./Footer.scss";

const Footer = () => {
  const style = { fill: "#FFF5F7", fontSize: "1.5em" }
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          © 2023 CraftyCharm. All rights reserved.
        </p>

        <div className="social">
          <AiOutlineTwitter style={style}/>
          <AiOutlineYoutube style={style}/>
          <AiFillInstagram style={style}/>
        </div>
      </div>
    </div>
  );
}
export default Footer;