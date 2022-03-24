import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar';
import Navbarone from '../User/Navbarone';
import NavbarTwo from '../User/NavbarTwo';


const AccidentIncident = () => {
  return (
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
                      
                        <li class="breadcrumb-item active" aria-current="page">Create / Update Accident &amp; Incident </li>
                     </ol>
                  </nav>
            </div>

            <div class="col-xl-12 col-md-12">
                  <div class="ms-panel">
                     
                     <div class="ms-panel-body">
                        <form class="needs-validation" novalidate="">
                           <div class="form-row">
                                
                               <div class="col-md-6 mb-2">
                                 <label for="validationCustom004">Date</label>
                                 <div class="input-group">
                                    <input type="date" class="form-control" id="validationCustom004" required=""/>

                                 </div>
                              </div>
                              <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Reported by</label>
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
                               <div class="col-md-6 mb-2">
                                 <label for="validationCustom003">Location</label>
                                 <div class="input-group">
                                    <input type="text" class="form-control" id="validationCustom003" required=""/>

                                 </div>
                              </div>
                                
                               <div class="col-md-6 mb-2">
                                 <label for="validationCustom003">Type</label>
                                 <div class="input-group">
                                     <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Type</option>
                                       <option value="">Test</option>
                                      
                                      
                                    </select>

                                 </div>
                              </div>
                           </div>
                            <div class="form-row">
                               <div class="col-md-4 mb-2">
                                 <label for="validationCustom003">People Involved</label>
                                 <div class="input-group">
                                    <input type="text" class="form-control" id="validationCustom003" required=""/>

                                 </div>
                              </div>
                                <div class="col-md-4 mb-2">
                                 <label for="validationCustom003">Witness</label>
                                 <div class="input-group">
                                    <input type="text" class="form-control" id="validationCustom003" required=""/>

                                 </div>
                              </div>
                               <div class="col-md-4 mb-2">
                                 <label for="validationCustom003">Fatality</label>
                                 <div class="input-group">
                                     <select class="form-control" id="validationCustom230" required="">
                                        <option value="">No</option>
                                       <option value="">Yes</option>
                                      
                                      
                                    </select>

                                 </div>
                              </div>
                           </div>
                           
                           <div class="form-row">
                               <div class="col-md-12 mb-2">
                                 <label for="validationCustom003">What type of incident </label>
                                 <div class="input-group">
                                     <select class="form-control" id="validationCustom230" required="">
                                        <option>Select Type</option>
                                       <option>Accident</option>
                                       <option>Incident</option>
                                       <option>Fall</option>
                                       <option>Seziure</option>
                                       <option>Falldown</option>
                                    </select>

                                 </div>
                              </div>
                                <div class="col-md-6 mb-2">
                                 <label for="validationCustom003">Incident Description</label>
                                 <div class="input-group">
                                    <input type="text" class="form-control" id="validationCustom003" required=""/>

                                 </div>
                              </div>
                              <div class="col-md-6 mb-2">
                                 <label for="validationCustom003">Staff Description</label>
                                 <div class="input-group">
                                    <input type="text" class="form-control" id="validationCustom003" required=""/>

                                 </div>
                              </div>
                              <div class="col-md-6 mb-2">
                                 <label for="validationCustom003">Manager Description</label>
                                 <div class="input-group">
                                    <input type="text" class="form-control" id="validationCustom003" required=""/>

                                 </div>
                              </div>
                               <div class="col-md-6 mb-2">
                                 <label for="validationCustom003">Upload Description</label>
                                 <div class="input-group">
                                     <input type="file" class="form-control"/>
                                 </div>
                              </div>
                           </div>

                          
                          
                           <div class="form-row">
                                 <div class="col-md-12 mb-2">
                                <label><strong>Indicate Type of Injury (Select If Any)</strong> </label>
                                </div>
                                <div class="col-md-3 mb-2">
                                 
                                 
                                    <label><span><input type="checkbox"/></span> Anxiety</label><br/>
                                <label><span><input type="checkbox"/></span> Suffocation</label><br/>
                                <label><span><input type="checkbox"/></span> Panic Attack</label><br/>
                                <label><span><input type="checkbox"/></span> Head Internal Injury</label><br/>
                                <label><span><input type="checkbox"/></span> Foot Injury</label>
                                
                              </div>
                               <div class="col-md-3 mb-2">
                                 
                                 
                                    <label><span><input type="checkbox"/></span> Ampution</label><br/>
                                <label><span><input type="checkbox"/></span> Open Wounds</label><br/>
                                <label><span><input type="checkbox"/></span> Close Fracture</label><br/>
                                <label><span><input type="checkbox"/></span> Hand Fracture</label>
                              
                                
                              </div>
                              <div class="col-md-3 mb-2">
                                
                                 
                                 <label><span><input type="checkbox"/></span> Bruising, Contusion</label><br/>
                                <label><span><input type="checkbox"/></span> Interal Injury</label><br/>
                                <label><span><input type="checkbox"/></span> Infection</label><br/>
                                <label><span><input type="checkbox"/></span> Ear Injury</label><br/>
                                 <label><span><input type="checkbox"/></span> Dislocation</label>

                                 
                              </div>
                              
                              
                              <div class="col-md-3 mb-2">
                                 
                               
                                    <label><span><input type="checkbox"/></span> Gassing</label><br/>
                                <label><span><input type="checkbox"/></span> Poisoning</label><br/>
                                <label><span><input type="checkbox"/></span> Electrical Injury</label><br/>
                                <label><span><input type="checkbox"/></span> Burn, scalds &amp; frostbite</label>
                               
                                 
                              </div>
                           </div>
                           
                             <div class="form-row">
                                 <div class="col-md-12 mb-2">
                                <label><strong>Indicate Part of body Injured (Select If Any)</strong> </label>
                                </div>
                              
                             
                               <div class="col-md-3 mb-2">
                                 
                                 
                                <label><span><input type="checkbox"/></span> Hip joint, thigh, knee cap</label><br/>
                                <label><span><input type="checkbox"/></span> Hand Fracture</label><br/>
                                <label><span><input type="checkbox"/></span> Foot Fracture</label><br/>
                                <label><span><input type="checkbox"/></span> Nose bone fracture</label>
                              
                                 
                              </div>
                              <div class="col-md-3 mb-2">
                                
                                
                                 <label><span><input type="checkbox"/></span> Head Injury</label><br/>
                                <label><span><input type="checkbox"/></span> Neck</label><br/>
                                <label><span><input type="checkbox"/></span> Chest</label><br/>
                                <label><span><input type="checkbox"/></span> Finger (one or more)</label><br/>
                                 <label><span><input type="checkbox"/></span> Knee Joint </label>

                              
                              </div>
                               <div class="col-md-3 mb-2">
                                 
                              
                                    <label><span><input type="checkbox"/></span> Toes (one or more)</label><br/>
                                <label><span><input type="checkbox"/></span> Eye</label><br/>
                                <label><span><input type="checkbox"/></span> Back</label><br/>
                                <label><span><input type="checkbox"/></span> Abdoman</label>
                              
                                 
                              </div>
                              <div class="col-md-3 mb-2">
                                 
                                
                                    <label><span><input type="checkbox"/></span> Back head</label><br/>
                                <label><span><input type="checkbox"/></span> Chin </label><br/>
                                <label><span><input type="checkbox"/></span> Ankle fracture</label>
                              
                               
                              </div>
                           </div>
                             <div class="form-row">
                                 <div class="col-md-12 mb-2">
                                <label><strong>Reported To</strong> </label>
                                </div>
                              
                             
                               <div class="col-md-3 mb-2">
                                <label><span><input type="checkbox"/></span> Relative</label>
                               
                              </div>
                              <div class="col-md-3 mb-2">
                                 <label><span><input type="checkbox"/></span> Management</label>
                              
                              </div>
                               <div class="col-md-3 mb-2">
                                   <label><span><input type="checkbox"/></span> GP</label>
                               
                              </div>
                              <div class="col-md-3 mb-2">
                                  <label><span><input type="checkbox"/></span> Nurse</label>
                               
                              </div>
                              <div class="col-md-3 mb-2">
                                  <label><span><input type="checkbox" onclick="showother();"/></span> Other</label>
                               
                              </div>
                             
                             
                           </div>
                            <div class="form-row" id="other" Style="display:none;">
                              
                            <div class="col-md-6 mb-2">
                                  <input type="text" name="other" class="form-control"/>
                              </div>
                             </div> 
                             
                             <div class="form-row" Style="margin-top:30px;">
                                 <div class="col-md-12 mb-2">
                                <label><strong>Medical</strong> </label><br/><br/>
                                <label><strong>Reported To</strong> </label>
                                </div>
                              
                             
                               <div class="col-md-3 mb-2">
                                <label><span><input type="checkbox"/></span> Mgd Rpt</label>
                               
                              </div>
                             
                           </div>
                           <div class="form-row">
                               <div class="col-md-6 mb-2">
                                 <label for="validationCustom003">Admitted to hospital</label>
                                 <div class="input-group">
                                    <input type="date" class="form-control" id="validationCustom003" required=""/>

                                 </div>
                              </div>
                              <div class="col-md-6 mb-2">
                                 <label for="validationCustom003">Discharge date</label>
                                 <div class="input-group">
                                    <input type="date" class="form-control" id="validationCustom003" required=""/>

                                 </div>
                              </div>
                              <div class="col-md-6 mb-2">
                                 <label for="validationCustom003">Hospital Name</label>
                                 <div class="input-group">
                                    <input type="text" class="form-control" id="validationCustom003" required=""/>

                                 </div>
                              </div>
                              <div class="col-md-6 mb-2">
                                 <label for="validationCustom003">Consultants/GP Involved</label>
                                 <div class="input-group">
                                    <input type="text" class="form-control" id="validationCustom003" required=""/>

                                 </div>
                              </div>
                                
                               <div class="col-md-12 mb-2">
                                 <label for="validationCustom003">Preventative Action</label>
                                  <div class="input-group">
                                    <textarea class="form-control"></textarea>

                                 </div>
                              </div>
                              <div class="col-md-12 mb-2">
                                 <label for="validationCustom003">Notes</label>
                                  <div class="input-group">
                                    <textarea class="form-control"></textarea>

                                 </div>
                              </div>
                           </div>
                         
                            <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Save</button>
                            <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Back</button>
                        </form>

                     </div>
                  </div>
               </div>


        </div>
    </div>
   </main>
  )
};

export default AccidentIncident;
