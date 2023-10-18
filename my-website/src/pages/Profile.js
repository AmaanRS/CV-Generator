import React from 'react'
import { Link } from 'react-router-dom'
function Profile() {
  return (
    <div>
         <form id="form1" className="step step-1 active">
  <div className="container mt-5">
    <h1 className="d-flex justify-content-center m-5" style={{fontWeight: 600}}>Personal Details</h1>
  </div>
  <div className="card-container mb-5 shadow p-3 mb-5 bg-white" style={{width: 850, margin: 'auto'}} id="card">
    <div className="d-flex mt-3 mx-3">
      <h6>Personal Details</h6>
    </div>
    <hr style={{width: '95%', margin: 10}}  size={3} className="bg-secondary" />
    <div className="d-flex mx-5 flex-row">
      <input type="file" accept="image/*" name="inpImg" id="inpImg" />
      <div className="imgContainer float-left m-4">
        <img src alt="Image Preview" id="image" />
        <span id="previewText"><span id="innerSpan"><i className="fas fa-upload me-2" />Upload
            photo</span></span>
      </div>
      <div className="row col-6  m-3 " style={{float: 'left'}}>
        <div className="col-12">
          <label htmlFor="fname" className="form-label">First Name</label>
          <input type="text" className="form-control" id="fname" />
        </div>
        <div className="col-12">
          <label htmlFor="lname" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lname" />
        </div>
      </div>
    </div>
    <div className="row mx-5 mb-5">
      <div className="col-md-6 ">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" placeholder="example@gmail.com" required />
      </div>
      <div className="col-md-6">
        <label htmlFor="number" className="form-label">Phone Number</label>
        <input type="text" className="form-control" id="number" placeholder="xxxxxxxxxx" />
      </div>
      <div className="col-12 mt-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input type="text" className="form-control" id="address" placeholder="1234 Main St" />
      </div>
      <div className="col-md-5 mt-3">
        <label htmlFor="country" className="form-label">Country</label>
        <select className="form-select" id="country" onchange="getStates()">
          <option selected>Country</option>
        </select>
      </div>
      <div className="col-md-4 mt-3">
        <label htmlFor="state" className="form-label">State</label>
        <select className="form-select" id="state" onchange="getCities()">
          <option selected>State</option>
        </select>
      </div>
      <div className="col-md-3 mt-3">
        <label htmlFor="city" className="form-label">City</label>
        <select className="form-select" id="city">
          <option selected>City</option>
        </select>
      </div>
      <div className="row">
        <div className="col-md-4 mt-3">
          <label htmlFor="zip" className="form-label">Zip</label>
          <input type="text" className="form-control" id="zip" />
        </div>
        <div className="col-md-4 mt-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select id="gender" className="form-select">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div className="col-md-4 mt-3">
          <label htmlFor="dob" className="form-label">Birth Date</label>
          <input type="date" className="date" id="dob" />
        </div>
      </div>
      <div className="col-6 mt-3">
        <label htmlFor="linkedIn" className="form-label">LinkedIn </label>
        <input type="text" className="form-control" id="linkedIn" />
      </div>
      <div className="col-6 mt-3">
        <label htmlFor="website" className="form-label">Website</label>
        <input type="text" className="form-control" id="website" />
      </div>
    </div>
  </div>
  <div className="btn-box container d-block text-center" style={{width: 850}}>
    <Link to="/detail"><button type="button" className="next_btn" id="next1">Next Step<i className="bi bi-arrow-right-circle ms-3" /></button></Link>
  </div>
</form>

</div>
  )
}

export default Profile