import React from "react";
import "./CollectionsCard.css";

function CollectionsCard(props) {
  return (
    <div id="CollectionsCard">
      <div className="card_header">
        <img
          src={require("../../Static/img/card_img/tamaki_apes.png")}
          alt="img"
          className="large_img"
        />
        <img
          src={require("../../Static/img/card_img/tamaki_apes.png")}
          alt="img"
          className="sm_img"
        />
      </div>
      <div className="card_body text-center py-4">
        <h5>Tamaki Apes</h5>
        <p>
          <span className="text_r155">by</span>{" "}
          <a href="#">TamakiApesOfficial</a>
        </p>

        <div className="row justify-content-center">
          <div className="col-11 col-md-10 col-xxl-9">
            <p className="description text_r155">
              A collection of 2222 Apes vibing on the Solana Blockchain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionsCard;
