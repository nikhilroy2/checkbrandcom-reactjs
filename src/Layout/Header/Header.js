import React from "react";

function Header(props) {
  return (
    <header>
      <nav className="d-flex px-3 py-1 bg-dark text-white align-items-center">
        <div className="logo_wrapper flex-grow-1">
          <a href="#">
            <img src={require("../../Static/img/logo.png")} alt="" />
          </a>
        </div>
        <div className="searchBox_wrapper px-3 py-1 flex-grow-1">
          <input type="text" className="form-control w-75" />
        </div>
        <div className="nav_list_wrapper">
          <ul className="list-unstyled d-flex align-items-center mb-0">
            <li>
              <a className="text-white px-3 py-1" href="#">
                Explore
              </a>
            </li>

            <li>
              <a className="text-white px-3 py-1" href="#">
                Stats
              </a>
            </li>

            <li>
              <a className="text-white px-3 py-1" href="#">
                Resources
              </a>
            </li>

            <li>
              <a className="text-white px-3 py-1" href="#">
                Create
              </a>
            </li>

            <li className="px-3 py-1">
              <button className="btn btn-muted text-white p-0">
                <svg
                  style={{ height: "32px" }}
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="AccountCircleOutlinedIcon"
                  fill="#fff"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
                </svg>
              </button>
            </li>

            <li className="px-3 py-1">
              <button className="btn btn-muted text-white p-0">
                <svg
                  style={{ height: "32px" }}
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="AccountBalanceWalletOutlinedIcon"
                  fill="#fff"
                >
                  <path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" />
                  <circle cx={16} cy={12} r="1.5" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
