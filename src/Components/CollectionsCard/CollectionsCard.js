import React from "react";
import "./CollectionsCard.css";

function CollectionsCard({
  largeImg,
  smImg,
  cardName,
  isCardNameVerified,
  cardNameBy,
  cardNameByLink,
  description,
}) {
  return (
    <div id="CollectionsCard">
      <div className="card_header">
        <img src={largeImg} alt="img" className="large_img" />
        <img src={smImg} alt="img" className="sm_img" />
      </div>
      <div className="card_body text-center py-4">
        <h5 className="text-white">{cardName}</h5>
        <p>
          <span className="text_r155">by</span>{" "}
          <a href={cardNameByLink}>{cardNameBy}</a>
        </p>

        <div className="row justify-content-center">
          <div className="col-11 col-md-10 col-xxl-9">
            <p className="description text_r155">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionsCard;
