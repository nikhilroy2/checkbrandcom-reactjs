import React from "react";
import { Link } from "react-router-dom";
function CollectionsCard2(props) {
  return (
    <div id="CollectionsCard2">
      <Link to="/" className="card_wrapper rounded-lg d-block">
        <div className="card_header">
          <img
            className="w-100"
            src={require("../../Static/img/card_img/card_img.gif")}
            alt="img"
          />
        </div>
        <div className="card_body py-3 px-2">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-6 text-start p-0">
                <a href="#" className="text_black_hover d-block">
                  BBRC - IVY BOYS
                </a>
                <strong className="text_r35">IVY BOYS</strong>
              </div>
              <div className="col-6 text-end">
                <span className="text_r155">Top Bid</span>
                <br />
                <span className="text_r35">
                  <img
                    style={{ height: "18px" }}
                    className="me-2"
                    src={require("../../Static/img/eth2.svg").default}
                    alt="img"
                  />
                  0.11
                </span>
                <br />
                <span className="text_r155 font_12">
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="TimelapseIcon"
                    height={"16px"}
                  >
                    <path d="M16.24 7.76C15.07 6.59 13.54 6 12 6v6l-4.24 4.24c2.34 2.34 6.14 2.34 8.49 0 2.34-2.34 2.34-6.14-.01-8.48zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                  </svg>{" "}
                  2 days left
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card_footer p-3">
          <div className="d-flex justify-content-end">
            <button className="btn btn-muted p-0 me-1">
              <svg
                className="MuiSvgIcon-root fill_heart_icon MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="FavoriteBorderIcon"
              >
                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
              </svg>
            </button>
            <span className="counter text_r35">0</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CollectionsCard2;
