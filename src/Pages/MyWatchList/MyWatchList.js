import React from 'react';

function MyWatchList(props) {
    return (
        <div id='MyWatchList' className='my-5'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">
                            My WatchList
                        </h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 custom_table_history py-3">
                        <div className="table-responsive">
                            <table className="table text-white">
                                <thead>
                                    <tr>
                                        <th className='text-white'>
                                            Collection
                                        </th>
                                        <th className='text-white'>
                                            Floor price
                                        </th>

                                        <th className='text-white'>
                                            7d Volume
                                        </th>
                                        <th className='text-white'>
                                            24h %
                                        </th>
                                        <th className='text-white'>
                                            7d %
                                        </th>
                                        <th className='text-white'>
                                            Owners
                                        </th>
                                        <th className='text-white'>
                                            Items
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                        <div className="controler text-center pt-5">
                            <img src={require('../../Static/img/empty-watchlist-dark.svg').default} alt="img" />

                            <p className='text_white_75 text-center my-3'>
                                You are not watching any collections
                                <button className='bg-transparent text-white-50 border-0 ms-2' title='You can add collections here
to easily track them'>
                                    <i className="fas fa-info    "></i>
                                </button>
                            </p>

                            <a href="/explore?tab=top" className="btn btn-primary" >
                                Explore collections
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyWatchList;