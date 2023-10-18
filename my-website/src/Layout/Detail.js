import React from 'react'
import { Link } from 'react-router-dom'

function Detail() {
  return (
    <div>
        <form id="form2" className="step step-2">
  <div className="container mt-5">
    <h1 className="d-flex justify-content-center m-5" style={{fontWeight: 600}}>My experiences</h1>
  </div>
  <div className="card-container shadow mb-5 p-3 mb-5 bg-white" style={{width: 850, margin: 'auto'}} id="card">
    <div className="d-flex mt-3 mx-3">
      <h6>My experiences</h6>
    </div>
    <hr style={{width: '95%', margin: 10}} size={3} className="bg-secondary" />
    <div className="flip-cards d-flex flex-column m-4">
      {/* Flip card 0 */}
      <div className="fc0">
        <div className="flip-card card-container p-2 mb-4 bg-white ">
          <div className="flip0 card-body">
            <h4 className="mx-4 my-0 p-2">Profile</h4>
          </div>
          <div className="panel0 p-1">
            <hr />
            <div className="row mx-2 mb-5">
              <div className="mt-4">
                <label htmlFor="profile" className="form-label">Profile</label>
                <textarea className="form-control" id="profile" rows={6} defaultValue={""} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Flip card 0 End */}
      {/* Flip card 1 */}
      <div className="fc1">
        <div className="flip-card card-container p-2 mb-4 bg-white ">
          <div className="flip1 card-body">
            <h4 className="mx-4 my-0 p-2">Education and Qualifications</h4>
          </div>
          <div className="panel1 p-1">
            <hr />
            <div className="accordion" id="accordionEdu">
              <div className="accordion-item">
                <h2 className="accordion-header" id="eheading1">
                  <a className="delete-item" onclick="delEdu2(event)"><i className="bi bi-trash" /></a>
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#ecollapse1" aria-expanded="true" aria-controls="ecollapse1" onclick="emakeVisible()">
                    Educational Qualification
                  </button>
                </h2>
                <div id="ecollapse1" className="accordion-collapse collapse show" aria-labelledby="eheading1" data-bs-parent="#accordionEdu">
                  <div className="accordion-body">
                    <div className="row mx-2 mb-5">
                      <div className="col-md-6 ">
                        <label htmlFor className="form-label">Degree</label>
                        <input type="text" className="form-control degree" id="degree" placeholder="e.g. B.Tech " />
                      </div>
                      {/* <div class="col-md-6">
                                          <label for="city" class="form-label"></label>
                                          <input type="text" class="form-control city" id="city"
                                              placeholder="e.g. San francico">
                                      </div> */}
                      <div className="col-12 mt-3">
                        <label htmlFor className="form-label">School/University</label>
                        <input type="text" className="form-control school" id="school" placeholder="e.g. International Academy." />
                      </div>
                      <div className="col-6 mt-3">
                        <div className="d-flex flex-row">
                          <div className="me-4 mt-2">
                            <label htmlFor className="form-label">Start Date</label>
                            <input className="date edu_start" type="date" id="edu_start" />
                          </div>
                          <div className="ms-4 mt-2">
                            <label htmlFor className="form-label">End Date</label>
                            <input className="date end_date" type="date" id="edu_end" />
                          </div>
                          <div className="ms-4 mt-5">
                            <div className="form-check">
                              <input className="end_date_toggle form-check-input" type="checkbox" defaultValue id onclick="toggChk(this)" />
                              <label className="form-check-label" htmlFor="flexCheckChecked">Present</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div class="mt-4">
                                          <label for="edu_description"
                                              class="form-label">Description</label>
                                          <textarea class="form-control edu_description"
                                              id="edu_description" rows="3"></textarea>
                                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-5 d-flex justify-content-center"><button type="button" className="btn btn-outline-secondary" style={{width: '90%'}} id="add_edu"><i className="bi bi-plus-circle me-3" />Add another
                education</button>
            </div>
          </div>
        </div>
        {/* Flip card 1 End*/}
      </div>
      {/* Flip card 2 */}
      <div className="fc2">
        <div className="flip-card card-container  p-2 mb-4 bg-white ">
          <div className="flip2 card-body">
            <h4 className="mx-4 my-0 p-2">Work Experience</h4>
          </div>
          <div className="panel2 p-1">
            <hr />
            <div className="list row mx-2 mb-5">
              <div className="accordion" id="accordionWork">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="wheading1">
                    <a className="delete-item" onclick="delWork2(event)"><i className="bi bi-trash" /></a>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#wcollapse1" aria-expanded="true" aria-controls="wcollapse1" onclick="wmakeVisible()">
                      Work Experience
                    </button>
                  </h2>
                  <div id="wcollapse1" className="accordion-collapse collapse show" aria-labelledby="wheading1" data-bs-parent="#accordionWork">
                    <div className="accordion-body">
                      <div className="row mx-2 mb-5">
                        <div className="col-md-6 ">
                          <label htmlFor className="form-label">Job Title</label>
                          <input type="text" className="form-control job_title" id="job_title" placeholder="e.g. Web Devloper" />
                        </div>
                        {/* <div class="col-md-6">
                                              <label for="work_city" class="form-label">City/Town</label>
                                              <input type="text" class="form-control work_city"
                                                  id="work_city" placeholder="e.g. San francico">
                                          </div> */}
                        <div className="col-12 mt-3">
                          <label htmlFor className="form-label">Company Name</label>
                          <input type="text" className="form-control company_name" id="company_name" placeholder="e.g. PwC" />
                        </div>
                        <div className="col-6 mt-3">
                          <div className="d-flex flex-row">
                            <div className="me-4 mt-2">
                              <label htmlFor className="form-label">Start Date</label>
                              <input className="date work_start" type="date" id="Work1_start" />
                            </div>
                            <div className="ms-4 mt-2">
                              <label htmlFor className="form-label">End Date</label>
                              <input className="date end_date" type="date" id="Work1_end" />
                            </div>
                            <div className="ms-4 mt-5">
                              <div className="form-check">
                                <input className="form-check-input end_date_toggle" type="checkbox" defaultValue id onclick="toggChk(this)" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">Present</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <label htmlFor="work_description" className="form-label">Description</label>
                          <textarea className="form-control work_desc" id="work_description" rows={3} defaultValue={""} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* New Work Experience */}
            </div>
            <div className="my-5 d-flex justify-content-center"><button type="button" className="btn btn-outline-secondary" style={{width: '90%'}} id="add_work"><i className="bi bi-plus-circle me-3" />Add another
                work experience</button>
            </div>
          </div>
        </div>
      </div>
      {/* Flip card 2 End*/}
      {/* Flip card 3 */}
      <div className="fc3">
        <div className="flip-card card-container p-2 mb-4 bg-white">
          <div className="flip3 card-body">
            <h4 className="mx-4 my-0 p-2">Skills</h4>
          </div>
          <div className="panel3 p-1">
            <hr />
            <div className="accordion" id="accordionSkill">
              <div className="accordion-item">
                <h2 className="accordion-header" id="sheading1">
                  <a className="delete-item" onclick="delSkill2(event)"><i className="bi bi-trash" /></a>
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#scollapse1" aria-expanded="true" aria-controls="scollapse1" onclick="smakeVisible()">
                    Skill
                  </button>
                </h2>
                <div id="scollapse1" className="accordion-collapse collapse show" aria-labelledby="sheading1" data-bs-parent="#accordionSkill">
                  <div className="accordion-body">
                    <div className="list row mx-2 mb-5">
                      <div className="col-12 mt-3">
                        <div className="d-flex flex-row">
                          <div className="col-md-6">
                            <label htmlFor className="form-label">Skill</label>
                            <input type="text" className="form-control skill" id="skill" placeholder="e.g. photoshop, Python, DBMS" onkeydown="adder(event,'skill')" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* New Skills */}
            </div>
            <div className="my-5 d-flex justify-content-center"><button type="button" className="btn btn-outline-secondary" style={{width: '90%'}} id="add_skill"><i className="bi bi-plus-circle me-3" />Add
                another
                skill</button>
            </div>
          </div>
        </div>
      </div>
      {/* Flip card 3 End*/}
      {/* Flip card 4 */}
      <div className="fc4">
        <div className="flip-card card-container p-2 mb-4 bg-white">
          <div className="flip4 card-body">
            <h4 className="mx-4 my-0 p-2">Interests</h4>
          </div>
          <div className="panel4 p-1">
            <hr />
            <div className="accordion" id="accordionInt">
              <div className="accordion-item">
                <h2 className="accordion-header" id="iheading1">
                  <a className="delete-item" onclick="delInt2(event)"><i className="bi bi-trash" /></a>
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#icollapse1" aria-expanded="true" aria-controls="icollapse1" onclick="imakeVisible()">
                    Hobby
                  </button>
                </h2>
                <div id="icollapse1" className="accordion-collapse collapse show" aria-labelledby="iheading1" data-bs-parent="#accordionInt">
                  <div className="accordion-body">
                    <div className="col-12">
                      {/* <label for="hobby1" class="form-label">Hobby</label> */}
                      <input type="text" className="form-control hobby" placeholder="e.g. Reading, Writing" onkeydown="adder(event,'hobby')" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="list row mx-2 mb-5">
            </div>
            <div className="my-5 d-flex justify-content-center"><button type="button" className="btn btn-outline-secondary" style={{width: '90%'}} id="add_interest"><i className="bi bi-plus-circle me-3" />Add
                another
                hobby</button>
            </div>
          </div>
        </div>
      </div>
      {/* Flip card 4 End*/}
      {/* Flip card 5 */}
      <div className="fc5">
        <div className="flip-card card-container p-2 mb-4 bg-white ">
          <div className="flip5 card-body">
            <h4 className="mx-4 my-0 p-2">Achievements</h4>
          </div>
          <div className="panel5 p-1">
            <hr />
            <div className="row mx-2 mb-5">
              <div className="mt-4">
                <label htmlFor="achv_description" className="form-label">Description</label>
                <textarea className="form-control" id="achv_description" rows={6} defaultValue={""} />
              </div>
            </div>
          </div>
        </div>
        {/* Flip card 5 End*/}
        {/* <div class="fc5 my-3">
              <div class="flip5 card card-body">
                  <select class="form-select mx-4 py-2" style="width:95%;"
                      aria-label="Default select example">
                      <option selected><i class="bi bi-plus-circle me-3"></i>Add extra section</option>
                      <option value="1">Courses</option>
                      <option value="2">Resume Objective</option>
                      <option value="3">References</option>
                  </select>
              </div>
              <div class="panel5"></div>
              </div> */}
      </div>
      {/* Flip card 6 */}
      <div className="fc6">
        <div className="flip-card card-container p-2 mb-4 bg-white">
          <div className="flip6 card-body">
            <h4 className="mx-4 my-0 p-2">Known Languages</h4>
          </div>
          <div className="panel3 p-1">
            <hr />
            <div className="accordion" id="accordionLang">
              <div className="accordion-item">
                <h2 className="accordion-header" id="lheading1">
                  <a className="delete-item" onclick="delLang2(event)"><i className="bi bi-trash" /></a>
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#lcollapse1" aria-expanded="true" aria-controls="lcollapse1" onclick="lmakeVisible()">
                    Language
                  </button>
                </h2>
                <div id="lcollapse1" className="accordion-collapse collapse show" aria-labelledby="lheading1" data-bs-parent="#accordionLang">
                  <div className="accordion-body">
                    <div className="list row mx-2 mb-5">
                      <div className="col-12 mt-3">
                        <div className="d-flex flex-row">
                          <input type="text" className="form-control lang" id="lang" placeholder="e.g. English, French, German" onkeydown="adder(event,'lang')" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add Languages */}
            </div>
            <div className="my-5 d-flex justify-content-center"><button type="button" className="btn btn-outline-secondary" style={{width: '90%'}} id="add_lang"><i className="bi bi-plus-circle me-3" />Add another language</button>
            </div>
          </div>
        </div>
      </div>
      {/* Flip card 6 end */}
    </div>
  </div>
  <div className="btn_box container d-block text-center" style={{width: 850}}>
    <button type="button" className="prev_btn" id="back2"><i className="bi bi-arrow-left-circle me-3" />Previous
      Step</button>
    <Link to="/select"><button type="button" className="next_btn" id="next2">Next Step<i className="bi bi-arrow-right-circle ms-3" /></button></Link>
    {/*
  <button type="button" onclick="genrateCV()" class="next_btn" id="generatecv">Genrate CV<i
          class="bi bi-arrow-right-circle ms-3"></i></button>
  */}
  </div>
</form>

</div>
  )
}

export default Detail