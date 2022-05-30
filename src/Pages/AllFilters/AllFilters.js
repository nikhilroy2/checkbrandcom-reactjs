import React, { useState } from 'react';
import './AllFilters.css';
function AllFilters(props) {
    return (
        <div id='AllFilters' className='my-5'>
            <div className="container">
                <div className="row gx-1 gy-3">
                    <FilterSection1></FilterSection1>
                    <FilterSection2></FilterSection2>
                    <FilterSection3></FilterSection3>
                    <FilterSection4></FilterSection4>
                    <FilterSection5></FilterSection5>

                </div>
            </div>
        </div>
    );
}
export default AllFilters;

const FilterSection1 = () => {
    // price state
    const [priceCurrency, setPriceCurrency] = useState('United States Dollar (USD)')
    return (
        <div className="col-sm-6 col-lg-4 col-xl-3 col-xxl">
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
                        <button className="w-100 btn btn-primary text-start radius_10 text-nowrap">Buy Now</button>
                    </div>
                    <div className="col-6">
                        <button className="w-100 btn btn-outline-dark text-nowrap text-white text-start radius_10">On Auction</button>
                    </div>
                    <div className="col-6">
                        <button className="w-100 btn btn-outline-dark text-nowrap text-white text-start radius_10">New </button>
                    </div>
                    <div className="col-6">
                        <button className="w-100 btn btn-outline-dark text-nowrap text-white text-start radius_10">Has Offers</button>
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
                        <input type="button" className="p-2 border border-dark form_custom_control w-100 bg-transparent"
                            value='Apply' />
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
            <div className="filter_wrapper border border-dark">
                <div className="filter_item p-2">
                    <div className="search_control border_all_side d-flex align-items-center
                                 form_custom_control p-2 px-3 radius_10 mb-3"><i className="fas fa-search text-white me-2" /><input type="search" className="w-100 form_custom_control" placeholder="Filter" /></div>
                </div>
            </div>
            <div className="filter_wrapper border border-dark">
                <div className="filter_item p-2">
                    <div className="collection_wrapper">
                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="collection1" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="collection1">CollectionName</label>
                        </div>

                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="collection2" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="collection2">CollectionName 2</label>
                        </div>

                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="collection3" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="collection3">CollectionName 3</label>
                        </div>
                    </div>
                </div>
            </div>


            <div className="filter_wrapper border border-dark">
                <div className="filter_item d-flex align-items-center justify-content-between p-2">
                    <div className="box">
                        Chains
                    </div>
                    <div className="box">
                        <button className='bg-transparent border-0'>
                            <svg height={25} fill="var(--text-white-75)" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropUpIcon"><path d="m7 14 5-5 5 5z" /></svg>
                        </button>
                    </div>
                </div>
            </div>


            <div className="filter_wrapper border border-dark">
                <div className="filter_item p-2">
                    <div className="collection_wrapper">
                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2" >
                            <input type="checkbox" className="custom-control-input" id="Ethereum" defaultChecked={true} />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="Ethereum">Ethereum</label>
                        </div>

                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="Polygon" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="Polygon">Polygon</label>
                        </div>

                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="Klaytn" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="Klaytn">Klaytn</label>
                        </div>


                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="Solona" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="Solona">Solona</label>
                        </div>
                    </div>
                </div>
            </div>



            <div className="filter_wrapper border border-dark">
                <div className="filter_item d-flex align-items-center justify-content-between p-2">
                    <div className="box">
                        Categories
                    </div>
                    <div className="box">
                        <button className='bg-transparent border-0'>
                            <svg height={25} fill="var(--text-white-75)" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropUpIcon"><path d="m7 14 5-5 5 5z" /></svg>
                        </button>
                    </div>
                </div>
            </div>


            <div className="filter_wrapper border border-dark">
                <div className="filter_item p-2">
                    <div className="collection_wrapper">
                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2" >
                            <input type="checkbox" className="custom-control-input" id="Art" defaultChecked={true} />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="Art">Art</label>
                        </div>

                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="Collectibles" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="Collectibles">Collectibles</label>
                        </div>

                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="Domain" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="Domain">Domain</label>
                        </div>


                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="Music" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="Music">Music</label>
                        </div>

                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="Photography" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="Photography">Photography</label>
                        </div>


                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="Sports" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="Sports">Sports</label>
                        </div>


                    </div>
                </div>
            </div>




            <div className="filter_wrapper border border-dark">
                <div className="filter_item d-flex align-items-center justify-content-between p-2">
                    <div className="box">
                        On Sale in
                    </div>
                    <div className="box">
                        <button className='bg-transparent border-0'>
                            <svg height={25} fill="var(--text-white-75)" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropUpIcon"><path d="m7 14 5-5 5 5z" /></svg>
                        </button>
                    </div>
                </div>
            </div>


            <div className="filter_wrapper border border-dark">
                <div className="filter_item p-2">

                    <div className="">
                        <div className="filter_item p-2">
                            <div className="search_control border_all_side d-flex align-items-center
                                 form_custom_control p-2 px-3 radius_10 mb-3"><i className="fas fa-search text-white me-2" /><input type="search" className="w-100 form_custom_control" placeholder="Filter" /></div>
                        </div>
                    </div>

                    <div className="collection_wrapper">
                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2" >
                            <input type="checkbox" className="custom-control-input" id="ETH" defaultChecked={true} />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="ETH">ETH</label>
                        </div>

                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="WETH" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="WETH">WETH</label>
                        </div>

                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="$BASED" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="$BASED">$BASED</label>
                        </div>


                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="$DG" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="$DG">$DG</label>
                        </div>

                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="0xBTC" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="0xBTC">0xBTC</label>
                        </div>
                    </div>
                </div>
            </div>








        </div>
    )
}


