import React from 'react';
import './Activity.css';
function Activity(props) {
    const [activityDuration, setActivityDuration] = React.useState('Last 90 Days')

    return (
        <div id='Activity' className='my-3 px-md-5'>
            <div className="container-fluid">
                <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="box">
                            <button className="btn btn-muted btn-floating p-0">
                                <svg fill='var(--text-white)' className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FilterListIcon"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" /></svg>
                            </button>
                        </div>
                        <div className="box">

                            {/* control */}
                            <div className="dropdown">
                                <button
                                    className="btn form_custom_control w-100 py-2 text-start d-flex align-items-center"
                                    data-mdb-ripple-duration={0}
                                    data-mdb-toggle="dropdown"
                                >
                                    <span className="flex-grow-1">{activityDuration}</span>
                                    <i className="fas fa-angle-down   ps-4 "></i>
                                </button>
                                <div className="dropdown-menu form_custom_control w-100 py-0">
                                    <ul className="list-unstyled bg_transparent w-100 py-0">

                                        <li className=" mb-2">
                                            <button
                                                onClick={() => setActivityDuration("Last 7 Days")}
                                                className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                data-mdb-ripple-duration="0"
                                                data-mdb-toggle="dropdown"
                                            >
                                                <span className="flex-grow-1">Last 7 Days</span>
                                            </button>
                                        </li>


                                        <li className=" mb-2">
                                            <button
                                                onClick={() => setActivityDuration("Last 14 Days")}
                                                className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                data-mdb-ripple-duration="0"
                                                data-mdb-toggle="dropdown"
                                            >
                                                <span className="flex-grow-1">Last 14 Days</span>
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



                                        <li className=" mb-2">
                                            <button
                                                onClick={() => setActivityDuration("Last 60 Days")}
                                                className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                data-mdb-ripple-duration="0"
                                                data-mdb-toggle="dropdown"
                                            >
                                                <span className="flex-grow-1">Last 60 Days</span>
                                            </button>
                                        </li>



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
                                                onClick={() => setActivityDuration("Last Year")}
                                                className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                data-mdb-ripple-duration="0"
                                                data-mdb-toggle="dropdown"
                                            >
                                                <span className="flex-grow-1">Last Year</span>
                                            </button>
                                        </li>


                                        <li className=" mb-2">
                                            <button
                                                onClick={() => setActivityDuration("All Time")}
                                                className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                data-mdb-ripple-duration="0"
                                                data-mdb-toggle="dropdown"
                                            >
                                                <span className="flex-grow-1">All Time</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-12 d-flex">
                    <div className="aside_wrapper">

                    </div>
                    <div className="activity_table_wrapper flex-grow-1"></div>
                </div>
            </div>
        </div>
    );
}

export default Activity;