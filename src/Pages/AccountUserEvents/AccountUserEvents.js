import React from "react";
import { Link } from "react-router-dom";
import "./AccountUserEvents.css";
import CollectionsCard2 from "../../Components/CollectionsCard2/CollectionsCard2";
function AccountUserEvents(props) {
  return (
    <div id="AccountUserEvents">
      <section>
        <div className="header_part text-center mt-5">
          <div className="user_box mb-2">
            <img
              src={require("../../Static/img/user_img/example_user.png")}
              alt="img"
            />
          </div>
          <h3>Jawn_</h3>
          <button className="btn btn-outline-dark text-white my-2 rounded-pill">
            <img
              className="me-2"
              style={{ height: "16px" }}
              src={require("../../Static/img/eth.svg").default}
              alt="img"
            />
            0x495f...7b5e
          </button>
          <br />
          <span className="d-block mb-1">Monkey Business</span>
          <span>Joined August 2021</span>

          {/* social user */}
          <div className="social_user_box">
            <div className="btn-group">
              <button className="btn btn-outline-light px-3">
                <i className="fa-2x fab fa-twitter    "></i>
              </button>

              <button className="btn btn-outline-light px-3">
                <i className="fa-2x fas fa-share-alt    "></i>
              </button>
            </div>
          </div>
          {/* social user End */}
        </div>
      </section>

      <EventsTab></EventsTab>
    </div>
  );
}

export default AccountUserEvents;

const EventsTab = () => {
  return (
    <div id="EventsTab">
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="custom_tab my-5 pt-4">
                <ul className="list-unstyled tab_list tab_list_border d-flex align-items-center justify-content-center">
                  {/* Collected tab */}
                  <li className="tab_list_item">
                    <Link
                      to="?tab=Collected"
                      className="tab_list_action tab_list_action_hover p-3 mb-0 text-white-50
                           h5 d-inline-flex align-items-center tab_active"
                    >
                      <svg
                        className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="PhotoFilterIcon"
                        style={{ height: "25px" }}
                        fill="currentColor"
                      >
                        <path d="M19.02 10v9H5V5h9V3H5.02c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2zM17 10l.94-2.06L20 7l-2.06-.94L17 4l-.94 2.06L14 7l2.06.94zm-3.75.75L12 8l-1.25 2.75L8 12l2.75 1.25L12 16l1.25-2.75L16 12z" />
                      </svg>
                      Collected
                      <small className="ms-3">129</small>
                    </Link>
                  </li>

                  {/* Collected tab End*/}

                  {/* Created tab */}
                  <li className="tab_list_item dropdown">
                    <Link
                      data-mdb-toggle="dropdown"
                      to="/"
                      className="tab_list_action tab_list_action_hover p-3 mb-0 text-white-50
                           h5 d-inline-flex align-items-center"
                    >
                      <svg
                        className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="FormatPaintIcon"
                        style={{ height: "25px" }}
                        fill="currentColor"
                      >
                        <path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z" />
                      </svg>
                      Collected
                      <svg
                        className="MuiSvgIcon-root ms-3 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="ArrowDropDownIcon"
                        style={{ height: "25px" }}
                        fill="currentColor"
                      >
                        <path d="m7 10 5 5 5-5z" />
                      </svg>
                    </Link>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <Link className="dropdown-item" to="?tab=items">
                          <svg
                            className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            style={{ height: "25px" }}
                            fill="currentColor"
                            data-testid="CollectionsIcon"
                          >
                            <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4 2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" />
                          </svg>
                          Items
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="?tab=collections">
                          <svg
                            className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="GridOnIcon"
                            style={{ height: "25px" }}
                            fill="currentColor"
                          >
                            <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" />
                          </svg>
                          Collections
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Created tab End*/}

                  {/* Favorited tab */}
                  <li className="tab_list_item">
                    <Link
                      to="?tab=favorited"
                      className="tab_list_action tab_list_action_hover p-3 mb-0 text-white-50
                           h5 d-inline-flex align-items-center"
                    >
                      <svg
                        className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="FavoriteBorderIcon"
                        style={{ height: "25px" }}
                        fill="currentColor"
                      >
                        <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                      </svg>
                      Favorited
                      <small className="ms-3">129</small>
                    </Link>
                  </li>
                  {/* Favorited tab End */}

                  {/* Activity tab */}
                  <li className="tab_list_item">
                    <Link
                      to="?tab=activity"
                      className="tab_list_action tab_list_action_hover p-3 mb-0 text-white-50
                           h5 d-inline-flex align-items-center"
                    >
                      <svg
                        className="MuiSvgIcon-root me-2  MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="RestoreIcon"
                        style={{ height: "25px" }}
                        fill="currentColor"
                      >
                        <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
                      </svg>
                      Activity
                    </Link>
                  </li>
                  {/* Activity tab End*/}

                  {/* Offers tab  */}
                  <li className="tab_list_item dropdown">
                    <Link
                      data-mdb-toggle="dropdown"
                      to=""
                      className="tab_list_action tab_list_action_hover p-3 mb-0 text-white-50
                           h5 d-inline-flex align-items-center"
                    >
                      <svg
                        className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="TocIcon"
                        style={{ height: "25px" }}
                        fill="currentColor"
                      >
                        <path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z" />
                      </svg>
                      Offers
                      <svg
                        className="MuiSvgIcon-root ms-3 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="ArrowDropDownIcon"
                        style={{ height: "25px" }}
                        fill="currentColor"
                      >
                        <path d="m7 10 5 5 5-5z" />
                      </svg>
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <Link
                          className="dropdown-item"
                          to="?tab=offers_received"
                        >
                          <svg
                            className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="CallReceivedIcon"
                            style={{ height: "25px" }}
                            fill="currentColor"
                          >
                            <path d="M20 5.41 18.59 4 7 15.59V9H5v10h10v-2H8.41z" />
                          </svg>{" "}
                          Offers received
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="?tab=offers_mode">
                          <svg
                            className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="CallMadeIcon"
                            style={{ height: "25px" }}
                            fill="currentColor"
                          >
                            <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z" />
                          </svg>{" "}
                          Offers made
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* Offers tab End  */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row gy-4">
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="col_wrapper">
                <CollectionsCard2></CollectionsCard2>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="col_wrapper">
                <CollectionsCard2></CollectionsCard2>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="col_wrapper">
                <CollectionsCard2></CollectionsCard2>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="col_wrapper">
                <CollectionsCard2></CollectionsCard2>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="col_wrapper">
                <CollectionsCard2></CollectionsCard2>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="col_wrapper">
                <CollectionsCard2></CollectionsCard2>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="col_wrapper">
                <CollectionsCard2></CollectionsCard2>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="col_wrapper">
                <CollectionsCard2></CollectionsCard2>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="col_wrapper">
                <CollectionsCard2></CollectionsCard2>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="col_wrapper">
                <CollectionsCard2></CollectionsCard2>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="col_wrapper">
                <CollectionsCard2></CollectionsCard2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
