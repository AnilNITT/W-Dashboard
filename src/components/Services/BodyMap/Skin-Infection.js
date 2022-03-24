import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../../Navbar';
import Navbarone from '../../User/Navbarone';
import NavbarTwo from '../../User/NavbarTwo';


const SkinInfection = () => {
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

          <div class="col-xl-12 col-md-12">
                      <div class="ms-panel">
                           <div class="ms-panel-body" Style="padding-top:0px; padding-bottom:0px;">
                      <div class="section_box1_content2" Style="padding: 0px 0px 0px 0px;">
                            <div class="row">
                                <div class="col-sm-12" Style="padding: 0px 0px 0px 15px;">
                                    <div class="tab_menus" Style="float:left;">
                                        <ul>
                                           
                                            <li><Link to="/bodymap">Active</Link></li>
                                            <li><Link to="/bodymap-historical">Historical</Link></li>
                                            <li class="active"><Link to="/skin-infection" class="active">Skin Infection</Link></li>
                                            
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
          </div>



          <div class="col-md-12">
                        <div class="ms-panel">
                        <div class="ms-panel-body">
                            
                        <div class="row">
                            <div class="col-md-3">
                                <input type="date" class="form-control"/>
                            </div>
                            <div class="col-md-3">
                                 <input type="date" class="form-control"/>
                            </div>
                            <div class="col-md-2">
                                <input type="search" name="search" value="Search" class="btn btn-primary" Style="margin-top:0px;"/>
                            </div>
                            <div class="col-md-4">
                                <Link to="/create_bodymap" class="btn btn-primary" Style="float:right; margin-top:0px;">Create New</Link>
                            </div>
                        </div> 
                        </div>
                        </div>
                               
                        <div class="ms-panel">
                        <div class="ms-panel-body">
                            
                          <div class="row">
                           
                            <div class="col-md-3">
                                  <p Style="border: 2px solid #ddd;border-radius: 20px; padding: 8px;"> <span class="dott2"></span> Pain</p>
                            </div>
                             <div class="col-md-3">
                                {/* <!--<p Style="border: 2px solid #ddd;border-radius: 20px; padding: 8px;"> <span class="dott1"></span> Normal</p>--> */}
                            </div>
                             <div class="col-md-3">
                                {/* <!--<p Style="border: 2px solid #ddd;border-radius: 20px; padding: 8px;"> <span class="dott1"></span> Normal</p>--> */}
                            </div>
                            <div class="col-md-3">
                                 <p Style="border: 2px solid #ddd;border-radius: 20px; padding: 8px;"> <span class="dott3"></span> Injury</p>
                            </div>
                            {/* <!--<div class="col-md-3">-->
                            <!--      <p Style="border: 2px solid #ddd;border-radius: 20px; padding: 8px;"> <span class="dott4"></span> Temperature</p>-->
                            <!--</div>--> */}
                        </div>
                          <div class="table-responsive">
                             <table class="table table-bordered">
                                 <tbody><tr>
                                    <th>Date</th>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                  <tr>
                                    <th>Time</th>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                 <tr>
                                    <td>Left ear</td>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                
                                  <tr>
                                    <td>Right ear</td>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                               
                                 <tr>
                                    <td>Left shoulder</td>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                 <tr>
                                    <td>Right shoulder</td>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                 <tr>
                                    <td>Left elbow</td>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                  <tr>
                                    <td>Right elbow</td>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                  <tr>
                                    <td>Spine</td>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                  <tr>
                                    <td>Left hip</td>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                  <tr>
                                    <td>Right hip</td>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                 <tr>
                                    <td>Left ischium</td>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                  <tr>
                                    <td>Right ischium</td>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                 <tr>
                                    <td>Left buttock</td>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                 <tr>
                                    <td>Right buttock</td>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                 <tr>
                                    <td>Left knee</td>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                 <tr>
                                    <td>Right knee</td>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                 <tr>
                                    <td>Left ankle</td>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                 <tr>
                                    <td>Right ankle</td>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                  <tr>
                                    <td>Left heel</td>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                  <tr>
                                    <td>Right heel</td>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                  <tr>
                                    <td>Other</td>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                  <tr>
                                    <td>Verbal VB or <br/> Visual VS</td>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                 <tr>
                                    <td>Staff Signature</td>
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                             </tbody></table> 
                              
                              
                                <table class="table table-bordered">
                                
                 <tbody><tr>
                 <th>Skin inspection</th>
                 <th>Code</th>
                 <th>Action</th>
                 
              
              
                </tr>
       
         </tbody><tbody>
             <tr>
                 <td>Healthy and intact</td>
                 <td><i class="fa fa-check" aria-hidden="true"></i></td>
                 <td>No Action</td>
             </tr>
         </tbody>
                                  
                                </table>
                            </div>
                        </div>
                        </div>
                        
                     
                        
                   
                        </div>
      </div>
    </div>
    </main>  )
}

export default SkinInfection