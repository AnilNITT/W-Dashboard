import React from 'react'
import {Link} from 'react-router-dom';
import Navbar from '../Navbar';
import Navbarone from '../User/Navbarone';
import NavbarTwo from '../User/NavbarTwo';


const UserDetails = () => {
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
                       
                        <li class="breadcrumb-item active" aria-current="page">Service user Details</li>
                     </ol>
                  </nav>
                    </div>

                    <div class="col-md-12">
                    <div class="profile_content">
                    <div class="col-sm-12" Style="padding: 0px;">
                    {/* <!-- BEGIN MODAL --> */}
                    <div class="modal fade none-border" id="popdue">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">

                        <div class="modal_save">
                            <button data-dismiss="modal" class="btn btn-success waves-effect" type="button">Close</button>
                        </div>
                        <h4 class="modal-title"><strong>Reminders</strong></h4>
                            </div>

                            <div class="row cal_m">
                                <div class="modal_contents">
                                    <div class="pop_box1">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>

                    <div class="tab-content">

            {/* <!----------------Profile Start--------------------> */}
            <div id="profile_in" class="tab-pane active">
                <div class="row">

                    <div class="col-sm-12 col-lg-3">
                        <div class="section_box1">
                           <div class="patient_left" id="divleftpatnt">
                <div class="profile_img">
                    <img src="../../assets/img/dashboard/patient-1.jpg" class="img-responsive center-block img-circle" Style="width: 132px; height: 132px; border: 3px solid #1f4970 !important; border-top-left-radius: 35px;
    border-bottom-right-radius: 35px;"/>
             <label class="uploadlabel">
             <img src="images/edit.png" Style="width:20px; border-radius:0px; margin-right:10px;" data-toggle="modal" data-target="#profile_image"/></label>
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
                         {/* <!--<li><a href="#">Emergency Contact <span id="spnecont">64646464466, 01365464642, 94564646666</span></a></li>--> */}
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

                    <div class="col-sm-12 col-lg-6 par_ri">
                        <div class="section_box1" Style="height: 612px;">
                            <h2>Profile </h2>
                            <div class="edit_con1">
                                <a href="#" data-toggle="modal" data-target="#profile_detail">
                                  <img src="images/edit.png" Style="width:20px; border-radius:0px;"/>
                                </a>
                            </div>

                            <div class="section_box1_content_p">
                                <div role="form">
                                    <div class="row">
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Title</div>
                                                <div class="profile_contacts" id="lblttl">Mr</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Full Name</div>
                                                <div class="profile_contacts" id="lblfname">Michael Sullivan</div>
                                            </div>
                                        </div>
                                      
                                    </div>

                                    <div class="row">
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Gender</div>
                                                <div class="profile_contacts" id="lblgndr">Male</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Preferred to be called  </div>
                                                <div class="profile_contacts" id="lblfrnm1">Test1</div>
                                            </div>
                                        </div>
                                        
                                    </div>


                                    <div class="row">
                                        
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Marital Status</div>
                                                <div class="profile_contacts" id="lblmrtl">Single</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Last Occupation</div>
                                                <div class="profile_contacts" id="lbloccu">Bussiness</div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="row">
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Address</div>
                                                <div class="profile_contacts" id="lbladr1">102 B, Vijay Nagar</div>
                                            </div>
                                        </div>
                                        
                                        
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Nationality</div>
                                                <div class="profile_contacts" id="lblnatn">Indian</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Religion</div>
                                                <div class="profile_contacts" id="lblreg">Christian</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Ethinicity</div>
                                                <div class="profile_contacts" id="lblethn"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">


                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Date of Birth</div>
                                                <div class="profile_contacts" id="lbldob">22-12-1999</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Age</div>
                                                <div class="profile_contacts" id="lblage">32</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Service User Home ID</div>
                                                <div class="profile_contacts" id="lblhmid">646464</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Service User ID </div>
                                                <div class="profile_contacts" id="lblresid">A306578555</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Care home site/location address</div>
                                                <div class="profile_contacts" id="lblresid">Indore</div>
                                            </div>
                                        </div>
                                        
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                     <div class="col-sm-6 col-lg-3 par_ri">
                        <div class="section_box1" Style="height:601px;">
                            <h2>Personal Appearance</h2>
                            <div class="edit_con1">
                                <a href="#" data-toggle="modal" data-target="#personal_appearance">
                                    <i class="fa fa-edit" Style="font-size:20px;"></i>
                                </a>
                            </div>

                            <div class="section_box1_content_p2">

                                <div class="form-group">
                                    <div class="profile_label">Weight</div>
                                    <div class="profile_contacts" id="lblwght">88</div>
                                </div>
                                <div class="form-group">
                                    <div class="profile_label">Height</div>
                                    <div class="profile_contacts" id="lblhgt">118</div>
                                </div>
                                <div class="form-group ">
                                    <div class="profile_label">Eye Color</div>
                                    <div class="profile_contacts" id="lbleye">Blue</div>
                                </div>
                                <div class="form-group ">
                                    <div class="profile_label">Build</div>
                                    <div class="profile_contacts" id="lblbld">Ectomorph</div>
                                </div>
                                <div class="form-group">
                                    <div class="profile_label">Hair Color</div>
                                    <div class="profile_contacts" id="lblhair">Black</div>
                                </div>
                                <div class="form-group ">
                                    <div class="profile_label">Glasswear</div>
                                    <div class="profile_contacts" id="lblglas">Yes</div>
                                </div>
                                <div class="form-group ">
                                    <div class="profile_label">Hearing aid</div>
                                    <div class="profile_contacts" id="lblhear">Yes</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>

                <div class="row">

                    <div class="col-sm-6 col-lg-3 par_ri">
                        <div class="section_box1">
                            <h2>GP Contact Details</h2>
                            <div class="edit_con1">
                                <a href="#" data-toggle="modal" data-target="#gp_details">
                                  <img src="images/edit.png" Style="width:20px; border-radius:0px;"/>
                                </a>
                            </div>

                            <div class="section_box1_content_p2">
                                <div role="form">
                                    <div class="form-group">
                                        <div class="profile_label">Doctor name</div>
                                        <div class="profile_contacts" id="lblkinnm">Roxen Tylor</div>
                                    </div>
                                    <div class="form-group">
                                        <div class="profile_label">Surgery / Practice name</div>
                                        <div class="profile_contacts" id="lblkinnm">No information entered</div>
                                    </div>
                                    <div class="form-group">
                                        <div class="profile_label">Email</div>
                                        <div class="profile_contacts" id="lblkinadr1">info@mail.com</div>
                                    </div>

                                    <div class="form-group">
                                        <div class="profile_label">Address</div>
                                        <div class="profile_contacts" id="lblkinadr2">House No.405, Tower Road</div>
                                    </div>
                                   
                                    <div class="form-group">
                                        <div class="profile_label">Telephone</div>
                                        <div class="profile_contacts" id="lblkinph">XXXXXXXXXX</div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-3 par_ri">
                        <div class="section_box1">
                            <h2>Next of Kin Details</h2>
                            <div class="edit_con1">
                                <a href="#" data-toggle="modal" data-target="#next_of_kin_details">
                                   <i class="fa fa-edit" Style="font-size:20px;"></i>
                                </a>
                            </div>

                            <div class="section_box1_content_p2">
                                <div role="form">

                                    <div class="form-group">
                                        <div class="profile_label">Name</div>
                                        <div class="profile_contacts" id="lblkinnm">John Doe</div>
                                    </div>
                                    <div class="form-group">
                                        <div class="profile_label">Address Line 1</div>
                                        <div class="profile_contacts" id="lblkinadr1">Vijay Nagar</div>
                                    </div>

                                    <div class="form-group">
                                        <div class="profile_label">Address Line 2</div>
                                        <div class="profile_contacts" id="lblkinadr2">House No.201</div>
                                    </div>
                                    <div class="form-group">
                                        <div class="profile_label">Town/City</div>
                                        <div class="profile_contacts" id="lblkinadr3">Indore</div>
                                    </div>
                                    <div class="form-group">
                                        <div class="profile_label">Postcode</div>
                                        <div class="profile_contacts" id="lblkinadr3">452001</div>
                                    </div>
                                    <div class="form-group">
                                        <div class="profile_label">Telephone</div>
                                        <div class="profile_contacts" id="lblkinph">65648764646</div>
                                    </div>
                                    <div class="form-group">
                                        <div class="profile_label">Relationship</div>
                                        <div class="profile_contacts" id="lblrel">Father</div>
                                    </div>
                                    <div class="form-group">
                                        <div class="profile_label">Email</div>
                                        <div class="profile_contacts" id="lblkinhgt">test@mail.com</div>
                                    </div>
                                    <div class="form-group">
                                        <label class="profile_label">Lasting power of attorney </label>
                                        <div class="profile_contacts" id="lblkinmail">Yes</div>
                                   </div>
                                   <div class="form-group">
                                        <label class="profile_label">Contact Status </label>
                                        <div class="profile_contacts" id="lblkinmail">Priority</div>
                                   </div>
                                   <div class="form-group">
                                        <label class="profile_label"><img src="../../assets/img/cat-icon/Familyicon.png" Style="width:24px;"/> Is access to the family module granted to this contact? </label>
                                        <div class="profile_contacts" id="lblkinmail">Yes</div>
                                   </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-3 par_ri">
                        <div class="section_box1">
                            <h2>Significant Other 1</h2>
                            <div class="edit_con1">
                                <a href="#" data-toggle="modal" data-target="#significant_other_1">
                                   <i class="fa fa-edit" Style="font-size:20px;"></i>
                                </a>
                            </div>

                            <div class="section_box1_content_p2">
                                <div role="form">

                                    <div class="form-group">
                                        <div class="profile_label">Name</div>
                                        <div class="profile_contacts" id="lblkinnm">John Doe</div>
                                    </div>
                                    <div class="form-group">
                                        <div class="profile_label">Address Line 1</div>
                                        <div class="profile_contacts" id="lblkinadr1">Vijay Nagar</div>
                                    </div>

                                    <div class="form-group">
                                        <div class="profile_label">Address Line 2</div>
                                        <div class="profile_contacts" id="lblkinadr2">House No.201</div>
                                    </div>
                                    <div class="form-group">
                                        <div class="profile_label">Town/City</div>
                                        <div class="profile_contacts" id="lblkinadr3">Indore</div>
                                    </div>
                                    <div class="form-group">
                                        <div class="profile_label">Postcode</div>
                                        <div class="profile_contacts" id="lblkinadr3">452001</div>
                                    </div>
                                    <div class="form-group">
                                        <div class="profile_label">Telephone</div>
                                        <div class="profile_contacts" id="lblkinph">65648764646</div>
                                    </div>
                                    <div class="form-group">
                                        <div class="profile_label">Relationship</div>
                                        <div class="profile_contacts" id="lblrel">Father</div>
                                    </div>
                                    <div class="form-group">
                                        <div class="profile_label">Email</div>
                                        <div class="profile_contacts" id="lblkinhgt">test@mail.com</div>
                                    </div>
                                    <div class="form-group">
                                        <label class="profile_label">Lasting power of attorney </label>
                                        <div class="profile_contacts" id="lblkinmail">Yes</div>
                                   </div>
                                   <div class="form-group">
                                        <label class="profile_label">Contact Status </label>
                                        <div class="profile_contacts" id="lblkinmail">Priority</div>
                                   </div>
                                   <div class="form-group">
                                        <label class="profile_label"><img src="../../assets/img/cat-icon/Familyicon.png" Style="width:24px;"/> Is access to the family module granted to this contact? </label>
                                        <div class="profile_contacts" id="lblkinmail">Yes</div>
                                   </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-3">
                        <div class="section_box1">
                            <h2>Significant Other 2</h2>
                            <div class="edit_con1">
                                <a href="#" data-toggle="modal" data-target="#significant_other_2">
                                    <i class="fa fa-edit" Style="font-size:20px;"></i>
                                </a>
                            </div>

                            <div class="section_box1_content_p2">
                                <div role="form">

                                    <div class="form-group">
                                        <div class="profile_label">Name</div>
                                        <div class="profile_contacts" id="lblkinnm">John Doe</div>
                                    </div>
                                    <div class="form-group">
                                        <div class="profile_label">Address Line 1</div>
                                        <div class="profile_contacts" id="lblkinadr1">Vijay Nagar</div>
                                    </div>

                                    <div class="form-group">
                                        <div class="profile_label">Address Line 2</div>
                                        <div class="profile_contacts" id="lblkinadr2">House No.201</div>
                                    </div>
                                    <div class="form-group">
                                        <div class="profile_label">Town/City</div>
                                        <div class="profile_contacts" id="lblkinadr3">Indore</div>
                                    </div>
                                    <div class="form-group">
                                        <div class="profile_label">Postcode</div>
                                        <div class="profile_contacts" id="lblkinadr3">452001</div>
                                    </div>
                                    <div class="form-group">
                                        <div class="profile_label">Telephone</div>
                                        <div class="profile_contacts" id="lblkinph">65648764646</div>
                                    </div>
                                    <div class="form-group">
                                        <div class="profile_label">Relationship</div>
                                        <div class="profile_contacts" id="lblrel">Father</div>
                                    </div>
                                    <div class="form-group">
                                        <div class="profile_label">Email</div>
                                        <div class="profile_contacts" id="lblkinhgt">test@mail.com</div>
                                    </div>
                                    <div class="form-group">
                                        <label class="profile_label">Lasting power of attorney </label>
                                        <div class="profile_contacts" id="lblkinmail">Yes</div>
                                   </div>
                                   <div class="form-group">
                                        <label class="profile_label">Contact Status </label>
                                        <div class="profile_contacts" id="lblkinmail">Priority</div>
                                   </div>
                                   <div class="form-group">
                                        <label class="profile_label"><img src="../../assets/img/cat-icon/Familyicon.png" Style="width:24px;"/> Is access to the family module granted to this contact? </label>
                                        <div class="profile_contacts" id="lblkinmail">Yes</div>
                                   </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <input type="hidden" id="hdnpat_id" value="150"/>

                </div>

            </div>
            {/* <!----------------Profile End--------------------> */}

            {/* <!----------------Admission Start--------------------> */}
            <div id="admission" class="tab-pane">
                <div class="row">
                    <div class="col-sm-6 par_ri">
                        <div class="section_box1">
                            <h2>Medical Contacts </h2>
                            <div class="edit_con1">
                                <a href="#" data-target="#medical_contacts" onclick="OpenePopup(this)">
                                    <i class="fa fa-pencil" aria-hidden="true"></i>
                                </a>
                            </div>

                            <div class="section_box1_content_p1">
                                <div role="form">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <div class="profile_label">GP Name</div>
                                                <div class="profile_contacts" id="lblgp">Julie Smith</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <div class="profile_label">Contact Number </div>
                                                <div class="profile_contacts" id="lblgpcntct">02380677831</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <div class="profile_label">Clinic Name</div>
                                                <div class="profile_contacts" id="lblgpclinic">Homefield Clinic</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <div class="profile_label">Address 1</div>
                                                <div class="profile_contacts" id="lblgpadr1">1 Stacey Street</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <div class="profile_label">Address 2</div>
                                                <div class="profile_contacts" id="lblgpadr2">Isledon Village</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <div class="profile_label">County</div>
                                                <div class="profile_contacts" id="lblgpcnty">County Galway</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <div class="profile_label">Out of hours</div>
                                                <div class="profile_contacts" id="lblgpohr">2</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <div class="profile_label">Email</div>
                                                <div class="profile_contacts" id="lblgpmail">Julie@inselcare.com</div>
                                            </div>
                                        </div>
                                        <input type="hidden" value="242" id="hdngpcont_id"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="section_box1">
                            <h2>Public Health Nurse </h2>
                            <div class="edit_con1">
                                <a href="#" data-target="#public_health_nurse" onclick="OpenePopup(this)">
                                    <i class="fa fa-edit" Style="font-size:20px;"></i>
                                </a>
                            </div>

                            <div class="section_box1_content_p1">
                                <div role="form">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <div class="profile_label">Public Health Nurse </div>
                                                <div class="profile_contacts" id="lblphn">Sharon Adams</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <div class="profile_label">Contact Number </div>
                                                <div class="profile_contacts" id="lblphno">01142716688</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <div class="profile_label">Health Center </div>
                                                <div class="profile_contacts" id="lblhc">Woodland hospital</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <div class="profile_label">Address 1  </div>
                                                <div class="profile_contacts" id="lblphadr1">1 Lightwood Lane</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <div class="profile_label">Address 2 </div>
                                                <div class="profile_contacts" id="lblphadr2">Eckington</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <div class="profile_label">Address 3 </div>
                                                <div class="profile_contacts" id="lblphadr3">Chesterfield</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <div class="profile_label">Out of hours  </div>
                                                <div class="profile_contacts" id="lblphohr">2</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <div class="profile_label">Email  </div>
                                                <div class="profile_contacts" id="lblphmail">sharon@inselcare.com</div>
                                            </div>
                                        </div>
                                        <input type="hidden" value="243" id="hdnphncont_id"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="row">
                    <div class="col-sm-6">
                        <div class="section_box1">
                            <h2>Admission </h2>
                            <div class="edit_con1">
                                <a href="#" data-target="#admission_pp" onclick="OpenePopup(this)">
                                    <i class="fa fa-pencil" aria-hidden="true"></i>
                                </a>
                            </div>

                            <div class="section_box1_content_p1">
                                <div role="form">
                                    
                                    <div class="row">
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Date of Admission</div>
                                                <div class="profile_contacts" id="lbladmtdt">18-02-2020</div>

                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Time  </div>
                                                <div class="profile_contacts" id="lbladmttm">09:22 AM</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Floor  </div>
                                                <div class="profile_contacts" id="lblflr">First Floor</div>

                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Allocated Room  </div>
                                                <div class="profile_contacts" id="lblrm">202</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Bed  </div>
                                                <div class="profile_contacts" id="lblbed">BedNo1</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Rate  </div>
                                                <div class="profile_contacts" id="lblrate">MEDIUM</div>
                                            </div>
                                        </div>
                                        <div class="clearfix"></div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Nurse In Charge  </div>
                                                <div class="profile_contacts" id="lblnurschrg">Colin O' Gallagher</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Care Worker </div>
                                                <div class="profile_contacts" id="lblcare">Eddie O' Reilly</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Risk Level  </div>
                                                <div class="profile_contacts" id="lblrisk">High</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Dependency Level  </div>
                                                <div class="profile_contacts" id="lbldepend">Medium</div>
                                            </div>
                                        </div>
                                        <div class="clearfix"></div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Admission Type </div>
                                                <div class="profile_contacts" id="lbltype">Normal</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Admission Source </div>
                                                <div class="profile_contacts" id="lblsrc">Community</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Enter Source Name </div>
                                                <div class="profile_contacts" id="lblsrcname"></div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Re-Admission</div>
                                                <div class="profile_contacts" id="lblreadmt"></div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">D.N.R.</div>
                                                <div class="profile_contacts" id="lbldnr">No order in place</div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-sm-6">
                        <div class="section_box1">
                            <h2>Payment </h2>
                            <div class="edit_con1">
                                <a href="#" data-target="#payment" onclick="OpenePopup(this)">
                                    <i class="fa fa-edit" Style="font-size:20px;"></i>
                                </a>
                            </div>

                            <div class="section_box1_content_p1">
                                <div role="form">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <div class="profile_label">Type</div>
                                                <div class="profile_contacts" id="lblpaytype">Private</div>

                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <div class="profile_label">Ward of Court </div>
                                                <div class="profile_contacts" id="lblwrd">Yes</div>
                                            </div>
                                        </div>

                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Medical Card Number  </div>
                                                <div class="profile_contacts" id="lblmedcard"></div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Expiry Date  </div>
                                                <div class="profile_contacts" id="lblexp">09-11-2021</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Health Insurance Provider</div>
                                                <div class="profile_contacts" id="lblhip">Connolly</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Valid Until </div>
                                                <div class="profile_contacts" id="lblvald"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-sm-6">
                        <div class="section_box1">
                            <h2>Documents Received </h2>
                            <div class="edit_con1">
                                <a href="#" data-target="#documents_received" onclick="OpenePopup(this)">
                                    <i class="fa fa-pencil" aria-hidden="true"></i>
                                </a>
                            </div>

                            <div class="section_box1_content_p1">
                                <div role="form">
                                    <div class="row">
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Consultant Letter </div>
                                                <div class="profile_contacts documes_recive_con" id="lblcnslt"></div>
                                                <div class="documes_recive">
                                                    <img src="../images/1.jpg" class="img-responsive" id="imgcnslt"/>
                                                </div>
                                                <div class="clearfix"></div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">GP Letter </div>
                                                <div class="profile_contacts documes_recive_con" id="lblgpltr"></div>
                                                <div class="documes_recive">
                                                    <img src="../images/1.jpg" class="img-responsive" id="imggpltr"/>
                                                </div>
                                                <div class="clearfix"></div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">PHN Letter </div>
                                                <div class="profile_contacts documes_recive_con" id="lblphnltr"></div>
                                                <div class="documes_recive">
                                                    <img src="../images/1.jpg" class="img-responsive" id="imgphnltr"/>
                                                </div>
                                                <div class="clearfix"></div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Transfer letter  </div>
                                                <div class="profile_contacts documes_recive_con" id="lbltrs"></div>
                                                <div class="documes_recive">
                                                    <img src="../images/1.jpg" class="img-responsive" id="imgtrnfr"/>
                                                </div>
                                                <div class="clearfix"></div>
                                            </div>
                                        </div>

                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Nurse Letter  </div>
                                                <div class="profile_contacts documes_recive_con" id="lblnrsltr"></div>
                                                <div class="documes_recive">
                                                    <img src="../images/1.jpg" class="img-responsive" id="imgnrsltr"/>
                                                </div>
                                                <div class="clearfix"></div>
                                            </div>
                                        </div>

                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="profile_label">Others</div>
                                                <div class="profile_contacts documes_recive_con" id="lblothr"></div>
                                                <div class="documes_recive">
                                                    <img src="../images/1.jpg" class="img-responsive" id="imgothr"/>
                                                </div>
                                                <div class="clearfix"></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="clearfix"></div>

                    <div class="col-sm-6">
                        <div class="section_box1">
                            <h2>Communication </h2>
                            <div class="edit_con1">
                                <a href="#" data-target="#communication" onclick="OpenePopup(this)">
                                  <i class="fa fa-edit" Style="font-size:20px;"></i>
                                </a>
                            </div>

                            <div class="section_box1_content_p1">
                                <div role="form">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="profile_label">GP Informed</div>
                                            <div class="profile_contacts" id="lblgpinf">Yes</div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="profile_label">Date &amp; Time </div>
                                            <div class="profile_contacts" id="lblgidt">09-11-2021 5:34 PM</div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="profile_label">PHN Informed</div>
                                            <div class="profile_contacts" id="lblphinf"></div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="profile_label">Date &amp; Time </div>
                                            <div class="profile_contacts" id="lblphdt"></div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="profile_label">Consultant Informed</div>
                                            <div class="profile_contacts" id="lblcnsltinf"></div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="profile_label">Date &amp; Time </div>
                                            <div class="profile_contacts" id="lblcnltdt"></div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="profile_label">Family Informed</div>
                                            <div class="profile_contacts" id="lblfmly"></div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="profile_label">Date &amp; Time </div>
                                            <div class="profile_contacts" id="lblfmdt"></div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-sm-6">
                        <div class="section_box1">
                            <h2>Current Medications &amp; Vaccinations </h2>
                            <div class="edit_con1">
                                <a href="#" data-target="#current_medications_vaccinations" onclick="OpenePopup(this)">
                                    <i class="fa fa-pencil" aria-hidden="true"></i>
                                </a>
                            </div>


                            <div class="section_box1_content_p1">
                                <div role="form">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="profile_label">Current Medication  </div>
                                            <div class="profile_contacts" id="lblcrntmd">No</div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="profile_label">Vaccinations</div>
                                            <div class="profile_contacts" id="lblvac">No</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!----------------Admission End--------------------> */}

            {/* <!----------------Discharge Start--------------------> */}
            <div id="discharge" class="tab-pane">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="section_box1">
                            <h2>Discharge </h2>


                            <div class="section_box1_content_p1">
                                <div role="form">
                                    <div class="row">
                                        <div class="col-sm-4 col-lg-4">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Date of Discharge <span class="man_fields1">*</span></label>
                                                <input type="text" class="text-wrapper select-calander" placeholder="Date of Discharge" id="txtdschrg"/>
                                                <div class="clalaner_icon">
                                                    <img src="../images/calander.png"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4 col-lg-4">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Time <span class="man_fields1">*</span></label>
                                                <div class="inner cover indexpicker">

                                                    <input id="txtdschtime" type="text" name="timepicker1" class="form-control" placeholder="Time"/>


                                                </div>
                                                <div class="time_icons">
                                                    <img src="../images/time.png"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-sm-4 col-lg-4">
                                            <div class="form-group">
                                                <label class="control-label">Nurse In Charge <span class="man_fields1">*</span></label>
                                                <span class="select-wrapper"><select name="ctl00$cphContent$ddldschnurse" id="ddldschnurse" class="custom-select">
	                                                <option value="5">Colin O' Gallagher</option>
	                                                <option value="75">Mark O' Gallagher</option>

                                                    </select><span class="holder">Colin O' Gallagher</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-sm-6">
                        <div class="section_box1">
                            <h2>Documents Received </h2>


                            <div class="section_box1_content_p1">
                                <div role="form">
                                    <div class="row">


                                        <div class="col-sm-6 col-lg-6">
                                            <div class="profile_label">Consultant Letter </div>

                                            <div class="col-xs-6">
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <input type="checkbox" id="chkdcnslty" name="disconsultant" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <input type="checkbox" id="chkdcnsltn" name="disconsultant" value="N"/><label for="checkbox1"><span></span> No</label>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="col-xs-6">
                                                <div class="documents_discharge">
                                                    <img alt="work-thumbnail" class="thumb-img img-responsive" src="../images/1.jpg" onclick="BrowseImg('dcs')" id="imgdcs"/>
                                                    <input id="uploaddcs" type="file" onchange="readURLS(this,'dcs');" Style="display: none;"/>
                                                    <input type="hidden" id="hdnimgdcs" value=""/>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="col-sm-6 col-lg-6">
                                            <div class="profile_label">GP Letter </div>
                                            <div class="col-xs-6">
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <input type="checkbox" id="chkdgpy" name="disgpletter" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <input type="checkbox" id="chkdgpn" name="disgpletter" value="N"/><label for="checkbox1"><span></span> No</label>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="col-xs-6">
                                                <div class="documents_discharge">
                                                    <img alt="work-thumbnail" class="thumb-img img-responsive" src="../images/1.jpg" onclick="BrowseImg('dgp')" id="imgdgp"/>
                                                    <input id="uploaddgp" type="file" onchange="readURLS(this,'dgp');" Style="display: none;"/>
                                                    <input type="hidden" id="hdnimgdgp" value=""/>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="col-sm-6 col-lg-6">
                                            <div class="profile_label">PHN Letter </div>

                                            <div class="col-xs-6">
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <input id="chkdphny" name="disphnletter" value="Y" type="checkbox"/><label for="checkbox1"><span></span> Yes</label>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <input type="checkbox" id="chkdphnn" name="disphnletter" value="N"/><label for="checkbox1"><span></span> No</label>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="col-xs-6">
                                                <div class="documents_discharge">
                                                    <img alt="work-thumbnail" class="thumb-img img-responsive" src="../images/1.jpg" onclick="BrowseImg('dphn')" id="imgdphn"/>
                                                    <input id="uploaddphn" type="file" onchange="readURLS(this,'dphn');" Style="display: none;"/>
                                                    <input type="hidden" id="hdnimgdphn" value=""/>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="col-sm-6 col-lg-6">
                                            <div class="profile_label">Transfer letter  </div>
                                            <div class="col-xs-6">
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <input type="checkbox" id="chkdtrnsy" name="distrnsltr" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <input type="checkbox" id="chkdtrnsn" name="distrnsltr" value="N"/><label for="checkbox1"><span></span> No</label>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="col-xs-6">
                                                <div class="documents_discharge">
                                                    <img alt="work-thumbnail" class="thumb-img img-responsive" src="../images/1.jpg" onclick="BrowseImg('dtrn')" id="imgdtrn"/>
                                                    <input id="uploaddtrn" type="file" onchange="readURLS(this,'dtrn');" Style="display: none;"/>
                                                    <input type="hidden" id="hdnimgdtrn" value=""/>
                                                </div>
                                            </div>


                                        </div>

                                        <div class="col-sm-6 col-lg-6">
                                            <div class="profile_label">Nurse Letter  </div>
                                            <div class="col-xs-6">
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <input type="checkbox" id="chkdnursy" name="disnurse" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <input type="checkbox" id="chkdnursn" name="disnurse" value="N"/><label for="checkbox1"><span></span> No</label>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="col-xs-6">
                                                <div class="documents_discharge">
                                                    <img alt="work-thumbnail" class="thumb-img img-responsive" src="../images/1.jpg" onclick="BrowseImg('dnrs')" id="imgdnrs"/>
                                                    <input id="uploaddnrs" type="file" onchange="readURLS(this,'dnrs');" Style="display: none;"/>
                                                    <input type="hidden" id="hdnimgdnrs" value=""/>
                                                </div>
                                            </div>


                                        </div>

                                        <div class="col-sm-6 col-lg-6">
                                            <div class="profile_label">Others</div>
                                            <div class="col-xs-6">
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <input type="checkbox" id="chkdothry" name="disothers" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <input type="checkbox" id="chkdothrn" name="disothers" value="N"/><label for="checkbox1"><span></span> No</label>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="col-xs-6">
                                                <div class="documents_discharge">
                                                    <img alt="work-thumbnail" class="thumb-img img-responsive" src="../images/1.jpg" onclick="BrowseImg('doth')" id="imgdoth"/>
                                                    <input id="uploaddoth" type="file" onchange="readURLS(this,'doth');" Style="display: none;"/>
                                                    <input type="hidden" id="hdnimgdoth" value=""/>
                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-sm-6">
                        <div class="section_box1">
                            <h2>Communication </h2>


                            <div class="section_box1_content_p1">


                                <div class="row">
                                    <div class="col-sm-6 m-b-15">
                                        <label for="exampleInputEmail1">GP Informed </label>
                                        <div class="row">
                                            <div class="col-xs-6">
                                                <input type="checkbox" id="chkdgpinfoy" name="dchgpinform" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                            </div>
                                            <div class="col-xs-6">
                                                <input type="checkbox" id="chkdgpinfon" name="dchgpinform" value="N"/><label for="checkbox1"><span></span> No</label>
                                            </div>
                                                  <div class="col-xs-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Date  </label>
                                                    <input name="" type="text" class="text-wrapper select-calander" placeholder="Date" id="txtdgpinform"/>

                                                    <div class="clalaner_icon">
                                                        <img src="../images/calander.png"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Time </label>
                                                    <input type="text" class="form-control" id="txtdgpinformtime" placeholder="Time "/>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="col-sm-6  m-b-15">
                                        <label for="exampleInputEmail1">PHN Informed </label>
                                        <div class="row">
                                            <div class="col-xs-6">
                                                <input type="checkbox" id="chkdphninfoy" name="dchphninform" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                            </div>
                                            <div class="col-xs-6">
                                                <input type="checkbox" id="chkdphninfon" name="dchphninform" value="N"/><label for="checkbox1"><span></span> No</label>
                                            </div>
                                              <div class="col-xs-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Date  </label>
                                                    <input name="" type="text" class="text-wrapper select-calander" placeholder="Date" id="txtdphninfo"/>
                                                    <div class="clalaner_icon">
                                                        <img src="../images/calander.png"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Time </label>
                                                    <input type="text" class="form-control" id="txtdphninfotime" placeholder="Time "/>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="col-sm-6  m-b-15">
                                        <label for="exampleInputEmail1">Consultant Informed </label>
                                        <div class="row">
                                            <div class="col-xs-6">
                                                <input type="checkbox" id="chkdcnsltinfoy" name="dchcnsltinform" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                            </div>
                                            <div class="col-xs-6">
                                                <input type="checkbox" id="chkdcnsltinfon" name="dchcnsltinform" value="N"/><label for="checkbox1"><span></span> No</label>
                                            </div>
                                             <div class="col-xs-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Date  </label>
                                                    <input name="" type="text" class="text-wrapper select-calander" placeholder="Date" id="txtdcnsltinfo"/>
                                                    <div class="clalaner_icon">
                                                        <img src="../images/calander.png"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Time </label>
                                                    <input type="text" class="form-control" id="txtdcnsltinfotime" placeholder="Time "/>
                                                </div>
                                            </div>
                                          
                                        </div>
                                    </div>
                                    <div class="col-sm-6  m-b-15">
                                        <label for="exampleInputEmail1">Family Informed </label>
                                        <div class="row">
                                            <div class="col-xs-6">
                                                <input type="checkbox" id="chkdfmlyinfoy" name="dchfamlyinform" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                            </div>
                                            <div class="col-xs-6">
                                                <input type="checkbox" id="chkdfmlyinfon" name="dchfamlyinform" value="N"/><label for="checkbox1"><span></span> No</label>
                                            </div>
                                             <div class="col-xs-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Date  </label>
                                                    <input name="" type="text" class="text-wrapper select-calander" placeholder="Date" id="txtdfmly"/>
                                                    <div class="clalaner_icon">
                                                        <img src="../images/calander.png"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Time </label>
                                                    <input type="text" class="form-control" id="txtdfmlytime" placeholder="Time "/>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>


                    <div class="col-sm-12">
                        <div class="section_box1">
                            <h2>Notes</h2>

                            <div class="section_box1_content_p1">
                                <div role="form">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Notes </label>
                                                <span class="remaining_chars" id="spndischnote">Remaining 4000 characters</span>
                                                <div>
                                                    <textarea id="txtdisnote" maxlength="4000" onkeyup="MaxLengthCharCheck(this,'spndischnote',4000);" class="form-control" placeholder="Note"></textarea>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class=" save">
                            <button class="btn btn-success" type="button" onclick="SaveDischarge()">Discharge</button>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!----------------Discharge End-------------------->

            <!----------------Cash Register Start--------------------> */}


            <div id="cash_register" class="tab-pane">
                <div>
                    <div class="section_box_gray">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="headings_cash">December 2021 Account Summary </div>
                                <div class=" create_new1">
                                    <button type="button" class="btn btn-success" onclick="ClearCashRegister('O')">Create New</button>
                                </div>
                            </div>


                            <div class="col-sm-4">
                                <div class="hr_sec_ch">
                                    <div class="hr_sec_time hr_sec_time_bg">
                                        Deposits 
                                                                                    <br/>
                                        <span>0.00</span>
                                    </div>

                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="hr_sec_ch">

                                    <div class="hr_sec_time hr_sec_time_bg1">
                                        Spend  
                                                                                    <br/>
                                        <span>0.00</span>
                                    </div>

                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="hr_sec_ch">

                                    <div class="hr_sec_time hr_sec_time_bg2">
                                        Current Balance    
                                                                                    <br/>
                                        <span>0.00 </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <!----------------Start----------------> */}



                <div class="col-sm-12">
                    <div class="row">
                        <div class="section_box1">

                            <div class="section_box1_content">
                                <div class="table-responsive" id="cashdiv">
                                    
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="clearfix"></div>
                </div>
                {/* <!----------------End----------------> */}


            </div>
            {/* <!----------------Cash Register End--------------------> */}

            {/* <!-- BEGIN MODAL --> */}
            <div class="new_modals">
                <div class="modal fade none-border" id="cash_register_new">
                    <div class="modal-dialog">
                        <div class="modal-content" >
                            <div class="modal-header">
                                <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SaveCashRegister()">Save</button>
                                </div>

                                <h4 class="modal-title"><strong>Cash Register </strong></h4>
                            </div>
                            <div class="row cal_m">
                                <div class="modal_contents">

                                    <div class="row ">
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Date<span class="man_fields">*</span></label>
                                                <input type="text" id="txtcashdate" placeholder="DD/MM/YYYY" class="text-wrapper select-calander"/>
                                                <div class="clalaner_icon">
                                                    <img src="../images/calander.png"/>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Amount<span class="man_fields">*</span></label>

                                                <input type="number" id="txtcashamt" placeholder="Amount" class="form-control"/>


                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Transaction<span class="man_fields">*</span></label>
                                                <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlcashtype">
                                                    <option value="">Select Transaction </option>
                                                    <option value="C">Deposit</option>
                                                    <option value="D">Debit</option>
                                                </select><span class="holder">Select Transaction </span></span>

                                            </div>
                                        </div>


                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Description</label>
                                                <textarea name="" cols="" rows="" class="form-control" placeholder="Description" id="txtcashdesc"></textarea>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- END MODAL --> */}

            {/* <!----------------Assets  Start--------------------> */}
            <div id="assets" class="tab-pane">
                <div class=" create_new1">
                    <button type="button" class="btn btn-success" onclick="ClearAssets('O');">Create New</button>
                </div>

                {/* <!----------------Start----------------> */}
                <div class="col-sm-12">
                    <div class="row">
                        <div class="section_box1">

                            <div class="section_box1_content">
                                <div class="table-responsive" id="divasst">
                                    

                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="clearfix"></div>
                </div>
                {/* <!----------------End----------------> */}


            </div>


            {/* <!----------------Assets  End-------------------->
            <!-- BEGIN MODAL --> */}
            <div class="new_modals">
                <div class="modal fade none-border" id="asset_new">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SaveAssets()">Save</button>
                                    <button class="btn btn-success " type="button" onclick="DeleteAssets()" id="btnasstdelete" Style="display: none;">Delete</button>
                                </div>
                                <h4 class="modal-title"><strong>Assets </strong></h4>
                            </div>
                            <div class="row cal_m">
                                <div class="modal_contents">
                                    <div class="row ">
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Description</label>
                                                <span class="man_fields">*</span>
                                                <textarea name="" cols="" rows="" class="form-control" placeholder="Description  " maxlength="250" id="txtastdesc"></textarea>

                                            </div>
                                        </div>

                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Quantity</label><span class="man_fields">*</span>
                                                <input type="number" class="form-control" id="txtasstqty" placeholder="Quantity"/>

                                            </div>
                                        </div>

                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Value</label><span class="man_fields">*</span>
                                                <input type="number" class="form-control" id="txtasstval" placeholder="Value "/>
                                            </div>
                                        </div>
                                        <input type="hidden" value="0" id="hdnasst_id"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- END MODAL --> */}
            <div class="new_modals">
                <div class="modal fade none-border" id="profile_detail">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                               <h4 class="modal-title"><strong>Profile</strong></h4>
                               <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SavePatients()">Save</button>
                                </div>


                               
                            </div>
                            <div class="row cal_m" Style="margin:2rem">
                                <div class="modal_contents">

                                    <div role="form">
                                        <div class="row">
                                            <div class="col-sm-4 col-lg-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Title <span class="man_fields1">*</span></label>
                                                    <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlTtl">
                                                        <option value="">Title</option>
                                                        <option value="Mr">Mr</option>
                                                        <option value="Mrs">Mrs</option>
                                                        <option value="Ms">Ms</option>
                                                    </select></span>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 col-lg-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">First Name <span class="man_fields1">*</span></label>
                                                    <input type="text" class="form-control" id="txtfname" placeholder="First Name " maxlength="50"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 col-lg-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Last Name <span class="man_fields1">*</span></label>
                                                    <input type="text" class="form-control" id="txtlanme" placeholder="Last Name " maxlength="50"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-4 col-lg-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Gender <span class="man_fields1">*</span></label>
                                                    <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlGndr">
                                                        <option value="">Gender</option>
                                                        <option value="M">Male</option>
                                                        <option value="F">Female</option>
                                                    </select></span>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 col-lg-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">ForeName1</label>
                                                    <input type="text" class="form-control" id="txtfore1" placeholder="ForeName1" maxlength="50"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 col-lg-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">ForeName2</label>
                                                    <input type="text" class="form-control" id="txtfore2" placeholder="ForeName2 " maxlength="50"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Nickname</label>
                                                    <input type="text" class="form-control" id="txtnick" placeholder="Nickname" maxlength="50"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Marital Status</label>
                                                    <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlMerital">
                                                        <option value="S">Single</option>
                                                        <option value="M">Married</option>
                                                        <option value="W">Widowed</option>
                                                        <option value="P">Separated</option>
                                                        <option value="D">Divorced</option>
                                                    </select></span>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Last Occupation</label>
                                                    <input type="text" class="form-control" id="txtoccu" placeholder="Last Occupation" maxlength="50"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Address 1</label>
                                                    <input type="text" class="form-control" placeholder="Address 1" maxlength="150" id="txtaddr1"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Address 2</label>
                                                    <input type="text" class="form-control" placeholder="Address 2" maxlength="150" id="txtaddr2"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Address 3</label>
                                                    <input type="text" class="form-control" placeholder="Address 3" maxlength="150" id="txtaddr3"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Nationality</label>
                                                    <span class="select-wrapper"><select name="ctl00$cphContent$ddlCntry" id="ddlCntry" class="custom-select">
	<option value="0">Select Country</option>
	<option value="1">Ireland</option>

