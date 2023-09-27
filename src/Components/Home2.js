import React from 'react'

export default function Home2() {
    return (
        <>
            <div className="container-fluid">
                <div className="d-flex justify-content-center align-items-center vh-100" >
                    <div className="row border-search gx-0 ">

                        {/* <!--source start --> */}
                        
                        <div className="col-md-2">
                            <label htmlFor="pickupLocation">From</label>
                            <input className="form inputArea exampleDataList" list="datalistOptions" id="pickupLocation" placeholder='Enter city' />
                            <datalist id="datalistOptions"></datalist>
                        </div>

                       
 <div className='vr-search'></div>
                        <div className="col-md-2">
                        <label htmlFor="dropLocation">Destination</label>
                            <input className="form inputArea exampleDataList" list="datalistOptions" id="dropLocation" placeholder='Enter city' />
                            <datalist id="datalistOptions"></datalist>
                        </div>
                        <div className='vr-search'></div>


                        {/* <!--Departure date start -->  */}
                        <div className="col-md-2">
                            <div>
                                <label htmlFor='departureDate'>Departure</label>
                                <input type="date" className="form inputArea" id='departureDate'/>
                            </div>
                        </div>
                        {/* <!--Departure date End --> */}
                        <div className='vr-search'></div>

                        {/* <!--Search button starts --> */}
                        <div className="col-md-2">
                            <button type="button" className="btn btn-success">Search</button>
                        </div>
                        {/* <!--Search button ends --> */}
                    </div>
                </div>
            </div>
            {/* </div > */}
        </>
    )
}
