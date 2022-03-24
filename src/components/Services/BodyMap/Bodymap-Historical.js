import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../../Navbar';
import Navbarone from '../../User/Navbarone';
import NavbarTwo from '../../User/NavbarTwo';


const BodymapHistorical = () => {
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
                                            <li class="active"><Link to="/bodymap-historical" class="active">Historical</Link></li>
                                            <li><Link to="/skin-infection">Skin Infection</Link></li>
                                            
                                            
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
                        
                          <div class="table-responsive">
                                <div id="data-table-2_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="data-table-2_length"><label>Show <select name="data-table-2_length" aria-controls="data-table-2" class="custom-select custom-select-sm form-control form-control-sm"><option value="12">12</option><option value="25">25</option><option value="30">30</option><option value="-1">Todos</option></select> </label></div></div><div class="col-sm-12 col-md-6"><div id="data-table-2_filter" class="dataTables_filter"><label><input type="search" class="form-control form-control-sm" placeholder="Search Data..." aria-controls="data-table-2"/></label></div></div></div><div class="row"><div class="col-sm-12"><table class="table table-striped thead-primary w-100 dataTable no-footer" id="data-table-2" role="grid" aria-describedby="data-table-2_info">
                                 <thead>
                                <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Date &amp;amp; Time: activate to sort column descending" Style="width: 80.6719px;">Date &amp; Time</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Type of wound: activate to sort column ascending" Style="width: 97.7344px;">Type of wound</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Created by: activate to sort column ascending" Style="width: 72.3594px;">Created by</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Pain: activate to sort column ascending" Style="width: 93.0469px;">Pain</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Recorded by: activate to sort column ascending" Style="width: 84.8125px;">Recorded by</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Color: activate to sort column ascending" Style="width: 36.5625px;">Color</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Next review date: activate to sort column ascending" Style="width: 110.5px;">Next review date</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="View &amp;amp; Edit: activate to sort column ascending" Style="width: 75.9844px;">View &amp; Edit</th></tr>
                          </thead>
                                   <tbody>
                                    
                                   
                                 
                                
                               <tr role="row" class="odd">
                                  
                                    <td class="sorting_1"></td>
                                    <td></td>
                                    <td></td>
                                    <td>No Data Available</td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                     <td></td>
                                      
                                  </tr></tbody>
                                </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="data-table-2_info" role="status" aria-live="polite">Showing 1 to 1 of 1 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="data-table-2_paginate"><ul class="pagination has-gap"><li class="paginate_button page-item previous disabled" id="data-table-2_previous"><a href="#" aria-controls="data-table-2" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="data-table-2" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item next disabled" id="data-table-2_next"><a href="#" aria-controls="data-table-2" data-dt-idx="2" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
                            </div>
                        </div>
                        </div>
          </div>

      </div>
    </div>

    

  </main>
)
}

export default BodymapHistorical