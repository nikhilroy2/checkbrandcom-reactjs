import React, { useEffect, useState } from 'react';
import FilterLeftSide from '../../Components/FilterLeftSide/FilterLeftSide';
import { useLocation } from 'react-router-dom';
import FilterCard from '../../Components/FilterCard/FilterCard';
function StatsActivity(props) {

    const getLocation = useLocation();
    const [tabLocation, setTabLocation] = useState(getLocation.search)
    useEffect(() => {
        console.log(getLocation.search);
        setTabLocation(getLocation.search)
    }, [getLocation]);


    // activity switch


    switch (tabLocation) {
        case '':
            return (<ActivityTable></ActivityTable>);
        case '?tab=Rankings':
            return (<ActivityTable></ActivityTable>);
        case '?tab=Activity':
            return (<BrandsActivityTable></BrandsActivityTable>);
        case '?tab=options':
            return (<OptionsActivityTable></OptionsActivityTable>);
        case '?tab=bonds':
            return (<BondsActivityTable></BondsActivityTable>);
        case '?tab=statistics1':
            return (<Static1ActivityTable></Static1ActivityTable>);
        case '?tab=statistics2':
            return (<Static1ActivityTable></Static1ActivityTable>);
        default:
            return <span></span>
    }
}
export default StatsActivity;

