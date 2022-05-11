import React from "react";
import "./AssetsPage.css";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
function AssetsPage(props) {
  const [isPropertiesExpand, setIsPropertiesExpand] = React.useState(true);
  const [isDatesExpand, setIsDatesExpand] = React.useState(true);
  const [isBond, setIsBond] = React.useState(true);
  const [isDetails, setIsDetails] = React.useState(true);
  return (
    <div id="AssetsPage">
      <section>
        <div className="section_control border_bottom">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className=" d-flex align-items-center justify-content-end py-3">
                  <button className="btn btn-outline-primary btn-lg px-md-5 text-capitalize me-3">
                    Edit
                  </button>
                  <button className="btn btn-primary btn-lg px-md-5 text-capitalize">
                    Sell
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-xxl mt-4">
          <div className="row">
            <div className="col-md-5">
              <div className="assets_left_wrapper">
                <div className="assets_card_box border_all_side">
                  <div className="card_box_header p-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="box">
                        <button
                          className="btn btn-muted p-0"
                          data-tip="Blockchain: Solana"
                        >
                          <svg
                            className="SolanaLogoreact__StyledSvg-sc-1emql2y-0"
                            fill="#8A939B"
                            height={20}
                            viewBox="0 0 400 400"
                            width={20}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0)">
                              <path
                                className="SolanaLogo--s"
                                clipRule="evenodd"
                                d="M123.42 255.13C124.173 254.302 125.09 253.641 126.113 253.188C127.135 252.735 128.242 252.501 129.36 252.5L312.64 252.65C313.421 252.652 314.184 252.88 314.837 253.307C315.49 253.734 316.006 254.342 316.32 255.056C316.635 255.77 316.735 256.561 316.609 257.331C316.483 258.101 316.136 258.818 315.61 259.395L276.58 302.37C275.827 303.198 274.909 303.86 273.885 304.313C272.862 304.766 271.755 305 270.635 305L87.3602 304.85C86.5796 304.848 85.8164 304.62 85.1631 304.193C84.5098 303.766 83.9946 303.158 83.6801 302.444C83.3655 301.73 83.2652 300.939 83.3913 300.169C83.5173 299.399 83.8643 298.682 84.3902 298.105L123.42 255.13ZM315.61 219.355C316.136 219.932 316.483 220.649 316.609 221.419C316.735 222.189 316.635 222.98 316.32 223.694C316.006 224.408 315.49 225.016 314.837 225.443C314.184 225.87 313.421 226.098 312.64 226.1L129.365 226.25C128.246 226.25 127.139 226.016 126.115 225.563C125.091 225.11 124.173 224.448 123.42 223.62L84.3902 180.62C83.8643 180.043 83.5173 179.326 83.3913 178.556C83.2652 177.786 83.3655 176.995 83.6801 176.281C83.9946 175.567 84.5098 174.959 85.1631 174.532C85.8164 174.105 86.5796 173.877 87.3602 173.875L270.64 173.725C271.759 173.726 272.865 173.96 273.888 174.413C274.911 174.866 275.828 175.527 276.58 176.355L315.61 219.355ZM123.42 97.63C124.173 96.8023 125.09 96.1408 126.113 95.6879C127.135 95.2351 128.242 95.0007 129.36 95L312.64 95.15C313.421 95.1516 314.184 95.3798 314.837 95.8069C315.49 96.234 316.006 96.8416 316.32 97.5559C316.635 98.2703 316.735 99.0606 316.609 99.8308C316.483 100.601 316.136 101.318 315.61 101.895L276.58 144.87C275.827 145.698 274.909 146.36 273.885 146.813C272.862 147.266 271.755 147.5 270.635 147.5L87.3602 147.35C86.5796 147.348 85.8164 147.12 85.1631 146.693C84.5098 146.266 83.9946 145.658 83.6801 144.944C83.3655 144.23 83.2652 143.439 83.3913 142.669C83.5173 141.899 83.8643 141.182 84.3902 140.605L123.42 97.63Z"
                                fill="url(#paint0_linear)"
                                fillRule="evenodd"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                gradientUnits="userSpaceOnUse"
                                id="paint0_linear"
                                x1="90.4202"
                                x2="309.58"
                                y1="309.58"
                                y2="90.42"
                              >
                                <stop stopColor="#9945FF" />
                                <stop offset="0.2" stopColor="#7962E7" />
                                <stop offset={1} stopColor="#00D18C" />
                              </linearGradient>
                              <clipPath id="clip0">
                                <rect
                                  fill="white"
                                  height={210}
                                  transform="translate(80 95)"
                                  width={240}
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                        <ReactTooltip place="top" effect="solid" />
                      </div>

                      <div className="box d-flex align-items-center">
                        <button
                          data-tip="Favorite"
                          className="btn btn-muted p-0 me-1"
                        >
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
                        <ReactTooltip place="top" effect="solid" />

                        <span className="counter text_r35">0</span>
                      </div>
                    </div>
                  </div>
                  <div className="card_box_body">
                    <img
                      className="card_box_img"
                      src={require("../../Static/img/assets_img/assets_img.png")}
                      alt="img"
                    />
                  </div>
                  <div className="card_box_footer"></div>
                </div>

                <div className="assets_collapse_box mt-3 border_all_side radius_10">
                  <div className="collapse_item">
                    <div
                      className="collapse_header border_bottom px-3 py-2"
                      onClick={() => setIsPropertiesExpand(!isPropertiesExpand)}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="box">
                          <svg
                            className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="LabelIcon"
                            fill="currentColor"
                            height="20px"
                          >
                            <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z" />
                          </svg>{" "}
                          <strong>Properties</strong>
                        </div>
                        <div className="box">
                          <svg
                            className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="ArrowDropDownIcon"
                            fill="currentColor"
                            height="30px"
                            style={{
                              transform: `${
                                isPropertiesExpand ? "scaleY(-1)" : "scaleY(1)"
                              }`,
                            }}
                          >
                            <path d="m7 10 5 5 5-5z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {isPropertiesExpand && (
                      <div className="collapse_body border_bottom bg_1d">
                        <ul className="list-unstyled d-flex flex-wrap">
                          <li className="p-2">
                            <Link
                              to="/"
                              className="collapse_list_box d-block text-center small p-2 radius_10 border border-primary"
                            >
                              <span>ACCESSORIES</span>
                              <br />
                              <strong className="text-white">None</strong>
                              <br />
                              <span className="text_white_75">
                                50% have this trait
                              </span>
                            </Link>
                          </li>
                          <li className="p-2">
                            <Link
                              to="/"
                              className="collapse_list_box d-block text-center small p-2 radius_10 border border-primary"
                            >
                              <span>ACCESSORIES</span>
                              <br />
                              <strong className="text-white">None</strong>
                              <br />
                              <span className="text_white_75">
                                50% have this trait
                              </span>
                            </Link>
                          </li>
                          <li className="p-2">
                            <Link
                              to="/"
                              className="collapse_list_box d-block text-center small p-2 radius_10 border border-primary"
                            >
                              <span>ACCESSORIES</span>
                              <br />
                              <strong className="text-white">None</strong>
                              <br />
                              <span className="text_white_75">
                                50% have this trait
                              </span>
                            </Link>
                          </li>
                          <li className="p-2">
                            <Link
                              to="/"
                              className="collapse_list_box d-block text-center small p-2 radius_10 border border-primary"
                            >
                              <span>ACCESSORIES</span>
                              <br />
                              <strong className="text-white">None</strong>
                              <br />
                              <span className="text_white_75">
                                50% have this trait
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="collapse_item">
                    <div
                      className="collapse_header border_bottom px-3 py-2"
                      onClick={() => setIsDatesExpand(!isDatesExpand)}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="box">
                          <svg
                            className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="ListIcon"
                            fill="currentColor"
                            height="20px"
                          >
                            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
                          </svg>
                          <strong>Dates</strong>
                        </div>
                        <div className="box">
                          <svg
                            className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="ArrowDropDownIcon"
                            fill="currentColor"
                            height="30px"
                            style={{
                              transform: isDatesExpand ? "scaleY(-1)" : "",
                            }}
                          >
                            <path d="m7 10 5 5 5-5z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {isDatesExpand && (
                      <div className="collapse_body bg_1d border_bottom">
                        <div className="d-flex justify-content-between align-items-center p-3">
                          <div className="box">
                            <strong>Birthday</strong>
                          </div>
                          <div className="box">Tuesday, February 1st, 2022</div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="collapse_item">
                    <div
                      className="collapse_header border_bottom px-3 py-2"
                      onClick={() => setIsBond(!isBond)}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="box">
                          <svg
                            className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="AssignmentIcon"
                            fill="currentColor"
                            height="20px"
                          >
                            <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                          </svg>

                          <strong>Bond</strong>
                        </div>
                        <div className="box">
                          <svg
                            className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="ArrowDropDownIcon"
                            fill="currentColor"
                            height="30px"
                            style={{
                              transform: isBond ? "scaleY(-1)" : "",
                            }}
                          >
                            <path d="m7 10 5 5 5-5z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {isBond && (
                      <div className="collapse_body bg_1d border_bottom">
                        <table className="text-white table table-borderless">
                          <tbody>
                            <tr>
                              <td>Denomination</td>
                              <td className="text-end">0.1ETH</td>
                            </tr>

                            <tr>
                              <td>Yield</td>
                              <td className="text-end">20%</td>
                            </tr>
                            <tr>
                              <td>Redemption</td>
                              <td className="text-end">0.12ETH</td>
                            </tr>
                            <tr>
                              <td>Profit</td>
                              <td className="text-end">0.02ETH</td>
                            </tr>
                            <tr>
                              <td>Time</td>
                              <td className="text-end">200 days left</td>
                            </tr>
                            <tr>
                              <td>Value</td>
                              <td className="text-end">0.10904 ETH</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>

                  <div className="collapse_item">
                    <div
                      className="collapse_header border_bottom px-3 py-2"
                      onClick={() => setIsDetails(!isDetails)}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="box">
                          <svg
                            className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="StickyNote2OutlinedIcon"
                            fill="currentColor"
                            height="20px"
                          >
                            <path d="M19 5v9h-5v5H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10l6-6V5c0-1.1-.9-2-2-2zm-7 11H7v-2h5v2zm5-4H7V8h10v2z" />
                          </svg>
                          <strong>Details</strong>
                        </div>
                        <div className="box">
                          <svg
                            className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="ArrowDropDownIcon"
                            fill="currentColor"
                            height="30px"
                            style={{
                              transform: isBond ? "scaleY(-1)" : "",
                            }}
                          >
                            <path d="m7 10 5 5 5-5z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {isDetails && (
                      <div className="collapse_body bg_1d border_bottom">
                        <table className="text-white table table-borderless">
                          <tbody>
                            <tr>
                              <td>Contract Address</td>
                              <td className="text-end">
                                <Link to="/">0xa5f1...f215</Link>
                              </td>
                            </tr>

                            <tr>
                              <td>Token ID</td>
                              <td className="text-end">
                                <Link to="/">202703</Link>
                              </td>
                            </tr>
                            <tr>
                              <td>Token Standard</td>
                              <td className="text-end">ERC-721</td>
                            </tr>
                            <tr>
                              <td>Blockchain</td>
                              <td className="text-end">Polygon</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="assets_right_wrapper">
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/" className="user h5">
                    Solful
                  </Link>
                  <div className="btn-group border_all_side radius_10">
                    <div className="wrapper">
                      <button
                        className="btn btn-muted p-2 text-white border_left"
                        data-mdb-ripple-duration="0"
                        data-tip="Refresh Metadata"
                      >
                        <svg
                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="RefreshIcon"
                          fill="currentColor"
                          height="25px"
                        >
                          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
                        </svg>
                      </button>
                      <ReactTooltip place="top" effect="solid" />
                    </div>
                    <div className="wrapper">
                      <button
                        className="btn btn-muted p-2 text-white border_left"
                        data-mdb-ripple-duration="0"
                        data-tip="View on Solful"
                      >
                        <svg
                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="OpenInNewIcon"
                          fill="currentColor"
                          height="25px"
                        >
                          <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                        </svg>
                      </button>
                      <ReactTooltip place="top" effect="solid" />
                    </div>
                    <div className="wrapper">
                      <button
                        className="btn btn-muted p-2 text-white border_left"
                        data-mdb-ripple-duration="0"
                        data-tip="Share"
                      >
                        <svg
                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="ShareIcon"
                          fill="currentColor"
                          height="25px"
                        >
                          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                        </svg>
                      </button>
                      <ReactTooltip place="top" effect="solid" />
                    </div>
                    <div className="wrapper">
                      <button
                        className="btn btn-muted p-2 text-white border_left"
                        data-mdb-ripple-duration="0"
                        data-tip="More"
                      >
                        <svg
                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="MoreVertIcon"
                          fill="currentColor"
                          height="25px"
                        >
                          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                      </button>
                      <ReactTooltip place="top" effect="solid" />
                    </div>
                  </div>
                </div>
                <h3>Token name</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AssetsPage;
