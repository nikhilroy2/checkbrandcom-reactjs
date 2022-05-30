import React from 'react';

function ControlPanel(props) {
    return (
        <div id='ControlPanel' className='my-5'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12 mb-3 mb-md-5">
                        <h3 className="text-center">
                            Control Panel
                        </h3>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-sm-6 col-md-4 col-xl-3 ">
                        <ul className="list-unstyled">
                            <li className='mb-2'>
                                <a href="#" className=" text_white_75">
                                    Change super admin
                                </a>
                            </li>

                            <li className='mb-2'>
                                <a href="#" className=" text_white_75">
                                    Administrator appointment
                                </a>
                            </li>

                            <li className='mb-5'>
                                <a href="#" className=" text_white_75">
                                    Moderator Appointment
                                </a>
                            </li>


                            <li className='mb-2'>
                                <a href="#" className=" text_white_75">
                                    Server load
                                </a>
                            </li>



                        </ul>
                    </div>

                    <div className="col-sm-6 col-md-4 col-xl-3">
                        <ul className="list-unstyled">
                            <li className="mb-3 text-center">
                                <strong className='text_white_75'>
                                    Number of visitors per day
                                </strong>

                                <br /><br /><br />

                            </li>
                            <li className="mb-3 text-center">
                                <strong className='text_white_75'>
                                    Bond Smart contract state
                                </strong>
                                <br /><br /><br />

                            </li>
                            <li className="mb-3 text-center">
                                <strong className='text_white_75'>
                                    Freeze funds
                                </strong>
                                <br /><br /><br />

                            </li>
                        </ul>
                    </div>

                    <div className="col-sm-6 col-md-4 col-xl-3">
                        <ul className="list-unstyled">
                            <li className="mb-3 text-center">
                                <strong className='text_white_75'>
                                    Number of visitors per month
                                </strong>

                                <br /><br /><br />

                            </li>
                            <li className="mb-3 text-center">
                                <strong className='text_white_75'>
                                    Brands Smart contract state
                                </strong>
                                <br /><br /><br />

                            </li>
                            <li className="mb-3 text-center">
                                <strong className='text_white_75'>
                                    Freeze funds
                                </strong>
                                <br /><br /><br />

                            </li>
                        </ul>
                    </div>



                    <div className="col-sm-6 col-md-4 col-xl-3">
                        <ul className="list-unstyled">
                            <li className="mb-3 text-center">
                                <strong className='text_white_75'>
                                    Number of visitors per day
                                </strong>

                                <br /><br /><br />

                            </li>
                            <li className="mb-3 text-center">
                                <strong className='text_white_75'>
                                    Bond Smart contract state
                                </strong>
                                <br /><br /><br />

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ControlPanel;