</select></span>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Religion</label>
                                                    <input type="text" class="form-control" id="txtrelgn" placeholder="Religion" maxlength="50"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Ethinicity</label>
                                                    <input type="text" class="form-control" id="txtethn" placeholder="Ethinicity"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Date of Birth <span class="man_fields1">*</span></label>
                                                    <input type="text" class="form-control text-wrapper select-calander" id="txtdob" placeholder="Date of Birth " onchange="CalculateAge()"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-2 ">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Age</label>
                                                    <input type="text" class="form-control" id="txtage" placeholder="Age"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Resident Home ID</label>
                                                    <input type="text" class="form-control" id="txthmid" placeholder="Home ID "/>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Resident ID </label>
                                                    <input type="text" class="form-control" id="txtres" placeholder="Resident ID " readonly="true"/>
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






















            

            {/* <!-- END MODAL -->
            <!-- BEGIN MODAL --> */}
            <div class="new_modals">
                <div class="modal fade none-border" id="personal_appearance">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                 <h4 class="modal-title"><strong>Personal Appearance</strong></h4>
                                <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SaveAppearence()">Save</button>
                                </div>
                                
                            </div>
                            <div class="row cal_m"  Style="margin:1rem">
                                <div class="modal_contents">
                                    <div class="section_box1_content_p2">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Weight</label>
                                            <input type="number" class="form-control" id="txtweight" placeholder="Weight "/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Height</label>
                                            <input type="number" class="form-control" id="txtheight" placeholder="Height in cm"/>
                                        </div>
                                        <div class="form-group ">
                                            <label for="exampleInputEmail1">Eye Color</label>
                                            <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlEye">
                                                <option value="">Eye Color</option>
                                                <option value="A">Amber</option>
                                                <option value="B">Blue</option>
                                                <option value="W">Brown</option>
                                                <option value="G">Gray</option>
                                                <option value="N">Green</option>
                                                <option value="H">Hazel</option>
                                                <option value="R">Red &amp; Violet</option>
                                            </select></span>
                                        </div>
                                        <div class="form-group ">
                                            <label for="exampleInputEmail1">Build</label>
                                            <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlBuild">
                                                <option value="">Select Build</option>
                                                <option value="1">Ectomorph</option>
                                                <option value="2">Mesomorph</option>
                                                <option value="3">Endomorph</option>
                                            </select></span>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Hair Color</label>
                                            <input type="text" class="form-control" id="txthair" placeholder="Hair Color" maxlength="50"/>
                                        </div>
                                        <div class="form-group ">
                                            <label for="exampleInputEmail1">Glasswear</label>
                                            <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlGlass">
                                                <option value="">Glasswear</option>
                                                <option value="Y">Yes</option>
                                                <option value="N">No</option>
                                            </select></span>
                                        </div>
                                        <div class="form-group ">
                                            <label for="exampleInputEmail1">Hearing aid</label>
                                            <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlaid">
                                                <option value="">Hearing aid</option>
                                                <option value="Y">Yes</option>
                                                <option value="N">No</option>
                                            </select></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
{/* 
            <!-- END MODAL -->
            <!-- BEGIN MODAL --> */}
            <div class="new_modals">
                <div class="modal fade none-border" id="profile_image">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                   <h4 class="modal-title"><strong>Photo</strong></h4>
                                <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SaveImage()">Save</button>
                                </div>
                             
                            </div>
                            <div class="row cal_m"  Style="margin:1rem">
                                <div class="modal_contents">
                                    <div class="form-group">
                                        <div Style="text-align:center">
                                            <img src="./assets/img/patient-1.jpg" class="center-block img-circle img-thumbnail" id="imgprof" Style="width: 138px; height: 138px; border: 3px solid #1f4970 !important;
    border-top-left-radius: 35px;
    border-bottom-right-radius: 35px;"/>
                                        </div>
                                       
                                        <div class="input-group" Style="margin-top:30px;">
      <input id="uploadFile" placeholder="Upload Photo" disabled="disabled" class="form-control"/>
      <span class="input-group-addon"> <label class="btn btn-primary" Style="padding: 0.5rem 1rem;
    margin-top: 0px;border-radius: 0px;"><input id="uploadBtn" type="file" Style="display:none;"/> Upload</label> </span>   
    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- END MODAL -->
            <!-- BEGIN MODAL --> */}
            <div class="new_modals">
                <div class="modal fade none-border" id="next_of_kin_details">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                 <h4 class="modal-title"><strong>Next of Kin Details</strong></h4>
                                <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SaveNextKin()">Save</button>
                                </div>

                               
                            </div>
                            <div class="row cal_m"  Style="margin:1rem">
                                <div class="modal_contents">

                                    <div role="form">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Name</label>
                                            <input type="text" class="form-control" id="txtkin" placeholder="Name" maxlength="50"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Address 1</label>
                                            <input type="text" class="form-control" id="txtkinaddr1" placeholder="Address 1" maxlength="150"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Address 2</label>
                                            <input type="text" class="form-control" id="txtkinaddr2" placeholder="Address 2" maxlength="150"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Address 3</label>
                                            <input type="text" class="form-control" id="txtkinaddr3" placeholder="Address 3" maxlength="150"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Telephone</label>
                                            <input type="text" class="form-control" id="txtkinph" placeholder="Telephone"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Relationship</label>
                                            <input type="text" class="form-control" id="txtkinrel" placeholder="Relationship"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email</label>
                                            <input type="email" class="form-control" id="txtkinmail" placeholder="Email"/>
                                        </div>
                                        <div class="clearfix"></div>
                                         <div class="form-group">
                                            <label for="exampleInputEmail1">Best time to contact</label>
                                            <div class="clearfix"></div>
                                                <div class="row">
                                                    <div class="col-xs-6 ">
                                                        <input type="checkbox" id="chksig2y" name="sig2night" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                                    </div>
                                                    <div class="col-xs-6 ">
                                                        <input id="chksig2n" name="sig2night" value="N" type="checkbox"/><label for="checkbox1"><span></span>  No</label>
                                                    </div>
                                                </div>

                                        </div>
                                        <div class="form-group">
                                            <label for="checkbox1"><span><input id="chksig2emgerncy" name="sig2emergency" value="Y" type="checkbox"/></span> Anytime</label>
                                        </div>
                                        <div class="form-group">
                                          <label for="checkbox2"><span>  <input id="chksig2emgerncy1" name="sig2emergency" value="Y" type="checkbox"/></span> Weekdays Mornings afternoons evenings</label>
                                        </div>
                                        <div class="form-group">
                                          <label for="checkbox2"><span>  <input id="chksig2emgerncy2" name="sig2emergency" value="Y" type="checkbox"/></span> Weekends Mornings afternoons evenings</label>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- END MODAL -->
            <!-- BEGIN MODAL --> */}
            <div class="new_modals">
                <div class="modal fade none-border" id="significant_other_1">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title"><strong>Significant Other 1</strong></h4>
                                <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SaveSignificant1()">Save</button>
                                </div>

                               
                            </div>
                            <div class="row cal_m"  Style="margin:1rem">
                                <div class="modal_contents">

                                    <div role="form">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Name</label>
                                            <input type="text" class="form-control" id="txtsig1" placeholder="Name" maxlength="50"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Address 1</label>
                                            <input type="text" class="form-control" id="txtsig1addr1" placeholder="Address 1" maxlength="150"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Address 2</label>
                                            <input type="text" class="form-control" id="txtsig1addr2" placeholder="Address 2" maxlength="150"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Address 3</label>
                                            <input type="text" class="form-control" id="txtsig1addr3" placeholder="Address 3" maxlength="150"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Telephone</label>
                                            <input type="text" class="form-control" id="txtsig1ph" placeholder="Telephone"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Relationship</label>
                                            <input type="text" class="form-control" id="txtsig1rel" placeholder="Relationship"/>
                                        </div>
                                         <div class="form-group">
                                        <label for="exampleInputEmail1">Email</label>
                                        <input type="email" class="form-control" id="txtsig1mail" placeholder="Email"/>
                                    </div>
                                         <div class="form-group">
                                            <label for="exampleInputEmail1">Best time to contact</label>
                                            <div class="clearfix"></div>
                                                <div class="row">
                                                    <div class="col-xs-6 ">
                                                        <input type="checkbox" id="chksig2y" name="sig2night" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                                    </div>
                                                 <div class="col-xs-6 ">
                                                        <input id="chksig2n" name="sig2night" value="N" type="checkbox"/><label for="checkbox1"><span></span>  No</label>
                                                    </div>
                                                </div>

                                        </div>
                                        <div class="form-group">
                                            <label for="checkbox1"><span><input id="chksig2emgerncy" name="sig2emergency" value="Y" type="checkbox"/></span> Anytime</label>
                                        </div>
                                        <div class="form-group">
                                          <label for="checkbox2"><span>  <input id="chksig2emgerncy1" name="sig2emergency" value="Y" type="checkbox"/></span> Weekdays Mornings afternoons evenings</label>
                                        </div>
                                        <div class="form-group">
                                          <label for="checkbox2"><span>  <input id="chksig2emgerncy2" name="sig2emergency" value="Y" type="checkbox"/></span> Weekends Mornings afternoons evenings</label>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- END MODAL -->
            <!-- BEGIN MODAL --> */}
            <div class="new_modals">
                <div class="modal fade none-border" id="significant_other_2">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                 <h4 class="modal-title"><strong>Significant Other 2</strong></h4>
                                <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SaveSignificant2()">Save</button>
                                </div>

                               
                            </div>
                            <div class="row cal_m" Style="margin:2rem">
                                <div class="modal_contents">

                                    <div role="form">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Name</label>
                                            <input type="text" class="form-control" id="txtsig2" placeholder="Name" maxlength="50"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Address 1</label>
                                            <input type="text" class="form-control" id="txtsig2addr1" placeholder="Address 1" maxlength="150"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Address 2</label>
                                            <input type="text" class="form-control" id="txtsig2addr2" placeholder="Address 2" maxlength="150"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Address 3</label>
                                            <input type="text" class="form-control" id="txtsig2addr3" placeholder="Address 3" maxlength="150"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Telephone</label>
                                            <input type="text" class="form-control" id="txtsig2ph" placeholder="Telephone"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Relationship</label>
                                            <input type="text" class="form-control" id="txtsig2rel" placeholder="Relationship"/>
                                        </div>
                                          <div class="form-group">
                                        <label for="exampleInputEmail1">Email</label>
                                        <input type="email" class="form-control" id="txtsig2mail" placeholder="Email"/>
                                    </div>
                                     <div class="form-group">
                                            <label for="exampleInputEmail1">Best time to contact</label>
                                            <div class="clearfix"></div>
                                                <div class="row">
                                                    <div class="col-xs-6 ">
                                                        <input type="checkbox" id="chksig2y" name="sig2night" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                                    </div>
                                                    <div class="col-xs-6 ">
                                                        <input id="chksig2n" name="sig2night" value="N" type="checkbox"/><label for="checkbox1"><span></span>  No</label>
                                                    </div>
                                                </div>

                                        </div>
                                        <div class="form-group">
                                            <label for="checkbox1"><span><input id="chksig2emgerncy" name="sig2emergency" value="Y" type="checkbox"/></span> Anytime</label>
                                        </div>
                                        <div class="form-group">
                                          <label for="checkbox2"><span>  <input id="chksig2emgerncy1" name="sig2emergency" value="Y" type="checkbox"/></span> Weekdays Mornings afternoons evenings</label>
                                        </div>
                                        <div class="form-group">
                                          <label for="checkbox2"><span>  <input id="chksig2emgerncy2" name="sig2emergency" value="Y" type="checkbox"/></span> Weekends Mornings afternoons evenings</label>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- END MODAL -->
            <!-- BEGIN MODAL --> */}
            <div class="new_modals">
                <div class="modal fade none-border" id="medical_contacts">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                 <h4 class="modal-title"><strong>Medical Contacts</strong></h4>
                                <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SaveMedicalContact()">Save</button>
                                </div>

                               
                            </div>
                            <div class="row cal_m" Style="margin:2rem">
                                <div class="modal_contents">

                                    <div role="form">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">GP Name </label>
                                                    <input type="text" class="form-control" id="txtgp" placeholder="GP Name" maxlength="50"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Contact Number </label>
                                                    <input type="text" class="form-control" id="txtgpno" placeholder="Contact Number" maxlength="20"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Clinic Name </label>
                                                    <input type="text" class="form-control" id="txtgpclinic" placeholder="Clinic Name" maxlength="50"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Address 1 </label>
                                                    <input type="text" class="form-control" id="txtgpaddr1" placeholder="Address 1" maxlength="150"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Address 2 </label>
                                                    <input type="text" class="form-control" id="txtgpaddr2" placeholder="Address 2" maxlength="150"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">County </label>
                                                    <input type="text" class="form-control" id="txtgpcounty" placeholder="County" maxlength="150"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Out of hours </label>
                                                    <input type="number" class="form-control" id="txtgphrs" placeholder="Out of hours"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Email </label>
                                                    <input type="email" class="form-control" id="txtgpmail" placeholder="Email" maxlength="50"/>
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

            {/* <!-- END MODAL -->
            <!-- BEGIN MODAL --> */}
            <div class="new_modals">
                <div class="modal fade none-border" id="public_health_nurse">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">

                                <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SavePublichealthNurse()">Save</button>
                                </div>

                                <h4 class="modal-title"><strong>Public Health Nurse</strong></h4>
                            </div>
                            <div class="row cal_m" Style="margin:2rem">
                                <div class="modal_contents">

                                    <div role="form">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Public Health Nurse </label>
                                                    <input type="text" class="form-control" id="txtphn" placeholder="Public Health Nurse" maxlength="50"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Contact Number </label>
                                                    <input type="text" class="form-control" id="txtphnph" placeholder="Contact Number" maxlength="20"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Health Center </label>
                                                    <input type="text" class="form-control" id="txtphncenter" placeholder="Health Center" maxlength="50"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Address 1 </label>
                                                    <input type="text" class="form-control" id="txtphnaddr1" placeholder="Address 1" maxlength="150"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Address 2 </label>
                                                    <input type="text" class="form-control" id="txtphnaddr2" placeholder="Address 2 " maxlength="150"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Address 3 </label>
                                                    <input type="text" class="form-control" id="txtphnaddr3" placeholder="Address 3  " maxlength="150"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Out of hours </label>
                                                    <input type="number" class="form-control" id="txtphnhrs" placeholder="Out of hours"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Email </label>
                                                    <input type="email" class="form-control" id="txtphnmail" placeholder="Email" maxlength="50"/>
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

            {/* <!-- END MODAL -->
            <!-- BEGIN MODAL --> */}
            <div class="new_modals">
                <div class="modal fade none-border" id="payment">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">

                                <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SavePayment()">Save</button>
                                </div>

                                <h4 class="modal-title"><strong>Payment</strong></h4>
                            </div>
                            <div class="row cal_m">
                                <div class="modal_contents">

                                    <div role="form">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Type </label>
                                                    <div class="clearfix"></div>
                                                    <div class="row">
                                                        <div class="col-xs-6">
                                                            <input id="chkprvt" name="paytype" value="R" type="checkbox"/><label for="checkbox1"><span></span> Private</label>

                                                        </div>
                                                        <div class="col-xs-6">
                                                            <input type="checkbox" id="chkpub" name="paytype" value="P"/><label for="checkbox1"><span></span> Public</label>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Ward of Court </label>
                                                    <div class="clearfix"></div>
                                                    <div class="row">
                                                        <div class="col-xs-6">
                                                            <input type="checkbox" id="chkwcy" value="Y" name="wardc"/><label for="checkbox1"><span></span> Yes</label>

                                                        </div>
                                                        <div class="col-xs-6">
                                                            <input type="checkbox" id="chkwcn" value="N" name="wardc"/><label for="checkbox1"><span></span> No</label>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Medical Card Number </label>
                                                    <input type="text" class="form-control" id="txtmedcard" placeholder="Medical Card Number " maxlength="50"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Expiry Date</label>
                                                    <input name="" type="text" class="text-wrapper select-calander" placeholder="Expiry Date" id="txtmedexp"/>
                                                    <div class="clalaner_icon">
                                                        <img src="../images/calander.png"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Health Insurance Provider </label>
                                                    <input type="text" class="form-control" id="txthip" placeholder="Health Insurance  Provider" maxlength="50"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Valid Until</label>
                                                    <input name="" type="text" class="text-wrapper select-calander" placeholder="Valid Until" id="txthipexp"/>
                                                    <div class="clalaner_icon">
                                                        <img src="../images/calander.png"/>
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

            {/* <!-- END MODAL -->
            <!-- BEGIN MODAL --> */}
            <div class="new_modals">
                <div class="modal fade none-border" id="admission_pp">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">

                                <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SaveAdmission()">Save</button>
                                </div>

                                <h4 class="modal-title"><strong>Admission</strong></h4>
                            </div>
                            <div class="row cal_m">
                                <div class="modal_contents">

                                    <div role="form">
                                        <div class="row">
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Date of Admission  </label>
                                                    <input name="" type="text" class="text-wrapper select-calander" placeholder="Date of Admission" id="txtadmn"/>
                                                    <div class="clalaner_icon">
                                                        <img src="../images/calander.png"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Time <span class="man_fields1">*</span></label>
                                                    <input type="text" class="form-control" id="txttime" placeholder="Time "/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Floor <span class="man_fields1">*</span> </label>
                                                    <span class="select-wrapper"><select name="ctl00$cphContent$ddlFloor" id="ddlFloor" class="custom-select" onchange="BindRoom()">
	<option value="0">Select Floor</option>
	<option value="3">Second Floor</option>
	<option value="4">Third Floor</option>
	<option value="11">First Floor</option>

