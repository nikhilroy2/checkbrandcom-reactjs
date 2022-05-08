import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

function Header(props) {
  const explore_object = [
    {
      id: 1,
      name: "Persons",
      link: "explore?tab=persons",
    },
    {
      id: 2,
      name: "Brands",
      link: "explore?tab=brands",
    },
    {
      id: 3,
      name: "Options",
      link: "explore?tab=options",
    },
    {
      id: 4,
      name: "Bonds",
      link: "explore?tab=bonds",
    },
  ];

  const stats_object = [
    {
      id: 1,
      name: "Persons",
      link: "#",
    },
    {
      id: 2,
      name: "Brands",
      link: "#",
    },
    {
      id: 3,
      name: "Options",
      link: "#",
    },
    {
      id: 4,
      name: " Bonds - Filte",
      link: "#",
    },
  ];

  const user_nav_object = [
    {
      id: 1,
      name: "Profile",
      link: "#",
      icon: (
        <svg
          className="me-2 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
          focusable="false"
          aria-hidden="true"
          style={{ height: "25px" }}
          viewBox="0 0 24 24"
          data-testid="PersonOutlineOutlinedIcon"
        >
          <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Favorites",
      link: "#",
      icon: (
        <svg
          className="me-2 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
          focusable="false"
          aria-hidden="true"
          style={{ height: "25px" }}
          viewBox="0 0 24 24"
          data-testid="FavoriteBorderOutlinedIcon"
        >
          <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
        </svg>
      ),
    },
    {
      id: 3,
      name: "Watchlist",
      link: "#",
      icon: (
        <svg
          className="me-2 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="RemoveRedEyeOutlinedIcon"
          style={{ height: "25px" }}
        >
          <path d="M12 6.5c3.79 0 7.17 2.13 8.82 5.5-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z" />
        </svg>
      ),
    },
    {
      id: 4,
      name: "My Collections",
      link: "#",
      icon: (
        <svg
          className="me-2 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          style={{ height: "25px" }}
          data-testid="GridOnOutlinedIcon"
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" />
        </svg>
      ),
    },
    {
      id: 5,
      name: "Settings",
      link: "#",
      icon: (
        <svg
          style={{ height: "25px", width: "25px" }}
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          className="me-2"
          width="569.613px"
          height="569.614px"
          viewBox="0 0 569.613 569.614"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                d="M371.49,563.638l113.052-65.854c5.26-3.063,9.088-8.094,10.64-13.975c1.555-5.888,0.701-12.148-2.359-17.405
    l-30.769-52.807c4.789-6.524,9.083-13.115,12.972-19.918c3.893-6.799,7.405-13.84,10.606-21.275l61.114-0.221
    c6.086-0.021,11.915-2.464,16.202-6.781c4.287-4.32,6.687-10.165,6.665-16.255l-0.48-130.833
    c-0.024-6.089-2.464-11.919-6.784-16.206c-4.299-4.269-10.113-6.662-16.166-6.662c-0.03,0-0.062,0-0.089,0l-61.182,0.242
    c-6.444-14.462-14.428-28.14-23.871-40.913l30.417-53.143c6.294-11.001,2.481-25.025-8.52-31.316L369.403,5.335
    c-5.281-3.023-11.545-3.822-17.424-2.231c-5.872,1.598-10.872,5.462-13.892,10.747L307.665,67
    c-15.766-1.662-31.653-1.613-47.363,0.144l-30.796-52.892c-3.063-5.263-8.094-9.091-13.975-10.646
    c-5.884-1.551-12.148-0.704-17.408,2.359L85.068,71.823c-10.949,6.38-14.657,20.429-8.28,31.38l30.765,52.831
    c-4.761,6.484-9.048,13.076-12.953,19.899c-3.904,6.824-7.417,13.855-10.6,21.255l-61.139,0.235
    C10.187,197.472-0.046,207.785,0,220.456L0.48,351.29c0.024,6.086,2.463,11.919,6.784,16.206
    c4.299,4.269,10.11,6.661,16.166,6.661c0.028,0,0.058,0,0.086,0l61.203-0.229c6.432,14.452,14.413,28.131,23.868,40.915
    l-30.413,53.141c-3.023,5.284-3.825,11.548-2.231,17.423c1.597,5.872,5.462,10.872,10.747,13.896l113.535,64.977
    c3.596,2.056,7.513,3.032,11.38,3.032c7.962,0,15.701-4.146,19.942-11.552l30.417-53.149c15.799,1.671,31.684,1.619,47.348-0.144
    l30.799,52.89c3.066,5.26,8.094,9.088,13.978,10.643C359.967,567.552,366.23,566.705,371.49,563.638z M341.129,465.911
    c-4.902-8.418-14.599-12.815-24.137-10.994c-20.588,3.935-42.174,3.999-63.128,0.202c-9.572-1.735-19.184,2.741-24.015,11.181
    l-26.748,46.745l-73.694-42.18l26.75-46.741c4.832-8.439,3.819-19.006-2.521-26.371c-13.978-16.239-24.685-34.594-31.818-54.554
    c-3.265-9.131-11.918-15.227-21.61-15.227c-0.027,0-0.058,0-0.085,0l-53.825,0.199l-0.315-84.937l53.819-0.205
    c9.722-0.04,18.366-6.197,21.576-15.374c3.69-10.557,7.962-20.019,13.06-28.917c5.101-8.914,11.089-17.387,18.311-25.897
    c6.294-7.417,7.225-17.993,2.334-26.396l-27.081-46.509l73.385-42.754l27.078,46.497c4.893,8.4,14.544,12.821,24.095,11.004
    c20.716-3.911,42.317-3.978,63.189-0.19c9.557,1.753,19.189-2.742,24.019-11.178l26.753-46.744l73.697,42.179l-26.753,46.742
    c-4.826,8.437-3.816,19,2.521,26.368c13.956,16.221,24.669,34.587,31.842,54.59c3.271,9.119,11.919,15.202,21.604,15.202
    c0.031,0,0.062,0,0.092,0l53.789-0.214l0.315,84.927l-53.783,0.192c-9.712,0.037-18.351,6.182-21.569,15.347
    c-3.746,10.654-8.023,20.131-13.082,28.975c-5.064,8.847-11.067,17.338-18.356,25.958c-6.271,7.418-7.194,17.978-2.305,26.368
    l27.078,46.472l-73.391,42.749L341.129,465.911z"
              />
              <path
                d="M392.531,346.458c16.472-28.773,20.746-62.24,12.047-94.232s-29.342-58.685-58.115-75.151
    c-18.761-10.74-40.05-16.417-61.562-16.417c-44.446,0-85.762,23.944-107.822,62.485c-33.994,59.404-13.327,135.39,46.071,169.386
    c18.764,10.737,40.052,16.411,61.564,16.411C329.158,408.943,370.475,385.001,392.531,346.458z M352.696,323.658
    c-13.902,24.293-39.955,39.385-67.985,39.385c-13.528,0-26.934-3.58-38.764-10.349c-37.433-21.426-50.456-69.312-29.033-106.751
    c13.905-24.291,39.958-39.385,67.987-39.385c13.528,0,26.932,3.58,38.762,10.355c18.136,10.379,31.142,27.197,36.628,47.359
    C365.771,284.435,363.075,305.524,352.696,323.658z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      ),
    },
    {
      id: 6,
      name: "Night Mode",
      link: "#",
      icon: (
        <svg
          className="me-2 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
          focusable="false"
          aria-hidden="true"
          style={{ height: "25px" }}
          viewBox="0 0 24 24"
          data-testid="DarkModeOutlinedIcon"
        >
          <path d="M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" />
        </svg>
      ),
    },
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const [isMobileDrawer, setIsMobileDrawer] = React.useState(false);
  const [isExploreDrawer, setIsExploreDrawer] = useState(false);
  const [isStatsDrawer, setIsStatsDrawer] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleMobileDrawer = () => {
    setIsMobileDrawer((prevState) => !prevState);
  };
  const toggleExploreDrawer = () => {
    setIsExploreDrawer((prevState) => !prevState);
  };

  const toggleStatsDrawer = () => {
    setIsStatsDrawer((prevState) => !prevState);
  };

  const drawer_body_list_object = [
    {
      id: 1,
      name: "MetaMask",
      img: require("../../Static/img/wallet_img/metamask-alternative.webp"),
      badge_name: "Popular",
      link: "#",
    },
    {
      id: 2,
      name: "Coinbase Wallet",
      img: require("../../Static/img/wallet_img/walletlink-alternative.webp"),
      badge_name: "",
      link: "#",
    },
    {
      id: 3,
      name: "WalletConnect",
      img: require("../../Static/img/wallet_img/walletconnect-alternative.webp"),
      badge_name: "Solana",
      link: "#",
    },
    {
      id: 4,
      name: "Phantom",
      img: require("../../Static/img/wallet_img/phantom.svg").default,
      badge_name: "Solana",
      link: "#",
    },
    {
      id: 5,
      name: "Glow",
      img: require("../../Static/img/wallet_img/glow.svg").default,
      badge_name: "",
      link: "#",
    },
  ];

  const drawer_body_list_more_object = [
    {
      id: 1,
      name: "Fortmatic",
      img: require("../../Static/img/wallet_img/fortmatic-alternative.webp"),
      badge_name: "",
      link: "#",
    },
    {
      id: 2,
      name: "Kaikas",
      img: require("../../Static/img/wallet_img/kaikas-alternative.webp"),
      badge_name: "",
      link: "#",
    },
    {
      id: 3,
      name: "Bitski",
      img: require("../../Static/img/wallet_img/bitski-alternative.webp"),
      badge_name: "",
      link: "#",
    },
    {
      id: 4,
      name: "Venly",
      img: require("../../Static/img/wallet_img/venly.svg").default,
      badge_name: "",
      link: "#",
    },
    {
      id: 5,
      name: "Dapper",
      img: require("../../Static/img/wallet_img/dapper-icon.webp"),
      badge_name: "",
      link: "#",
    },
    {
      id: 6,
      name: "Authereum",
      img: require("../../Static/img/wallet_img/authereum-alternative.webp"),
      badge_name: "",
      link: "#",
    },
    {
      id: 7,
      name: "Torus",
      img: require("../../Static/img/wallet_img/torus-alternative.webp"),
      badge_name: "",
      link: "#",
    },
    {
      id: 8,
      name: "Portis",
      img: require("../../Static/img/wallet_img/portis-alternative.svg")
        .default,
      badge_name: "",
      link: "#",
    },
    {
      id: 9,
      name: "OperaTouch",
      img: require("../../Static/img/wallet_img/opera-touch-alternative.svg")
        .default,
      badge_name: "mobile",
      link: "#",
    },
    {
      id: 10,
      name: "Trust",
      img: require("../../Static/img/wallet_img/trust-alternative.webp"),
      badge_name: "mobile",
      link: "#",
    },
  ];

  const [isMoreObject, setIsMoreObject] = useState(false);

  const connectWallet = () => {
    setIsMobileDrawer(false);
    setIsOpen(true);
  };

  // searchbox toggle
  const [isToggleSearch, setIsTogglSearch] = useState(false);

  // NightModeHandle
  const [isNight, setIsNight] = useState(true);
  const NightModeHandle = () => {
    setIsNight(!isNight);
    isNight
      ? document.documentElement.classList.add("light_theme")
      : document.documentElement.classList.remove("light_theme");
    // after local storage night mode
  };

  return (
    <header id="Header" className="">
      <nav className="d-flex px-2 px-sm-3 py-1 bg_1d text-white align-items-center">
        <div className="logo_wrapper flex-grow-1">
          <Link to="/">
            <img src={require("../../Static/img/logo.png")} alt="" />
          </Link>
        </div>
        <div className="searchBox_wrapper px-2 px-sm-3 py-1 flex-grow-1 nav_list_wrapper">
          <i className="fas fa-search  d-none d-sm-block  "></i>
          <input
            placeholder="Search items, collections, and accounts"
            type="text"
            className="form-control w-75 p-2 px-5 d-none d-sm-block"
          />
          <button
            className="border-0 outline-0 m-0 p-0 d-sm-none bg-transparent nav_item"
            onClick={() => setIsTogglSearch(true)}
          >
            <i
              className="fas fa-search  nav_item "
              style={{ fontSize: "25px" }}
            ></i>
          </button>

          <div
            className={`btn_toggle_search_box ${
              isToggleSearch ? "is_toggle_open" : ""
            }`}
          >
            <i
              className="fas fa-angle-left fa-2x   "
              onClick={() => setIsTogglSearch(false)}
            ></i>
            <input
              placeholder="Search items, collections, and accounts"
              type="text"
              className="form-control w-100 p-2 px-5"
            />
          </div>
        </div>
        <div className="nav_list_wrapper">
          <ul className="list-unstyled d-flex align-items-center mb-0">
            <li className="nav_list_hover d-none d-lg-block">
              <div className="hover_action">
                <Link className="nav_item px-3 py-1 " to="/explore?tab=top">
                  Explore
                </Link>
                <ul className="list-unstyled hover_list min_width">
                  {explore_object.map((v) => {
                    return (
                      <li key={v.id} className="hover_list_item ">
                        <Link
                          to={v.link}
                          className="hover_list_action border border-dark nav_item d-flex px-3 py-3 align-items-center"
                        >
                          <svg
                            className="me-2 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            style={{ height: "20px" }}
                            data-testid="GridOnOutlinedIcon"
                          >
                            <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" />
                          </svg>
                          {v.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li className="nav_list_hover d-none d-lg-block">
              <div className="hover_action">
                <Link className="nav_item px-3 py-1 " to="/">
                  Stats
                </Link>
                <ul className="list-unstyled hover_list min_width">
                  {stats_object.map((v) => {
                    return (
                      <li key={v.id} className="hover_list_item ">
                        <Link
                          to={v.link}
                          className="hover_list_action border border-dark nav_item d-flex px-3 py-3 align-items-center"
                        >
                          <svg
                            className="me-2 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            style={{ height: "20px" }}
                            data-testid="GridOnOutlinedIcon"
                          >
                            <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" />
                          </svg>
                          {v.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li>
              <Link
                className="nav_item px-2 px-sm-3 py-1 d-none d-lg-block"
                to="/"
              >
                Resources
              </Link>
            </li>

            <li className="d-none d-lg-block">
              <Link className="nav_item px-2 px-sm-3 py-1" to="/">
                Create
              </Link>
            </li>

            <li className="nav_list_hover px-2 px-sm-3 ">
              <div className="hover_action">
                <button className="btn btn-muted nav_item p-0">
                  <svg
                    style={{ height: "32px" }}
                    className="nav_item MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="AccountCircleOutlinedIcon"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
                  </svg>
                </button>
                <ul className="list-unstyled hover_list min_width min_width_lg hover_right">
                  {user_nav_object.map((v) => {
                    return (
                      <li key={v.id} className="hover_list_item">
                        {v.name.toLowerCase() === "night mode" ? (
                          <div className="hover_list_action border border-dark nav_item d-flex px-3 py-3 align-items-center justify-content-between">
                            <span>
                              {v.icon}
                              {v.name}
                            </span>
                            <button
                              onClick={() => NightModeHandle()}
                              className={`night_mode_control bg-primary rounded-pill ${
                                isNight ? "" : "light_mode"
                              }`}
                            ></button>
                          </div>
                        ) : (
                          <Link
                            to={v.link}
                            className="hover_list_action border border-dark nav_item d-flex px-3 py-3 align-items-center"
                          >
                            {v.icon}
                            {v.name}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>

            <li className="px-2 px-sm-3 py-1">
              <button
                className="btn btn-muted nav_item p-0"
                onClick={toggleDrawer}
              >
                <svg
                  style={{ height: "32px" }}
                  className="nav_item MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="AccountBalanceWalletOutlinedIcon"
                >
                  <path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" />
                  <circle cx={16} cy={12} r="1.5" />
                </svg>
              </button>
            </li>

            <li className="px-3 py-1 d-lg-none">
              <button
                className="btn btn-muted nav_item p-0"
                onClick={toggleMobileDrawer}
              >
                {isMobileDrawer ? (
                  <svg
                    style={{ height: "32px" }}
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="CloseOutlinedIcon"
                  >
                    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                  </svg>
                ) : (
                  <svg
                    style={{ height: "32px" }}
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="MenuOutlinedIcon"
                  >
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Nav drawer */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="NavDrawer"
      >
        <div className="drawer_title p-3">
          <svg
            className="me-2 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="var(--text-white)"
            style={{ height: "35px" }}
            data-testid="AccountCircleOutlinedIcon"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
          </svg>
          My wallet
        </div>
        <div className="drawer_body p-3">
          <p className="pera text-white-50">
            Connect with one of our available{" "}
            <a href="#" className="text-link">
              wallet
            </a>{" "}
            providers or create a new one.
          </p>

          <ul className="list-unstyled drawer_body_list mb-0">
            {drawer_body_list_object.map((v) => {
              return (
                <li className="" key={v.id}>
                  <a
                    href={v.link}
                    className="ripple list_action p-3 border border-dark text-light"
                  >
                    <img
                      className="me-2"
                      style={{ height: "24px" }}
                      src={v.img}
                      alt="img"
                    />
                    <span>{v.name}</span>
                    {v.badge_name !== "" && (
                      <span className={`custom_badge ${v.badge_name}`}>
                        {v.badge_name}
                      </span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
          {isMoreObject && (
            <ul className="list-unstyled drawer_body_list">
              {drawer_body_list_more_object.map((v) => {
                return (
                  <li
                    className=""
                    key={v.id}
                    style={{
                      pointerEvents:
                        v.badge_name === "mobile" ? "none" : "visible",
                    }}
                  >
                    <a
                      href={v.link}
                      className="ripple list_action p-3 border border-dark text-light"
                    >
                      <img
                        className="me-2"
                        style={{ height: "24px" }}
                        src={v.img}
                        alt="img"
                      />
                      <span>{v.name}</span>
                      {v.badge_name !== "" && (
                        <span
                          className={`custom_badge text-white-50 ${v.badge_name}`}
                        >
                          {v.badge_name} only
                        </span>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}

          <div className="drawer_show_more">
            <button
              onClick={() => setIsMoreObject(!isMoreObject)}
              className="btn_show_more p-3 text-white border-dark not_alpha border outline-0 shadow-0"
            >
              {isMoreObject ? "Show fewer options" : "Show more options"}
            </button>
          </div>
        </div>
      </Drawer>

      {/* Nav mobile drawer */}
      <Drawer
        open={isMobileDrawer}
        onClose={toggleMobileDrawer}
        direction="right"
        className="NavDrawer"
      >
        <div className="drawer_body p-3">
          <ul className="list-unstyled drawer_body_list mb-0">
            <li>
              <button
                onClick={toggleExploreDrawer}
                className="ripple justify-content-between d-flex bg-transparent w-100 list_action p-3 border-0 text-light"
              >
                <div className="content d-flex align-items-center">
                  <svg
                    style={{ height: "32px" }}
                    className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="ExploreOutlinedIcon"
                    fill="var(--text-white)"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5 7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
                  </svg>
                  <span>Explore</span>{" "}
                </div>
                <i className="fas fa-angle-right    "></i>
              </button>
            </li>

            <li>
              <button
                onClick={toggleStatsDrawer}
                className="ripple justify-content-between d-flex bg-transparent w-100 list_action p-3 border-0 text-light"
              >
                <div className="content d-flex align-items-center">
                  <svg
                    style={{ height: "32px" }}
                    className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="BarChartOutlinedIcon"
                    fill="var(--text-white)"
                  >
                    <path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z" />
                  </svg>
                  <span>Stats</span>{" "}
                </div>

                <i className="fas fa-angle-right    "></i>
              </button>
            </li>

            <li>
              <button className="ripple justify-content-between d-flex bg-transparent w-100 list_action p-3 border-0 text-light">
                <div className="content d-flex align-items-center">
                  <svg
                    style={{ height: "32px" }}
                    className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="LibraryBooksOutlinedIcon"
                    fill="var(--text-white)"
                  >
                    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z" />
                  </svg>
                  <span>Resources</span>{" "}
                </div>
              </button>
            </li>

            <li>
              <div className=" justify-content-between d-flex bg-transparent w-100 list_action p-3 border-0 text-light">
                <div className="content d-flex align-items-center">
                  <svg
                    style={{ height: "32px" }}
                    className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="BedtimeOutlinedIcon"
                    fill="var(--text-white)"
                  >
                    <path d="M9.27 4.49c-1.63 7.54 3.75 12.41 7.66 13.8C15.54 19.38 13.81 20 12 20c-4.41 0-8-3.59-8-8 0-3.45 2.2-6.4 5.27-7.51m2.72-2.48C6.4 2.01 2 6.54 2 12c0 5.52 4.48 10 10 10 3.71 0 6.93-2.02 8.66-5.02-7.51-.25-12.09-8.43-8.32-14.97h-.35z"></path>
                  </svg>
                  <span>Night mode</span>{" "}
                </div>
                <button
                  onClick={() => NightModeHandle()}
                  className={`night_mode_control bg-primary rounded-pill ${
                    isNight ? "" : "light_mode"
                  }`}
                ></button>
              </div>
            </li>

            <li className="my-3 p-3">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => connectWallet()}
              >
                Connect wallet
              </button>
            </li>
          </ul>
        </div>
      </Drawer>

      {/* Explore Drawer */}

      <Drawer
        open={isExploreDrawer}
        onClose={toggleExploreDrawer}
        direction="right"
        className="NavDrawer"
      >
        <div className="drawer_body">
          <button
            onClick={() => setIsExploreDrawer(false)}
            className="ripple text-start bg-dark w-100 list_action p-3 border-0 text-light"
          >
            <i className="fas fa-angle-left   me-2 "></i> Explore
          </button>
          <ul className="list-unstyled  p-3">
            {explore_object.map((v) => {
              return (
                <li key={v.id} className="">
                  <Link
                    to={v.link}
                    className="text-light nav_item d-flex px-3 py-3 align-items-center"
                  >
                    <svg
                      className="me-2 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      style={{ height: "20px" }}
                      fill="var(--text-white)"
                      data-testid="GridOnOutlinedIcon"
                    >
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" />
                    </svg>
                    {v.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Drawer>

      {/* Stats Drawer */}
      <Drawer
        open={isStatsDrawer}
        onClose={toggleStatsDrawer}
        direction="right"
        className="NavDrawer"
      >
        <div className="drawer_body">
          <button
            onClick={() => setIsStatsDrawer(false)}
            className="ripple text-start bg-dark w-100 list_action p-3 border-0 text-light"
          >
            <i className="fas fa-angle-left   me-2 "></i> Stats
          </button>
          <ul className="list-unstyled  p-3">
            {stats_object.map((v) => {
              return (
                <li key={v.id} className="">
                  <Link
                    to={v.link}
                    className="text-light nav_item d-flex px-3 py-3 align-items-center"
                  >
                    <svg
                      className="me-2 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      style={{ height: "20px" }}
                      fill="var(--text-white)"
                      data-testid="GridOnOutlinedIcon"
                    >
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" />
                    </svg>
                    {v.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Drawer>
    </header>
  );
}

export default Header;
