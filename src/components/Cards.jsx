import star from "../../public/star.png";

const Card = ({ img, title, rating, reviewCount, location, cost }) => {
  return (
    <div className="card">
      <img src={img} className="card--image" />
      <div>
        <div className="rating--items">
          <img src={star} className="card--star" />
          <span>{rating}</span>
          <span>({reviewCount}). </span>
          <span>{location}</span>
        </div>
        <p>{title}</p>
        <p>
          <span className="bold">From {cost} </span>/ person
        </p>
      </div>
    </div>
  );
};

export default Card;
