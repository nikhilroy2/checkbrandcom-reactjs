import React from "react";
import "./CreateAccount.css";
function CreateAccount(props) {
  return (
    <div id="CreateAccount" className="my-5">
      <section>
        <div className="container-xxl">
          <h2 className="section_title mb-3 mb-md-5">Create Account</h2>
          <form action="" method="post">
            <div className="form-group mt-3">
              <p className="text-success small">
                Account is created on the Brands / Persons page depending on the
                choice.
              </p>

              <strong className="d-block">Logo image</strong>
              <p className="text-success small">
                This image will be used on Brand / Person logo, 350 x 350
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

            <div className="form-group text-success mt-3">
              <strong className="d-block">Cover</strong>
              <p>
                This image will be used for featuning Brand on the BRANDSpage.
                600 x 600 recommended.
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

            <div className="form-group text-success mt-3">
              <strong className="d-block text-white">Banner Image</strong>
              <p>
                This image will apear at the top of account page. 1400 x 400
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

            <div className="form-group">
              <label htmlFor="">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Brand / Person name"
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default CreateAccount;
