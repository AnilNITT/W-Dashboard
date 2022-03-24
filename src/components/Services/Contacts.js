import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar';
import Navbarone from '../User/Navbarone';
import NavbarTwo from '../User/NavbarTwo';

const Contacts = () => {
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
              <li class="breadcrumb-item">
                <a href="#"><i class="material-icons">home</i> Home</a>
              </li>
               <li class="breadcrumb-item active">Contacts <a class="btn btn-primary" href="#" Style="float:right; margin-top:0px;" data-toggle="modal" data-target="#createcontact">Create New</a></li>
            </ol>
          </nav>
            </div>

            

            <div class="col-md-12">
          
            <div class="row">
               <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Significant Other 2</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                      <p><strong>Ronak Jaffri</strong></p>
                      <p>1 Lighwood lane</p>
                      <p>Eckington</p>
                      <p>Chesterfield</p>
                      <p>01223644646</p>
                      <p>test1@mail.com</p>
                          
                          
                        </div>
                     </div>
               </div>
                <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Significant Other 1</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                                              <p><strong>Edward Mackangy</strong></p>
                      <p>1 Lighwood lane</p>
                      <p>Eckington</p>
                      <p>Chesterfield</p>
                      <p>01223644646</p>
                       <p>test2@mail.com</p>
                           
                          
                          
                        </div>
                     </div>
               </div>
                <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Next of Kin Details</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                       <p><strong>Villiams Mathan</strong></p>
                      <p>1 Lighwood lane</p>
                      <p>Eckington</p>
                      <p>Chesterfield</p>
                      <p>01223644646</p>
                       <p>test3@mail.com</p>
                           
                          
                          
                        </div>
                     </div>
               </div>
                <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Medical Contacts</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                        
                      <p><strong>Monica Balluch</strong></p>
                      <p>1 Lighwood lane</p>
                      <p>Eckington</p>
                      <p>Chesterfield</p>
                      <p>01223644646</p>
                      <p>sharon@mail.com</p>
                           
                          
                          
                        </div>
                     </div>
               </div>
                <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Public Health Nurse</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      <p><strong>Johshin Adams</strong></p>
                      <p>1 Lighwood lane</p>
                      <p>Eckington</p>
                      <p>Chesterfield</p>
                      <p>01223644646</p>
                      <p>sharon@mail.com</p>
                        
                          
                        </div>
                     </div>
               </div>
               
               
           </div>
              
            </div>


            <div class="new_modals">
                <div class="modal fade none-border" id="createcontact">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                               <h4 class="modal-title"><strong>Add Contact</strong></h4>
                               <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SavePatients()">Save</button>
                                </div>

                               
                            </div>
                            <div class="row cal_m">
                                <div class="modal_contents">

                                    <div role="form">
                                        <div class="row">
                                            
                                            <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Contact Name<span class="man_fields1">*</span></label>
                                                    <input type="text" class="form-control" placeholder="Contact Name"/>
                                                </div>
                                            </div>
                                             <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Email<span class="man_fields1">*</span></label>
                                                    <input type="email" class="form-control" placeholder="Email"/>
                                                </div>
                                            </div>
                                            
                                            <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Phone Number<span class="man_fields1">*</span></label>
                                                    <input type="text" class="form-control" placeholder="Phone Number"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Address </label>
                                                    <textarea class="form-control" placeholder="Address"></textarea>
                                                </div>
                                            </div>
                                            
                                        </div>
                                      

                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</main>
  );
};

export default Contacts;
