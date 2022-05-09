import React from "react";
import "./CollectionAccount.css";
import { Link } from "react-router-dom";
import CollectionsCard from "../../Components/CollectionsCard/CollectionsCard";
function CollectionAccount(props) {
  const tab_list_object = [
    {
      id: 1,
      name: "Items",
      icon: "",
      link: "#",
    },
    {
      id: 2,
      name: "Activity",
      icon: "",
      link: "#",
    },
  ];

  const ItemsTab_object = [
    {
      id: 1,
      link: "#",
      largeImg: require("../../Static/img/card_img/tamaki_apes.png"),
      smImg: require("../../Static/img/card_img/tamaki_apes.png"),
      cardName: "Tamaki Apes",
      isCardNameVerified: false,
      cardNameBy: "TamakiApesOfficial",
      cardNameByLink: "#",
      description: "A collection of 2222 Apes vibing on the Solana Blockchain.",
    },
    {
      id: 2,
      link: "#",
      largeImg: require("../../Static/img/card_img/yaku.png"),
      smImg: require("../../Static/img/card_img/yaku.png"),
      cardName: "YAKU X",
      isCardNameVerified: false,
      cardNameBy: "9292Zv",
      cardNameByLink: "#",
      description: "Explore the YAKU X collection",
    },
    {
      id: 3,
      link: "#",
      largeImg: require("../../Static/img/card_img/yaku.png"),
      smImg: require("../../Static/img/card_img/yaku.png"),
      cardName: "YAKU X",
      isCardNameVerified: false,
      cardNameBy: "9292Zv",
      cardNameByLink: "#",
      description: "Explore the YAKU X collection",
    },
    {
      id: 4,
      link: "#",
      largeImg: require("../../Static/img/card_img/yaku.png"),
      smImg: require("../../Static/img/card_img/yaku.png"),
      cardName: "YAKU X",
      isCardNameVerified: false,
      cardNameBy: "9292Zv",
      cardNameByLink: "#",
      description: "Explore the YAKU X collection",
    },
    {
      id: 5,
      link: "#",
      largeImg: require("../../Static/img/card_img/yaku.png"),
      smImg: require("../../Static/img/card_img/yaku.png"),
      cardName: "YAKU X",
      isCardNameVerified: false,
      cardNameBy: "9292Zv",
      cardNameByLink: "#",
      description: "Explore the YAKU X collection",
    },
    {
      id: 6,
      link: "#",
      largeImg: require("../../Static/img/card_img/yaku.png"),
      smImg: require("../../Static/img/card_img/yaku.png"),
      cardName: "YAKU X",
      isCardNameVerified: false,
      cardNameBy: "9292Zv",
      cardNameByLink: "#",
      description: "Explore the YAKU X collection",
    },
    {
      id: 7,
      link: "#",
      largeImg: require("../../Static/img/card_img/yaku.png"),
      smImg: require("../../Static/img/card_img/yaku.png"),
      cardName: "YAKU X",
      isCardNameVerified: false,
      cardNameBy: "9292Zv",
      cardNameByLink: "#",
      description: "Explore the YAKU X collection",
    },
    {
      id: 8,
      link: "#",
      largeImg: require("../../Static/img/card_img/yaku.png"),
      smImg: require("../../Static/img/card_img/yaku.png"),
      cardName: "YAKU X",
      isCardNameVerified: false,
      cardNameBy: "9292Zv",
      cardNameByLink: "#",
      description: "Explore the YAKU X collection",
    },
    {
      id: 9,
      link: "#",
      largeImg: require("../../Static/img/card_img/yaku.png"),
      smImg: require("../../Static/img/card_img/yaku.png"),
      cardName: "YAKU X",
      isCardNameVerified: false,
      cardNameBy: "9292Zv",
      cardNameByLink: "#",
      description: "Explore the YAKU X collection",
    },
    {
      id: 10,
      link: "#",
      largeImg: require("../../Static/img/card_img/yaku.png"),
      smImg: require("../../Static/img/card_img/yaku.png"),
      cardName: "YAKU X",
      isCardNameVerified: false,
      cardNameBy: "9292Zv",
      cardNameByLink: "#",
      description: "Explore the YAKU X collection",
    },
    {
      id: 11,
      link: "#",
      largeImg: require("../../Static/img/card_img/yaku.png"),
      smImg: require("../../Static/img/card_img/yaku.png"),
      cardName: "YAKU X",
      isCardNameVerified: false,
      cardNameBy: "9292Zv",
      cardNameByLink: "#",
      description: "Explore the YAKU X collection",
    },
    {
      id: 12,
      link: "#",
      largeImg: require("../../Static/img/card_img/yaku.png"),
      smImg: require("../../Static/img/card_img/yaku.png"),
      cardName: "YAKU X",
      isCardNameVerified: false,
      cardNameBy: "9292Zv",
      cardNameByLink: "#",
      description: "Explore the YAKU X collection",
    },
  ];

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
                    <div className="btn-group btn-rounded">
                      <a href="#" className="btn btn-outline-dark text-white">
                        <i className="fa-2x fa-solid fa-globe"></i>
                      </a>
                      <a href="#" className="btn btn-outline-dark text-white">
                        <i className="fa-2x fab fa-reddit    "></i>
                      </a>
                      <a href="#" className="btn btn-outline-dark text-white">
                        <i className="fa-2x fab fa-instagram    "></i>
                      </a>
                      <button className="btn btn-outline-dark text-white">
                        <i className="fa-2x fa-solid fa-ellipsis-vertical"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 text-center">
                  <h4 className=" text-white">Versacy</h4>
                  <div className="d-flex mb-3 align-items-center justify-content-center text-white">
                    <span className="me-2">Created by</span>
                    <a href="#">CheckBrandcom</a>
                  </div>

                  <button className="btn mt-2 btn-outline-dark rounded-pill btn-lg text-white">
                    <i
                      className="fab fa-twitter   me-2 "
                      style={{ color: "#007AD3" }}
                    ></i>{" "}
                    Versacy
                  </button>
                </div>
              </div>

              <div className="row mt-3 justify-content-center">
                <div className="col-11 col-sm-10 col-md-9 col-lg-5 text-center">
                  <div className="btn-group">
                    <button className="btn btn-outline-dark text-white p-3">
                      <strong className="h5 d-block">10.0K</strong>
                      <span className="text-white-50 text-lowercase h6">
                        Items
                      </span>
                    </button>

                    <button className="btn btn-outline-dark text-white p-3">
                      <strong className="h5 d-block">3.6K</strong>
                      <span className="text-white-50 text-lowercase h6">
                        owners
                      </span>
                    </button>

                    <button className="btn btn-outline-dark text-white p-3">
                      <strong className="h5 d-block">3.59K</strong>
                      <span className="text-white-50 text-lowercase h6">
                        floor price
                      </span>
                    </button>

                    <button className="btn btn-outline-dark text-white p-3">
                      <strong className="h5 d-block">22.6K</strong>

                      <span className="text-white-50 text-lowercase h6">
                        volume traded
                      </span>
                    </button>
                  </div>

                  <p className="text-center text-white-50 my-3">
                    The artist, Josie Bellini, presents CyberBrokers, a
                    first-of-its-kind art collectibles ecosystem centered around
                    10,001 unique and on-chain CyberBroker NFTs.
                  </p>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="custom_tab my-5 pt-4">
                    <ul className="list-unstyled tab_list d-flex align-items-center justify-content-center">
                      {tab_list_object.map((v) => {
                        return (
                          <li className="tab_list_item" key={v.id}>
                            <Link
                              to={v.icon}
                              className={`tab_list_action p-3 text-white-50 h5 `}
                            >
                              {v.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* ......................for Items tab....................... */}
            <div className="container-fluid mb-5">
              <div className="row gy-4">
                {true &&
                  ItemsTab_object.map((v) => {
                    return (
                      <div
                        className="col-sm-6 col-lg-4 col-xl-3 h-auto"
                        key={v.id}
                      >
                        <div className="col_wrapper h-100">
                          <Link to={v.link} className="h-100">
                            <CollectionsCard
                              largeImg={v.largeImg}
                              smImg={v.smImg}
                              cardName={v.cardName}
                              isCardNameVerified={v.isCardNameVerified}
                              cardNameBy={v.cardNameBy}
                              cardNameByLink={v.cardNameByLink}
                              description={v.description}
                            ></CollectionsCard>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            {/* ......................for Items tab....................... End */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CollectionAccount;
