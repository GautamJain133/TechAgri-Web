import React from 'react';

function Cropform(){
    return(
        <>
          <main id="main" className="main" style="margin-left: 50px;">

            <div className="pagetitle">
            <h1>Form Elements</h1>
            </div>{/* End Page Title */}

            <section className="section">
            <div className="row">
                <div className="col-lg-6">

                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Form Elements</h5>

                    {/* General Form Elements */}
                    <form>
                        <div className="row mb-3">
                        <label htmlFor="inputFarmerName" className="col-sm-2 col-form-label">Farmer Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control"/>
                        </div>
                        </div>
                        <div className="row mb-3">
                        <label htmlFor="inputSowingMonth" className="col-sm-2 col-form-label">Sowing Month</label>
                        {/* <div className="col-sm-10">
                            <input type="email" className="form-control">
                        </div> */}
                        <div className="form-group col-sm-10">
                            <select className="form-control" id="exampleFormControlSelect1">
                            <option>Select Month</option>  
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                            </select>
                        </div>
                        </div>
                        <div className="row mb-3">
                        <label htmlFor="inputCropName" className="col-sm-2 col-form-label">Crop Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control"/>
                        </div>
                        </div>
                        <div className="row mb-3">
                        <label htmlFor="inputQuantity" className="col-sm-2 col-form-label">Quantity</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control"/>
                        </div>
                        </div>
                        <div className="row mb-3">
                        <label htmlFor="inputHarvestTime" className="col-sm-2 col-form-label">Harvest Time</label>
                        <div className="form-group col-sm-10">
                            <select className="form-control" id="exampleFormControlSelect1">
                            <option>Select Month</option>  
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                            </select>
                        </div>
                        </div>
                        <label htmlFor="inputPesticide" className="col-sm-2 col-form-label">Pesticides</label>
                        {/* <div className="col-sm-10">
                            <input type="date" className="form-control">
                        </div> */}
                        <div className="form-group col-sm-10">
                            <select className="form-control" id="exampleFormControlSelect1">
                            <option>Select Pesticide</option>  
                            <option>glyphosate</option>
                            <option>Acephate</option>
                            <option>Metaldehyde</option>
                            <option>Diazinon</option>
                            <option>DDT</option>
                            </select>

                        </div>
                        <div className="row mb-3">
                        <label htmlFor="inputTime" className="col-sm-2 col-form-label">Fertilizer</label>
                        {/* <div className="col-sm-10">
                            <input type="time" className="form-control">
                        </div> */}
                        <div className="form-group col-sm-10">
                            <select className="form-control" id="exampleFormControlSelect1">
                            <option>Select Fertilizer</option>  
                            <option>Nitrogenous Fertilizers</option>
                            <option>Phosphate Fertilizers</option>
                            <option>Potassium Fertilizers</option>
                            </select>

                        </div>

                        </div>

                        <div className="row mb-3">
                            <label htmlFor="inputQuantity" className="col-sm-2 col-form-label">Nitrogen</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Input Quantity In %"/>
                            </div>
                        </div>
                        
                        <div className="row mb-3">
                            <label htmlFor="inputQuantity" className="col-sm-2 col-form-label">Phosphorous</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Input Quantity In %"/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="inputQuantity" className="col-sm-2 col-form-label">pH</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Input Quantity In Int"/>
                            </div>
                        </div>

                        <div className="row mb-3">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Submit Form</button>
                        </div>
                        </div>

                    </form>

                    </div>
                </div>

                </div>

                
            </div>
            </section>

            </main>{/* End #main */}
        </>
    )
}

export default Cropform;