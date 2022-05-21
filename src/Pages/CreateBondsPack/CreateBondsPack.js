import React from "react";

function CreateBondsPack(props) {
  return (
    <div id="CreateBondsPack" className="my-5">
      <section>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h2 className="section_title mb-3 mb-md-5">Create Bonds Pack</h2>
              <form action="" method="post">
                <div className="form-group mt-3">
                  <p className="text-success small">
                    Bulk token upload interface
                  </p>

                  <strong className="d-block text-success mb-2">Name</strong>
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control form_custom_control px-3 py-2"
                        placeholder="Pack name"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3 text-success">
                  <strong className="d-block mb-2">
                    Add Image, video, Audio, or 3D Model
                  </strong>

                  <p>
                    File types supported: JPG, PNG, GIF, SVG, Mp4, WEBM, MP3,
                    WAV, OGG, GLB,GLTF.
                    <br />
                    <small>To create pack Bonds you need 1 file.</small>
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

                <div className="form-group mt-3 text-success">
                  <strong className="d-block mb-2">Preview Images</strong>
                  <p>
                    Because you've included multimedia, you'll need to provide
                    an image (PNG, JPG, or GIF) for the card display of your{" "}
                    <br />
                    item. For Preview Images pack Bonds you need 1 file.
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

                <div className="form-group mt-3 text-success">
                  <strong className="d-block mb-2">Loading table</strong>

                  <p>
                    The table shows which files with which name and price will
                    be uploaded to the smart contract and readliness for
                    uploading. All tokens will have the same characteristics
                    (Link, Description, Collection name, Properties, Blockchain,
                    etc.)
                  </p>

                  <div className="loading_table_wrapper border_all_side p-2 pb-5">
                    <div className="table-responsive">
                      <table className="text-white table table-borderless table-sm">
                        <tbody>
                          <tr>
                            <td>1.</td>
                            <td>
                              Common name #
                              <span className="text-success">1</span>
                            </td>

                            <td>FilenameVideo.mp4</td>
                            <td>FilenamePreview.gif</td>
                            <td>
                              Price{" "}
                              <span className="text-success">0.01ETH</span>{" "}
                            </td>
                            <td>
                              Dur <span className="text-success">3</span>
                            </td>
                            <td>
                              Mat <span className="text-success">365</span>
                            </td>
                            <td>
                              Yield <span className="text-success">20</span>
                            </td>
                            <td>
                              Freeze <span className="text-success">50</span>
                            </td>
                            <td>100%</td>
                          </tr>

                          <tr>
                            <td>2.</td>
                            <td>
                              Common name #
                              <span className="text-success">2</span>
                            </td>

                            <td>FilenameVideo.mp4</td>
                            <td>FilenamePreview.gif</td>
                            <td>
                              Price{" "}
                              <span className="text-success">0.01ETH</span>{" "}
                            </td>
                            <td>
                              Dur <span className="text-success">3</span>
                            </td>
                            <td>
                              Mat <span className="text-success">365</span>
                            </td>
                            <td>
                              Yield <span className="text-success">20</span>
                            </td>
                            <td>
                              Freeze <span className="text-success">50</span>
                            </td>
                            <td>100%</td>
                          </tr>

                          <tr>
                            <td>3.</td>
                            <td>
                              Common name #
                              <span className="text-success">3</span>
                            </td>

                            <td>FilenameVideo.mp4</td>
                            <td>FilenamePreview.gif</td>
                            <td>
                              Price{" "}
                              <span className="text-success">0.01ETH</span>{" "}
                            </td>
                            <td>
                              Dur <span className="text-success">3</span>
                            </td>
                            <td>
                              Mat <span className="text-success">365</span>
                            </td>
                            <td>
                              Yield <span className="text-success">20</span>
                            </td>
                            <td>
                              Freeze <span className="text-success">50</span>
                            </td>
                            <td>100%</td>
                          </tr>

                          <tr>
                            <td>4.</td>
                            <td>
                              Common name #
                              <span className="text-success">4</span>
                            </td>

                            <td>FilenameVideo.mp4</td>
                            <td>FilenamePreview.gif</td>
                            <td>
                              Price{" "}
                              <span className="text-success">0.01ETH</span>{" "}
                            </td>
                            <td>
                              Dur <span className="text-success">3</span>
                            </td>
                            <td>
                              Mat <span className="text-success">365</span>
                            </td>
                            <td>
                              Yield <span className="text-success">20</span>
                            </td>
                            <td>
                              Freeze <span className="text-success">50</span>
                            </td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>5.</td>
                            <td>
                              Common name #
                              <span className="text-success">5</span>
                            </td>

                            <td>FilenameVideo.mp4</td>
                            <td>FilenamePreview.gif</td>
                            <td>
                              Price{" "}
                              <span className="text-success">0.01ETH</span>{" "}
                            </td>
                            <td>
                              Dur <span className="text-success">3</span>
                            </td>
                            <td>
                              Mat <span className="text-success">365</span>
                            </td>
                            <td>
                              Yield <span className="text-success">20</span>
                            </td>
                            <td>
                              Freeze <span className="text-success">50</span>
                            </td>
                            <td>100%</td>
                          </tr>

                          <tr>
                            <td>6.</td>
                            <td>
                              Common name #
                              <span className="text-success">6</span>
                            </td>

                            <td>FilenameVideo.mp4</td>
                            <td>FilenamePreview.gif</td>
                            <td>
                              Price{" "}
                              <span className="text-success">0.01ETH</span>{" "}
                            </td>
                            <td>
                              Dur <span className="text-success">3</span>
                            </td>
                            <td>
                              Mat <span className="text-success">365</span>
                            </td>
                            <td>
                              Yield <span className="text-success">20</span>
                            </td>
                            <td>
                              Freeze <span className="text-success">50</span>
                            </td>
                            <td>100%</td>
                          </tr>
                        </tbody>

                        <tfoot>
                          <tr>
                            <td>...</td>
                          </tr>
                          <tr>
                            <td>1000</td>
                            <td>
                              Common name #
                              <span className="text-success">1000</span>
                            </td>
                            <td>FilenameVideo.mp4</td>
                            <td>FilenamePreview.gif</td>
                            <td>
                              Price{" "}
                              <span className="text-succes">0.01 ETH</span>
                            </td>
                            <td>
                              Dur <span className="text-success">3</span>
                            </td>
                            <td>
                              Mat <span className="text-success">365</span>
                            </td>
                            <td>
                              Yield <span className="text-success">20</span>
                            </td>
                            <td>
                              Freeze <span className="text-success">50</span>
                            </td>
                            <td>100%</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="form-group mt-3 text-success mb-4">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="form_wrapper mb-4 mb-sm-5">
                        <strong className="d-block mb-2">Name</strong>
                        <p>
                          Enter a common name for all generated tokens. <br />{" "}
                          Token names will differ in numbering.
                        </p>
                        <input
                          type="text"
                          className="form-control form_custom_control px-3 py-2"
                          placeholder="Common name"
                        />
                      </div>

                      <div className="form_wrapper">
                        <strong className="d-block mb-2">Tokens price</strong>
                        <p>
                          The price at which the tokens will be put up for sale.{" "}
                          <br />
                          All tokens in the pack will have the some price.
                        </p>
                        <div className="d-flex flex-wrap align-items-center">
                          <div className="form_input_wrapper">
                            <input
                              type="number"
                              style={{ width: "100px" }}
                              className="form-control form_custom_control px-3 py-2"
                              placeholder="0.01"
                            />
                          </div>
                          <div className="dropdown">
                            <button
                              type="button"
                              data-mdb-toggle="dropdown"
                              data-mdb-ripple-duration="0"
                              style={{ fontSize: "16px" }}
                              className="btn form_custom_control d-flex justify-content-between align-items-center  form-control ms-3"
                            >
                              ETH
                              <i className="fas fa-angle-down    "></i>
                            </button>
                            <ul className="dropdown-menu form_custom_control w-100 py-0">
                              <li class=" mb-2">
                                <button
                                  type="button"
                                  class="btn form_custom_control w-100  text-start d-flex align-items-center"
                                  data-mdb-ripple-duration="0"
                                  data-mdb-toggle="dropdown"
                                >
                                  <span class="flex-grow-1">Ethereum</span>
                                </button>
                              </li>
                              <li class=" mb-2">
                                <button
                                  type="button"
                                  class="btn form_custom_control w-100  text-start d-flex align-items-center"
                                  data-mdb-ripple-duration="0"
                                  data-mdb-toggle="dropdown"
                                >
                                  <span class="flex-grow-1">Ethereum</span>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-sm-6">
                          <strong className="d-block mb-2">Copies</strong>
                          <p>
                            Enter how many copies of tokens will be created.
                          </p>
                          <input
                            type="number"
                            className="form-control form_custom_control px-3 py-2"
                            placeholder="1000"
                          />
                        </div>
                        <div className="col-sm-6">
                          <strong className="d-block mb-2">Numbering</strong>
                          <p>
                            Enter from which number the numberning will start.
                          </p>
                          <input
                            type="number"
                            className="form-control form_custom_control px-3 py-2"
                            placeholder="1"
                          />
                        </div>

                        <div className="form_wrapper mt-4 mt-md-5">
                          <strong className="d-block mb-2">Duration</strong>
                          <p>
                            The period during which the sale of the token takes
                            place. <br />
                            At the end of the period, the sale is automatically
                            extended for the some period.
                          </p>
                          <div className="d-flex flex-wrap align-items-center">
                            <div className="form_input_wrapper">
                              <input
                                type="number"
                                style={{ width: "100px" }}
                                className="form-control form_custom_control px-3 py-2"
                                value={3}
                              />
                            </div>
                            <div className="dropdown">
                              <button
                                style={{ fontSize: "16px" }}
                                type="button"
                                data-mdb-toggle="dropdown"
                                data-mdb-ripple-duration="0"
                                className="btn form_custom_control d-flex  justify-content-between align-items-center  form-control ms-3"
                              >
                                Days
                              </button>
                              <ul className="dropdown-menu form_custom_control w-100 py-0">
                                <li class=" mb-2">
                                  <button
                                    type="button"
                                    class="btn form_custom_control w-100  text-start d-flex align-items-center"
                                    data-mdb-ripple-duration="0"
                                    data-mdb-toggle="dropdown"
                                  >
                                    <span class="flex-grow-1">Days</span>
                                  </button>
                                </li>
                                <li class=" mb-2">
                                  <button
                                    type="button"
                                    class="btn form_custom_control w-100  text-start d-flex align-items-center"
                                    data-mdb-ripple-duration="0"
                                    data-mdb-toggle="dropdown"
                                  >
                                    <span class="flex-grow-1">Weeks</span>
                                  </button>
                                </li>
                                <li class=" mb-2">
                                  <button
                                    type="button"
                                    class="btn form_custom_control w-100  text-start d-flex align-items-center"
                                    data-mdb-ripple-duration="0"
                                    data-mdb-toggle="dropdown"
                                  >
                                    <span class="flex-grow-1">Months</span>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group mt-3 mb-4">
                  <div className="row">
                    <div className="col-md-7">
                      <strong className="d-block text-success mb-2">
                        Period
                      </strong>
                      <p className="text-success small">
                        The time that must pass after the first purchase before
                        receiving a reward. After this time, the owner can send
                        the token to the smart contract and receive a "Ransom"
                        in response. In days.
                      </p>

                      <input
                        type="number"
                        style={{ width: "150px" }}
                        className="form-control form_custom_control px-3 py-2"
                        value={365}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group mt-3 mb-4">
                  <div className="row">
                    <div className="col-md-7">
                      <strong className="d-block text-success mb-2">
                        Yield
                      </strong>
                      <p className="text-success small">
                        Percentage of reward from the price of the first
                        purchase of the token. <br />
                        In percentages.
                      </p>

                      <input
                        type="number"
                        style={{ width: "150px" }}
                        className="form-control form_custom_control px-3 py-2"
                        value={20}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group mt-3 mb-4">
                  <div className="row">
                    <div className="col-md-7">
                      <strong className="d-block text-success mb-2">
                        Freeze
                      </strong>
                      <p className="text-success small">
                        Part of the money coming from the sale, which <br />
                        will be frozen in the smart contract for "Ransom".
                      </p>
                      <input
                        type="number"
                        style={{ width: "150px" }}
                        className="form-control form_custom_control px-3 py-2"
                        value={50}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group mt-3 mb-4">
                  <div className="row">
                    <div className="col-md-9">
                      <strong className="d-block  mb-2">External Link</strong>
                      <p className="small">
                        OpenSea will include a link to this URL on this item's
                        detail page, so that users can click to learn more about
                        it. You are welcome to link to your own webpage with
                        more details.
                      </p>
                      <input
                        type="text"
                        className="form-control form_custom_control px-3 py-2"
                        placeholder="https://yoursite.io/item/123"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group mt-3 mb-4">
                  <div className="row">
                    <div className="col-md-9">
                      <strong className="d-block  mb-2">Description</strong>
                      <p className="small">
                        The description will be included on the item's detail
                        page underneath its image.
                      </p>
                      <textarea placeholder="Provide a detailed description of your item." rows="4" 
                      className="form-control form_custom_control px-3 py-2"></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CreateBondsPack;
