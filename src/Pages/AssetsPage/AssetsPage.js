import React, { useState } from "react";
import "./AssetsPage.css";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

import Countdown from "react-countdown";
import CollectionsCard2 from "../../Components/CollectionsCard2/CollectionsCard2";
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

                <div className="mt-4 d-flex align-items-center">
                  <div className="box me-5 text_white_75">
                    Owned by <Link to="/">name</Link>
                  </div>
                  <div className="box d-flex align-items-center text_white_75">
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
                    5 favorite
                  </div>
                </div>
                {/* SaleEndBox */}
                <SaleEndBox></SaleEndBox>

                {/* Price History */}
                <PriceHistory></PriceHistory>

                {/* Listings */}
                <Listings></Listings>

                {/* Offers */}
                <Offers></Offers>
              </div>
            </div>

            {/* ItemActivity */}
            <ItemActivity></ItemActivity>

            {/* MoreCollections */}
            <MoreCollections></MoreCollections>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AssetsPage;

const SaleEndBox = () => {
  // Random component
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="countdown_wrapper d-flex align-items-center">
          <div className="countdown_item me-3 me-md-5">
            <span className="d-block">{days}</span>
            <b className="text_white_75">Days</b>
          </div>
          <div className="countdown_item me-3 me-md-5">
            <span className="d-block">{hours}</span>
            <b className="text_white_75">Hours</b>
          </div>
          <div className="countdown_item me-3 me-md-5">
            <span className="d-block">{minutes}</span>
            <b className="text_white_75">Minutes</b>
          </div>
          <div className="countdown_item me-3 me-md-5">
            <span className="d-block">{seconds}</span>
            <b className="text_white_75">Seconds</b>
          </div>
        </div>
      );
    }
  };

  return (
    <div id="SaleEndBox">
      <div className="wrapper radius_10 border_all_side mt-4">
        <div className="sale_header border_bottom p-3 pb-3">
          <p className="text_white_75">
            Sale ends January 31, 2023 at 6:27am +10
          </p>
          {/* https://planetcalc.com/7157/ date to milliseconds converter */}
          <Countdown date={1675146420000} renderer={renderer} />
        </div>
        <div className="sale_body p-3">
          <p>Current price</p>
          <div className="price_value d-flex align-items-center">
            <img
              className="me-3"
              style={{ height: "30px" }}
              src={require("../../Static/img/eth.svg").default}
              alt="img"
            />
            <strong className="h3 me-3">0,01</strong>
            <span className="text-white-50">($34.18)</span>
          </div>
          <div className="btn_control_wrapper">
            <button className="btn my-2 w-75 justify-content-center btn-primary btn-lg align-items-center d-inline-flex text-capitalize">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root me-1 css-1om0hkc"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="AccountBalanceWalletIcon"
                fill="currentColor"
                style={{ height: "20px" }}
              >
                <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              </svg>{" "}
              Buy now
            </button>

            {/* outline button */}
            <br />

            <button className="btn text-capitalize radius_10 me-3 btn-outline-primary btn-lg my-2">
              <svg
                className="MuiSvgIcon-root me-1 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="CreditCardIcon"
                fill="currentColor"
                style={{ height: "20px" }}
              >
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
              </svg>{" "}
              Buy with card
            </button>
            <button className="btn text-capitalize radius_10 me-3 btn-outline-primary btn-lg my-2">
              <svg
                className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="LocalOfferIcon"
                fill="currentColor"
                style={{ height: "20px" }}
              >
                <path d="m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
              </svg>
              Make offer
            </button>
            <button className="btn text-capitalize radius_10 btn-outline-primary btn-lg my-2">
              <svg
                className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="MonetizationOnIcon"
                fill="currentColor"
                style={{ height: "20px" }}
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
              </svg>
              Get redemption
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PriceHistory = () => {
  const [isPriceHistoryExpand, setIsPriceHistoryExpand] = useState(true);
  const [allTimeDropdown, setAllTimeDropdown] = useState("All time");
  return (
    <div id="PriceHistory">
      <div className="wrapper">
        <div className="assets_collapse_box mt-3 border_all_side radius_10">
          <div className="collapse_item">
            <div
              className="collapse_header border_bottom px-3 py-2"
              onClick={() => setIsPriceHistoryExpand(!isPriceHistoryExpand)}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className="box">
                  <svg
                    className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="TimelineIcon"
                    fill="currentColor"
                    height="20px"
                  >
                    <path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z" />
                  </svg>
                  <strong>Price history</strong>
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
                        isPriceHistoryExpand ? "scaleY(-1)" : "scaleY(1)"
                      }`,
                    }}
                  >
                    <path d="m7 10 5 5 5-5z" />
                  </svg>
                </div>
              </div>
            </div>
            {isPriceHistoryExpand && (
              <div className="collapse_body border_bottom bg_1d p-3">
                <div className="dropdown ">
                  <button
                    className="btn btn-muted  text-white me-4 btn-lg border_all_side dropdown-toggle"
                    type="button"
                    id="dropdownExampleAnimation"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    data-mdb-dropdown-animation="off"
                  >
                    <span className="me-5 pe-5">{allTimeDropdown}</span>
                  </button>
                  <div className="content d-inline-block">
                    <span className="d-block text_white_75">
                      All Time Avg. Price
                    </span>
                    <span className="text-white">0.0099</span>
                  </div>
                  <ul
                    className="dropdown-menu custom_dropdown"
                    aria-labelledby="dropdownExampleAnimation"
                  >
                    <li>
                      <a
                        onClick={() => setAllTimeDropdown("All time")}
                        className="dropdown-item dropdown_action"
                        href="javascript:void()"
                      >
                        All time
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setAllTimeDropdown("1 week")}
                        className="dropdown-item dropdown_action"
                        href="javascript:void()"
                      >
                        1 week
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setAllTimeDropdown("2 week")}
                        className="dropdown-item dropdown_action"
                        href="javascript:void()"
                      >
                        2 week
                      </a>
                    </li>

                    <li>
                      <a
                        onClick={() => setAllTimeDropdown("3 week")}
                        className="dropdown-item dropdown_action"
                        href="javascript:void()"
                      >
                        3 week
                      </a>
                    </li>
                  </ul>
                </div>

                {/* chart view */}
                <div className="chart_view_wrapper mt-3 mb-5">
                  <img
                    className="w-100"
                    src={require("../../Static/img/chart_img/all_time_chart.png")}
                    alt="img"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Listings = () => {
  const [isListingsExpand, setIsListingsExpand] = useState(true);
  return (
    <div id="PriceHistory">
      <div className="wrapper">
        <div className="assets_collapse_box mt-3 border_all_side radius_10">
          <div className="collapse_item">
            <div
              className="collapse_header border_bottom px-3 py-2"
              onClick={() => setIsListingsExpand(!isListingsExpand)}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className="box">
                  <svg
                    className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="LocalOfferIcon"
                    fill="currentColor"
                    height="20px"
                  >
                    <path d="m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
                  </svg>

                  <strong>Listings</strong>
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
                        isListingsExpand ? "scaleY(-1)" : "scaleY(1)"
                      }`,
                    }}
                  >
                    <path d="m7 10 5 5 5-5z" />
                  </svg>
                </div>
              </div>
            </div>
            {isListingsExpand && (
              <div className="collapse_body border_bottom bg_1d">
                <div className="table-responsive">
                  <table className="table text-white mb-0">
                    <thead>
                      <tr className="border_bottom">
                        <th className="">Price</th>
                        <th className="">USD Price</th>
                        <th className="">Expiration</th>
                        <th className="">Fvrom</th>
                        <th className=""></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border_bottom">
                        <td>
                          <img
                            style={{ height: "18px" }}
                            className="me-2"
                            src={require("../../Static/img/eth.svg").default}
                            alt="img"
                          />
                          0.01 ETH
                        </td>
                        <td>$34.18</td>
                        <td>1 day</td>
                        <td>
                          <a href="#">Ollie47nl</a>
                        </td>
                        <td>
                          <button className="btn btn-outline-primary px-2">
                            Buy
                          </button>
                        </td>
                      </tr>

                      <tr className="">
                        <td className="border-0">
                          <img
                            style={{ height: "18px" }}
                            className="me-2"
                            src={require("../../Static/img/eth.svg").default}
                            alt="img"
                          />
                          0.01 ETH
                        </td>
                        <td className="border-0">$34.18</td>
                        <td className="border-0">1 day</td>
                        <td className="border-0">
                          <a href="#">Ollie47nl</a>
                        </td>
                        <td className="border-0">
                          <button className="btn btn-outline-primary px-2">
                            Buy
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Offers = () => {
  const [isOffersExpand, setIsOffersExpand] = useState(true);
  return (
    <div id="PriceHistory">
      <div className="wrapper">
        <div className="assets_collapse_box mt-3 border_all_side radius_10">
          <div className="collapse_item">
            <div
              className="collapse_header border_bottom px-3 py-2"
              onClick={() => setIsOffersExpand(!isOffersExpand)}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className="box">
                  <svg
                    className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="TocIcon"
                    fill="currentColor"
                    height="20px"
                  >
                    <path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z" />
                  </svg>

                  <strong>Offers</strong>
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
                        isOffersExpand ? "scaleY(-1)" : "scaleY(1)"
                      }`,
                    }}
                  >
                    <path d="m7 10 5 5 5-5z" />
                  </svg>
                </div>
              </div>
            </div>
            {isOffersExpand && (
              <div className="collapse_body border_bottom bg_1d">
                <div className="table-responsive">
                  <table className="table text-white mb-0">
                    <thead>
                      <tr className="border_bottom">
                        <th className="">Price</th>
                        <th className="">USD Price</th>
                        <th className="">Floor Difference</th>
                        <th className="">Expiration</th>
                        <th className="">From</th>
                        <th className=""></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border_bottom">
                        <td>
                          <img
                            style={{ height: "18px" }}
                            className="me-2"
                            src={require("../../Static/img/eth.svg").default}
                            alt="img"
                          />
                          0.056 ETH
                        </td>
                        <td>$19.14</td>
                        <td>42% below</td>
                        <td>3 days</td>
                        <td>0C958A</td>
                      </tr>

                      <tr className="border_bottom">
                        <td>
                          <img
                            style={{ height: "18px" }}
                            className="me-2"
                            src={require("../../Static/img/eth.svg").default}
                            alt="img"
                          />
                          0.056 ETH
                        </td>
                        <td>$19.14</td>
                        <td>42% below</td>
                        <td>3 days</td>
                        <td>0C958A</td>
                      </tr>

                      <tr className="border_bottom">
                        <td>
                          <img
                            style={{ height: "18px" }}
                            className="me-2"
                            src={require("../../Static/img/eth.svg").default}
                            alt="img"
                          />
                          0.056 ETH
                        </td>
                        <td>$19.14</td>
                        <td>42% below</td>
                        <td>3 days</td>
                        <td>0C958A</td>
                      </tr>

                      <tr className="border_bottom">
                        <td>
                          <img
                            style={{ height: "18px" }}
                            className="me-2"
                            src={require("../../Static/img/eth.svg").default}
                            alt="img"
                          />
                          0.056 ETH
                        </td>
                        <td>$19.14</td>
                        <td>42% below</td>
                        <td>3 days</td>
                        <td>0C958A</td>
                      </tr>

                      <tr className="border_bottom">
                        <td>
                          <img
                            style={{ height: "18px" }}
                            className="me-2"
                            src={require("../../Static/img/eth.svg").default}
                            alt="img"
                          />
                          0.056 ETH
                        </td>
                        <td>$19.14</td>
                        <td>42% below</td>
                        <td>3 days</td>
                        <td>0C958A</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ItemActivity = () => {
  const [isItemActivity, setIsItemActivity] = useState(true);

  const [activityFilter, setActivityFilter] = useState("Filter");

  return (
    <div id="PriceHistory">
      <div className="wrapper">
        <div className="assets_collapse_box mt-3 border_all_side radius_10">
          <div className="collapse_item">
            <div
              className="collapse_header border_bottom px-3 py-2"
              onClick={() => setIsItemActivity(!isItemActivity)}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className="box">
                  <svg
                    className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="SwapVertIcon"
                    fill="currentColor"
                    height="20px"
                  >
                    <path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3 5 6.99h3V14h2V6.99h3L9 3z" />
                  </svg>

                  <strong>Item Activity</strong>
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
                        isItemActivity ? "scaleY(-1)" : "scaleY(1)"
                      }`,
                    }}
                  >
                    <path d="m7 10 5 5 5-5z" />
                  </svg>
                </div>
              </div>
            </div>
            {isItemActivity && (
              <div className="collapse_body border_bottom bg_1d">
                {/* filter wrapper */}
                <div className="filter_dropdown_wrapper pt-3 px-3">
                  <div className="dropdown ">
                    <button
                      className="btn btn-muted w-100 d-flex justify-content-between align-items-center text-white me-4 btn-lg border_all_side dropdown-toggle"
                      type="button"
                      id="dropdownExampleAnimation"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                      data-mdb-dropdown-animation="off"
                    >
                      <span className="me-5 pe-5">{activityFilter}</span>
                    </button>

                    <ul
                      className="dropdown-menu custom_dropdown"
                      aria-labelledby="dropdownExampleAnimation"
                    >
                      <li>
                        <a
                          onClick={() => setActivityFilter("All time")}
                          className="dropdown-item dropdown_action"
                          href="javascript:void()"
                        >
                          All time
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => setActivityFilter("1 week")}
                          className="dropdown-item dropdown_action"
                          href="javascript:void()"
                        >
                          1 week
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => setActivityFilter("2 week")}
                          className="dropdown-item dropdown_action"
                          href="javascript:void()"
                        >
                          2 week
                        </a>
                      </li>

                      <li>
                        <a
                          onClick={() => setActivityFilter("3 week")}
                          className="dropdown-item dropdown_action"
                          href="javascript:void()"
                        >
                          3 week
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table text-white mb-0">
                    <thead>
                      <tr className="border_bottom">
                        <th className="">List</th>
                        <th className="">Price</th>
                        <th className="">From</th>
                        <th className="">To</th>
                        <th className="">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border_bottom">
                        <td>
                          <svg
                            className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="LocalOfferIcon"
                            fill="currentColor"
                            style={{ height: "18px" }}
                          >
                            <path d="m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
                          </svg>
                          List
                        </td>

                        <td>
                          <img
                            style={{ height: "18px" }}
                            className="me-2"
                            src={require("../../Static/img/eth.svg").default}
                            alt="img"
                          />
                          0.008
                        </td>
                        <td>
                          <a href="#">MACSauce</a>
                        </td>
                        <td></td>
                        <td>
                          <a href="#">2 months ago</a>
                        </td>
                      </tr>

                      <tr className="border_bottom">
                        <td>
                          <svg
                            className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="LocalOfferIcon"
                            fill="currentColor"
                            style={{ height: "18px" }}
                          >
                            <path d="m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
                          </svg>
                          Bid
                        </td>

                        <td>
                          <img
                            style={{ height: "18px" }}
                            className="me-2"
                            src={require("../../Static/img/eth.svg").default}
                            alt="img"
                          />
                          0.008
                        </td>
                        <td>
                          <a href="#">MACSauce</a>
                        </td>
                        <td></td>
                        <td>
                          <a href="#">2 months ago</a>
                        </td>
                      </tr>

                      <tr className="border_bottom">
                        <td>
                          <svg
                            className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="LocalOfferIcon"
                            fill="currentColor"
                            style={{ height: "18px" }}
                          >
                            <path d="m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
                          </svg>
                          Transfer
                        </td>

                        <td></td>
                        <td>
                          <a href="#">MACSauce</a>
                        </td>
                        <td>
                          <a href="#">MACSauce</a>
                        </td>
                        <td>
                          <a href="#">2 months ago</a>
                        </td>
                      </tr>

                      <tr className="border_bottom">
                        <td>
                          <svg
                            className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="LocalOfferIcon"
                            fill="currentColor"
                            style={{ height: "18px" }}
                          >
                            <path d="m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
                          </svg>
                          Sale
                        </td>
                        <td>
                          <img
                            style={{ height: "18px" }}
                            className="me-2"
                            src={require("../../Static/img/eth.svg").default}
                            alt="img"
                          />
                          0.008
                        </td>
                        <td>
                          <a href="#">MACSauce</a>
                        </td>
                        <td>
                          <a href="#">MACSauce</a>
                        </td>
                        <td>
                          <a href="#">2 months ago</a>
                        </td>
                      </tr>

                      <tr className="border_bottom">
                        <td>
                          <svg
                            className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="LocalOfferIcon"
                            fill="currentColor"
                            style={{ height: "18px" }}
                          >
                            <path d="m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
                          </svg>
                          Minted
                        </td>
                        <td></td>
                        <td>
                          <a href="#">MACSauce</a>
                        </td>
                        <td>
                          <a href="#">MACSauce</a>
                        </td>
                        <td>
                          <a href="#">2 months ago</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const MoreCollections = () => {
  const [isMoreCollectionsExpand, setIsMoreCollectionsExpand] = useState(true);
  return (
    <div id="MoreCollections">
      <div className="wrapper">
        <div className="assets_collapse_box mt-3 border_all_side radius_10 mb-5">
          <div className="collapse_item">
            <div
              className="collapse_header border_bottom px-3 py-2"
              onClick={() =>
                setIsMoreCollectionsExpand(!isMoreCollectionsExpand)
              }
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className="box">
                  <svg
                    className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="TocIcon"
                    fill="currentColor"
                    height="20px"
                  >
                    <path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z" />
                  </svg>
                  <strong>More From This Collection</strong>
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
                        isMoreCollectionsExpand ? "scaleY(-1)" : "scaleY(1)"
                      }`,
                    }}
                  >
                    <path d="m7 10 5 5 5-5z" />
                  </svg>
                </div>
              </div>
            </div>
            {isMoreCollectionsExpand && (
              <>
                <div className="collapse_body border_bottom bg_1d">
                  <div className="container-fluid my-3">
                    <div className="row gy-4">
                      <div className="col-md-6 col-lg-4 col-xxl-3">
                        <div className="col_wrapper">
                          <CollectionsCard2></CollectionsCard2>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xxl-3">
                        <div className="col_wrapper">
                          <CollectionsCard2></CollectionsCard2>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xxl-3">
                        <div className="col_wrapper">
                          <CollectionsCard2></CollectionsCard2>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xxl-3">
                        <div className="col_wrapper">
                          <CollectionsCard2></CollectionsCard2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer_part text-center py-3 border_bottom bg_1d">
                  <button className="btn btn-outline-primary btn-lg">
                    View collection
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
