import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
        case '?tab=persons':
            return (<ActivityTable></ActivityTable>);
        case '?tab=brands':
            return (<BrandsActivityTable></BrandsActivityTable>);
        case '?tab=options':
            return (<OptionsActivityTable></OptionsActivityTable>);
        case '?tab=bonds':
            return (<BondsActivityTable></BondsActivityTable>)
        default:
            <span></span>
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
            <div className="container-xxl">
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
            <div className="container-xxl">
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
            <div className="container-xxl">
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

    const randomPrice = () => setTable_object_state(table_object.sort(function (a, b) { return 0.5 - Math.random() }))
    return (
        <div id='StatsActivity' className='my-5'>
            <div className="container-xxl">
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
                                        <th>Bonds Collection</th>
                                        <th>Price
                                            <svg onClick={randomPrice} height={20} fill="var(--text-white)" style={{ cursor: 'pointer' }} className="MuiSvgIcon-root ps-3 ps-md-4 MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon"><path d="m7 10 5 5 5-5z" /></svg>
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
    )
}