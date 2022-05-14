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

            <div className="form-group mt-3">
              <label htmlFor="" className="text-white">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Brand / Person name"
              />
            </div>

            <div className="form-group mt-3">
              <strong className="text-success d-block">URL</strong>
              <p className="text-success">
                Customize your URL on CheckBrandcom. Must only contain lowercase
                letters, numbers and hyphens.
              </p>
              <input
                type="text"
                className="form-control"
                placeholder="Brand / Person name"
              />
            </div>

            <div className="form-group mt-3">
              <strong className="text-white d-block">Description</strong>
              <p className="text-white">
                Markdown syntax is supported. 0 of 1000 characters used.
              </p>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>

            <div className="form-group mt-3">
              <strong className="text-success d-block">Page</strong>
              <p className="text-white">
                Select the page on which the account will be created.
              </p>
              <div className="btn_select_box d-flex flex-wrap">
                <div className="btn_select_box_item">
                  <button className="btn btn_select">Persons</button>
                </div>

                <div className="btn_select_box_item">
                  <button className="btn btn_select">Brands</button>
                </div>

                <div className="btn_select_box_item">
                  <button className="btn btn_select">Options</button>
                </div>

                <div className="btn_select_box_item">
                  <button className="btn btn_select">Bonds</button>
                </div>
              </div>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="" className="text-white">
                Links
              </label>
              <ul className="form_group_list list-unstyled">
                <li>
                  <a href="#">yousite.io</a>
                </li>

                <li>
                  <a href="#">https://discord.gg/abcdef</a>
                </li>

                <li>
                  <a href="#">
                    https://wwww.instagram.com/YourinstragramHandle
                  </a>
                </li>

                <li>
                  <a href="#">https://www.medium.com/@YourMediumHandle</a>
                </li>

                <li>
                  <a href="#">https://t.me/abcdef</a>
                </li>
              </ul>
            </div>

            <div className="form-group mt-3">
              <button className="btn btn-light">
                Create
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default CreateAccount;
