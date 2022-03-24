import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar';
import Navbarone from '../User/Navbarone';
import NavbarTwo from '../User/NavbarTwo';

const CreateInfection = () => {
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
                      
                        <li class="breadcrumb-item active" aria-current="page">Infection</li>
                     </ol>
                  </nav>
            </div>


            <div class="col-xl-12 col-md-12">
                  <div class="ms-panel">
                     
                     <div class="ms-panel-body">
                        <form class="needs-validation" novalidate="">
                           <div class="form-row">
                              <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Conducted by</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230">
                                        <option value="">Select Staff</option>
                                       <option value="">John doe</option>
                                       <option value="">Raxon Mary</option>
                                        <option value="">Tokder kelly</option>
                                    </select>

                                 </div>
                              </div>
                              <div class="col-md-6 mb-2">
                                 <label for="validationCustom004">Ref Id</label>
                                 <div class="input-group">
                                    <input type="text" class="form-control" id="validationCustom004"/>

                                 </div>
                              </div>
                              
                           </div>
                           <div class="form-row">
                              <div class="col-md-6 mb-2">
                                 <label for="validationCustom004">Date</label>
                                 <div class="input-group">
                                    <input type="date" class="form-control" id="validationCustom004"/>

                                 </div>
                              </div>
                              <div class="col-md-6 mb-2">
                                 <label for="validationCustom003">Time</label>
                                 <div class="input-group">
                                    <input type="time" class="form-control" id="validationCustom003"/>

                                 </div>
                              </div>
                           </div>
                           <div class="form-row">
                              <div class="col-md-12 mb-3">
                                  <div class="table-responsive">
                                  <table class="table table-bordered">
                                      <thead>
                                          <tr><th>Does patient currently have OR is known to have a positive culture of a multidrug-resident 
                                          <br/>oragnism (MDRO) or other organism of epidemiological significance?</th>
                                          <th>Colonization or history</th>
                                      </tr></thead>
                                      <tbody>
                                          <tr>
                                              <td>Lorem Ipsum Goprer Hoieryi hgderyiop koeworfer</td>
                                               <td><input type="checkbox"/></td>
                                          </tr>
                                           <tr>
                                              <td>Lorem Ipsum Goprer Hoieryi hgderyiop koeworfer</td>
                                               <td><input type="checkbox"/></td>
                                          </tr>
                                           <tr>
                                              <td>Lorem Ipsum Goprer Hoieryi hgderyiop koeworfer</td>
                                               <td><input type="checkbox"/></td>
                                          </tr>
                                           <tr>
                                              <td>Lorem Ipsum Goprer Hoieryi hgderyiop koeworfer</td>
                                               <td><input type="checkbox"/></td>
                                          </tr>
                                           <tr>
                                              <td>Lorem Ipsum Goprer Hoieryi hgderyiop koeworfer</td>
                                               <td><input type="checkbox"/></td>
                                          </tr>
                                           <tr>
                                              <td>Lorem Ipsum Goprer Hoieryi hgderyiop koeworfer</td>
                                               <td><input type="checkbox"/></td>
                                          </tr>
                                           <tr>
                                              <td>Lorem Ipsum Goprer Hoieryi hgderyiop koeworfer</td>
                                               <td><input type="checkbox"/></td>
                                          </tr>
                                           <tr>
                                              <td>Lorem Ipsum Goprer Hoieryi hgderyiop koeworfer</td>
                                               <td><input type="checkbox"/></td>
                                          </tr>
                                      </tbody>
                                  </table>
                                  </div>
                              </div>
                              
                           </div>
                          
                           <div class="form-row">
                              <div class="col-md-12 mb-2">
                                 <label>+ Interovecteriaceae spp. include klebsiella, E.coli, Enterobactor, Proteus, Serratia, and Citrobactor among others. </label>
                                 
                              </div>
                             
                           </div>
                     
                           <div class="form-row">
                                 <div class="col-md-12 mb-2">
                                <label><strong>Does the patient currently any of the following symtemps?</strong> </label>
                                </div>
                              <div class="col-md-4 mb-2">
                                
                                 <div class="input-group">
                                 <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>
                                <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>
                                <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>
                                <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>

                                 </div>
                              </div>
                              <div class="col-md-4 mb-2">
                                 
                                 <div class="input-group">
                                    <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>
                                <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>
                                <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>
                                <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>

                                 </div>
                              </div>
                               <div class="col-md-4 mb-2">
                                 
                                 <div class="input-group">
                                    <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>
                                <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>
                                <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>
                                <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>

                                 </div>
                              </div>
                           </div>
                            <div class="form-row">
                                 <div class="col-md-12 mb-2">
                                <label><strong>Is the patient currently in isolation?</strong> </label>
                                </div>
                              <div class="col-md-4 mb-2">
                                
                                 <div class="input-group">
                                 <label><span><input type="radio" name="radio" onclick="show1();"/></span> No</label>
                               

                                 </div>
                              </div>
                              <div class="col-md-4 mb-2">
                                 
                                 <div class="input-group">
                                    <label><span><input type="radio" name="radio" onclick="show2();"/></span> Yes</label>
                              

                                 </div>
                              </div>
                               <div class="col-md-4 mb-2">
                                
                              </div>
                           </div>
                           
                           <div class="form-row" id="div1" Style="display:none">
                               <div class="row">
                              <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">From</label>
                                 <div class="input-group">
                                    <input type="date" name="fromdate" class="form-control"/>

                                 </div>
                              </div>
                              <div class="col-md-6 mb-2">
                                 <label for="validationCustom004">To </label>
                                 <div class="input-group">
                                  <input type="date" name="t0date" class="form-control"/>

                                 </div>
                              </div>
                              </div>
                           </div>
                           {/* <script>
                               function show1(){
                                    document.getElementById('div1').Style.display ='none'
                                }
                                function show2(){
                                        document.getElementById('div1').Style.display = 'block'
                                }
                           </script> */}
                           <div class="form-row">
                                 <div class="col-md-12 mb-2">
                                <label><strong>Does the patient currently any of the following devices?</strong> </label>
                                </div>
                              <div class="col-md-4 mb-2">
                                
                                 
                                <label><input type="checkbox"/> Device name </label><br/>
                                <label><input type="checkbox"/> Device name </label>
                     

                               
                              </div>
                              <div class="col-md-4 mb-2">
                                 
                                 <label><input type="checkbox"/> Device name </label><br/>
                                <label><input type="checkbox"/> Device name </label>
                              </div>
                               <div class="col-md-4 mb-2">
                                 
                                <label><input type="checkbox"/> Device name </label><br/>
                                <label><input type="checkbox"/> Device name </label>
                              </div>
                           </div>
                            <div class="form-row">
                                 <div class="col-md-12 mb-2">
                                <label><strong>Is the patient currently on antibiotics?</strong> </label>
                                </div>
                              <div class="col-md-4 mb-2">
                                
                                 <div class="input-group">
                                 <label><span><input type="checkbox"/></span> No</label>
                               

                                 </div>
                              </div>
                              <div class="col-md-4 mb-2">
                                 
                                 <div class="input-group">
                                    <label><span><input type="checkbox"/></span> Yes</label>
                              

                                 </div>
                              </div>
                               <div class="col-md-4 mb-2 text-right">
                                <a href="#" class="btn btn-primary" Style="margin-top:0px;">Add Medicines</a>
                              </div>
                           </div>
                            <div class="form-row">
                              <div class="col-md-12 mb-3">
                                   <div class="table-responsive">
                                  <table class="table table-bordered">
                                       <thead>
                                   <tr><th>Medicine Name </th>
                                   <th>Gp/Consultant Name</th>
                                   <th>Type</th>
                                   <th>Route</th>
                               </tr></thead>
                               <tbody>
                                   <tr>
                                       <td></td>
                                       <td> </td>
                                       <td></td>
                                       <td></td>
                                      
                                   </tr>
                                   
                               </tbody>
                                  </table>
                                   
                                </div>
                                  
                            {/* <!--<div class="table-responsive">-->
                            <!--      <table class="table table-bordered">-->
                            <!--           <thead>-->
                            <!--       <th>Vaccination </th>-->
                            <!--       <th>Date</th>-->
                            <!--       <th>Valid Until</th>-->
                               
                            <!--   </thead>-->
                            <!--   <tbody>-->
                            <!--       <tr>-->
                            <!--           <td>Test1</td>-->
                            <!--           <td>10/12/2021 </td>-->
                            <!--           <td>8/01/2022</td>-->
                                      
                            <!--       </tr>-->
                                   
                            <!--   </tbody>-->
                            <!--      </table>-->
                                   
                            <!--      </div>--> */}
                              </div>
                              
                           </div>
                            <div class="form-row">
                               
                              <div class="col-md-6 mb-2">
                                
                                 <div class="input-group">
                                 <label><span><input type="checkbox"/></span> Review </label>
                               

                                 </div>
                              </div>
                              <div class="col-md-6 mb-2">
                                 
                                 <div class="input-group">
                                    <label><span><input type="checkbox"/></span> Close Case</label>
                              

                                 </div>
                              </div>
                              
                           </div>
                           
                             <div class="form-row">
                              <div class="col-md-12 mb-2">
                                 <label for="validationCustom004">Next Review Date</label>
                                 <div class="input-group">
                                    <input type="date" class="form-control" id="validationCustom004"/>

                                 </div>
                              </div>
                               
                             
                           </div>
                            <div class="form-row">
                              <div class="col-md-6 mb-2">
                                 <label for="validationCustom004">Previous Notes</label>
                                 <div class="input-group">
                                   <textarea class="form-control" placeholder="Previous Notes" Style="height:100px;"></textarea>

                                 </div>
                              </div>
                               <div class="col-md-6 mb-2">
                                 <label for="validationCustom004">Notes</label>
                                 <div class="input-group">
                                   <textarea class="form-control" placeholder="Notes" Style="height:100px;"></textarea>

                                 </div>
                              </div>
                             
                           </div>
                           
                           {/* <!--   <div class="form-row">-->
                           <!--   <div class="col-md-6 mb-2">-->
                           <!--      <label for="validationCustom004">Quarantine From</label>-->
                           <!--      <div class="input-group">-->
                           <!--         <input type="date" class="form-control" id="validationCustom004" >-->

                           <!--      </div>-->
                           <!--   </div>-->
                           <!--    <div class="col-md-6 mb-2">-->
                           <!--      <label for="validationCustom004">Quarantine To</label>-->
                           <!--      <div class="input-group">-->
                           <!--         <input type="date" class="form-control" id="validationCustom004" >-->

                           <!--      </div>-->
                           <!--   </div>-->
                             
                           <!--</div>--> */}
                           
                         
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
}

export default CreateInfection