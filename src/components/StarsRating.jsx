import "./StarsRating.css";
import { AiOutlineStar } from "react-icons/ai";

const StarsRating = (props) => {
  const { size } = props;

  const stars = [
    <AiOutlineStar size={size} />,
    <AiOutlineStar size={size} />,
    <AiOutlineStar size={size} />,
    <AiOutlineStar size={size} />,
    <AiOutlineStar size={size} />,
  ];

  return (
    <div className="stars-container">
      5.00
      {stars.map((el, id) => {
        return <div key={id}>{el}</div>;
      })}
    </div>
  );
};

export default StarsRating;
