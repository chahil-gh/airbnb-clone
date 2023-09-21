import React from "react";

function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        src={`../../images/${props.item.coverImg}`}
        alt="card"
        className="card-image"
      />
      <div className="card-stats">
        <img src="../../images/star.png" alt="star" className="card-star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{[props.item.location]}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <strong>From ${props.item.price}</strong> / person
      </p>
    </div>
  );
}

export default Card;
