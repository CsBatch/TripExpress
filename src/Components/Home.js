import React from 'react'

function disp() {
  return (
    <>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </>
  )
}
export default function Home() {
  return (
    <>
      <div className="container-fluid">

        
      <div className="card text-center">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs gx-0" id="myTab">
                <li className="nav-item">
                  <a href="#searchBus" className="nav-link active" data-bs-toggle="tab">Search Buse</a>
                </li>
                <li className="nav-item">
                  <a href="#searchTrains" className="nav-link" data-bs-toggle="tab">Book Car</a>
                </li>
                <li className="nav-item">
                  <a href="#bookCars" className="nav-link" data-bs-toggle="tab">Search Train</a>
                </li>
              </ul>
            </div>

        <div className="d-flex justify-content-center align-items-center" >


          {/* ----------------------------------------------------------------------------------------------- */}

          {/* ----------------------------------------------------------------------------------------------- */}

            <div className="card-body">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="searchBus">


                  <div className="row border-search gx-0 ">

                    {/* <!--source start --> */}

                    <div className="col-md-2">
                      <label htmlFor="pickupLocation">From</label>
                      <input className="form inputArea exampleDataList" list="datalistOptions" id="pickupLocation" placeholder='Search city' />
                      <datalist id="datalistOptions"></datalist>
                    </div>


                    <div className='vr-search'> {/* <i className='bi bi-arrow-left-right swap rounded-circle'></i> */} </div>
                    {/* <div className='swapIcon'><i className='bi bi-arrow-left-right swap'></i></div> */}
                    <div className="col-md-2">
                      <label htmlFor="dropLocation">Destination</label>
                      <input className="form inputArea exampleDataList" list="datalistOptions" id="dropLocation" placeholder='Search city' />
                      <datalist id="datalistOptions"></datalist>
                    </div>
                    <div className='vr-search'></div>


                    {/* <!--Departure date start -->  */}
                    <div className="col-md-2">
                      <div>
                        <label htmlFor='departureDate'>Departure</label>
                        <input type="date" className="form inputArea" id='departureDate' />
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
                <div className="tab-pane fade" id="searchTrains">
                  
                  <div className="row border-search gx-0 ">

                    {/* <!--source start --> */}

                    <div className="col-md-2">
                      <label htmlFor="pickupLocation">From</label>
                      <input className="form inputArea exampleDataList" list="datalistOptions" id="pickupLocation" placeholder='Search City' />
                      <datalist id="datalistOptions"></datalist>
                    </div>


                    <div className='vr-search'></div>
                    <div className="col-md-2">
                      <label htmlFor="dropLocation">Destination</label>
                      <input className="form inputArea exampleDataList" list="datalistOptions" id="dropLocation" placeholder='Search City' />
                      <datalist id="datalistOptions"></datalist>
                    </div>
                    <div className='vr-search'></div>


                    {/* <!--Departure date start -->  */}
                    <div className="col-md-2">
                      <div>
                        <label htmlFor='departureDate'>Departure</label>
                        <input type="date" className="form inputArea" id='departureDate' />
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
                <div className="tab-pane fade" id="bookCars">
                  <div className="row border-search gx-0 ">

                    {/* <!--source start --> */}

                    <div className="col-md-2">
                      <label htmlFor="pickupLocation">From</label>
                      <input className="form inputArea exampleDataList" list="datalistOptions" id="pickupLocation" placeholder='Search Stations' />
                      <datalist id="datalistOptions"></datalist>
                    </div>


                    <div className='vr-search'></div>
                    <div className="col-md-2">
                      <label htmlFor="dropLocation">Destination</label>
                      <input className="form inputArea exampleDataList" list="datalistOptions" id="dropLocation" placeholder='Search Stations' />
                      <datalist id="datalistOptions"></datalist>
                    </div>
                    <div className='vr-search'></div>


                    {/* <!--Departure date start -->  */}
                    <div className="col-md-2">
                      <div>
                        <label htmlFor='departureDate'>Departure</label>
                        <input type="date" className="form inputArea" id='departureDate' />
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
            </div>
          </div>
        </div>
      </div >
      {/* </div > */}
    </>
  )
}
