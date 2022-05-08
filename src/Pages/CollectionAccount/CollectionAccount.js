import React from "react";
import "./CollectionAccount.css";

function CollectionAccount(props) {
  return (
    <div id="CollectionAccount">
      <section>
        <div className="account_wrapper">
          <div className="account_header">
            <img
              src={require("../../Static/img/user_banner/user_banner.jpg")}
              alt="img"
              className="user_banner"
            />
            <button className="user_img_btn">
              <img
                src={require("../../Static/img/card_img/yaku.png")}
                alt="yaku"
                className="user_img"
              />
            </button>
          </div>
          <div className="account_body mt-4">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex align-items-center justify-content-end">
                    <div className="btn-group">
                      <button className="btn btn-outline-dark text-white">
                        <i className="fa-2x fa-solid fa-globe"></i>
                      </button>
                      <button className="btn btn-outline-dark text-white">
                        <i className="fa-2x fab fa-reddit    "></i>
                      </button>
                      <button className="btn btn-outline-dark text-white">
                        <i className="fa-2x fab fa-instagram    "></i>
                      </button>
                      <button className="btn btn-outline-dark text-white">
                        <i className="fa-2x fa-solid fa-ellipsis-vertical"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CollectionAccount;
