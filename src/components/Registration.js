import React from 'react';
import "../Styles/registration.css";

const Reg = () => {
    return (
      <>
        <div className="reg_container">
            <div className="role">
            <h5>Select your role</h5>
            <div className="input-field select_role">
                <div className="select">
                    <select className="form-control fs-6" style={{color: "#827B75"}} name="usertype" id="select_role">
                        <option value="2">Production Company</option>
                        <option value="3">Farmer</option>
                    </select>
                </div>
            </div> 
            </div>

                <div className="form">
                        <div className="form-group">
                            <label htmlFor="shg_id">Production company name</label>
                            <input type="text" name="company_name" className="form-control" placeholder="Enter your company Name here" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="shg_id">Company address</label>
                            <input type="text" name="company_address" className="form-control" placeholder="Enter address" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="shg_id">Contact number</label>
                            <input type="text" name="company_contact" className="form-control" placeholder="Enter your contact number" required/>
                        </div>
                    </div>
                </div>
      </>
    );
  };
  
  export default Reg;
  