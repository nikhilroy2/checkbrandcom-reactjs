import React from 'react';
// ............Account Activity 1..............
// you can use account activity components whenver you need this component

// demo: https://prnt.sc/dbLha2ovGMgw

export const AccountActivity = () => {
    const [activityDuration, setActivityDuration] = React.useState('Last 90 Days')
    return (
        <div id="AccountActivity">
            <div className="container-fluid mb-5">
                <div className="row  border_top">
                    <div className="filter_aside_wrapper  p-3">
                        {/* Filter left side */}
                        <div className="">
                            <button className="btn btn-muted m-0 p-0">
                                <svg width={40} fill="var(--text-white-50)" className="MuiSvgIcon-root  MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightAltIcon"><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" /></svg>
                            </button>
                        </div>
                        {/* Filter left side End */}
                    </div>
                    <div className="col flex-grow-1  p-3">
                        <div className="row gy-4">
                            <div className="col-12">
                                <div className="control_wrapper">
                                    <div className="d-flex flex-wrap align-items-center">
                                        {/* control */}
                                        <div className="dropdown">
                                            <button
                                                className="btn form_custom_control w-100 py-2 text-start d-flex align-items-center"
                                                data-mdb-ripple-duration="0"
                                                data-mdb-toggle="dropdown"
                                            >
                                                <span className="flex-grow-1">{activityDuration}</span>
                                                <i className="fas fa-angle-down   ps-4 "></i>
                                            </button>
                                            <div className="dropdown-menu form_custom_control w-100 py-0">
                                                <ul className="list-unstyled bg_transparent w-100 py-0">
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setActivityDuration("Last 90 Days")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Last 90 Days</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setActivityDuration("Last 30 Days")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Last 30 Days</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>


                                        <div className="box ms-3 small">
                                            <span className="d-block">90 Day Avg. Price</span>
                                            <span className="d-block text-primary">
                                                2.4862
                                            </span>
                                        </div>

                                        <div className="box ms-3 small">
                                            <span className="d-block">90 Day Volume</span>
                                            <span className="d-block text-primary">
                                                22,606.7036
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <img src={require('../../Static/img/chart_img/all_time_chart.png')} className="w-100" alt="img" />
                            </div>
                            <div className="col-12">
                                <div className="row justify-content-center">
                                    <div className="col-11 col-lg-10">
                                        <div className="custom_table_history">
                                            <div className="table-responsive">
                                                <table className="table text-white">
                                                    <thead>
                                                        <tr>
                                                            <th className="text-nowrap">Collection</th>
                                                            <th className="text-nowrap">Volume</th>
                                                            <th className="text-nowrap">24h%</th>
                                                            <th className="text-nowrap">7d%</th>
                                                            <th className="text-nowrap">Floor Price</th>
                                                            <th className="text-nowrap">Owners</th>
                                                            <th className="text-nowrap">Items</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-nowrap">
                                                                1 <span className="globe_box"></span>
                                                                World of Women Galaxy
                                                            </td>
                                                            <td className="text-nowrap">
                                                                <img
                                                                    className="me-2"
                                                                    style={{ height: "20px" }}
                                                                    src={require("../../Static/img/eth.svg").default}
                                                                    alt="img"
                                                                />
                                                                18,531,52
                                                            </td>
                                                            <td className="negative_value">-81.93%</td>
                                                            <td className="positive_value">+119.08%</td>
                                                            <td>
                                                                <img
                                                                    className="me-2"
                                                                    style={{ height: "20px" }}
                                                                    src={require("../../Static/img/eth.svg").default}
                                                                    alt="img"
                                                                />
                                                                1.45
                                                            </td>
                                                            <td>10.3K</td>
                                                            <td>20.2K</td>
                                                        </tr>

                                                        <tr>
                                                            <td className="text-nowrap">
                                                                1 <span className="globe_box"></span>
                                                                World of Women Galaxy
                                                            </td>
                                                            <td className="text-nowrap">
                                                                <img
                                                                    className="me-2"
                                                                    style={{ height: "20px" }}
                                                                    src={require("../../Static/img/eth.svg").default}
                                                                    alt="img"
                                                                />
                                                                18,531,52
                                                            </td>
                                                            <td className="negative_value">-81.93%</td>
                                                            <td className="">---</td>
                                                            <td>
                                                                <img
                                                                    className="me-2"
                                                                    style={{ height: "20px" }}
                                                                    src={require("../../Static/img/eth.svg").default}
                                                                    alt="img"
                                                                />
                                                                1.45
                                                            </td>
                                                            <td>10.3K</td>
                                                            <td>20.2K</td>
                                                        </tr>

                                                        <tr>
                                                            <td className="text-nowrap">
                                                                1 <span className="globe_box"></span>
                                                                World of Women Galaxy
                                                            </td>
                                                            <td className="text-nowrap">
                                                                <img
                                                                    className="me-2"
                                                                    style={{ height: "20px" }}
                                                                    src={require("../../Static/img/eth.svg").default}
                                                                    alt="img"
                                                                />
                                                                18,531,52
                                                            </td>
                                                            <td className="negative_value">-81.93%</td>
                                                            <td className="">---</td>
                                                            <td>
                                                                {" "}
                                                                <img
                                                                    className="me-2"
                                                                    style={{ height: "20px" }}
                                                                    src={require("../../Static/img/eth.svg").default}
                                                                    alt="img"
                                                                />
                                                                1.45
                                                            </td>
                                                            <td>10.3K</td>
                                                            <td>20.2K</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
