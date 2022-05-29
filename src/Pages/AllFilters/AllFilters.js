import React, { useState } from 'react';
import './AllFilters.css';
function AllFilters(props) {


    // price state
    const [priceCurrency, setPriceCurrency] = useState('United States Dollar (USD)')
    return (
        <div id='AllFilters' className='my-5'>
            <div className="container-xxl">
                <div className="row g-3 g-md-5">
                    <div className="col-sm-6 col-lg-4 col-xxl-3">
                        <div className="filter_wrapper border border-dark">
                            <div className="filter_item d-flex align-items-center justify-content-between p-2">
                                <div className="box">
                                    <svg className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                                        height={24} fill="var(--text-white-75)" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FilterListIcon"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" /></svg>
                                    Filter
                                </div>
                                <div className="box">
                                    <button className='bg-transparent border-0'>
                                        <svg fill='var(--text-white-50)' style={{ transform: 'scaleX(-1)' }} width={30}
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightAltIcon"><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="filter_wrapper border border-dark">
                            <div className="filter_item d-flex align-items-center justify-content-between p-2">
                                <div className="box">
                                    Status
                                </div>
                                <div className="box">
                                    <button className='bg-transparent border-0'>
                                        <svg height={25} fill="var(--text-white-75)" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropUpIcon"><path d="m7 14 5-5 5 5z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div className="filter_wrapper border border-dark">
                            <div className="filter_item  row g-3 align-items-center justify-content-between p-2">
                                <div className="col-6">
                                    <button className="w-100 btn btn-primary text-start radius_10">Buy Now</button>
                                </div>
                                <div className="col-6">
                                    <button className="w-100 btn btn-outline-dark text-white text-start radius_10">On Auction</button>
                                </div>
                                <div className="col-6">
                                    <button className="w-100 btn btn-outline-dark text-white text-start radius_10">New </button>
                                </div>
                                <div className="col-6">
                                    <button className="w-100 btn btn-outline-dark text-white text-start radius_10">Has Offers</button>
                                </div>
                            </div>
                        </div>



                        <div className="filter_wrapper border border-dark">
                            <div className="filter_item d-flex align-items-center justify-content-between p-2">
                                <div className="box">
                                    Price
                                </div>
                                <div className="box">
                                    <button className='bg-transparent border-0'>
                                        <svg height={25} fill="var(--text-white-75)" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropUpIcon"><path d="m7 14 5-5 5 5z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div className="filter_wrapper border border-dark">
                            <div className="filter_item  row g-3 align-items-center justify-content-between p-2">
                                <div className="col-12">
                                    <div className="dropdown border border-dark ">
                                        <button
                                            className="btn  w-100 p-2 text-start d-flex align-items-center"
                                            data-mdb-ripple-duration="0"
                                            data-mdb-toggle="dropdown"
                                        >
                                            <span style={{ width: '20px', height: '20px' }} className="circle_box me-2"></span>
                                            <span className="flex-grow-1 text-white">{priceCurrency}</span>
                                            <svg height={25} fill="var(--text-white-75)" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropUpIcon"><path d="m7 14 5-5 5 5z" /></svg>
                                        </button>
                                        <div className="dropdown-menu form_custom_control w-100 py-0">
                                            <ul className="list-unstyled bg_transparent w-100 py-0">
                                                <li className=" mb-2">
                                                    <button
                                                        onClick={() => setPriceCurrency("United States Dollar (USD) ")}
                                                        className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                        data-mdb-ripple-duration="0"
                                                        data-mdb-toggle="dropdown"
                                                    >
                                                        <span className="circle_box me-2"></span>
                                                        <span className="flex-grow-1">United States Dollar (USD) </span>
                                                    </button>
                                                </li>
                                                <li className=" mb-2">
                                                    <button
                                                        onClick={() => setPriceCurrency("Currency 2")}
                                                        className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                        data-mdb-ripple-duration="0"
                                                        data-mdb-toggle="dropdown"
                                                    >
                                                        <span className="circle_box me-2"></span>
                                                        <span className="flex-grow-1">Currency 2</span>
                                                    </button>
                                                </li>

                                                <li className=" mb-2">
                                                    <button
                                                        onClick={() => setPriceCurrency("Currency 3")}
                                                        className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                        data-mdb-ripple-duration="0"
                                                        data-mdb-toggle="dropdown"
                                                    >
                                                        <span className="circle_box me-2"></span>
                                                        <span className="flex-grow-1">Currency 3</span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>


                                </div>
                                <div className="col-5">
                                    <input type="number" className="p-2 border border-dark form_custom_control w-100 bg-transparent" placeholder='Min' />
                                </div>
                                <div className="col-1">
                                    to
                                </div>
                                <div className="col-5">
                                    <input type="number" className="p-2 border border-dark form_custom_control w-100 bg-transparent" placeholder='Max' />
                                </div>
                                <div className="col-5">
                                    <input type="text" className="p-2 border border-dark form_custom_control w-100 bg-transparent"
                                        placeholder='Apply' />
                                </div>
                            </div>
                        </div>



                        <div className="filter_wrapper border border-dark">
                            <div className="filter_item d-flex align-items-center justify-content-between p-2">
                                <div className="box">
                                    Collections
                                </div>
                                <div className="box">
                                    <button className='bg-transparent border-0'>
                                        <svg height={25} fill="var(--text-white-75)" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropUpIcon"><path d="m7 14 5-5 5 5z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>





                    </div>
                    <div className="col-sm-6 col-lg-4 col-xxl-3"></div>
                </div>
            </div>
        </div>
    );
}

export default AllFilters;