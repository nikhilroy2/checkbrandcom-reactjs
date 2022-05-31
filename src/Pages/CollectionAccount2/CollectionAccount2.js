import React from "react";
import "./../CollectionAccount/CollectionAccount.css";
import { Link } from "react-router-dom";
import CollectionsCard from "../../Components/CollectionsCard/CollectionsCard";

import ReactTooltip from "react-tooltip";

function CollectionAccount2(props) {
  const [isItems, setIsItems] = React.useState(true);
  const tabHandle = () => {
    setTimeout(() => {
      const searchUlr = window.location.search;
      //console.log(searchUlr);
      setIsItems(searchUlr === "" ? true : false);
    }, 0);
  };
  const tab_list_object = [
    {
      id: 1,
      name: "Items",
      icon: (
        <svg
          className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="GridOnIcon"
          height="25px"
          fill="currentColor"
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" />
        </svg>
      ),
      link: "",
      activeTab: isItems ? true : false,
    },
    {
      id: 2,
      name: "Activity",
      icon: (
        <svg
          className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="ShowChartIcon"
          height="25px"
          fill="currentColor"
        >
          <path d="m3.5 18.49 6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
        </svg>
      ),
      link: "?tab=Activity",
      activeTab: isItems ? false : true,
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
    <div id="CollectionAccount2">
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
                      <a
                        href="#"
                        className="btn btn-outline-dark text-white"
                        data-tip="Website"
                      >
                        <i className="fa-2x fa-solid fa-globe"></i>
                      </a>
                      <ReactTooltip place="top" effect="solid" />
                      <a
                        href="#"
                        className="btn btn-outline-dark text-white"
                        data-tip="Twitter"
                      >
                        <i className="fa-2x fab fa-reddit    "></i>
                      </a>
                      <ReactTooltip place="top" effect="solid" />

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
                    ></i>
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
                    <ul className="list-unstyled tab_list tab_list_border d-flex align-items-center justify-content-center">
                      {tab_list_object.map((v) => {
                        return (
                          <li className="tab_list_item" key={v.id}>
                            <Link
                              onClick={tabHandle}
                              to={v.link}
                              className={`tab_list_action tab_list_action_hover p-3 mb-0 text-white-50 h5 d-inline-flex align-items-center ${v.activeTab ? "tab_active" : ""
                                } `}
                            >
                              {v.icon} {v.name}
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
                {isItems &&
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

            {!isItems && (
              <>
                {/* ......................for Activity tab.......................  */}
                <AccountActivity></AccountActivity>
                {/* ......................for Activity tab....................... End */}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CollectionAccount2;

const AccountActivity = () => {
  const [activityDuration, setActivityDuration] = React.useState('Last 90 Days')
  return (
    <div id="AccountActivity">
      <div className="container-fluid mb-5">
        <div className="row  border_top">
          <div className="filter_aside_wrapper  p-3">
            {/* Filter left side */}
            <div className="">
              <button className="btn btn-muted m-0 p-0">
                <svg width={40} fill="var(--text-white-50)" className="MuiSvgIcon-root  MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightAltIcon"><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" /></svg>
              </button>
            </div>
            {/* Filter left side End */}
          </div>
          <div className="col flex-grow-1  p-3">
            <div className="row gy-4">
              <div className="col-12">
                <div className="control_wrapper">
                  <div className="d-flex flex-wrap align-items-center">
                    {/* control */}
                    <div className="dropdown">
                      <button
                        className="btn form_custom_control w-100 py-2 text-start d-flex align-items-center"
                        data-mdb-ripple-duration="0"
                        data-mdb-toggle="dropdown"
                      >
                        <span className="flex-grow-1">{activityDuration}</span>
                        <i className="fas fa-angle-down   ps-4 "></i>
                      </button>
                      <div className="dropdown-menu form_custom_control w-100 py-0">
                        <ul className="list-unstyled bg_transparent w-100 py-0">
                          <li className=" mb-2">
                            <button
                              onClick={() => setActivityDuration("Last 90 Days")}
                              className="btn form_custom_control w-100  text-start d-flex align-items-center"
                              data-mdb-ripple-duration="0"
                              data-mdb-toggle="dropdown"
                            >
                              <span className="flex-grow-1">Last 90 Days</span>
                            </button>
                          </li>
                          <li className=" mb-2">
                            <button
                              onClick={() => setActivityDuration("Last 30 Days")}
                              className="btn form_custom_control w-100  text-start d-flex align-items-center"
                              data-mdb-ripple-duration="0"
                              data-mdb-toggle="dropdown"
                            >
                              <span className="flex-grow-1">Last 30 Days</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>


                    <div className="box ms-3 small">
                      <span className="d-block">90 Day Avg. Price</span>
                      <span className="d-block text-primary">
                        2.4862
                      </span>
                    </div>

                    <div className="box ms-3 small">
                      <span className="d-block">90 Day Volume</span>
                      <span className="d-block text-primary">
                        22,606.7036
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <img src={require('../../Static/img/chart_img/all_time_chart.png')} className="w-100" alt="img" />
              </div>
              <div className="col-12">
                <div className="row justify-content-center">
                  <div className="col-11 col-lg-10">
                    <div className="custom_table_history">
                      <div className="table-responsive">
                        <table className="table text-white">
                          <thead>
                            <tr>
                              <th className="text-nowrap">Collection</th>
                              <th className="text-nowrap">Volume</th>
                              <th className="text-nowrap">24h%</th>
                              <th className="text-nowrap">7d%</th>
                              <th className="text-nowrap">Floor Price</th>
                              <th className="text-nowrap">Owners</th>
                              <th className="text-nowrap">Items</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-nowrap">
                                1 <span className="globe_box"></span>
                                World of Women Galaxy
                              </td>
                              <td className="text-nowrap">
                                <img
                                  className="me-2"
                                  style={{ height: "20px" }}
                                  src={require("../../Static/img/eth.svg").default}
                                  alt="img"
                                />
                                18,531,52
                              </td>
                              <td className="negative_value">-81.93%</td>
                              <td className="positive_value">+119.08%</td>
                              <td>
                                <img
                                  className="me-2"
                                  style={{ height: "20px" }}
                                  src={require("../../Static/img/eth.svg").default}
                                  alt="img"
                                />
                                1.45
                              </td>
                              <td>10.3K</td>
                              <td>20.2K</td>
                            </tr>

                            <tr>
                              <td className="text-nowrap">
                                1 <span className="globe_box"></span>
                                World of Women Galaxy
                              </td>
                              <td className="text-nowrap">
                                <img
                                  className="me-2"
                                  style={{ height: "20px" }}
                                  src={require("../../Static/img/eth.svg").default}
                                  alt="img"
                                />
                                18,531,52
                              </td>
                              <td className="negative_value">-81.93%</td>
                              <td className="">---</td>
                              <td>
                                <img
                                  className="me-2"
                                  style={{ height: "20px" }}
                                  src={require("../../Static/img/eth.svg").default}
                                  alt="img"
                                />
                                1.45
                              </td>
                              <td>10.3K</td>
                              <td>20.2K</td>
                            </tr>

                            <tr>
                              <td className="text-nowrap">
                                1 <span className="globe_box"></span>
                                World of Women Galaxy
                              </td>
                              <td className="text-nowrap">
                                <img
                                  className="me-2"
                                  style={{ height: "20px" }}
                                  src={require("../../Static/img/eth.svg").default}
                                  alt="img"
                                />
                                18,531,52
                              </td>
                              <td className="negative_value">-81.93%</td>
                              <td className="">---</td>
                              <td>
                                {" "}
                                <img
                                  className="me-2"
                                  style={{ height: "20px" }}
                                  src={require("../../Static/img/eth.svg").default}
                                  alt="img"
                                />
                                1.45
                              </td>
                              <td>10.3K</td>
                              <td>20.2K</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
