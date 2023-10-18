import React from 'react'

function Select() {
  return (
    <div> <form id="form3" className="step step-3">
  <div className="container mt-5">
    <h1 className="d-flex justify-content-center m-5 text-align-center" style={{fontWeight: 600}}>Select
      Template</h1>
  </div>
  <div className="card-container shadow mb-5 p-3 mb-5 bg-white" style={{width: '65%', margin: 'auto'}} id="card">
    <div className="d-flex mt-3 mx-3">
      <h6>Select Template</h6>
    </div>
    <hr style={{width: '95%', margin: 10}} size={3} className="bg-secondary" />
    <div className="flip-cards d-flex flex-row justify-content-center align-items-center m-4">
      <div className="container">
        <div className="row my-5 justify-content-around">
          <div className="col d-flex justify-content-center align-items-center">
            {/* template 1 */}
            <div className="card p-1" onclick=" templateRadioSelector(this)">
              <img src="https://expertcv.netlify.app/images/T2.PNG" className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="btn_box container d-block text-center">
                  <h5 className="card-title">Stanford</h5>
                  <input className="form-check-input" type="radio" name="selected_template" id="template_1" />
                </div>
              </div>
            </div>
            {/*  */}
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            {/* template 2 */}
            <div className="card p-1" onclick=" templateRadioSelector(this)">
              <img src="https://expertcv.netlify.app/images/T2.PNG" className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="btn_box container d-block text-center">
                  <h5 className="card-title">Harvard</h5>
                  <input className="form-check-input" type="radio" name="selected_template" id="template_2" />
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        <div className="row my-5">
          <div className="col d-flex justify-content-center align-items-center">
            {/* template 3 */}
            <div className="card p-1" onclick=" templateRadioSelector(this)">
              <img src="https://expertcv.netlify.app/images/T2.PNG" className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="btn_box container d-block text-center">
                  <h5 className="card-title">Edinburgh</h5>
                  <input className="form-check-input" type="radio" name="selected_template" id="template_3" />
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <button type="button" onclick="template_selector()" class="next_btn" id="generatecv">Generate CV<i
      class="bi bi-arrow-right-circle ms-3"></i></button> */}
  <div className="btn-box container d-block text-center" style={{width: 850}}>
    <button type="button" className="prev_btn" id="back2"><i className="bi bi-arrow-left-circle me-3" />Previous
      Step</button>
    <button type="button" onclick="template_selector()" className="generateCv_btn" id="generatecv">Generate CV
      <i className="bi bi-file-earmark-person-fill ms-3" /></button>
  </div>
</form>
</div>
  )
}

export default Select