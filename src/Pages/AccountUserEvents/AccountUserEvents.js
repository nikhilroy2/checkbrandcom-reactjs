import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./AccountUserEvents.css";
import CollectionsCard2 from "../../Components/CollectionsCard2/CollectionsCard2";
import CollectionsCard from "../../Components/CollectionsCard/CollectionsCard";
import FilterLeftSide from "../../Components/FilterLeftSide/FilterLeftSide";
import FilterCard from "../../Components/FilterCard/FilterCard";
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
  const location = useLocation();

  //console.log(location.search)
  const [tabActiveName, setTabActiveName] = React.useState(location.search);

  
  //let tabActiveValue = "";
  const [tabActiveValue, setTabActiveValue] = React.useState('');
  useEffect(() => {
    console.log(location.search)
    switch (location.search) {
      case "?tab=Collected":
        setTabActiveValue(<EventCards></EventCards>)
        break;
      case "?tab=items":
        setTabActiveValue(<EventCreatedItems></EventCreatedItems>)
        break;
      case "?tab=collections":
        setTabActiveValue(<EventCreatedCollection></EventCreatedCollection>)
        break;
      case "?tab=favorited":
        setTabActiveValue(<EventFavorite></EventFavorite>)
        break;
      case "?tab=activity":
        setTabActiveValue(<EventActivity></EventActivity>)
        break;
      case "?tab=offers_received":
        setTabActiveValue(<EventOffersReveived></EventOffersReveived>)
        break;
      case "?tab=offers_mode":
        setTabActiveValue(<EventOffersMade></EventOffersMade>)
        break;
      default:
        setTabActiveValue("not found")

    }
  }, [location])

  //EventOffersReveived
  return (
    <div id="EventsTab">
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="custom_tab my-5 pt-4 table-responsive-lg">
                <ul className="list-unstyled tab_list  tab_list_border d-flex align-items-center justify-content-lg-center">
                  {/* Collected tab */}
                  <li className="tab_list_item">
                    <Link
                      onClick={() => setTabActiveName("?tab=Collected")}
                      to="?tab=Collected"
                      className={`tab_list_action tab_list_action_hover p-3 mb-0 text-white-50
                      h5 d-inline-flex align-items-center ${tabActiveName === "?tab=Collected" ? "tab_active" : ""
                        }`}
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
                      className={`tab_list_action tab_list_action_hover p-3 mb-0 text-white-50
                      h5 d-inline-flex align-items-center ${tabActiveName === "?tab=items" ||
                          tabActiveName === "?tab=collections"
                          ? "tab_active"
                          : ""
                        }`}
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
                      Created
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
                      className="dropdown-menu custom_dropdown"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <Link
                          className="dropdown-item dropdown_action px-3 py-2"
                          onClick={() => setTabActiveName("?tab=items")}
                          to="?tab=items"
                        >
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
                        <Link
                          className="dropdown-item dropdown_action px-3 py-2"
                          onClick={() =>
                            setTabActiveName("?tab=collections")
                          }
                          to="?tab=collections"
                        >
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
                      onClick={() => setTabActiveName("?tab=favorited")}
                      to="?tab=favorited"
                      className={`tab_list_action tab_list_action_hover p-3 mb-0 text-white-50
                      h5 d-inline-flex align-items-center ${tabActiveName === "?tab=favorited" ? "tab_active" : ""
                        }`}
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
                      onClick={() => setTabActiveName("?tab=activity")}
                      to="?tab=activity"
                      className={`tab_list_action tab_list_action_hover p-3 mb-0 text-white-50
                      h5 d-inline-flex align-items-center ${tabActiveName === "?tab=activity" ? "tab_active" : ""
                        }`}
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
                      className={`tab_list_action tab_list_action_hover p-3 mb-0 text-white-50
                      h5 d-inline-flex align-items-center ${tabActiveName === "?tab=offers_received" ||
                          tabActiveName === "?tab=offers_mode"
                          ? "tab_active"
                          : ""
                        }`}
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
                      className="dropdown-menu custom_dropdown"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <Link
                          onClick={() => setTabActiveName("?tab=offers_received")}
                          className="dropdown-item dropdown_action"
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
                        <Link
                          className="dropdown-item dropdown_action"
                          onClick={() => setTabActiveName("?tab=offers_mode")}
                          to="?tab=offers_mode"
                        >
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
        {/* tabActiveValue result fromt switch condition */}
        {tabActiveValue}
      </section>
    </div>
  );
};