const FilterSection2 = () => {
    return (
        <div className="col-sm-6 col-lg-4 col-xl-3 col-xxl">
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
                        Event Type
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
                        <button className="w-100 btn btn-primary text-start radius_10 text-nowrap">Listing</button>
                    </div>
                    <div className="col-6">
                        <button className="w-100 btn btn-outline-dark text-nowrap text-white text-start radius_10">Sales</button>
                    </div>
                    <div className="col-6">
                        <button className="w-100 btn btn-outline-dark text-nowrap text-white text-start radius_10">Bids </button>
                    </div>
                    <div className="col-6">
                        <button className="w-100 btn btn-outline-dark text-nowrap text-white text-start radius_10">Transfers</button>
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
            <div className="filter_wrapper border border-dark">
                <div className="filter_item p-2">
                    <div className="search_control border_all_side d-flex align-items-center
                                 form_custom_control p-2 px-3 radius_10 mb-3"><i className="fas fa-search text-white me-2" /><input type="search" className="w-100 form_custom_control" placeholder="Filter" /></div>
                </div>
            </div>
            <div className="filter_wrapper border border-dark">
                <div className="filter_item p-2">
                    <div className="collection_wrapper">
                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="collection1Filter2" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="collection1Filter2">CollectionName</label>
                        </div>

                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="collection2Filter2" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="collection2Filter2">CollectionName 2</label>
                        </div>

                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="collection3Filter2" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="collection3Filter2">CollectionName 3</label>
                        </div>
                    </div>
                </div>
            </div>


            <div className="filter_wrapper border border-dark">
                <div className="filter_item d-flex align-items-center justify-content-between p-2">
                    <div className="box">
                        Chains
                    </div>
                    <div className="box">
                        <button className='bg-transparent border-0'>
                            <svg height={25} fill="var(--text-white-75)" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropUpIcon"><path d="m7 14 5-5 5 5z" /></svg>
                        </button>
                    </div>
                </div>
            </div>


            <div className="filter_wrapper border border-dark">
                <div className="filter_item p-2">
                    <div className="collection_wrapper">
                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2" >
                            <input type="checkbox" className="custom-control-input" id="EthereumFilter2" defaultChecked={true} />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="EthereumFilter2">Ethereum</label>
                        </div>

                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="PolygonFilter2" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="PolygonFilter2">Polygon</label>
                        </div>

                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="KlaytnFilter2" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="KlaytnFilter2">Klaytn</label>
                        </div>


                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="SolonaFilter2" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="SolonaFilter2">Solona</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const FilterSection3 = () => {
    return (
        <div className="col-sm-6 col-lg-4 col-xl-3 col-xxl">
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
                        Event Type
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
                        <button className="w-100 btn btn-primary text-start radius_10 text-nowrap">Listing</button>
                    </div>
                    <div className="col-6">
                        <button className="w-100 btn btn-outline-dark text-nowrap text-white text-start radius_10">Sales</button>
                    </div>
                    <div className="col-6">
                        <button className="w-100 btn btn-outline-dark text-nowrap text-white text-start radius_10">Bids </button>
                    </div>
                    <div className="col-6">
                        <button className="w-100 btn btn-outline-dark text-nowrap text-white text-start radius_10">Transfers</button>
                    </div>
                </div>
            </div>


            <div className="filter_wrapper border border-dark">
                <div className="filter_item d-flex align-items-center justify-content-between p-2">
                    <div className="box">
                        Chains
                    </div>
                    <div className="box">
                        <button className='bg-transparent border-0'>
                            <svg height={25} fill="var(--text-white-75)" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropUpIcon"><path d="m7 14 5-5 5 5z" /></svg>
                        </button>
                    </div>
                </div>
            </div>


            <div className="filter_wrapper border border-dark">
                <div className="filter_item p-2">
                    <div className="collection_wrapper">
                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2" >
                            <input type="checkbox" className="custom-control-input" id="EthereumFilter3" defaultChecked={true} />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="EthereumFilter3">Ethereum</label>
                        </div>

                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="PolygonFilter3" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="PolygonFilter3">Polygon</label>
                        </div>

                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="KlaytnFilter3" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="KlaytnFilter3">Klaytn</label>
                        </div>


                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="SolonaFilter3" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="SolonaFilter3">Solona</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const FilterSection4 = () => {
    return (
        <div className="col-sm-6 col-lg-4 col-xl-3 col-xxl">
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
                        Collections
                    </div>
                    <div className="box">
                        <button className='bg-transparent border-0'>
                            <svg height={25} fill="var(--text-white-75)" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropUpIcon"><path d="m7 14 5-5 5 5z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="filter_wrapper border border-dark">
                <div className="filter_item p-2">
                    <div className="search_control border_all_side d-flex align-items-center
                                 form_custom_control p-2 px-3 radius_10 mb-3"><i className="fas fa-search text-white me-2" /><input type="search" className="w-100 form_custom_control" placeholder="Filter" /></div>
                </div>
            </div>
            <div className="filter_wrapper border border-dark">
                <div className="filter_item p-2">
                    <div className="collection_wrapper">
                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="collection1Filter4" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="collection1Filter4">CollectionName</label>
                        </div>

                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="collection2Filter4" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="collection2Filter4">CollectionName 2</label>
                        </div>

                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="collection3Filter4" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="collection3Filter4">CollectionName 3</label>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

const FilterSection5 = () => {
    // price state
    const [priceCurrency, setPriceCurrency] = useState('United States Dollar (USD)')
    return (
        <div className="col-sm-6 col-lg-4 col-xl-3 col-xxl">
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
                        <button className="w-100 btn btn-primary text-start radius_10 text-nowrap">Buy Now</button>
                    </div>
                    <div className="col-6">
                        <button className="w-100 btn btn-outline-dark text-nowrap text-white text-start radius_10">On Auction</button>
                    </div>
                    <div className="col-6">
                        <button className="w-100 btn btn-outline-dark text-nowrap text-white text-start radius_10">New </button>
                    </div>
                    <div className="col-6">
                        <button className="w-100 btn btn-outline-dark text-nowrap text-white text-start radius_10">Has Offers</button>
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
                        <input type="button" className="p-2 border border-dark form_custom_control w-100 bg-transparent"
                            value='Apply' />
                    </div>
                </div>
            </div>





            <div className="filter_wrapper border border-dark">
                <div className="filter_item d-flex align-items-center justify-content-between p-2">
                    <div className="box">
                        Chains
                    </div>
                    <div className="box">
                        <button className='bg-transparent border-0'>
                            <svg height={25} fill="var(--text-white-75)" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropUpIcon"><path d="m7 14 5-5 5 5z" /></svg>
                        </button>
                    </div>
                </div>
            </div>


            <div className="filter_wrapper border border-dark">
                <div className="filter_item p-2">
                    <div className="collection_wrapper">
                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2" >
                            <input type="checkbox" className="custom-control-input" id="EthereumFilter5" defaultChecked={true} />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="EthereumFilter5">Ethereum</label>
                        </div>

                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="PolygonFilter5" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="PolygonFilter5">Polygon</label>
                        </div>

                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="KlaytnFilter5" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="KlaytnFilter5">Klaytn</label>
                        </div>


                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="SolonaFilter5" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="SolonaFilter5">Solona</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="filter_wrapper border border-dark">
                <div className="filter_item d-flex align-items-center justify-content-between p-2">
                    <div className="box">
                        On Sale in
                    </div>
                    <div className="box">
                        <button className='bg-transparent border-0'>
                            <svg height={25} fill="var(--text-white-75)" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropUpIcon"><path d="m7 14 5-5 5 5z" /></svg>
                        </button>
                    </div>
                </div>
            </div>


            <div className="filter_wrapper border border-dark">
                <div className="filter_item p-2">

                    <div className="">
                        <div className="filter_item p-2">
                            <div className="search_control border_all_side d-flex align-items-center
                                 form_custom_control p-2 px-3 radius_10 mb-3"><i className="fas fa-search text-white me-2" /><input type="search" className="w-100 form_custom_control" placeholder="Filter" /></div>
                        </div>
                    </div>

                    <div className="collection_wrapper">
                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2" >
                            <input type="checkbox" className="custom-control-input" id="ETHFilter5" defaultChecked={true} />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="ETHFilter5">ETH</label>
                        </div>

                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="WETHFilter5" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="WETHFilter5">WETH</label>
                        </div>

                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="$BASEDFilter5" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="$BASEDFilter5">$BASED</label>
                        </div>


                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="$DGFilter5" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="$DGFilter5">$DG</label>
                        </div>

                        <div className="custom-control custom-checkbox custom_round_checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="0xBTCFilter5" />
                            <i className="fa-solid fa-check"></i>
                            <label className="custom-control-label" htmlFor="0xBTCFilter5">0xBTC</label>
                        </div>
                    </div>
                </div>
            </div>








        </div>
    )
}