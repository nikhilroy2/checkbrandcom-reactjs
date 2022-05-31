import React, { useState } from "react";

function CreateCollection(props) {
  const [pageType, setPageType] = useState("Persons");

  const [selectAccountIndex, setSelectAccountIndex] = useState(1);
  const [selectBlockchain, setSelectBlockchain] = useState("Ethereum");
  const [addToken, setAddToken] = useState("Add token");
  return (
    <div id="CreateCollection" className="my-5">
      <section>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h2 className="section_title mb-3 mb-md-5">
                Create a collection
              </h2>
              <div className="form-group mt-3">
                <p>
                  Collection is creating on the OpenSea and is visible on
                  CheckBrandcom
                </p>
                <strong className="d-block">Logo image</strong>
                <p>
                  This image will also be used for navigation. 350 x 350
                  recommended.
                </p>

                <input
                  type="file"
                  name=""
                  id="img_logo_circle"
                  className="form_img_upload d-none"
                />
                <label htmlFor="img_logo_circle">
                  <div className="img_upload_control_circle">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="ImageIcon"
                      fill="var(--text-white)"
                      style={{ height: "60%" }}
                    >
                      <path
                        d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9  
                    2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
                      />
                    </svg>
                  </div>
                </label>
              </div>

              <div className="form-group mt-3">
                <strong className="d-block">Featured image</strong>
                <p>
                  This image will be used for featuning your collection on the
                  homepage, category pages, or other promotional areas of
                  OpenSea. 600 x 400 recommended.
                </p>
                <input
                  type="file"
                  name=""
                  id="img_logo_circle"
                  className="form_img_upload d-none"
                />
                <label htmlFor="img_logo_circle">
                  <div className="img_upload_control_radius">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="ImageIcon"
                      fill="var(--text-white)"
                      style={{ height: "60%" }}
                    >
                      <path
                        d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9  
                    2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
                      />
                    </svg>
                  </div>
                </label>
              </div>

              <div className="form-group mt-3">
                <strong className="d-block text-white">Banner image</strong>
                <p>
                  This image will appear at the top of your collection page.
                  Avoid including too much text in this banner image, as the
                  dimensions change on different devices. 1400 x 400
                  recommended.
                </p>
                <input
                  type="file"
                  name=""
                  id="img_logo_circle"
                  className="form_img_upload d-none"
                />
                <label htmlFor="img_logo_circle">
                  <div className="img_upload_control_radius banner_img">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="ImageIcon"
                      fill="var(--text-white)"
                      style={{ height: "60%" }}
                    >
                      <path
                        d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9  
                    2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
                      />
                    </svg>
                  </div>
                </label>
              </div>

              <div className="form-group mt-3">
                <label htmlFor="" className="text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control form_custom_control px-3 py-2"
                  placeholder="Example: Treasures of the Sea"
                />
              </div>

              <div className="form-group mt-3">
                <strong className=" d-block">URL OpenSea</strong>
                <p className="">
                  Customize your URL on OpenSea. Must only contain lowercase
                  letters, numbers and hyphens.
                </p>
                <input
                  type="text"
                  className="form-control form_custom_control px-3 py-2"
                  placeholder="https://opensea.io/collectio/treasures-of-the-sea"
                />
              </div>

              <div className="form-group mt-3">
                <strong className="text-success d-block">
                  URL CheckBrandcom
                </strong>
                <p className="">
                  Customize your URL on CheckBrandcom. Must only contain
                  lowercase letters, numbers and hyphens.
                </p>
                <input
                  type="text"
                  className="form-control form_custom_control px-3 py-2"
                  placeholder="https://checkbrand.com/collectio/treasures-of-the-sea"
                />
              </div>

              <div className="form-group mt-3">
                <strong className="text-white d-block">Description</strong>
                <p className="text-white">
                  Markdown syntax is supported. 0 of 1000 characters used.
                </p>
                <textarea
                  name=""
                  className="form_custom_control form-control"
                  rows="5"
                ></textarea>
              </div>

              <div className="form-group mt-3">
                <strong className="d-block">Category OpenSea</strong>

                <p className="text-white">
                  Adding a category will help make your item discoverable on
                  OpenSea.
                </p>
                <button className="btn_type_select text-nowrap radius_10">
                  Add category
                </button>
              </div>

              <div className="form-group mt-3">
                <strong className="text-success d-block">
                  Category checkBrandcom
                </strong>
                <p className="text-white">Select collection type</p>
                <div className="btn_select_box d-flex flex-wrap">
                  <div className="btn_select_box_item">
                    <button
                      type="button"
                      onClick={() => setPageType("Persons")}
                      className={`btn_type_select me-3 radius_10 ${pageType === "Persons" ? "select_type" : ""
                        }`}
                    >
                      Persons
                    </button>
                  </div>

                  <div className="btn_select_box_item">
                    <button
                      type="button"
                      onClick={() => setPageType("Brands")}
                      className={`btn_type_select me-3 radius_10 ${pageType === "Brands" ? "select_type" : ""
                        }`}
                    >
                      Brands
                    </button>
                  </div>

                  <div className="btn_select_box_item">
                    <button
                      type="button"
                      onClick={() => setPageType("Options")}
                      className={`btn_type_select me-3 radius_10 ${pageType === "Options" ? "select_type" : ""
                        }`}
                    >
                      Options
                    </button>
                  </div>

                  <div className="btn_select_box_item">
                    <button
                      type="button"
                      onClick={() => setPageType("Bonds")}
                      className={`btn_type_select radius_10 ${pageType === "Bonds" ? "select_type" : ""
                        }`}
                    >
                      Bonds
                    </button>
                  </div>
                </div>
              </div>

              <div className="form-group mt-3">
                <strong className="d-block">Account</strong>

                <p className="text-white">
                  Choose an account to host the collection.
                </p>
                <div className="row">
                  <div className="col-10 col-md-7 col-xl-4">
                    <div className="account_type_wrapper border_all_side p-3">
                      <div className="search_control border_all_side d-flex align-items-center form_custom_control p-2 px-3 radius_10 mb-3">
                        <i className="fas fa-search text-white me-2"></i>
                        <input
                          type="search"
                          className="w-100 form_custom_control"
                          placeholder="Search"
                        />
                      </div>
                      <ul className="account_type_list list-unstyled">
                        <li
                          className="list_item p-2 border_bottom"
                          onClick={() => setSelectAccountIndex(1)}
                        >
                          <div className="d-flex justify-content-between flex-wrap align-items-center">
                            <div className="content d-flex align-items-center">
                              <span className="me-2">1</span>
                              <span className="circle_box me-2"></span>
                              <span className="name me-2">Person account</span>
                            </div>
                            <div
                              className={`select_circle ${selectAccountIndex === 1
                                  ? "active_select_circle"
                                  : ""
                                }`}
                            ></div>
                          </div>
                        </li>

                        <li
                          className="list_item p-2 border_bottom"
                          onClick={() => setSelectAccountIndex(2)}
                        >
                          <div className="d-flex justify-content-between flex-wrap align-items-center">
                            <div className="content d-flex align-items-center">
                              <span className="me-2">2</span>
                              <span className="circle_box me-2"></span>
                              <span className="name me-2">Person account</span>
                            </div>
                            <div
                              className={`select_circle ${selectAccountIndex === 2
                                  ? "active_select_circle"
                                  : ""
                                }`}
                            ></div>
                          </div>
                        </li>

                        <li
                          className="list_item p-2 border_bottom"
                          onClick={() => setSelectAccountIndex(3)}
                        >
                          <div className="d-flex justify-content-between flex-wrap align-items-center">
                            <div className="content d-flex align-items-center">
                              <span className="me-2">3</span>
                              <span className="circle_box me-2"></span>
                              <span className="name me-2">Person account</span>
                            </div>
                            <div
                              className={`select_circle ${selectAccountIndex === 3
                                  ? "active_select_circle"
                                  : ""
                                }`}
                            ></div>
                          </div>
                        </li>

                        <li
                          className="list_item p-2"
                          onClick={() => setSelectAccountIndex(4)}
                        >
                          <div className="d-flex justify-content-between flex-wrap align-items-center">
                            <div className="content d-flex align-items-center">
                              <span className="me-2">4</span>
                              <span className="circle_box me-2"></span>
                              <span className="name me-2">Person account</span>
                            </div>
                            <div
                              className={`select_circle ${selectAccountIndex === 4
                                  ? "active_select_circle"
                                  : ""
                                }`}
                            ></div>
                          </div>
                        </li>
                        <li
                          className="list_item p-2"
                          onClick={() => setSelectAccountIndex(5)}
                        >
                          <div className="d-flex justify-content-between flex-wrap align-items-center">
                            <div className="content d-flex align-items-center">
                              <span className="me-2">5</span>
                              <span className="circle_box me-2"></span>
                              <span className="name me-2">Person account</span>
                            </div>
                            <div
                              className={`select_circle ${selectAccountIndex === 5
                                  ? "active_select_circle"
                                  : ""
                                }`}
                            ></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group mt-3">
                <label htmlFor="" className="text-white mb-2">
                  Links
                </label>
                <ul className="form_group_list list-unstyled rounded">
                  <li>
                    <a className="px-3 py-2 border_bottom d-block" href="#">
                      yousite.io
                    </a>
                  </li>

                  <li>
                    <a className="px-3 py-2 border_bottom d-block" href="#">
                      https://discord.gg/abcdef
                    </a>
                  </li>

                  <li>
                    <a className="px-3 py-2 border_bottom d-block" href="#">
                      https://wwww.instagram.com/YourinstragramHandle
                    </a>
                  </li>

                  <li>
                    <a className="px-3 py-2 border_bottom d-block" href="#">
                      https://www.medium.com/@YourMediumHandle
                    </a>
                  </li>

                  <li>
                    <a className="px-3 py-2  d-block" href="#">
                      https://t.me/abcdef
                    </a>
                  </li>
                </ul>
              </div>

              <div className="form-group mt-3">
                <strong className="d-block">Creator Earnings</strong>

                <p className="text_white_75">
                  Collect a fee when a user re-sells on item you originally
                  created. This is deducted from the final sale price and paid
                  monthly to a payout address of your choosing.
                </p>
              </div>

              <div className="form-group mt-3">
                <label htmlFor="" className="text-white mb-2">
                  Percentage fee
                </label>
                <input
                  type="text"
                  className="form-control form_custom_control px-3 py-2"
                  placeholder="e.g. 2.5"
                />
              </div>

              <div className="form-group mt-3">
                <label htmlFor="" className="text-white mb-2">
                  Blockchain
                </label>
                <p className="text_white_75">
                  Select the blockchain where you'd like new items from this
                  collection to beadded by default.
                </p>
                <div className="dropdown">
                  <button
                    className="btn form_custom_control w-100 py-3 text-start d-flex align-items-center"
                    data-mdb-ripple-duration="0"
                    data-mdb-toggle="dropdown"
                  >
                    <span className="circle_box me-2"></span>
                    <span className="flex-grow-1">{selectBlockchain}</span>
                    <i className="fas fa-angle-down    "></i>
                  </button>
                  <div className="dropdown-menu form_custom_control w-100 py-0">
                    <ul className="list-unstyled bg_transparent w-100 py-0">
                      <li className=" mb-2">
                        <button
                          onClick={() => setSelectBlockchain("Ethereum")}
                          className="btn form_custom_control w-100  text-start d-flex align-items-center"
                          data-mdb-ripple-duration="0"
                          data-mdb-toggle="dropdown"
                        >
                          <span className="circle_box me-2"></span>
                          <span className="flex-grow-1">Ethereum</span>
                        </button>
                      </li>
                      <li className=" mb-2">
                        <button
                          onClick={() => setSelectBlockchain("Ethereum 2")}
                          className="btn form_custom_control w-100  text-start d-flex align-items-center"
                          data-mdb-ripple-duration="0"
                          data-mdb-toggle="dropdown"
                        >
                          <span className="circle_box me-2"></span>
                          <span className="flex-grow-1">Ethereum 2</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="form-group mt-3">
                <label htmlFor="" className="text-white mb-2">
                  Payment tokens
                </label>
                <p className="text_white_75">
                  These tokens can used to buy and sell your items.
                </p>
                <div className="btn-group">
                  <button className="btn form_custom_control me-3 mb-3 radius_10">
                    <div className="d-flex align-items-center ">
                      <span className="circle_box me-2"></span>
                      <div className="content text-center">
                        <strong>ETH</strong>
                        <br />
                        <span>Etherium</span>
                      </div>
                    </div>
                  </button>

                  <button className="btn form_custom_control mb-3 radius_10">
                    <div className="d-flex align-items-center ">
                      <span className="circle_box me-2"></span>
                      <div className="content text-center">
                        <strong>ETH</strong>
                        <br />
                        <span>Etherium</span>
                      </div>
                    </div>
                  </button>
                </div>

                {/* control */}
                <div className="dropdown">
                  <button
                    className="btn form_custom_control w-100 py-3 text-start d-flex align-items-center"
                    data-mdb-ripple-duration="0"
                    data-mdb-toggle="dropdown"
                  >
                    <span className="flex-grow-1">{addToken}</span>
                    <i className="fas fa-angle-down    "></i>
                  </button>
                  <div className="dropdown-menu form_custom_control w-100 py-0">
                    <ul className="list-unstyled bg_transparent w-100 py-0">
                      <li className=" mb-2">
                        <button
                          onClick={() => setAddToken("2")}
                          className="btn form_custom_control w-100  text-start d-flex align-items-center"
                          data-mdb-ripple-duration="0"
                          data-mdb-toggle="dropdown"
                        >
                          <span className="flex-grow-1">2</span>
                        </button>
                      </li>
                      <li className=" mb-2">
                        <button
                          onClick={() => setAddToken("3")}
                          className="btn form_custom_control w-100  text-start d-flex align-items-center"
                          data-mdb-ripple-duration="0"
                          data-mdb-toggle="dropdown"
                        >
                          <span className="flex-grow-1">3</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="form-group mt-3">
                <label htmlFor="" className="text-white mb-2">
                Display theme
                </label>
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <p className="text_white_75">
                    Change how your items are shown.
                  </p>

                  <div className="form-check form-switch">
                    <input
                      className="form-check-input bg-white"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    ></label>
                  </div>
                </div>

                {/* theme list here */}
                {/* <ul className="list-unstyled"></ul> */}
                {/* I used just add a img, need to discuss before make it functional */}
                <div className="d-block">
                  <img
                    src={require("../../Static/img/theme_img/theme_img.png")}
                    alt="img"
                    className="w-75"
                  />
                </div>
                {/* theme list here End */}
                <label htmlFor="" className="text-white mb-2">
                  Explicit & sensitive content
                </label>

                <p className="text_white_75">
                  Set this collection as explicit and sensitive content
                </p>
              </div>

              <div className="form-group mt-3 mt-md-5">
                <button className="btn btn-light form_custom_control btn-lg">
                  Create
                </button>
              </div>


            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CreateCollection;