const ActivityTable = () => {

    // Last items
    const [lastItems, setLastItems] = React.useState('Last 7 days');
    const [categories, setCategories] = React.useState('All categories');
    const [chains, setChains] = React.useState('All chains');

    const table_object = [
        {
            id: 1,
            collection: 'Collection name',
            volume: 18531.52,
            period_24: -81.93,
            period_7: 119.08,
            floor_price: 1.45,
            owners: '10.3K',
            items: '20.2K'
        },
        {
            id: 2,
            collection: 'Collection name',
            volume: 18531.52,
            // period_24: -81.93,
            // period_7: 119.08,
            floor_price: 1.45,
            owners: '10.3K',
            items: '20.2K'
        },
        {
            id: 3,
            collection: 'Collection name',
            volume: 18531.52,
            period_24: -81.93,
            period_7: 119.08,
            floor_price: 1.45,
            owners: '10.3K',
            items: '20.2K'
        },
    ]
    return (
        <div id='StatsActivity' className='my-5'>
            <div className="container-fluid">

                <div className="row border_top">
                    <div className="filter_aside_wrapper  p-3">
                        {/* Filter left side */}
                        <FilterLeftSide></FilterLeftSide>
                        {/* Filter left side End */}
                    </div>
                    <div className="col flex-grow-1 p-3">
                        <div className="row">
                            <div className="col-12">
                                <div className="activity_control mb-4">
                                    <div className="d-flex justify-content-center flex-wrap align-items-center">
                                        {/* control */}

                                        {/* Last items */}
                                        <div className="dropdown mb-3 me-3">
                                            <button
                                                className=" form_custom_control bg-transparent border_all_side w-100 p-3 py-2 radius_10 text-start d-flex align-items-center"
                                                data-mdb-ripple-duration="0"
                                                data-mdb-toggle="dropdown"
                                            >
                                                <span className="flex-grow-1">{lastItems}</span>
                                                <i className="fas fa-angle-down ms-4   "></i>
                                            </button>
                                            <div className="dropdown-menu form_custom_control w-100 py-0">
                                                <ul className="list-unstyled bg_transparent w-100 py-0">
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setLastItems("Last 7 days")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Last 7 days</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setLastItems("Last 30 days")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Last 30 days</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setLastItems("Last 90 days")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Last 90 days</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Categories */}
                                        <div className="dropdown mb-3 me-3">
                                            <button
                                                className=" form_custom_control bg-transparent border_all_side  w-100 p-3 py-2 radius_10 text-start d-flex align-items-center"
                                                data-mdb-ripple-duration="0"
                                                data-mdb-toggle="dropdown"
                                            >

                                                <svg fill='var(--text-white-75)' height="25" className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GridOnIcon"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" /></svg>


                                                <span className="flex-grow-1">{categories}</span>
                                                <i className="fas fa-angle-down ms-4   "></i>
                                            </button>
                                            <div className="dropdown-menu form_custom_control w-100 py-0">
                                                <ul className="list-unstyled bg_transparent w-100 py-0">
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setCategories("All categories")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">All categories</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setCategories("Categories 2")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Categories 2</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setCategories("Categories 3")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Categories 3</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Chains */}

                                        <div className="dropdown mb-3 me-3">
                                            <button
                                                className=" form_custom_control bg-transparent border_all_side  w-100 p-3 py-2 radius_10 text-start d-flex align-items-center"
                                                data-mdb-ripple-duration="0"
                                                data-mdb-toggle="dropdown"
                                            >
                                                <svg fill='var(--text-white-75)' height="25" className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InsertLinkIcon"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" /></svg>
                                                <span className="flex-grow-1">{chains}</span>
                                                <i className="fas fa-angle-down ms-4   "></i>
                                            </button>
                                            <div className="dropdown-menu form_custom_control w-100 py-0">
                                                <ul className="list-unstyled bg_transparent w-100 py-0">
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setChains("All chains")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >


                                                            <span className="flex-grow-1">All chains</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setChains("Chains 2")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Chains 2</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setChains("Chains 3")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Chains 3</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table  text-white custom_activity_table">
                                        <thead>
                                            <tr>
                                                <th>Collection</th>
                                                <th>Volume


                                                    <svg height={20} fill="var(--text-white)" style={{ cursor: 'pointer' }} className="MuiSvgIcon-root ps-3 ps-md-4 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon"><path d="m7 10 5 5 5-5z" /></svg>

                                                </th>
                                                <th>24h %</th>
                                                <th>7d %</th>
                                                <th>Floor Price</th>
                                                <th>Owners</th>
                                                <th>Items</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {table_object.map(v => {
                                                return (
                                                    <tr key={v.id}>
                                                        <td className='text-nowrap'>
                                                            <div className="d-flex align-items-center">
                                                                {v.id} <div className="circle_box mx-2"></div> {v.collection}
                                                            </div>
                                                        </td>
                                                        <td className='text-nowrap'>
                                                            <img height={20} className="me-2" src={require('../../Static/img/eth.svg').default} alt="img" />  {v.volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                        </td>

                                                        <td className='text-nowrap'>
                                                            {v.period_24 ? v.period_24 >= 0 ? <span className='text-success'>+{v.period_24}%</span> : <span className='text-danger'>
                                                                {v.period_24}%
                                                            </span> : '---'}

                                                        </td>
                                                        <td className='text-nowrap'>

                                                            {v.period_7 ? v.period_7 >= 0 ? <span className='text-success'>+{v.period_7}%</span> : <span className='text-danger'>
                                                                {v.period_7}%
                                                            </span> : '---'}
                                                        </td>
                                                        <td className='text-nowrap'>
                                                            <img height={20} className="me-2" src={require('../../Static/img/eth.svg').default} alt="img" />

                                                            {v.floor_price}
                                                        </td>
                                                        <td className='text-nowrap'>
                                                            {v.owners}
                                                        </td>
                                                        <td className='text-nowrap'>
                                                            {v.items}
                                                        </td>
                                                    </tr>
                                                )
                                            })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>

            </div>
        </div>
    )
}
const BrandsActivityTable = () => {
    const table_object = [
        {
            id: 1,
            collection: 'Collection name',
            volume: 18531.52,
            period_24: -81.93,
            period_7: 119.08,
            floor_price: 1.45,
            owners: '10.3K',
            items: '20.2K'
        },
        {
            id: 2,
            collection: 'Collection name',
            volume: 18531.52,
            // period_24: -81.93,
            // period_7: 119.08,
            floor_price: 1.45,
            owners: '10.3K',
            items: '20.2K'
        },
        {
            id: 3,
            collection: 'Collection name',
            volume: 18531.52,
            period_24: -81.93,
            period_7: 119.08,
            floor_price: 1.45,
            owners: '10.3K',
            items: '20.2K'
        },
    ]

    const [lastItems, setLastItems] = React.useState('Last 7 days');
    const [categories, setCategories] = React.useState('All categories');
    const [chains, setChains] = React.useState('All chains');

    return (
        <div id='StatsActivity' className='my-5'>
            <div className="container-fluid">
                <div className="row border_top">
                    <div className="filter_aside_wrapper  p-3">
                        {/* Filter left side */}
                        <FilterLeftSide></FilterLeftSide>
                        {/* Filter left side End */}
                    </div>
                    <div className="col flex-grow-1 p-3">

                        <div className="row">
                            <div className="col-12">
                                <div className="activity_control mb-4">
                                    <div className="d-flex justify-content-center flex-wrap align-items-center">
                                        {/* control */}

                                        {/* Last items */}
                                        <div className="dropdown mb-3 me-3">
                                            <button
                                                className=" form_custom_control bg-transparent border_all_side w-100 p-3 py-2 radius_10 text-start d-flex align-items-center"
                                                data-mdb-ripple-duration="0"
                                                data-mdb-toggle="dropdown"
                                            >
                                                <span className="flex-grow-1">{lastItems}</span>
                                                <i className="fas fa-angle-down ms-4   "></i>
                                            </button>
                                            <div className="dropdown-menu form_custom_control w-100 py-0">
                                                <ul className="list-unstyled bg_transparent w-100 py-0">
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setLastItems("Last 7 days")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Last 7 days</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setLastItems("Last 30 days")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Last 30 days</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setLastItems("Last 90 days")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Last 90 days</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Categories */}
                                        <div className="dropdown mb-3 me-3">
                                            <button
                                                className=" form_custom_control bg-transparent border_all_side  w-100 p-3 py-2 radius_10 text-start d-flex align-items-center"
                                                data-mdb-ripple-duration="0"
                                                data-mdb-toggle="dropdown"
                                            >

                                                <svg fill='var(--text-white-75)' height="25" className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GridOnIcon"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" /></svg>


                                                <span className="flex-grow-1">{categories}</span>
                                                <i className="fas fa-angle-down ms-4   "></i>
                                            </button>
                                            <div className="dropdown-menu form_custom_control w-100 py-0">
                                                <ul className="list-unstyled bg_transparent w-100 py-0">
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setCategories("All categories")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">All categories</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setCategories("Categories 2")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Categories 2</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setCategories("Categories 3")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Categories 3</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Chains */}

                                        <div className="dropdown mb-3 me-3">
                                            <button
                                                className=" form_custom_control bg-transparent border_all_side  w-100 p-3 py-2 radius_10 text-start d-flex align-items-center"
                                                data-mdb-ripple-duration="0"
                                                data-mdb-toggle="dropdown"
                                            >
                                                <svg fill='var(--text-white-75)' height="25" className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InsertLinkIcon"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" /></svg>
                                                <span className="flex-grow-1">{chains}</span>
                                                <i className="fas fa-angle-down ms-4   "></i>
                                            </button>
                                            <div className="dropdown-menu form_custom_control w-100 py-0">
                                                <ul className="list-unstyled bg_transparent w-100 py-0">
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setChains("All chains")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >


                                                            <span className="flex-grow-1">All chains</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setChains("Chains 2")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Chains 2</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setChains("Chains 3")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Chains 3</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table  text-white custom_activity_table">
                                        <thead>
                                            <tr>
                                                <th>Brand Collection</th>
                                                <th>Price
                                                    <svg height={20} fill="var(--text-white)" style={{ cursor: 'pointer' }} className="MuiSvgIcon-root ps-3 ps-md-4 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon"><path d="m7 10 5 5 5-5z" /></svg>

                                                </th>
                                                <th>24h %</th>
                                                <th>7d %</th>
                                                <th>Last Price</th>
                                                <th>Owners</th>
                                                <th>Items</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {table_object.map(v => {
                                                return (
                                                    <tr key={v.id}>
                                                        <td className='text-nowrap'>
                                                            <div className="d-flex align-items-center">
                                                                {v.id} <div className="circle_box mx-2"></div> {v.collection}
                                                            </div>
                                                        </td>
                                                        <td className='text-nowrap'>
                                                            <img height={20} className="me-2" src={require('../../Static/img/eth.svg').default} alt="img" />  {v.volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                        </td>

                                                        <td className='text-nowrap'>
                                                            {v.period_24 ? v.period_24 >= 0 ? <span className='text-success'>+{v.period_24}%</span> : <span className='text-danger'>
                                                                {v.period_24}%
                                                            </span> : '---'}

                                                        </td>
                                                        <td className='text-nowrap'>

                                                            {v.period_7 ? v.period_7 >= 0 ? <span className='text-success'>+{v.period_7}%</span> : <span className='text-danger'>
                                                                {v.period_7}%
                                                            </span> : '---'}
                                                        </td>
                                                        <td className='text-nowrap'>
                                                            <img height={20} className="me-2" src={require('../../Static/img/eth.svg').default} alt="img" />

                                                            {v.floor_price}
                                                        </td>
                                                        <td className='text-nowrap'>
                                                            {v.owners}
                                                        </td>
                                                        <td className='text-nowrap'>
                                                            {v.items}
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
const OptionsActivityTable = () => {
    const table_object = [
        {
            id: 1,
            collection: 'Collection name',
            volume: 18531.52,
            period_24: -81.93,
            period_7: 119.08,
            floor_price: 1.45,
            owners: '10.3K',
            items: '20.2K'
        },
        {
            id: 2,
            collection: 'Collection name',
            volume: 18531.52,
            period_24: -81.93,
            // period_7: 119.08,
            floor_price: 1.45,
            owners: '10.3K',
            items: '20.2K'
        },
        {
            id: 3,
            collection: 'Collection name',
            volume: 18531.52,
            period_24: -81.93,
            period_7: 119.08,
            floor_price: 1.45,
            owners: '10.3K',
            items: '20.2K'
        },
    ]

    const [lastItems, setLastItems] = React.useState('Last 7 days');
    const [categories, setCategories] = React.useState('All categories');
    const [chains, setChains] = React.useState('All chains');

    return (
        <div id='StatsActivity' className='my-5'>
            <div className="container-fluid">
                <div className="row border_top">
                    <div className="filter_aside_wrapper  p-3">
                        {/* Filter left side */}
                        <FilterLeftSide></FilterLeftSide>
                        {/* Filter left side End */}
                    </div>

                    <div className="col flex-grow-1 p-3">
                        <div className="row">
                            <div className="col-12">
                                <div className="activity_control mb-4">
                                    <div className="d-flex justify-content-center flex-wrap align-items-center">
                                        {/* control */}

                                        {/* Last items */}
                                        <div className="dropdown mb-3 me-3">
                                            <button
                                                className=" form_custom_control bg-transparent border_all_side w-100 p-3 py-2 radius_10 text-start d-flex align-items-center"
                                                data-mdb-ripple-duration="0"
                                                data-mdb-toggle="dropdown"
                                            >
                                                <span className="flex-grow-1">{lastItems}</span>
                                                <i className="fas fa-angle-down ms-4   "></i>
                                            </button>
                                            <div className="dropdown-menu form_custom_control w-100 py-0">
                                                <ul className="list-unstyled bg_transparent w-100 py-0">
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setLastItems("Last 7 days")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Last 7 days</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setLastItems("Last 30 days")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Last 30 days</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setLastItems("Last 90 days")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Last 90 days</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Categories */}
                                        <div className="dropdown mb-3 me-3">
                                            <button
                                                className=" form_custom_control bg-transparent border_all_side  w-100 p-3 py-2 radius_10 text-start d-flex align-items-center"
                                                data-mdb-ripple-duration="0"
                                                data-mdb-toggle="dropdown"
                                            >

                                                <svg fill='var(--text-white-75)' height="25" className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GridOnIcon"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" /></svg>


                                                <span className="flex-grow-1">{categories}</span>
                                                <i className="fas fa-angle-down ms-4   "></i>
                                            </button>
                                            <div className="dropdown-menu form_custom_control w-100 py-0">
                                                <ul className="list-unstyled bg_transparent w-100 py-0">
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setCategories("All categories")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">All categories</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setCategories("Categories 2")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Categories 2</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setCategories("Categories 3")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Categories 3</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Chains */}

                                        <div className="dropdown mb-3 me-3">
                                            <button
                                                className=" form_custom_control bg-transparent border_all_side  w-100 p-3 py-2 radius_10 text-start d-flex align-items-center"
                                                data-mdb-ripple-duration="0"
                                                data-mdb-toggle="dropdown"
                                            >
                                                <svg fill='var(--text-white-75)' height="25" className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InsertLinkIcon"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" /></svg>
                                                <span className="flex-grow-1">{chains}</span>
                                                <i className="fas fa-angle-down ms-4   "></i>
                                            </button>
                                            <div className="dropdown-menu form_custom_control w-100 py-0">
                                                <ul className="list-unstyled bg_transparent w-100 py-0">
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setChains("All chains")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >


                                                            <span className="flex-grow-1">All chains</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setChains("Chains 2")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Chains 2</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setChains("Chains 3")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Chains 3</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table  text-white custom_activity_table">
                                        <thead>
                                            <tr>
                                                <th>Options Collection</th>
                                                <th>Price
                                                    <svg height={20} fill="var(--text-white)" style={{ cursor: 'pointer' }} className="MuiSvgIcon-root ps-3 ps-md-4 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon"><path d="m7 10 5 5 5-5z" /></svg>
                                                </th>
                                                <th>24h %</th>
                                                <th>7d %</th>
                                                <th>Last Price</th>
                                                <th>Owners</th>
                                                <th>Items</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {table_object.map(v => {
                                                return (
                                                    <tr key={v.id}>
                                                        <td className='text-nowrap'>
                                                            <div className="d-flex align-items-center">
                                                                {v.id} <div className="circle_box mx-2"></div> {v.collection}
                                                            </div>
                                                        </td>
                                                        <td className='text-nowrap'>
                                                            <img height={20} className="me-2" src={require('../../Static/img/eth.svg').default} alt="img" />  {v.volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                        </td>

                                                        <td className='text-nowrap'>
                                                            {v.period_24 ? v.period_24 >= 0 ? <span className='text-success'>+{v.period_24}%</span> : <span className='text-danger'>
                                                                {v.period_24}%
                                                            </span> : '---'}

                                                        </td>
                                                        <td className='text-nowrap'>

                                                            {v.period_7 ? v.period_7 >= 0 ? <span className='text-success'>+{v.period_7}%</span> : <span className='text-danger'>
                                                                {v.period_7}%
                                                            </span> : '---'}
                                                        </td>
                                                        <td className='text-nowrap'>
                                                            <img height={20} className="me-2" src={require('../../Static/img/eth.svg').default} alt="img" />

                                                            {v.floor_price}
                                                        </td>
                                                        <td className='text-nowrap'>
                                                            {v.owners}
                                                        </td>
                                                        <td className='text-nowrap'>
                                                            {v.items}
                                                        </td>
                                                    </tr>
                                                )
                                            })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const BondsActivityTable = () => {
    const table_object = [
        {
            id: 1,
            collection: 'Collection name',
            price: 18531.52,
            yield: 25,
            maturity: '365 days',
            value: '1.45',
            owners: 'Waltermark',
            items: '1.45'
        },
        {
            id: 2,
            collection: 'Collection name',
            price: 18531.52,
            yield: 30,
            maturity: '365 days',
            value: '1.45',
            owners: 'Waltermark',
            items: '1.45'
        },
        {
            id: 3,
            collection: 'Collection name',
            price: 18531.52,
            yield: 35,
            maturity: '365 days',
            value: '1.45',
            owners: 'Waltermark',
            items: '1.45'
        },

    ]

    const [lastItems, setLastItems] = React.useState('Last 7 days');
    const [categories, setCategories] = React.useState('All categories');
    const [table_object_state, setTable_object_state] = React.useState(table_object)
    const [chains, setChains] = React.useState('All chains');

    function randomPrice() {
        setTable_object_state(table_object.sort(function (a, b) { return 0.5 - Math.random() }))
    }
    return (
        <div id='StatsActivity' className='my-5'>
            <div className="container-fluid">

                <div className="row border_top">
                    <div className="filter_aside_wrapper  p-3">
                        {/* Filter left side */}
                        <FilterLeftSide></FilterLeftSide>
                        {/* Filter left side End */}
                    </div>

                    <div className="col flex-grow-1 p-3">

                        <div className="row">
                            <div className="col-12">
                                <div className="activity_control mb-4">
                                    <div className="d-flex justify-content-center flex-wrap align-items-center">
                                        {/* control */}

                                        {/* Last items */}
                                        <div className="dropdown mb-3 me-3">
                                            <button
                                                className=" form_custom_control bg-transparent border_all_side w-100 p-3 py-2 radius_10 text-start d-flex align-items-center"
                                                data-mdb-ripple-duration="0"
                                                data-mdb-toggle="dropdown"
                                            >
                                                <span className="flex-grow-1">{lastItems}</span>
                                                <i className="fas fa-angle-down ms-4   "></i>
                                            </button>
                                            <div className="dropdown-menu form_custom_control w-100 py-0">
                                                <ul className="list-unstyled bg_transparent w-100 py-0">
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setLastItems("Last 7 days")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Last 7 days</span>
                                                        </button>
                                                    </li>
                                                    <li className="mb-2">
                                                        <button
                                                            onClick={() => setLastItems("Last 30 days")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Last 30 days</span>
                                                        </button>
                                                    </li>
                                                    <li className="mb-2">
                                                        <button
                                                            onClick={() => setLastItems("Last 90 days")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Last 90 days</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Categories */}
                                        <div className="dropdown mb-3 me-3">
                                            <button
                                                className=" form_custom_control bg-transparent border_all_side  w-100 p-3 py-2 radius_10 text-start d-flex align-items-center"
                                                data-mdb-ripple-duration="0"
                                                data-mdb-toggle="dropdown">
                                                <svg fill='var(--text-white-75)' height="25" className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GridOnIcon"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" /></svg>
                                                <span className="flex-grow-1">{categories}</span>
                                                <i className="fas fa-angle-down ms-4   "></i>
                                            </button>
                                            <div className="dropdown-menu form_custom_control w-100 py-0">
                                                <ul className="list-unstyled bg_transparent w-100 py-0">
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setCategories("All categories")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">All categories</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setCategories("Categories 2")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Categories 2</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setCategories("Categories 3")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Categories 3</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Chains */}

                                        <div className="dropdown mb-3 me-3">
                                            <button
                                                className=" form_custom_control bg-transparent border_all_side  w-100 p-3 py-2 radius_10 text-start d-flex align-items-center"
                                                data-mdb-ripple-duration="0"
                                                data-mdb-toggle="dropdown"
                                            >
                                                <svg fill='var(--text-white-75)' height="25" className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InsertLinkIcon"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" /></svg>
                                                <span className="flex-grow-1">{chains}</span>
                                                <i className="fas fa-angle-down ms-4   "></i>
                                            </button>
                                            <div className="dropdown-menu form_custom_control w-100 py-0">
                                                <ul className="list-unstyled bg_transparent w-100 py-0">
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setChains("All chains")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >


                                                            <span className="flex-grow-1">All chains</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setChains("Chains 2")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Chains 2</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setChains("Chains 3")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Chains 3</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table  text-white custom_activity_table">
                                        <thead>
                                            <tr>
                                                <th>Bonds Collection</th>
                                                <th>Price
                                                    <svg onClick={() => randomPrice()} height={20} fill="var(--text-white)" style={{ cursor: 'pointer' }} className="MuiSvgIcon-root ps-3 ps-md-4 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon"><path d="m7 10 5 5 5-5z" /></svg>
                                                </th>
                                                <th>Yield %</th>
                                                <th>Maturity %</th>
                                                <th>Value</th>
                                                <th>Owner</th>
                                                <th>Profit</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {table_object_state.map(v => {
                                                return (
                                                    <tr key={v.id}>
                                                        <td className='text-nowrap'>
                                                            <div className="d-flex align-items-center">
                                                                {v.id} <div className="circle_box mx-2"></div> {v.collection}
                                                            </div>
                                                        </td>
                                                        <td className='text-nowrap'>
                                                            <img height={20} className="me-2" src={require('../../Static/img/eth.svg').default} alt="img" />
                                                            {v.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                        </td>

                                                        <td className='text-nowrap'>
                                                            {v.yield ? v.yield >= 0 ? <span className='text-success'>{v.yield}%</span> : <span className='text-danger'>
                                                                {v.yield}%
                                                            </span> : '---'}

                                                        </td>
                                                        <td className='text-nowrap'>
                                                            <span className="text-white-50">
                                                                {v.maturity}
                                                            </span>
                                                        </td>
                                                        <td className='text-nowrap'>
                                                            <img height={20} className="me-2" src={require('../../Static/img/eth.svg').default} alt="img" />
                                                            {v.value}
                                                        </td>
                                                        <td className='text-nowrap'>
                                                            <a href="#">
                                                                {v.owners}
                                                            </a>
                                                        </td>
                                                        <td className='text-nowrap'>
                                                            {v.items}
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}




const Static1ActivityTable = () => {
    const table_object = [
        {
            id: 1,
            collection: 'Collection name',
            price: 18531.52,
            yield: 25,
            maturity: '365 days',
            value: '1.45',
            owners: 'Waltermark',
            items: '1.45'
        },
        {
            id: 2,
            collection: 'Collection name',
            price: 18531.52,
            yield: 30,
            maturity: '365 days',
            value: '1.45',
            owners: 'Waltermark',
            items: '1.45'
        },
        {
            id: 3,
            collection: 'Collection name',
            price: 18531.52,
            yield: 35,
            maturity: '365 days',
            value: '1.45',
            owners: 'Waltermark',
            items: '1.45'
        },

    ]

    const [lastItems, setLastItems] = React.useState('Last 7 days');
    const [categories, setCategories] = React.useState('All categories');
    const [table_object_state, setTable_object_state] = React.useState(table_object)
    const [chains, setChains] = React.useState('All chains');

    function randomPrice() {
        setTable_object_state(table_object.sort(function (a, b) { return 0.5 - Math.random() }))
    }
    return (
        <div id='StatsActivity' className='my-5'>
            <div className="container-fluid">

                <div className="row border_top">
                    <div className="filter_aside_wrapper  p-3">
                        {/* Filter left side */}
                        <FilterLeftSide></FilterLeftSide>
                        {/* Filter left side End */}
                    </div>

                    <div className="col flex-grow-1 p-3">
                        <div className="p-3 text-center h2">
                            <h2 className="text-center">
                                <strong>Bonds</strong> Collection Name
                            </h2>
                        </div>

                        <div className="w-100">
                            <TableFilterActivity></TableFilterActivity>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="activity_control mb-4">
                                    <div className="d-flex justify-content-center flex-wrap align-items-center">
                                        {/* control */}

                                        {/* Last items */}
                                        <div className="dropdown mb-3 me-3">
                                            <button
                                                className=" form_custom_control bg-transparent border_all_side w-100 p-3 py-2 radius_10 text-start d-flex align-items-center"
                                                data-mdb-ripple-duration="0"
                                                data-mdb-toggle="dropdown"
                                            >
                                                <span className="flex-grow-1">{lastItems}</span>
                                                <i className="fas fa-angle-down ms-4   "></i>
                                            </button>
                                            <div className="dropdown-menu form_custom_control w-100 py-0">
                                                <ul className="list-unstyled bg_transparent w-100 py-0">
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setLastItems("Last 7 days")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Last 7 days</span>
                                                        </button>
                                                    </li>
                                                    <li className="mb-2">
                                                        <button
                                                            onClick={() => setLastItems("Last 30 days")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Last 30 days</span>
                                                        </button>
                                                    </li>
                                                    <li className="mb-2">
                                                        <button
                                                            onClick={() => setLastItems("Last 90 days")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Last 90 days</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Categories */}
                                        <div className="dropdown mb-3 me-3">
                                            <button
                                                className=" form_custom_control bg-transparent border_all_side  w-100 p-3 py-2 radius_10 text-start d-flex align-items-center"
                                                data-mdb-ripple-duration="0"
                                                data-mdb-toggle="dropdown">
                                                <svg fill='var(--text-white-75)' height="25" className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GridOnIcon"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" /></svg>
                                                <span className="flex-grow-1">{categories}</span>
                                                <i className="fas fa-angle-down ms-4   "></i>
                                            </button>
                                            <div className="dropdown-menu form_custom_control w-100 py-0">
                                                <ul className="list-unstyled bg_transparent w-100 py-0">
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setCategories("All categories")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">All categories</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setCategories("Categories 2")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Categories 2</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setCategories("Categories 3")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Categories 3</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Chains */}

                                        <div className="dropdown mb-3 me-3">
                                            <button
                                                className=" form_custom_control bg-transparent border_all_side  w-100 p-3 py-2 radius_10 text-start d-flex align-items-center"
                                                data-mdb-ripple-duration="0"
                                                data-mdb-toggle="dropdown"
                                            >
                                                <svg fill='var(--text-white-75)' height="25" className="MuiSvgIcon-root me-2 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InsertLinkIcon"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" /></svg>
                                                <span className="flex-grow-1">{chains}</span>
                                                <i className="fas fa-angle-down ms-4   "></i>
                                            </button>
                                            <div className="dropdown-menu form_custom_control w-100 py-0">
                                                <ul className="list-unstyled bg_transparent w-100 py-0">
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setChains("All chains")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >


                                                            <span className="flex-grow-1">All chains</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setChains("Chains 2")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Chains 2</span>
                                                        </button>
                                                    </li>
                                                    <li className=" mb-2">
                                                        <button
                                                            onClick={() => setChains("Chains 3")}
                                                            className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                            data-mdb-ripple-duration="0"
                                                            data-mdb-toggle="dropdown"
                                                        >
                                                            <span className="flex-grow-1">Chains 3</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table  text-white custom_activity_table">
                                        <thead>
                                            <tr>
                                                <th>
                                                    Pack
                                                </th>
                                                <th>
                                                    Items
                                                </th>
                                                <th>
                                                    Price
                                                </th>
                                                <th>
                                                    Profit
                                                </th>
                                                <th>
                                                    Duration <br />
                                                    days
                                                </th>
                                                <th>
                                                    Period <br />
                                                    days
                                                </th>
                                                <th>
                                                    Yield %
                                                </th>
                                                <th>
                                                    Redemp.
                                                </th>
                                                <th>
                                                    Holder <br />
                                                    Profit
                                                </th>
                                                <th>
                                                    Freeze %
                                                </th>
                                                <th>
                                                    Description <br />
                                                    Properties
                                                </th>
                                                <th>
                                                    Stats
                                                </th>
                                                <th>
                                                    Unlockable <br />
                                                    Content
                                                </th>
                                                <th>
                                                    Explicit
                                                </th>
                                                <th>
                                                    Supply
                                                </th>
                                                <th>
                                                    Freeze <br />
                                                    Blockchain Metadata
                                                </th>
                                                <th>
                                                    Status
                                                </th>
                                                <th>
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center text-nowrap">
                                                        1 <div className="token_box mx-3"></div> 10 twocathreyes A
                                                    </div>
                                                </td>

                                                <td>
                                                    <span className="text-success">
                                                        1000
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img className='me-2' height="20" src={require('../../Static/img/eth.svg').default} alt="img" /> 0.01
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="d-flex align-items-center text-success">
                                                        <img className='me-2' height="20" src={require('../../Static/img/eth.svg').default} alt="img" />

                                                        18,531.52

                                                    </div>
                                                </td>

                                                <td>
                                                    30
                                                </td>
                                                <td>
                                                    365
                                                </td>
                                                <td>
                                                    <span className="text-success">
                                                        20
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center text-danger">
                                                        <img className='me-2' height="20" src={require('../../Static/img/eth.svg').default} alt="img" />
                                                        0.012
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="d-flex align-items-center text-success">
                                                        <img className='me-2' height="20" src={require('../../Static/img/eth.svg').default} alt="img" />
                                                        0.012
                                                    </div>
                                                </td>

                                                <td>
                                                    <span className="text-danger">
                                                        50
                                                    </span>
                                                </td>

                                                <td>
                                                    Describe of <br />
                                                    token123...
                                                </td>

                                                <td>
                                                    Type/ <br />
                                                    Name
                                                </td>
                                                <td>
                                                    Name/
                                                    Value
                                                </td>
                                                <td>
                                                    TextText <br />
                                                    TextTe...
                                                </td>
                                                <td>
                                                    <span className="text-danger">
                                                        No
                                                    </span>
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    Ethereum
                                                </td>
                                                <td>
                                                    <span className="text-success">
                                                        Yes
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-success">Sale</span>
                                                </td>

                                                <td>
                                                    <div className="token_box p-1 text-danger cup" style={{ background: 'transparent' }}>
                                                        Stop
                                                    </div>
                                                </td>
                                            </tr>



                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center text-nowrap">
                                                        2 <div className="token_box mx-3"></div> 10 twocathreyes A
                                                    </div>
                                                </td>

                                                <td>
                                                    <span className="text-success">
                                                        1000
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img className='me-2' height="20" src={require('../../Static/img/eth.svg').default} alt="img" /> 0.01
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="d-flex align-items-center text-success">
                                                        <img className='me-2' height="20" src={require('../../Static/img/eth.svg').default} alt="img" />

                                                        18,531.52

                                                    </div>
                                                </td>

                                                <td>
                                                    30
                                                </td>
                                                <td>
                                                    365
                                                </td>
                                                <td>
                                                    <span className="text-success">
                                                        20
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center text-danger">
                                                        <img className='me-2' height="20" src={require('../../Static/img/eth.svg').default} alt="img" />
                                                        0.012
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="d-flex align-items-center text-success">
                                                        <img className='me-2' height="20" src={require('../../Static/img/eth.svg').default} alt="img" />
                                                        0.012
                                                    </div>
                                                </td>

                                                <td>
                                                    <span className="text-danger">
                                                        50
                                                    </span>
                                                </td>

                                                <td>
                                                    Describe of <br />
                                                    token123...
                                                </td>

                                                <td>
                                                    Type/ <br />
                                                    Name
                                                </td>
                                                <td>
                                                    Name/
                                                    Value
                                                </td>
                                                <td>
                                                    TextText <br />
                                                    TextTe...
                                                </td>
                                                <td>
                                                    <span className="text-danger">
                                                        No
                                                    </span>
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    Ethereum
                                                </td>
                                                <td>
                                                    <span className="text-success">
                                                        Yes
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-success">Sale</span>
                                                </td>

                                                <td>
                                                    <div className="token_box p-1 text-white text-center cup" style={{ background: 'transparent' }}>
                                                        ...
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center text-nowrap">
                                                        1 <div className="token_box mx-3"></div> 10 twocathreyes A
                                                    </div>
                                                </td>

                                                <td>
                                                    <span className="text-success">
                                                        1000
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img className='me-2' height="20" src={require('../../Static/img/eth.svg').default} alt="img" /> 0.01
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="d-flex align-items-center text-success">
                                                        <img className='me-2' height="20" src={require('../../Static/img/eth.svg').default} alt="img" />

                                                        18,531.52

                                                    </div>
                                                </td>

                                                <td>
                                                    30
                                                </td>
                                                <td>
                                                    365
                                                </td>
                                                <td>
                                                    <span className="text-success">
                                                        20
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center text-danger">
                                                        <img className='me-2' height="20" src={require('../../Static/img/eth.svg').default} alt="img" />
                                                        0.012
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="d-flex align-items-center text-success">
                                                        <img className='me-2' height="20" src={require('../../Static/img/eth.svg').default} alt="img" />
                                                        0.012
                                                    </div>
                                                </td>

                                                <td>
                                                    <span className="text-danger">
                                                        50
                                                    </span>
                                                </td>

                                                <td>
                                                    Describe of <br />
                                                    token123...
                                                </td>

                                                <td>
                                                    Type/ <br />
                                                    Name
                                                </td>
                                                <td>
                                                    Name/
                                                    Value
                                                </td>
                                                <td>
                                                    TextText <br />
                                                    TextTe...
                                                </td>
                                                <td>
                                                    <span className="text-danger">
                                                        No
                                                    </span>
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    Ethereum
                                                </td>
                                                <td>
                                                    <span className="text-success">
                                                        Yes
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-success">Sale</span>
                                                </td>

                                                <td>
                                                    <div className="token_box p-1 text-success cup" style={{ background: 'transparent' }}>
                                                        Sale
                                                    </div>
                                                </td>
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
    )
}



const TableFilterActivity = () => {
    //const [addItem, setAddItem] = React.useState('All items')
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

                <button className="form_custom_control me-3 mb-3 p-3 py-2 radius_10 text-start d-flex align-items-center">
                    Create Bonds Pack <i className="fas fa-plus ms-4   "></i>
                </button>

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
    )
}