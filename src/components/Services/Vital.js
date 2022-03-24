import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar';
import Navbarone from '../User/Navbarone';

const Vital = () => {
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
            <div class="col-md-12">
               <nav aria-label="breadcrumb">
            <ol class="breadcrumb pl-0">
              <li class="breadcrumb-item">
                <a href="#"><i class="material-icons">home</i> Home</a>
              </li>
              <li class="breadcrumb-item active">Vitals <a class="btn btn-primary" href="javascript:void(0)" Style="float:right; margin-top:0px;" data-toggle="modal" data-target="#createvital">Create New</a></li>
            </ol>
          </nav>
          <div class="ms-panel">
                      
                        <div class="ms-panel-body">
                            <div class="table-responsive">
                                <div id="data-table-3_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer"><div class="row"><div class="col-sm-12 col-md-6"></div><div class="col-sm-12 col-md-6"><div id="data-table-3_filter" class="dataTables_filter"><label><input type="search" class="form-control form-control-sm" placeholder="Search Data..." aria-controls="data-table-3"/></label></div></div></div><div class="row"><div class="col-sm-12"><table class="table table-striped thead-primary w-100 dataTable no-footer" id="data-table-3" role="grid" aria-describedby="data-table-3_info">
                                 <thead>
                 <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="data-table-3" rowspan="1" colspan="1" aria-sort="ascending" aria-label="DATE: activate to sort column descending" Style="width: 56.4688px;">DATE</th><th class="sorting" tabindex="0" aria-controls="data-table-3" rowspan="1" colspan="1" aria-label="TIME: activate to sort column ascending" Style="width: 46.3281px;">TIME</th><th class="sorting" tabindex="0" aria-controls="data-table-3" rowspan="1" colspan="1" aria-label="WEIGHT: activate to sort column ascending" Style="width: 56px;">WEIGHT</th><th class="sorting" tabindex="0" aria-controls="data-table-3" rowspan="1" colspan="1" aria-label="HEIGHT: activate to sort column ascending" Style="width: 52.8906px;">HEIGHT</th><th class="sorting" tabindex="0" aria-controls="data-table-3" rowspan="1" colspan="1" aria-label="BMI: activate to sort column ascending" Style="width: 25.6719px;">BMI</th><th class="sorting" tabindex="0" aria-controls="data-table-3" rowspan="1" colspan="1" aria-label="HEARTRATE: activate to sort column ascending" Style="width: 85.2969px;">HEARTRATE</th><th class="sorting" tabindex="0" aria-controls="data-table-3" rowspan="1" colspan="1" aria-label="BP: activate to sort column ascending" Style="width: 29.2188px;">BP</th><th class="sorting" tabindex="0" aria-controls="data-table-3" rowspan="1" colspan="1" aria-label="SO2: activate to sort column ascending" Style="width: 28.0156px;">SO2</th><th class="sorting" tabindex="0" aria-controls="data-table-3" rowspan="1" colspan="1" aria-label="TEMP: activate to sort column ascending" Style="width: 38.8906px;">TEMP</th><th class="sorting" tabindex="0" aria-controls="data-table-3" rowspan="1" colspan="1" aria-label="CHOLESTROL: activate to sort column ascending" Style="width: 96.4531px;">CHOLESTROL</th><th class="sorting" tabindex="0" aria-controls="data-table-3" rowspan="1" colspan="1" aria-label="RESPIRATION RATE: activate to sort column ascending" Style="width: 135.609px;">RESPIRATION RATE</th><th class="sorting" tabindex="0" aria-controls="data-table-3" rowspan="1" colspan="1" aria-label="BLOOD GLUCOSE: activate to sort column ascending" Style="width: 123.672px;">BLOOD GLUCOSE</th><th class="sorting" tabindex="0" aria-controls="data-table-3" rowspan="1" colspan="1" aria-label="PAIN: activate to sort column ascending" Style="width: 32.4219px;">PAIN</th></tr>
        </thead>
                                   <tbody>
  
                                
                               <tr role="row" class="odd">
                                    
                                    <td class="sorting_1">10/12/2021</td>
                                    <td> 10:30 PM</td>
                                    <td>80</td>
                                    <td></td> 
                                    <td>0</td> 
                                    <td></td>
                                    <td>80/120</td>
                                    <td>2</td>
                                    <td>37</td>
                                    <td></td>
                                    <td>2</td>
                                    <td></td>
                                    <td>7</td>
                                </tr></tbody>
                                </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="data-table-3_info" role="status" aria-live="polite">Showing 1 to 1 of 1 entries</div></div><div class="col-sm-12 col-md-7"></div></div></div>
                            </div>
                        </div>
                    </div>
          </div>
        </div>

        <div class="new_modals">
                <div class="modal fade none-border" id="createvital" Style="display: none;" aria-hidden="true">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                               <h4 class="modal-title"><strong>Add Vitals</strong></h4>
                               <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SavePatients()">Save</button>
                                </div>

                               
                            </div>
                            <div class="row cal_m">
                                <div class="modal_contents">

                                    <div role="form">
                                        <div class="row">
                                           
                                            <div class="col-sm-3 col-lg-3">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Date <span class="man_fields1">*</span></label>
                                                    <input type="date" class="form-control"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-3 col-lg-3">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Time <span class="man_fields1">*</span></label>
                                                    <input type="time" class="form-control"/>
                                                </div>
                                            </div>
                                             <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Height <span class="man_fields1">*</span></label>
                                                      <input type="number" class="form-control" maxlength="50"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                           <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Weight <span class="man_fields1">*</span></label>
                                                      <input type="number" class="form-control" maxlength="50"/>
                                                </div>
                                            </div>
                                           <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">BMI <span class="man_fields1">*</span></label>
                                                      <input type="number" class="form-control" maxlength="50"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                           
                                           <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Heartrate <span class="man_fields1">*</span></label>
                                                      <input type="number" class="form-control" maxlength="50"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-3 col-lg-3">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">BP(Systolic) <span class="man_fields1">*</span></label>
                                                      <input type="number" class="form-control" maxlength="50"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-3 col-lg-3">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">BP(Diastolic) <span class="man_fields1">*</span></label>
                                                      <input type="number" class="form-control" maxlength="50"/>
                                                </div>
                                            </div>
                                        </div>
                                         <div class="row">
                                             <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">SO2</label>
                                                    <input type="number" class="form-control"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Temp</label>
                                                    <input type="number" class="form-control"/>
                                                </div>
                                            </div>
                                         </div>
                                         <div class="row">
                                             <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Cholestrol</label>
                                                    <input type="number" class="form-control"/>
                                                </div>
                                            </div>
                                             <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Respiration Rate</label>
                                                    <input type="number" class="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                         <div class="row">
                                             <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Blood Glucose</label>
                                                    <input type="number" class="form-control"/>
                                                </div>
                                            </div>
                                             <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Pain</label>
                                                    <input type="number" class="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                         <div class="row">
                                             <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    Any Supplement Oxygen <br/><br/>
                                                    <label><span><input type="checkbox"/></span> Yes</label>&nbsp;&nbsp;
                                                    <label><span><input type="checkbox"/></span> No</label>
                                                </div>
                                            </div>
                                             <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    Level of Consciousness <br/><br/>
                                                    <label><span><input type="checkbox"/></span> A</label>&nbsp;&nbsp;
                                                    <label><span><input type="checkbox"/></span> V</label>&nbsp;&nbsp;
                                                    <label><span><input type="checkbox"/></span> P</label>&nbsp;&nbsp;
                                                    <label><span><input type="checkbox"/></span> U</label>
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

export default Vital;
