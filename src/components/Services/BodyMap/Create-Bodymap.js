import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../../Navbar';
import Navbarone from '../../User/Navbarone';
import NavbarTwo from '../../User/NavbarTwo';


const CreateBodymap = () => {
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

                <div class="col-xl-12 col-md-12">
                  
                   <nav aria-label="breadcrumb">
            <ol class="breadcrumb pl-0">
              <li class="breadcrumb-item">
                <a href="#"><i class="material-icons">home</i> Home</a>
              </li>
              <li class="breadcrumb-item active">Create Body map </li>
            </ol>
          </nav>
            <div class="ms-panel">
                           <div class="ms-panel-body" Style="padding-top:0px; padding-bottom:0px;">
                      <div class="section_box1_content2" Style="padding: 0px 0px 0px 0px;">
                            <div class="row">
                                <div class="col-sm-12" Style="padding: 0px 0px 0px 15px;">
                                    <div class="tab_menus" Style="float:left;">
                                        <ul>
                                           
                                            <li><Link to="/bodymap">Active</Link></li>
                                            <li><Link to="/bodymap-historical">Historical</Link></li>
                                            <li><Link to="/skin-infection">Skin Infection</Link></li>
                                            
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
          
                     
                </div>


                <form>
                        
                        <div class="col-md-12">
                            <div class="row">      
                        <div class="col-xl-6 col-md-6">      
                       <div class="ms-panel">
                       <div class="ms-panel-body text-center">
                         <a href="#" data-toggle="modal" data-target="#selectcondition">
                             {/* <!--<img src="../../assets/img/hbody1.png" Style="width:60%;">--> */}
                             <img src="../../assets/img/frontbody.png" Style="width:60%;"/>
                             </a>
                        </div>
                        </div>
                        
                       <div class="ms-panel">
                       <div class="ms-panel-body">
                         <div class="row">
                             <div class="col-3 text-center">
                               <label>
                                   <input type="file" name="upload" Style="display:none;"/> 
                                 <img src="../../assets/img/noimage1.jpg" Style="width:100%;"/>
                                 Upload
                               </label>   
                             </div>
                              <div class="col-3 text-center">
                               <label>
                                   <input type="file" name="upload" Style="display:none;"/> 
                                 <img src="../../assets/img/noimage1.jpg" Style="width:100%;"/>
                                 Upload
                               </label>   
                             </div>
                              <div class="col-3 text-center">
                               <label>
                                   <input type="file" name="upload" Style="display:none;"/> 
                                 <img src="../../assets/img/noimage1.jpg" Style="width:100%;"/>
                                 Upload
                               </label>   
                             </div>
                              <div class="col-3 text-center">
                               <label>
                                   <input type="file" name="upload" Style="display:none;"/> 
                                 <img src="../../assets/img/noimage1.jpg" Style="width:100%;"/>
                                 Upload
                               </label>   
                             </div>
                              <div class="col-3 text-center">
                               <label>
                                   <input type="file" name="upload" Style="display:none;"/> 
                                 <img src="../../assets/img/noimage1.jpg" Style="width:100%;"/>
                                 Upload
                               </label>   
                             </div>
                              <div class="col-3 text-center">
                               <label>
                                   <input type="file" name="upload" Style="display:none;"/> 
                                 <img src="../../assets/img/noimage1.jpg" Style="width:100%;"/>
                                 Upload
                               </label>   
                             </div>
                              <div class="col-3 text-center">
                               <label>
                                   <input type="file" name="upload" Style="display:none;"/> 
                                 <img src="../../assets/img/noimage1.jpg" Style="width:100%;"/>
                                 Upload
                               </label>   
                             </div>
                              <div class="col-3 text-center">
                               <label>
                                   <input type="file" name="upload" Style="display:none;"/> 
                                 <img src="../../assets/img/noimage1.jpg" Style="width:100%;"/>
                                 Upload
                               </label>   
                             </div>
                         </div>
                         
                        </div>
                        </div>
                        
                        
                    </div>
                        <div class="col-xl-6 col-md-6">      
                  <div class="ms-panel">
                     
                     <div class="ms-panel-body">
                         
                         
                       
                           <div class="form-row">
                              
                              
                              
                              <div class="col-md-12 mb-3">
                                 <label for="validationCustom001">Created by</label>
                                 <div class="input-group">
                                    <select class="custom-select" id="validationCustom230" required="">
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
                                 <label for="validationCustom004">Recorded Date</label>
                                 <div class="input-group">
                                    <input type="date" class="form-control" id="validationCustom004" required=""/>

                                 </div>
                              </div>
                              <div class="col-md-6 mb-2">
                                 <label for="validationCustom003">Time</label>
                                 <div class="input-group">
                                    <input type="time" class="form-control" id="validationCustom003" required=""/>

                                 </div>
                              </div>
                                
                              
                           </div>
                             <div class="form-row">
                           
                              
                              <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Recorded by</label>
                                 <div class="input-group">
                                    <select class="custom-select" id="validationCustom230" required="">
                                        <option value="">Select Staff</option>
                                       <option value="">John doe</option>
                                       <option value="">Raxon Mary</option>
                                        <option value="">Tokder kelly</option>
                                    </select>

                                 </div>
                              </div> 
                              
                              <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Colour</label>
                                 <div class="input-group">
                                    <select class="custom-select" id="validationCustom230" required="">
                                       <option value="">Select Colour</option>
                                       <option value="">Black</option>
                                       <option value="">Yellow</option>
                                       <option value="">Red</option>
                                       <option value="">Green</option>
                                       <option value="">Pink</option>
                                    </select>

                                 </div>
                                 
                              </div>
                              </div>
                                <div class="form-row">
                                <div class="col-md-6">
                          <label for="validationCustom001">Type of Wound</label>
                           <div class="input-group">
                         
                             <span class="dott1"></span>&nbsp;&nbsp;
                             <p>Burns</p>
                            </div>
                          
                          </div>
                              <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Odour</label>
                                 <div class="input-group">
                                    <select class="custom-select" id="validationCustom230" required="">
                                        <option value="">Select Odour</option>
                                       <option value="">None</option>
                                       <option value="">Mild</option>
                                        <option value="">Medium</option>
                                        <option value="">Offensive</option>
                                    </select>

                                 </div>
                              </div>
                              
                              
                          
                           </div>
                          <div class="form-row"> 
                           
                        {/* <!--<div class="col-md-6 mb-3">-->
                        <!--         <label for="validationCustom001">Exudate Amount</label>-->
                        <!--         <div class="input-group">-->
                        <!--            <select class="custom-select" id="validationCustom230" required>-->
                        <!--                <option value="">Select Exudate Amount</option>-->
                        <!--               <option value=""></option>-->
                                      
                        <!--            </select>-->

                        <!--         </div>-->
                        <!--      </div>--> */}
                    </div>
                      <div class="form-row"> 
                           <div class="col-md-6">
                          <label for="validationCustom001">Location</label>
                           <div class="input-group">
                         
                           
                             <p>bed</p>
                            </div>
                          
                          </div>
                        <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Pain</label>
                                 <div class="input-group">
                                     <select class="custom-select">
          <option>Select Pain</option>
          <optgroup label="low">

        <option value="1">1</option>
       
          </optgroup>
    <optgroup label="medium">
        <option value="2">2</option>
         <option value="3">3</option>
          <option value="4">4</option>
           <option value="5">5</option>
    </optgroup>
     <optgroup label="high">
        <option value="6">6</option>
         <option value="7">7</option>
          <option value="8">8</option>
           <option value="9">9</option>
           <option value="10">10</option>
    </optgroup>
      </select>
                                    {/* <!--<select class="form-control" id="validationCustom230" required>-->
                                    <!--    <option value="">Select Pain</option>-->
                                    <!--   <option value=""></option>-->
                                      
                                    <!--</select>--> */}

                                 </div>
                              </div>
                    </div>
                    
                     <div class="form-row"> 
                           <div class="col-md-6">
                          <label for="validationCustom001">Pain Frequency</label>
                           <div class="input-group">
                         
                           <select class="custom-select" id="validationCustom230" required="">
                                        <option value="">Select Pain Frequency</option>
                                       <option value="None">None</option>
                                       <option value="Frequent">Frequent</option>
                                       <option value="Intermittent">Intermittent</option>
                                       <option value="At Dressing">At Dressing</option>
                                      
                                    </select>
                            </div>
                          
                          </div>
                        <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Dressing Pattern</label>
                                 <div class="input-group">
                                    <select class="custom-select" id="validationCustom230" required="">
                                        <option value="">Select Dressing Pattern</option>
                                       <option value="">Daily Once</option>
                                         <option value="">Daily Twice</option>
                                      
                                    </select>

                                 </div>
                              </div>
                    </div>
                     <div class="form-row"> 
                           <div class="col-md-6">
                          <label for="validationCustom001">Wound Status</label>
                           <div class="input-group">
                         
                           <select class="custom-select" id="validationCustom230" required="">
                                        <option value="">Select Wound Status</option>
                                       <option value=""></option>
                                      
                                    </select>
                            </div>
                          
                          </div>
                        <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Risk Level</label>
                                 <div class="input-group">
                                    <select class="custom-select" id="validationCustom230" required="">
                                        <option value="">Select Risk Level</option>
                                       <option value="">No Risk</option>
                                       <option value="">High Risk</option>
                                       <option value="">Medium Risk</option>
                                       <option value="">Low Risk</option>
                                      
                                    </select>

                                 </div>
                              </div>
                    </div>
                       <div class="form-row">
                           <div class="col-md-12"> 
                        <strong>Size</strong>
                        </div>
                           <div class="col-md-4">
                          <label for="validationCustom001">Depth(mm)</label>
                           <div class="input-group">
                         
                           <select class="custom-select" id="validationCustom230" required="">
                                        <option value="">Select Depth</option>
                                       <option value=""></option>
                                      
                                    </select>
                            </div>
                          
                          </div>
                        <div class="col-md-4 mb-3">
                                 <label for="validationCustom001">Length</label>
                                 <div class="input-group">
                                   <select class="custom-select" id="validationCustom230" required="">
                                        <option value="">Select length</option>
                                       <option value=""></option>
                                      
                                    </select>

                                 </div>
                              </div>
                           <div class="col-md-4 mb-3">
                                 <label for="validationCustom001">Width</label>
                                 <div class="input-group">
                                   <select class="custom-select" id="validationCustom230" required="">
                                        <option value="">Select Width</option>
                                       <option value=""></option>
                                      
                                    </select>

                                 </div>
                              </div>
                    </div>
                    
                          <div class="form-row"> 
                           <div class="col-md-6">
                          <label for="validationCustom001">Infected</label>
                           <div class="input-group">
                            <label><input type="checkbox" value="yes"/> Yes</label> &nbsp;&nbsp;&nbsp;&nbsp;
                            <label> <input type="checkbox" value="No"/> No</label>
                            </div>
                          
                          </div>
                           <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Next Review Date</label>
                                <input type="date" name="nextreviewdate" class="form-control"/>
                           </div>
                    </div>
                        <div class="form-row"> 
                           <div class="col-md-6">
                          <label for="validationCustom001">Infected</label>
                           <div class="input-group">
                            <label><input type="checkbox" value="createcareplan"/> Create Care plan</label> &nbsp;&nbsp;&nbsp;&nbsp;
                          
                            </div>
                          
                          </div>
                          <div class="col-md-6">
                          <label for="validationCustom001"><br/></label>
                           <div class="input-group">
                            <label><input type="checkbox" value="healed"/> Healed</label> &nbsp;&nbsp;&nbsp;&nbsp;
                          
                            </div>
                          
                          </div>
                           
                    </div>
                     </div>
                  </div>
                 
                  
                   
               </div>
               
                       <div class="col-xl-6 col-md-6">
                           <div class="ms-panel">
                        <div class="ms-panel-body" Style="padding: 1.5rem;">
                        <div class="row">
                            <textarea class="form-control" placeholder="Previous Notes" Style="height:120px;"></textarea>
                        </div>
                        </div>
                        </div>
                      
                       </div>
                       <div class="col-xl-6 col-md-6">
                             <div class="ms-panel">
                        <div class="ms-panel-body" Style="padding: 1.5rem;">
                        <div class="row">
                            <textarea class="form-control" placeholder="Notes" Style="height:120px;"></textarea>
                        </div>
                        </div>
                        </div>
                       </div>
                         
                        <div class="col-md-12">
                            <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Create New</button>
                            <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Back</button>
                        </div>
                        </div>  
                        </div>
                </form>


            </div>
        </div>
    </main>
)
}

export default CreateBodymap