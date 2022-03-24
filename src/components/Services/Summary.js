import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar';
import Navbarone from '../User/Navbarone';
import NavbarTwo from '../User/NavbarTwo';


const Summary = () => {
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
              <li class="breadcrumb-item active">Summary</li>
            </ol>
          </nav>
          </div>

          <div class="col-md-12">
          
            <div class="row">
               <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Basic Information</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                      <p><strong>Ms Annie'O Dohery</strong></p>
                      <p>40 Lighwood lane</p>
                      <p>Eckington</p>
                      <p>Chesterfield</p>
                     
                          
                          
                        </div>
                     </div>
               </div>
                <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Next Of Kin</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                                              <p><strong>Julie Berbely</strong></p>
                      <p>Faversham</p>
                      <p>Bevern View</p>
                      <p>Moor End Road</p>
                      <p>01422353314</p>
                     
                           
                          
                          
                        </div>
                     </div>
               </div>
                <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>PG Contacts</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                      <p>GP Name: Monica Balluch</p>
                     
                      <p>Contact Number: 01223644646</p>
                      <p>Public Health Nurse:sharon</p>
                           
                      <p>Contact Number: 5454564654</p>    
                          
                        </div>
                     </div>
               </div>
                <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Admission Details</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                        
                      <p>Date of Admission: 18/02/2021</p>
                      <p>Nurse in Charge: Colin'O</p>
                      <p>Care worker: Eddile'O</p>
                      <p>Payment Type: Private</p>
                      <p>Medical Card Expiry: 10/12/2022</p>
                      
                      <a href="#" class="btn btn-primary" Style="float:right" data-toggle="modal" data-target="#createadmission">Add</a>
                           
                          
                          
                        </div>
                     </div>
               </div>
                <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Vital</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      <p>Vital TAken Date: 18/02/2021 10:20:00</p>
                      <p>SO2: 2</p>
                      <p>Temp: 37</p>
                     
                        
                          
                        </div>
                     </div>
               </div>
               
                <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>About Me</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et risus sapien. Aliquam tempus sapien non laoreet posuere.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        
                          
                        </div>
                     </div>
               </div>
               
               <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Care Plan</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                     
                        
                          
                        </div>
                     </div>
               </div>
               <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Assessment</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                     
                        
                          
                        </div>
                     </div>
               </div>
               
               <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Wounds</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                      <p>Date &amp; Time : 10/12/2021 10:30 PM</p>
                      <p>Condition: Burn</p>  
                      <p>Recorded by: John Doe</p> 
                      <p>Next Review date:  17/11/2021</p>
                      <p>Status: Open</p>
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

export default Summary;