</select><span class="holder">First Floor</span></span>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Allocated Room <span class="man_fields1">*</span> </label>
                                                    <span class="select-wrapper"><select id="dllRom" class="custom-select" onchange="BindBeds();"><option value="0">Select Room</option><option value="9">202</option><option value="19">100</option><option value="72">FF3</option></select><span class="holder">202</span></span>
                                                    <input type="hidden" id="hdnroom" value="9"/>
                                                </div>
                                            </div>
                                            <div class="col-sm6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Bed <span class="man_fields1">*</span> </label>
                                                    <span class="select-wrapper"><select id="dllbeds" class="custom-select"><option value="0">Select Bed</option><option value="44">BedNo1</option><option value="46">BedNo3</option><option value="47">BedNo4</option><option value="48">BedNo5</option></select><span class="holder">BedNo1</span></span>
                                                    <input type="hidden" id="hdnbed" value="44"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Rate <span class="man_fields1">*</span> </label>
                                                    <span class="select-wrapper"><select name="ctl00$cphContent$ddlRate" id="ddlRate" class="custom-select">
	<option value="2">MEDIUM</option>
	<option value="3">HIGH</option>
	<option value="4">NORMAL</option>
	<option value="5">NORMAL1</option>
	<option value="6">Rate class</option>

</select><span class="holder">MEDIUM</span></span>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Nurse In Charge <span class="man_fields1">*</span> </label>
                                                    <span class="select-wrapper"><select name="ctl00$cphContent$ddlNurse" id="ddlNurse" class="custom-select">
	<option value="5">Colin O' Gallagher</option>
	<option value="75">Mark O' Gallagher</option>