// for tab value
const EventCards = () => {
  return (
    <div className="container-fluid">

      <div className="row border_top">
        <div className="filter_aside_wrapper  p-3">
          {/* Filter left side */}
          <FilterLeftSide></FilterLeftSide>
          {/* Filter left side End */}
        </div>


        <div className="col flex-grow-1 p-3">
          <FilterCard></FilterCard>
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
      </div>

    </div>
  );
};

// for tab value
const EventCreatedItems = () => {
  return (
    <div className="container-fluid">

      <div className="row border_top">
        <div className="filter_aside_wrapper  p-3">
          {/* Filter left side */}
          <FilterLeftSide></FilterLeftSide>
          {/* Filter left side End */}
        </div>

        <div className="col flex-grow-1 p-3">
          <FilterCard></FilterCard>
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



      </div>

    </div>
  );
};

// for tab value
const EventCreatedCollection = () => {
  const event_collection_object = [
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
  ];
  return (
    <div className="container-fluid">
      <div className="row border_top">
        <div className="filter_aside_wrapper  p-3">
          {/* Filter left side */}
          <FilterLeftSide></FilterLeftSide>
          {/* Filter left side End */}
        </div>

        <div className="col flex-grow-1 p-3">
          <FilterCard></FilterCard>
          <div className="row gy-4">
            {true &&
              event_collection_object.map((v) => {
                return (
                  <div className="col-sm-6 col-lg-4 col-xl-3 h-auto" key={v.id}>
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


      </div>


    </div>
  );
};

// for tab value
const EventFavorite = () => {
  return (
    <div className="container-fluid">
      <div className="row gy-4">
        <div className="col-12 py-5 my-5">
          <h2 className="text-center">
            This user hasn't favorited any items yet
          </h2>
        </div>
      </div>
    </div>
  );
};

// for tab value
const EventActivity = () => {
  return (
    <div className="container-fluid">
      <div className="row border_top">

        <div className="filter_aside_wrapper p-3">
          {/* Filter left side */}
          <FilterLeftSide></FilterLeftSide>
          {/* Filter left side End */}
        </div>
        <div className="col flex-grow-1 p-3">
          <div className="row gy-4">
            <div className="col-12">
              {/* use event EventActivity1 for demo: https://prnt.sc/VajcJetkxb6r */}
              {/* <EventActivity1></EventActivity1> */}

              {/* use event EventActivity2 for demo: https://prnt.sc/QErYgJ-o_ZkF */}
              <EventActivity2></EventActivity2>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventActivity1 = () => {
  return (
    <div className="table-responsive">
      <table className="table  text-white custom_activity_table">
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <svg
                className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ShoppingCartIcon"
                fill="currentColor"
                height="20px"
              >
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
              Sale
            </td>

            <td>
              <div className="item_td d-flex align-items-center">
                <div className="item_box me-3">
                  <img
                    src={require("../../Static/img/item_box.png")}
                    alt="img"
                  />
                </div>
                <div className="content">
                  <span className="text_r155">Collection name</span>
                  <br />
                  <span>Token name</span>
                </div>
              </div>
            </td>

            <td>
              <div className="d-flex">
                <img
                  className="me-2"
                  style={{ height: "20px" }}
                  src={require("../../Static/img/eth.svg").default}
                  alt="img"
                />

                <div className="content">
                  <span>0.05</span>
                  <br />
                  <span className="text_r155">$121.19</span>
                </div>
              </div>
            </td>

            <td>1</td>

            <td>
              <Link to="/">ArowanaHub</Link>
            </td>

            <td>
              <Link to="/">DF6DA6</Link>
            </td>
            <td>
              <Link to="/">
                6 hours ago
                <svg
                  className="MuiSvgIcon-root ms-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="LaunchIcon"
                  fill="currentColor"
                  style={{ height: "20px" }}
                >
                  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                </svg>
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <svg
                className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="SwapHorizIcon"
                fill="currentColor"
                height="20px"
              >
                <path d="M6.99 11 3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
              </svg>
              Transfer
            </td>

            <td>
              <div className="item_td d-flex align-items-center">
                <div className="item_box me-3">
                  <img
                    src={require("../../Static/img/item_box.png")}
                    alt="img"
                  />
                </div>
                <div className="content">
                  <span className="text_r155">Collection name</span>
                  <br />
                  <span>Token name</span>
                </div>
              </div>
            </td>

            <td>
              <div className="d-flex">
                <img
                  className="me-2"
                  style={{ height: "20px" }}
                  src={require("../../Static/img/eth.svg").default}
                  alt="img"
                />

                <div className="content">
                  <span>0.05</span>
                  <br />
                  <span className="text_r155">$121.19</span>
                </div>
              </div>
            </td>

            <td>1</td>

            <td>
              <Link to="/">ArowanaHub</Link>
            </td>

            <td>
              <Link to="/">DF6DA6</Link>
            </td>
            <td>
              <Link to="/">
                6 hours ago
                <svg
                  className="MuiSvgIcon-root ms-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="LaunchIcon"
                  fill="currentColor"
                  style={{ height: "20px" }}
                >
                  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                </svg>
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ShoppingCartIcon"
                fill="currentColor"
                height="20px"
              >
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
              Sale
            </td>

            <td>
              <div className="item_td d-flex align-items-center">
                <div className="item_box me-3">
                  <img
                    src={require("../../Static/img/item_box.png")}
                    alt="img"
                  />
                </div>
                <div className="content">
                  <span className="text_r155">Collection name</span>
                  <br />
                  <span>Token name</span>
                </div>
              </div>
            </td>

            <td>
              <div className="d-flex">
                <img
                  className="me-2"
                  style={{ height: "20px" }}
                  src={require("../../Static/img/eth.svg").default}
                  alt="img"
                />

                <div className="content">
                  <span>0.05</span>
                  <br />
                  <span className="text_r155">$121.19</span>
                </div>
              </div>
            </td>

            <td>1</td>

            <td>
              <Link to="/">ArowanaHub</Link>
            </td>

            <td>
              <Link to="/">DF6DA6</Link>
            </td>
            <td>
              <Link to="/">
                6 hours ago
                <svg
                  className="MuiSvgIcon-root ms-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="LaunchIcon"
                  fill="currentColor"
                  style={{ height: "20px" }}
                >
                  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                </svg>
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ShoppingCartIcon"
                fill="currentColor"
                height="20px"
              >
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
              Sale
            </td>

            <td>
              <div className="item_td d-flex align-items-center">
                <div className="item_box me-3">
                  <img
                    src={require("../../Static/img/item_box.png")}
                    alt="img"
                  />
                </div>
                <div className="content">
                  <span className="text_r155">Collection name</span>
                  <br />
                  <span>Token name</span>
                </div>
              </div>
            </td>

            <td>
              <div className="d-flex">
                <img
                  className="me-2"
                  style={{ height: "20px" }}
                  src={require("../../Static/img/eth.svg").default}
                  alt="img"
                />

                <div className="content">
                  <span>0.05</span>
                  <br />
                  <span className="text_r155">$121.19</span>
                </div>
              </div>
            </td>

            <td>1</td>

            <td>
              <Link to="/">ArowanaHub</Link>
            </td>

            <td>
              <Link to="/">DF6DA6</Link>
            </td>
            <td>
              <Link to="/">
                6 hours ago
                <svg
                  className="MuiSvgIcon-root ms-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="LaunchIcon"
                  fill="currentColor"
                  style={{ height: "20px" }}
                >
                  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                </svg>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ShoppingCartIcon"
                fill="currentColor"
                height="20px"
              >
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
              Sale
            </td>

            <td>
              <div className="item_td d-flex align-items-center">
                <div className="item_box me-3">
                  <img
                    src={require("../../Static/img/item_box.png")}
                    alt="img"
                  />
                </div>
                <div className="content">
                  <span className="text_r155">Collection name</span>
                  <br />
                  <span>Token name</span>
                </div>
              </div>
            </td>

            <td>
              <div className="d-flex">
                <img
                  className="me-2"
                  style={{ height: "20px" }}
                  src={require("../../Static/img/eth.svg").default}
                  alt="img"
                />

                <div className="content">
                  <span>0.05</span>
                  <br />
                  <span className="text_r155">$121.19</span>
                </div>
              </div>
            </td>

            <td>1</td>

            <td>
              <Link to="/">ArowanaHub</Link>
            </td>

            <td>
              <Link to="/">DF6DA6</Link>
            </td>
            <td>
              <Link to="/">
                6 hours ago
                <svg
                  className="MuiSvgIcon-root ms-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="LaunchIcon"
                  fill="currentColor"
                  style={{ height: "20px" }}
                >
                  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                </svg>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
const EventActivity2 = () => {
  const EventActivity2_object = [
    {
      id: 1,
      item: 'Token name',
      unit_price: '1.25 WETH',
      usd_unit_price: '$ 1,233.92',
      floor_difference: '11% below',
      from: 'Nameprofile',
      expiration: 'about 3 days',
      received: '44 minutes ago'
    },
    {
      id: 2,
      item: 'Token name',
      unit_price: '1.25 WETH',
      usd_unit_price: '$ 1,233.92',
      floor_difference: '11% below',
      from: 'Nameprofile',
      expiration: 'about 3 days',
      received: '44 minutes ago'
    },
    {
      id: 3,
      item: 'Token name',
      unit_price: '1.25 WETH',
      usd_unit_price: '$ 1,233.92',
      floor_difference: '11% below',
      from: 'Nameprofile',
      expiration: 'about 3 days',
      received: '44 minutes ago'
    },
  ]
  return (
    <div className="table-responsive">
      <table className="table  text-white custom_activity_table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Unit Price</th>
            <th>USD Unit Price</th>
            <th>Floor Difference</th>
            <th>From</th>
            <th>Expiraion</th>
            <th>Received</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {EventActivity2_object.map(v => {
            return (
              <tr key={v.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="token_box me-3"></div>
                    {v.item}
                  </div>
                </td>

                <td>
                  {v.unit_price}
                </td>

                <td>
                  {v.usd_unit_price}
                </td>

                <td>{v.floor_difference}</td>

                <td>
                  <Link to="/">{v.from}</Link>
                </td>

                <td>
                  {v.expiration}
                </td>
                <td>
                  {v.received}
                </td>
                <td>
                  -
                </td>
              </tr>

            )
          })}

        </tbody>
      </table>
    </div>
  )
}

// for tab value
const EventOffersReveived = () => {
  return (
    <div className="container-fluid">

      <div className="row border_top">
        <div className="filter_aside_wrapper  p-3">
          {/* Filter left side */}
          <FilterLeftSide></FilterLeftSide>
          {/* Filter left side End */}
        </div>

        <div className="col flex-grow-1 p-3">
          <FilterCard></FilterCard>
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



      </div>

    </div>
  );
};

// for tab value
const EventOffersMade = () => {
  return (
    <div className="container-fluid">

      <div className="row border_top">
        <div className="filter_aside_wrapper  p-3">
          {/* Filter left side */}
          <FilterLeftSide></FilterLeftSide>
          {/* Filter left side End */}
        </div>

        <div className="col flex-grow-1 p-3">
          <FilterCard></FilterCard>
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



      </div>

    </div>
  );
};
