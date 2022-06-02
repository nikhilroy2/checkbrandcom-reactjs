import React from 'react';

function FilterCard(props) {
    const [addItem, setAddItem] = React.useState('All items')
    const [recentlyList, setRecentlyList] = React.useState('Recently Listed')
    return (
        <div id='FilterCard' className='mb-3'>
            <div className="d-flex align-items-center flex-wrap">
                <div className="search_control flex-grow-1 border_all_side me-3 d-flex align-items-center form_custom_control p-2 px-3 radius_10 mb-3"><i className="fas fa-search text-white me-2" /><input type="search" className="w-100 form_custom_control" placeholder="Search" /></div>
                {/* control */}
                <div className="dropdown mb-3 me-3">
                    <button
                        className=" form_custom_control w-100 p-3 py-2 radius_10 text-start d-flex align-items-center"
                        data-mdb-ripple-duration="0"
                        data-mdb-toggle="dropdown"
                    >
                        <span className="flex-grow-1">{addItem}</span>
                        <i className="fas fa-angle-down ms-4   "></i>
                    </button>
                    <div className="dropdown-menu form_custom_control w-100 py-0">
                        <ul className="list-unstyled bg_transparent w-100 py-0">
                            <li className=" mb-2">
                                <button
                                    onClick={() => setAddItem("All items")}
                                    className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                    data-mdb-ripple-duration="0"
                                    data-mdb-toggle="dropdown"
                                >
                                    <span className="flex-grow-1">All items</span>
                                </button>
                            </li>
                            <li className=" mb-2">
                                <button
                                    onClick={() => setAddItem("Old items")}
                                    className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                    data-mdb-ripple-duration="0"
                                    data-mdb-toggle="dropdown"
                                >
                                    <span className="flex-grow-1">Old items</span>
                                </button>
                            </li>
                            <li className=" mb-2">
                                <button
                                    onClick={() => setAddItem("New items")}
                                    className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                    data-mdb-ripple-duration="0"
                                    data-mdb-toggle="dropdown"
                                >
                                    <span className="flex-grow-1">New items</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>



                {/* control */}
                <div className="dropdown mb-3 me-3">
                    <button
                        className=" form_custom_control w-100 p-3 py-2 radius_10 text-start d-flex align-items-center"
                        data-mdb-ripple-duration="0"
                        data-mdb-toggle="dropdown"
                    >
                        <span className="flex-grow-1">{recentlyList}</span>
                        <i className="fas fa-angle-down ms-4   "></i>
                    </button>
                    <div className="dropdown-menu form_custom_control w-100 py-0">
                        <ul className="list-unstyled bg_transparent w-100 py-0">
                            <li className=" mb-2">
                                <button
                                    onClick={() => setRecentlyList("Recently Listed")}
                                    className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                    data-mdb-ripple-duration="0"
                                    data-mdb-toggle="dropdown"
                                >
                                    <span className="flex-grow-1">Recently Listed</span>
                                </button>
                            </li>
                            <li className=" mb-2">
                                <button
                                    onClick={() => setRecentlyList("Recently Listed 2")}
                                    className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                    data-mdb-ripple-duration="0"
                                    data-mdb-toggle="dropdown"
                                >
                                    <span className="flex-grow-1">Recently Listed 2</span>
                                </button>
                            </li>
                            <li className=" mb-2">
                                <button
                                    onClick={() => setRecentlyList("Recently Listed 3")}
                                    className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                    data-mdb-ripple-duration="0"
                                    data-mdb-toggle="dropdown"
                                >
                                    <span className="flex-grow-1">Recently Listed 3</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="btn-group border_all_side mb-3">
                    <button className="btn btn-dark p-2">
                        <svg height={30} fill="var(--text-white-75)" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GridViewIcon"><path fillRule="evenodd" d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z" /></svg>
                    </button>


                    <button className="btn btn-muted p-2">
                        <svg height={30} fill="var(--text-white-75)" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GridOnIcon"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" /></svg>
                    </button>
                </div>


            </div>
        </div>
    );
}

export default FilterCard;