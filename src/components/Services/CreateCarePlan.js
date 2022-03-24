import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar';
import Navbarone from '../User/Navbarone';
import NavbarTwo from '../User/NavbarTwo';

const CreateCarePlan = () => {
  return(
   <main className="body-content">


      <aside id="ms-side-nav" class="side-nav fixed ms-aside-scrollable ms-aside-left ps ps--active-y" Style="background-color:#fff;">
    {/* <!-- Logo --> */}
    <div class="logo-sn ms-d-block-lg">
      <a class="pl-0 ml-0 text-center" href="dashboard.php"> <img src="../../assets/img/logo.png" alt="logo"/> </a>
      <a href="#" class="text-center ms-logo-img-link"> <img src="../../assets/img/dashboard/doctor-3.jpg" alt="logo"/></a>
     
      {/* <!--<h6 class="text-center mb-3">Admin</h6>--> */}
    </div>
    {/* <!-- Navigation --> */}
   <div class="col-sm-12 col-lg-12" Style="padding:0px;">
                        <div class="section_box1" Style="border-radius:0px;     box-shadow: 0 0px 0px 0 rgb(164 173 186 / 25%);">
                           <div class="patient_left" id="divleftpatnt">
                <div class="profile_img">
                    <img src="../../assets/img/dashboard/patient-1.jpg" class="img-responsive center-block img-circle" Style="width: 132px; height: 132px; border: 3px solid #1f4970 !important; border-top-left-radius: 35px;
    border-bottom-right-radius: 35px;"/>
             {/* <!--<label class="uploadlabel"> <i class="fa fa-edit" data-toggle="modal" Style="font-size:20px;" data-target="#profile_image"></i></label>--> */}
                </div>

                <div class="profile_details">
                    <div class="profile_name">Michael Sullivan</div>
                    <div class="profile_age">32yrs Old</div>
                    <div class="profile_sex">Male</div>
                </div>

                <div class="clearfix"></div>

                <div class="profile_link">
                    <ul>
                        <li><a href="#">Known Allergies  <span id="spnallergy"></span></a></li>
                          <li><a href="#">Contact Status<span id="spnecont">Secondary</span></a></li>
                         <li><a href="#">Emergency Contact <span id="spnecont">John Doe</span> <span id="spnecont">6464646466</span>  
                         <span id="spnecont">Jameson Zokess</span> <span id="spnecont">7989799879</span></a></li>
                        <li><a href="#">Risk Status <span class="risk_pro" id="spnrisk">High</span></a></li>
                        
                       
                        <li><a href="#">GP <span id="spngp">Roxen Tylor</span></a></li>
                  
                        <li><a href="#">Room No <span id="spnroom">205</span></a></li>
                        
                        <li><a href="#">MUST Score<span id="spnmustscre"></span></a></li>
                        <li><a href="#">DNACPR<span id="spndnr">No order in place</span></a></li>
                    </ul>
                </div>
            </div>
                        </div>
                    </div>
            <div class="ps__rail-x" Style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" Style="left: 0px; width: 0px;"></div></div>
            <div class="ps__rail-y" Style="top: 0px; height: 657px; right: 0px;"><div class="ps__thumb-y" tabindex="0" Style="top: 0px; height: 589px;"></div></div>
            
      </aside>

      <Navbar/>

    <div className="ms-content-wrapper">
        <div className="row">
            <Navbarone/>
            <NavbarTwo/>

            <div class="col-md-12">
                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb pl-0">
                        <li class="breadcrumb-item"><a href="#"><i class="material-icons">home</i> Home</a></li>
                      
                        <li class="breadcrumb-item active" aria-current="page">Create Careplan</li>
                     </ol>
                  </nav>
            </div>


            <div class="col-xl-12 col-md-12">
                  <div class="ms-panel">
                     
                     <div class="ms-panel-body">
                        <form class="needs-validation" novalidate="">
                           <div class="form-row">
                              <div class="col-md-4 mb-3">
                                 <label for="validationCustom001">Select Area</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Area</option>
                                       <option value="">Area1</option>
                                       <option value="">Area2</option>
                                        <option value="">Area3</option>
                                    </select>

                                 </div>
                              </div>
                              <div class="col-md-4 mb-3">
                                 <label for="validationCustom001">Risk Level</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Risk Level</option>
                                       <option value="">Low</option>
                                       <option value="">Medium</option>
                                       <option value="">High</option>
                                      
                                    </select>

                                 </div>
                              </div>
                              
                              <div class="col-md-4 mb-3">
                                 <label for="validationCustom001">Conducted by</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Staff</option>
                                       <option value="">John doe</option>
                                       <option value="">Raxon Mary</option>
                                        <option value="">Tokder kelly</option>
                                    </select>

                                 </div>
                              </div>
                              
                           </div>
                           <div class="form-row">
                                 <div class="col-md-4 mb-2">
                                 <label for="validationCustom004">Case Id</label>
                                 <div class="input-group">
                                    <input type="text" class="form-control" id="validationCustom004" required=""/>

                                 </div>
                              </div>
                              <div class="col-md-2 mb-2">
                                 <label for="validationCustom004">Date</label>
                                 <div class="input-group">
                                    <input type="date" class="form-control" id="validationCustom004" required=""/>

                                 </div>
                              </div>
                              <div class="col-md-2 mb-2">
                                 <label for="validationCustom003">Time</label>
                                 <div class="input-group">
                                    <input type="time" class="form-control" id="validationCustom003" required=""/>

                                 </div>
                              </div>
                               <div class="col-md-4 mb-2">
                                 <label for="validationCustom004">Last Assessment</label>
                                 <div class="input-group">
                                    <input type="date" class="form-control" id="validationCustom004" required=""/>

                                 </div>
                              </div>
                           </div>
                          
                           

                     </form></div>
                  </div>
                  <div class="col-md-12" Style="padding:0px;">
     
            <div class="row selectmodals">
               <div class="col-md-6">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Select Condition <a href="#" Style="float:right" data-toggle="modal" data-target="#selectcondition"><i class="fa fa-plus" Style="font-size:16px; color: gray;"></i></a></h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                      <div class="selecteditems">
                      </div>
                     
                          
                          
                        </div>
                     </div>
               </div>
                <div class="col-md-6">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Select Objective <a href="#" Style="float:right" data-toggle="modal" data-target="#selectobjective"><i class="fa fa-plus" Style="font-size:16px; color: gray;"></i></a></h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      <div class="selecteditems">
                      </div>
                     
                           
                          
                          
                        </div>
                     </div>
               </div>
                <div class="col-md-6">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Select Action Plan <a href="#" Style="float:right" data-toggle="modal" data-target="#selectplan"><i class="fa fa-plus" Style="font-size:16px; color: gray;"></i></a></h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                      <div class="selecteditems">
                      </div>  
                          
                        </div>
                     </div>
               </div>
                <div class="col-md-6">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Select Outcome <a href="#" Style="float:right" data-toggle="modal" data-target="#selectoutcome"><i class="fa fa-plus" Style="font-size:16px; color: gray;"></i></a></h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                     <div class="selecteditems">
                      </div>
                    
                           
                          
                          
                        </div>
                     </div>
               </div>
                
              
           </div>
              
          </div>
                  
                    <div class="ms-panel">
                     
                     <div class="ms-panel-body">
                          
                           
                             <div class="form-row">
                                 <div class="col-md-4 mb-3">
                                 <label for="validationCustom001">Created by</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Staff</option>
                                       <option value="">John doe</option>
                                       <option value="">Raxon Mary</option>
                                        <option value="">Tokder kelly</option>
                                    </select>

                                 </div>
                              </div>   
                              <div class="col-md-4 mb-2">
                                 <label for="validationCustom004">Created Date</label>
                                 <div class="input-group">
                                    <input type="date" class="form-control" id="validationCustom004" required=""/>

                                 </div>
                              </div>
                                <div class="col-md-4 mb-3">
                                 <label for="validationCustom001">Upload Attachment</label>
                                                        <div class="input-group">
      <input id="uploadFile" placeholder="Upload Photo" disabled="disabled" class="form-control"/>
      <span class="input-group-addon"> <label class="btn btn-primary" Style="padding: 0.5rem 1rem;
    margin-top: 0px;border-radius: 0px;"><input id="uploadBtn" type="file" Style="display:none;"/> Upload</label> </span>   
    </div>
                              </div>
                             
                           </div>
                            <div class="form-row">
                               <div class="col-md-4 mb-2">
                                
                                 <div class="input-group">
                                 <label><span><input type="checkbox"/></span> Review Required</label>
                               

                                 </div>
                              </div>
                               <div class="col-md-4 mb-2">
                                 <label for="validationCustom004">Next Review Date</label>
                                 <div class="input-group">
                                    <input type="date" class="form-control" id="validationCustom004" required=""/>

                                 </div>
                              </div>
                                <div class="col-md-4 mb-3">
                                 <label for="validationCustom001">Created by</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Staff</option>
                                       <option value="">John doe</option>
                                       <option value="">Raxon Mary</option>
                                        <option value="">Tokder kelly</option>
                                    </select>

                                 </div>
                              </div>
                             
                           </div>
                           
                              <div class="form-row">
                               <div class="col-md-12 mb-2">
                                 <label for="validationCustom004">Previous Notes</label>
                                 <div class="input-group">
                                   <textarea class="form-control" placeholder="Previous Notes"></textarea>

                                 </div>
                              </div>
                               <div class="col-md-12 mb-2">
                                 <label for="validationCustom004">Notes</label>
                                 <div class="input-group">
                                   <textarea class="form-control" placeholder="Notes"></textarea>

                                 </div>
                              </div>
                             
                           </div>
                           
                         
                            <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Create New</button>
                            <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Back</button>
                        
                      </div>
                  </div>
               </div>

        </div>
    </div>
</main>
  );
};

export default CreateCarePlan;
