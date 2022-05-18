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

                  <div className="loading_table_wrapper border_all_side p-2">
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
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CreateBondsPack;