</select><span class="holder">Colin O' Gallagher</span></span>
                                                    
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Care Worker <span class="man_fields1">*</span> </label>
                                                    <span class="select-wrapper"><select name="ctl00$cphContent$ddlcare" id="ddlcare" class="custom-select">
	<option value="37">Eddie O' Reilly</option>

</select><span class="holder">Eddie O' Reilly</span></span>
                                                    
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Risk Level </label>
                                                    <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlrisk">
                                                        <option value="0">Select</option>
                                                        <option value="3">High</option>
                                                        <option value="2">Medium</option>
                                                        <option value="1">Low</option>
                                                    </select><span class="holder">High</span></span>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Dependency Level </label>
                                                    <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddldepend">
                                                        <option value="0">Select</option>
                                                        <option value="3">High</option>
                                                        <option value="2">Medium</option>
                                                        <option value="1">Low</option>
                                                    </select><span class="holder">Medium</span></span>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Admission Type </label>
                                                    <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddladmtype">
                                                        <option value="">Select</option>
                                                        <option value="N">Normal</option>
                                                    </select><span class="holder">Normal</span></span>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Admission Source </label>
                                                    <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlsource">
                                                        <option value="">Select</option>
                                                        <option value="A">Acute Hospital</option>
                                                        <option value="C">Community</option>
                                                        <option value="H">Community Hospital</option>
                                                        <option value="G">GP</option>
                                                        <option value="P">Hospice</option>
                                                        <option value="N">Nursing Home</option>
                                                        <option value="O">Other</option>
                                                    </select><span class="holder">Community</span></span>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Enter Source Name </label>
                                                    <input type="text" class="form-control" id="txtsource" placeholder="Enter Source Name"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Re-Admission </label>
                                                    <div class="clearfix"></div>
                                                    <div class="row">
                                                        <div class="col-xs-6">
                                                            <input type="checkbox" id="chkreadmy" name="admisin" value="Y"/><label for="checkbox1"><span></span> Yes</label>

                                                        </div>
                                                        <div class="col-xs-6">
                                                            <input type="checkbox" id="chkreadmn" name="admisin" value="N"/><label for="checkbox1"><span></span> No</label>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">D.N.R.</label>
                                                    <div class="clearfix"></div>
                                                    <div class="row">
                                                        <div class="col-xs-6">
                                                            <input type="checkbox" id="chkdnry" name="dnr" value="Y"/><label for="checkbox1"><span></span> Do not resuscitate order in place</label>

                                                        </div>
                                                        <div class="col-xs-6">
                                                            <input type="checkbox" id="chkdnrn" name="dnr" value="N"/><label for="checkbox1"><span></span> No order in place</label>

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

            {/* <!-- END MODAL -->
            <!-- BEGIN MODAL --> */}
            <div class="new_modals">
                <div class="modal fade none-border" id="documents_received">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">

                                <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SaveDocumnets()">Save</button>
                                </div>

                                <h4 class="modal-title"><strong>Documents Received</strong></h4>
                            </div>
                            <div class="row cal_m">
                                <div class="modal_contents">

                                    <div role="form">
                                        <div class="row">
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Consultant Letter </label>
                                                    <div class="clearfix"></div>
                                                    <div class="row">
                                                        <div class="col-xs-6">

                                                            <div class="row">
                                                                <div class="col-sm-12">
                                                                    <input type="checkbox" id="chkcnslty" name="consultant" value="Y"/><label><span></span> Yes</label>
                                                                </div>
                                                                <div class="col-sm-12">
                                                                    <input type="checkbox" id="chkcnsltn" name="consultant" value="N"/><label><span></span> No</label>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div class="col-xs-6">
                                                            <img alt="work-thumbnail" class="thumb-img img-responsive document_img" src="../images/1.jpg" onclick="BrowseImg('cs')" id="imgcs"/>
                                                            <input id="uploadcs" type="file" onchange="readURLS(this,'cs');" Style="display: none;"/>
                                                            <input type="hidden" id="hdnimgcs" value=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">GP Letter </label>
                                                    <div class="clearfix"></div>
                                                    <div class="row">
                                                        <div class="col-xs-6">
                                                            <div class="row">
                                                                <div class="col-sm-12">
                                                                    <input type="checkbox" id="chkgpy" name="gpletter" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                                                </div>
                                                                <div class="col-sm-12">
                                                                    <input type="checkbox" id="chkgpn" name="gpletter" value="N"/><label for="checkbox1"><span></span> No</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-6">
                                                            <img alt="work-thumbnail" class="thumb-img img-responsive document_img" src="../images/1.jpg" onclick="BrowseImg('gp')" id="imggp"/>
                                                            <input id="uploadgp" type="file" onchange="readURLS(this,'gp');" Style="display: none;"/>
                                                            <input type="hidden" id="hdnimggp" value=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">PHN Letter</label>
                                                    <div class="clearfix"></div>
                                                    <div class="row">
                                                        <div class="col-xs-6">
                                                            <div class="row">
                                                                <div class="col-sm-12">
                                                                    <input type="checkbox" id="chkphny" name="phnletter" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                                                </div>
                                                                <div class="col-sm-12">
                                                                    <input type="checkbox" id="chkphnn" name="phnletter" value="N"/><label for="checkbox1"><span></span> No</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-6">
                                                            <img alt="work-thumbnail" class="thumb-img img-responsive document_img" src="../images/1.jpg" onclick="BrowseImg('phn')" id="imgphn"/>
                                                            <input id="uploadphn" type="file" onchange="readURLS(this,'phn');" Style="display: none;"/>
                                                            <input type="hidden" id="hdnimgphn" value=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Transfer letter </label>
                                                    <div class="clearfix"></div>
                                                    <div class="row">
                                                        <div class="col-xs-6">
                                                            <div class="row">
                                                                <div class="col-sm-12">
                                                                    <input type="checkbox" id="chktrnsy" name="trnsltr" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                                                </div>
                                                                <div class="col-sm-12">
                                                                    <input type="checkbox" id="chktrnsn" name="trnsltr" value="N"/><label for="checkbox1"><span></span> No</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-6">
                                                            <img alt="work-thumbnail" class="thumb-img img-responsive document_img" src="../images/1.jpg" onclick="BrowseImg('trn')" id="imgtrn"/>
                                                            <input id="uploadtrn" type="file" onchange="readURLS(this,'trn');" Style="display: none;"/>
                                                            <input type="hidden" id="hdnimgtrn" value=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Nurse Letter </label>
                                                    <div class="clearfix"></div>
                                                    <div class="row">
                                                        <div class="col-xs-6">
                                                            <div class="row">
                                                                <div class="col-sm-12">
                                                                    <input type="checkbox" id="chknursy" name="nurse" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                                                </div>
                                                                <div class="col-sm-12">
                                                                    <input type="checkbox" id="chknursn" name="nurse" value="N"/><label for="checkbox1"><span></span> No</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-6">
                                                            <img alt="work-thumbnail" class="thumb-img img-responsive document_img" src="../images/1.jpg" onclick="BrowseImg('nrs')" id="imgnrs"/>
                                                            <input id="uploadnrs" type="file" onchange="readURLS(this,'nrs');" Style="display: none;"/>
                                                            <input type="hidden" id="hdnimgnrs" value=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Others </label>
                                                    <div class="clearfix"></div>
                                                    <div class="row">
                                                        <div class="col-xs-6">
                                                            <div class="row">
                                                                <div class="col-sm-12">
                                                                    <input type="checkbox" id="chkothry" name="others" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                                                </div>
                                                                <div class="col-sm-12">
                                                                    <input type="checkbox" id="chkothrn" name="others" value="N"/><label for="checkbox1"><span></span> No</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-6">
                                                            <img alt="work-thumbnail" class="thumb-img img-responsive document_img" src="../images/1.jpg" onclick="BrowseImg('oth')" id="imgoth"/>
                                                            <input id="uploadoth" type="file" onchange="readURLS(this,'oth');" Style="display: none;"/>
                                                            <input type="hidden" id="hdnimgoth" value=""/>
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

            {/* <!-- END MODAL -->
            <!-- BEGIN MODAL --> */}
            <div class="new_modals">
                <div class="modal fade none-border" id="communication">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">

                                <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SaveCommunication()">Save</button>
                                </div>

                                <h4 class="modal-title"><strong>Communication</strong></h4>
                            </div>
                            <div class="row cal_m">
                                <div class="modal_contents">

                                    <div role="form">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <label for="exampleInputEmail1">GP Informed </label>
                                                <div class="row">
                                                    <div class="col-xs-6">
                                                        <input type="checkbox" id="chkgpinfoy" name="gpinform" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                                    </div>
                                                    <div class="col-xs-6">
                                                        <input type="checkbox" id="chkgpinfon" name="gpinform" value="N"/><label for="checkbox1"><span></span> No</label>
                                                    </div>
                                                      <div class="col-xs-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Date  </label>
                                                    <input name="" type="text" class="text-wrapper select-calander" placeholder="Date" id="txtgpinform"/>
                                                    <div class="clalaner_icon">
                                                        <img src="../images/calander.png"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Time </label>
                                                    <input type="text" class="form-control" id="txtgpinformtime" placeholder="Time "/>
                                                </div>
                                            </div>
                                                   
                                                  
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <label for="exampleInputEmail1">PHN Informed </label>
                                                <div class="row">
                                                    <div class="col-xs-6">
                                                        <input type="checkbox" id="chkphninfoy" name="phninform" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                                    </div>
                                                    <div class="col-xs-6">
                                                        <input type="checkbox" id="chkphninfon" name="phninform" value="N"/><label for="checkbox1"><span></span> No</label>
                                                    </div>
                                                      <div class="col-xs-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Date  </label>
                                                    <input name="" type="text" class="text-wrapper select-calander" placeholder="Date" id="txtphninfo"/>
                                                    <div class="clalaner_icon">
                                                        <img src="../images/calander.png"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Time </label>
                                                    <input type="text" class="form-control" id="txtphninfotime" placeholder="Time "/>
                                                </div>
                                            </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <label for="exampleInputEmail1">Consultant Informed </label>
                                                <div class="row">
                                                    <div class="col-xs-6">
                                                        <input type="checkbox" id="chkcnsltinfoy" name="cnsltinform" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                                    </div>
                                                    <div class="col-xs-6">
                                                        <input type="checkbox" id="chkcnsltinfon" name="cnsltinform" value="N"/><label for="checkbox1"><span></span> No</label>
                                                    </div>
                                                       <div class="col-xs-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Date  </label>
                                                    <input name="" type="text" class="text-wrapper select-calander" placeholder="Date" id="txtcnsltinfo"/>
                                                    <div class="clalaner_icon">
                                                        <img src="../images/calander.png"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Time </label>
                                                    <input type="text" class="form-control" id="txtcnsltinfotime" placeholder="Time "/>
                                                </div>
                                            </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <label for="exampleInputEmail1">Family Informed </label>
                                                <div class="row">
                                                    <div class="col-xs-6">
                                                        <input type="checkbox" id="chkfmlyinfoy" name="famlyinform" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                                    </div>
                                                    <div class="col-xs-6">
                                                        <input type="checkbox" id="chkfmlyinfon" name="famlyinform" value="N"/><label for="checkbox1"><span></span> No</label>
                                                    </div>
                                                    <div class="col-xs-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Date  </label>
                                                    <input name="" type="text" class="text-wrapper select-calander" placeholder="Date" id="txtfmly"/>
                                                    <div class="clalaner_icon">
                                                        <img src="../images/calander.png"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Time </label>
                                                    <input type="text" class="form-control" id="txtfmlytime" placeholder="Time "/>
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

            {/* <!-- END MODAL -->
            <!-- BEGIN MODAL --> */}
            <div class="new_modals">
                <div class="modal fade none-border" id="current_medications_vaccinations">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">

                                <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SaveMediVaccine()">Save</button>
                                </div>

                                <h4 class="modal-title"><strong>Current Medications &amp; Vaccinations</strong></h4>
                            </div>
                            <div class="row cal_m">
                                <div class="modal_contents">

                                    <div role="form">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <label for="exampleInputEmail1">Current Medication </label>
                                                <div class="row">
                                                    <div class="col-xs-6">
                                                        <input type="checkbox" id="chkcrntmedy" name="crntmed" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                                    </div>
                                                    <div class="col-xs-6">
                                                        <input type="checkbox" id="chkcrntmedn" name="crntmed" value="N"/><label for="checkbox1"><span></span> No</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <label for="exampleInputEmail1">Vaccinations </label>
                                                <div class="row">
                                                    <div class="col-xs-6">
                                                        <input type="checkbox" id="chkvaccy" name="vaccination" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                                    </div>
                                                    <div class="col-xs-6">
                                                        <input type="checkbox" id="chkvaccn" name="vaccination" value="N"/><label for="checkbox1"><span></span> No</label>
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

            {/* <!-- END MODAL --> */}
                    </div>
    </div>
    <input type="hidden" id="hdnbedno" value="BedNo1"/>
    <input type="hidden" id="hdndisch" value="0"/>
    <input type="hidden" name="ctl00$cphContent$hdnbkid" id="hdnbkid" value="0"/>
    <div Style="height: 100%; width: 100%; position: fixed; top: 0; z-index: 10000; text-align: center; background-color: rgba(0, 0, 0, 0.5); padding-top: 250px; display: none;" id="divsve">
        <span Style="color: #ffffff; font-weight: bold; padding-right: 100px;">Data Saving....</span>
    </div>

                    </div>
            
          
                    </div>

                </div>
            </div>
        </main>
    )
}

export default UserDetails
