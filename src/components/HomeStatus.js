import React from 'react'
//import {Chart} from "react-chartjs-2";
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';

const HomeStatus = () => {
    return (
      <main className='body-content' >
        <Sidebar/>
        <div className="ms-content-wrapper">

        <div class="row">
          <div class="sub_section" Style="width: 100%;">
                <div>

                    <div class="col-sm-12">
                        <div class="dash_sec_ic">
                            <h1>Home Status</h1>

                            <div class="dash_m">
                                <div class="dash_sec_m0">
                                    <div class="dash_sec1">
                                        {/* <!--<img src="../../assets/img/hs1.png" class="img-responsive">--> */}
                                        <img src="../../assets/img/sticky-note.png" class="img-responsive"/>
                                        
                                    </div>


                                    <div class="dash_sec_con">
                                        <div class="dash_sec_counts">15</div>
                                        <div class="dash_sec_title">Daily Notes</div>
                                       
                                    </div>
                                </div>
                            </div>

                            <div class="dash_m">
                                <div class="dash_sec_m0">
                                    <div class="dash_sec2">
                                        <img src="../../assets/img/filling-cabinet.png" class="img-responsive"/>
                                    </div>
                                    <div class="dash_sec_con">
                                        <div class="dash_sec_counts">0</div>
                                        <div class="dash_sec_title">Filling Cabnet</div>
                                    </div>
                                </div>
                            </div>

                            <div class="dash_m">
                                <div class="dash_sec_m0">
                                    <div class="dash_sec3">
                                        <img src="../../assets/img/hs2.png" class="img-responsive"/>
                                    </div>
                                    <div class="dash_sec_con">
                                        <div class="dash_sec_counts">4</div>
                                        <div class="dash_sec_title">Roaster / Scheduling</div>
                                    </div>
                                </div>
                            </div>

                            <div class="dash_m">
                                <div class="dash_sec_m0">
                                    <div class="dash_sec4">
                                        <img src="../../assets/img/hrm.png" class="img-responsive"/>
                                    </div>
                                    <div class="dash_sec_con">
                                        <div class="dash_sec_counts">0</div>
                                        <div class="dash_sec_title">HR Management </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--<div class="dash_m par_ri">-->
                            <!--    <div class="dash_sec_m0">-->
                            <!--        <div class="dash_sec5">-->
                            <!--            <img src="images/dash_bed.svg" class="img-responsive">-->
                            <!--        </div>-->
                            <!--        <div class="dash_sec_con">-->
                            <!--            <div class="dash_sec_counts">103</div>-->
                            <!--            <div class="dash_sec_title">Bed Vacant</div>-->
                            <!--        </div>-->
                            <!--    </div>-->

                            <!--</div>--> */}
                            <div class="clearfix"></div>
                        </div>
                    </div>

                    <div class="col-sm-12">
                        <div class="dash_sec_ic">
                        

                            <div class="dash_m ">
                                <div class="dash_sec_m0">
                                    <div class="dash_sec6">
                                      {/* <!--<img src="../../assets/img/supportcare.png" >--> */}
                                      <img src="../../assets/img/supportcareplan.png"/>
                                    </div>
                                     
                                    <div class="dash_sec_con">
                                        <div class="dash_sec_counts">4</div>
                                        <div class="dash_sec_title">Support Care Plans Overdue </div>
                                    </div>
                                </div>
                            </div>

                            <div class="dash_m ">
                                <div class="dash_sec_m0">
                                    <div class="dash_sec7">
                                        <img src="../../assets/img/personcenter.png"/>
                                    </div>
                                     
                                    <div class="dash_sec_con">
                                        <div class="dash_sec_counts">8</div>
                                        {/* <!--<div class="dash_sec_title">Personal Care Plans Overdue</div>--> */}
                                        <div class="dash_sec_title">Person Centred Care Plans</div>
                                       
                                    </div>
                                </div>
                            </div>

                            <div class="dash_m ">
                                <div class="dash_sec_m0">
                                    <div class="dash_sec8">
                                         <img src="../../assets/img/riskass.png"/>
                                    </div>
                                     
                                    <div class="dash_sec_con">
                                         <div class="dash_sec_counts">7</div>
                                        <div class="dash_sec_title">Risk Assessment Overdue </div>
                                    </div>
                                </div>
                            </div>

                            <div class="dash_m ">
                                <div class="dash_sec_m0">
                                    <div class="dash_sec9">
                                         <img src="../../assets/img/diagram.png"/>
                                    </div>
                                     
                                    <div class="dash_sec_con">
                                         <div class="dash_sec_counts">3</div>
                                      <div class="dash_sec_title">Reports </div>
                                    </div>
                                </div>
                            </div>

                            <div class="clearfix"></div>
                        </div>
                    </div>

                </div>

                <div class="clearfix"></div>
            </div>
        </div>



          <div className='row'>
            <div>
              <div className='intro-js-step-dashboard'>
                <div className='Row' Style="display:flex; flex-wrap:wrap;">
       
                <div className="col-xl-6 col-md-6 col-sm-6">
            <div>
              <Link to="#" Style="display: inline-block; text-decoration: none;">
              <h2 className="lmc-home-card-title">Service Users</h2></Link>
              <div className="lmc-home-card">
                <div className="lmc-home-card-body">
                  <div>
                    <div className="lmc-flex-grid">
                      <a className="lmc-profile-link" href="">
                      <div>
                        <div className="lmc-profile-picture" Style="background-repeat: no-repeat; background-position: center center; display: flex; align-items: center; justify-content: center; background-image: url(&quot;https://lamavie.ml/wisterias/assets/img/dashboard/patient-4.jpg&quot;);"></div>
                        <p Style="font-size: 11px; color: black; opacity: 0.5;">Ted</p>
                      </div></a>
                      <a className="lmc-profile-link" href="">
                      <div>
                        <div className="lmc-profile-picture" Style="background-repeat: no-repeat; background-position: center center; display: flex; align-items: center; justify-content: center; background-image: url(&quot;https://lamavie.ml/wisterias/assets/img/dashboard/patient-3.jpg&quot;);"></div>
                        <p Style="font-size: 11px; color: black; opacity: 0.5;">ada</p>
                      </div></a>
                      <a className="lmc-profile-link" href="">
                      <div>
                        <div className="lmc-profile-picture" Style="background-repeat: no-repeat; background-position: center center; display: flex; align-items: center; justify-content: center; background-image: url(&quot;https://lamavie.ml/wisterias/assets/img/dashboard/patient-2.jpg&quot;);"></div>
                        <p Style="font-size: 11px; color: black; opacity: 0.5;">asdsa</p>
                      </div></a>
                    </div>
                  </div>
                  

                  <div className="chart-content">
                    <iframe className="chartjs-hidden-iframe" Style="width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; inset: 0px;">
                    </iframe>
                    {/* <div Style="display: block; position:relative; right:10% width: 127px; height: 63px;">
                    <Pie data={data}/>
                    </div> */}
                    <canvas id="progress-chart" width="127" height="63" Style="display: block; width: 127px; height: 63px;"></canvas>
                    <div id="chart-legend" className="chart-legend">
                      <ul className="0-legend">
                        <li>
                          <span Style="background-color:#651f70"></span>
                          In progress
                        </li>
                        <li>
                          <span Style="background-color:#1f4970"></span>
                          Active
                          </li>
                        <li>
                          <span Style="background-color:#e74848"></span>
                          Expired
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>

                <div className="lmc-home-card-footer">
                  <div className="lmc-flex-container">
                    <div id="intro-js-step-add-residents" Style="max-width: 210px;">
                      <Link to="/adduser"><button className="_vvlgt62 _iprbgp z-depth-4" type="button"><i className="_1f7qr6a2 octicon octicon-plus" Style="margin-right: 0.5em;"></i><span>Add a Service User</span></button></Link>
                    </div>
                    <div Style="max-width: 95px;">
                      <Link to="/userlist"><button className="_vvlgt62 _17tu3a" type="button">View All</button></Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
                </div>


               <div class="col-xl-6 col-md-6 col-sm-6">
            <div>
              <h2 class="lmc-home-card-title">Team</h2>
              <div class="lmc-home-card">
                <div class="lmc-home-card-body">
                  <p>It doesn’t look like any of your care team have been active recently (last 12 hrs)</p>
                </div>
                <div class="lmc-home-card-footer">
                  <div class="lmc-flex-container">
                    <div id="intro-js-step-add-residents" Style="max-width: 210px;">
                      <a href="#"><button class="_vvlgt62 _iprbgp z-depth-4" type="button"><i class="_1f7qr6a2 octicon octicon-plus" Style="margin-right: 0.5em;"></i><span>Invite a Team Member</span></button></a>
                    </div>
                    <div Style="max-width: 95px;">
                      <a href="#"><button class="_vvlgt62 _17tu3a" type="button">View All</button></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
               </div>

                <div className="col-xl-6 col-md-6 col-sm-6">
                <div>
              <h2 className="lmc-home-card-title">Incidents</h2>
              <div className="lmc-home-card">
                <div className="lmc-home-card-body">
                 <div Style="width:50%">
                   <div Style="width: 20%; padding-bottom: 8px;"><img alt="" height="45" src="https://lamavie.ml/wisterias/assets/img/dashboard/patient-1.jpg"/></div>
                   <div Style="width: 20%; padding-bottom: 8px;"><img alt="" height="45" src="https://lamavie.ml/wisterias/assets/img/dashboard/patient-3.jpg"/></div>
                   <div Style="width: 20%; padding-bottom: 8px;"><img alt="" height="45" src="https://lamavie.ml/wisterias/assets/img/dashboard/patient-5.jpg"/></div>
                  </div>
                </div>
                <div className="lmc-home-card-footer">
                  <div className="lmc-flex-container">
                    <Link to="/logs">
                      <button className="_vvlgt62 _17tu3a" type="button">View All</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
                </div>


                <div className="col-xl-6 col-md-6 col-sm-6">
            <div>
              <a href="#" Style="display: inline-block; text-decoration: none;">
              <h2 className="lmc-home-card-title">Today's To-Do's</h2></a>
              <div className="lmc-home-card">
                <div className="lmc-home-card-body">
                  <p>You haven't added any to-do's yet. Get started to create a to-do list for your home and Service Users.<a href="#" rel="noreferrer" Style="padding-left: 5px;" target="_blank">Find out more</a></p>
                </div>
                <div className="lmc-home-card-footer">
                  <div className="lmc-flex-container">
                    <div Style="max-width: 145px;">
                      <Link to="/todolist"><button className="_vvlgt62 _iprbgp z-depth-4" type="button"><i className="_1f7qr6a2 octicon octicon-plus" Style="margin-right: 0.5em;"></i><span>Add To-Do</span></button></Link>
                    </div>
                    <p Style="margin-bottom: 0px;">No logs recorded today</p>
                  </div>
                </div>
              </div>
            </div>
                </div>


                <div className="col-xl-6 col-md-6 col-sm-6">
            <div>
              <h2 className="lmc-home-card-title">Medication</h2>
              <div className="lmc-home-card" Style="display: flex; flex-direction: column; justify-content: space-between;">
                <div className="lmc-home-card-body">
                  <div Style="display: flex; flex: 1 1 0%;">
                    <table Style="width: 100%; height: 100%;">
                      <thead Style="display: flex; flex: 1 1 0%; align-items: center;">
                        <tr Style="display: flex; flex: 1 1 0%;">
                          <th Style="display: flex; flex: 2 1 0%;">Round</th>
                          <th Style="display: flex; flex: 3 1 0%;">Status</th>
                          <th Style="display: flex; flex: 5 1 0%; margin-left: 16px;">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr Style="display: flex; flex: 1 1 0%; margin-top: 12px; margin-bottom: 12px; align-items: center;">
                          <td Style="display: flex; flex: 1 1 0%; align-items: center;">
                            <div Style="display: flex; flex: 2 1 0%; font-size: 14px;">
                              08:00
                            </div>
                            <div Style="display: flex; flex: 3 1 0%; font-size: 14px;">
                              <div Style="display: flex; align-items: center;">
                                <div Style="margin-right: 10px; height: 20px;">
                                  <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M20.6922 11.3086L20.694 11.3103C21.102 11.7163 21.102 12.2837 20.694 12.6898L20.6922 12.6915L12.6915 20.6923L12.6897 20.694C12.2837 21.1021 11.7163 21.1021 11.3103 20.694L11.3085 20.6923L3.30775 12.6915L3.30602 12.6898C2.89799 12.2837 2.89799 11.7163 3.30602 11.3103L3.30775 11.3086L11.3085 3.30775L11.3103 3.30602C11.7163 2.89799 12.2837 2.89799 12.6897 3.30602L12.6915 3.30775L20.6922 11.3086Z" stroke="#e85b78" stroke-width="2"></path>
                                  <line stroke="#e85b78" stroke-width="2" x1="12" x2="12" y1="7" y2="13"></line>
                                  <line stroke="#e85b78" stroke-width="2" x1="12" x2="12" y1="15" y2="17"></line></svg>
                                </div>
                                <div>
                                  <span Style="font-weight: 700; color: rgb(34, 34, 34);">1</span> <span Style="color: rgb(34, 34, 34);">Not signed</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td Style="display: flex; flex: 1 1 0%; margin-left: 16px; align-items: center;">
                            <div Style="display: flex; flex: 3 1 0%; font-size: 14px; color: rgb(153, 153, 153);">
                              <div Style="font-weight: 700; margin-right: 4px;">
                                0
                              </div>Not administered
                            </div>
                            <div Style="display: flex; flex: 1 1 0%; font-size: 14px; color: rgb(153, 153, 153);">
                              <div Style="font-weight: 700; margin-right: 4px;">
                                0
                              </div>PRN
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div Style="height: 1px; width: 100%; background-color: rgb(221, 221, 221); margin-top: 0px; margin-bottom: 0px;"></div>
                          </td>
                        </tr>
                        <tr Style="display: flex; flex: 1 1 0%; margin-top: 12px; margin-bottom: 12px; align-items: center;">
                          <td Style="display: flex; flex: 1 1 0%; align-items: center;">
                            <div Style="display: flex; flex: 2 1 0%; font-size: 14px;">
                              12:00
                            </div>
                            <div Style="display: flex; flex: 3 1 0%; font-size: 14px;">
                              <div Style="display: flex; align-items: center;">
                                <div Style="margin-right: 10px; height: 20px;">
                                  <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="12" cy="12" r="9" stroke="#F9A404" stroke-width="2"></circle>
                                  <path d="M12 6.5L12 13L15.5 15" stroke="#F9A404" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                                </div>
                                <div>
                                  <span Style="font-weight: 700; color: rgb(34, 34, 34);">1</span> <span Style="color: rgb(34, 34, 34);">Due</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td Style="display: flex; flex: 1 1 0%; margin-left: 16px; align-items: center;">
                            <div Style="display: flex; flex: 3 1 0%; font-size: 14px; color: rgb(153, 153, 153);">
                              <div Style="font-weight: 700; margin-right: 4px;">
                                0
                              </div>Not administered
                            </div>
                            <div Style="display: flex; flex: 1 1 0%; font-size: 14px; color: rgb(153, 153, 153);">
                              <div Style="font-weight: 700; margin-right: 4px;">
                                0
                              </div>PRN
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div Style="height: 1px; width: 100%; background-color: rgb(221, 221, 221); margin-top: 0px; margin-bottom: 0px;"></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="lmc-home-card-footer">
                  <div className="lmc-flex-container">
                    <div Style="align-self: center;">
                      <a className="lmc-glyph-link" href="#" rel="noreferrer" Style="display: inline-block; float: left; margin-top: 0px;" target="_blank"><i className="_sea18i0 octicon octicon-question" Style="padding-right: 6px;"></i></a>
                    </div>
                    <div Style="max-width: 95px;">
                      <Link to="#"><button className="_vvlgt62 _17tu3a" type="button">View All</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                </div>

                <div class="col-xl-6 col-md-6 col-sm-6">
            <div>
              <h2 class="lmc-home-card-title">Up coming service users Birthday</h2>
              <div class="lmc-home-card" Style="display: flex; flex-direction: column; justify-content: space-between;">
                <div class="lmc-home-card-body" Style="padding:20px;">
{/* <!--                  <div Style="display: flex; flex: 1 1 0%;">-->
<!--                    <table Style="width: 100%; height: 100%;">-->
<!--                      <thead Style="display: flex; flex: 1 1 0%; align-items: center;">-->
<!--                        <tr Style="display: flex; flex: 1 1 0%;">-->
<!--                          <th Style="display: flex; flex: 2 1 0%;">Photo</th>-->
<!--                          <th Style="display: flex; flex: 3 1 0%;">Name</th>-->
<!--                          <th Style="display: flex; flex: 5 1 0%; margin-left: 16px;">Birthday</th>-->
<!--                        </tr>-->
<!--                      </thead>-->
<!--                      <tbody>-->
                        
                        
<!--                        <tr Style="display: flex; flex: 1 1 0%; margin-top: 0px; margin-bottom: 0px; align-items: center;">-->
<!--                          <td Style="display: flex; flex: 1 1 0%; align-items: center;">-->
<!--                            <div Style="display: flex; flex: 2 1 0%; font-size: 14px;">-->
<!--<div class="lmc-profile-picture" Style="float: left; margin-left: 3px; background-repeat: no-repeat; background-position: center center; display: flex; align-items: center; justify-content: center; background-image: url(&quot;https://s3.eu-west-2.amazonaws.com/lmc-data-production/public/profile_pic_placeholder.png&quot;);"></div>-->
<!--                            </div>-->
<!--                            <div Style="display: flex; flex: 3 1 0%; font-size: 14px;">-->
<!--                              <div Style="display: flex; align-items: center;">-->
                                
<!--                                <div>-->
<!--                               <span Style="color: rgb(34, 34, 34);">asdsa sdfsdfsD</span>-->
<!--                                </div>-->
<!--                              </div>-->
<!--                            </div>-->
<!--                          </td>-->
<!--                          <td Style="display: flex; flex: 1 1 0%; margin-left: 16px; align-items: center;">-->
<!--                            <div Style="display: flex; flex: 3 1 0%; font-size: 14px; color: rgb(153, 153, 153);">-->
<!--                              36 years old on Tuesday 1<sup>st</sup>&nbsp;&nbsp; -->
<!--                              Feb-->
<!--                            </div>-->
                           
<!--                          </td>-->
<!--                        </tr>-->
<!--                        <tr>-->
<!--                          <td>-->
<!--                            <div Style="height: 1px; width: 100%; background-color: rgb(221, 221, 221); margin-top: 0px; margin-bottom: 0px;"></div>-->
<!--                          </td>-->
<!--                        </tr>-->
<!--                        <tr Style="display: flex; flex: 1 1 0%; margin-top: 0px; margin-bottom: 0px; align-items: center;">-->
<!--                          <td Style="display: flex; flex: 1 1 0%; align-items: center;">-->
<!--                            <div Style="display: flex; flex: 2 1 0%; font-size: 14px;">-->
<!--<div class="lmc-profile-picture" Style="float: left; margin-left: 3px; background-repeat: no-repeat; background-position: center center; display: flex; align-items: center; justify-content: center; background-image: url(&quot;https://s3.eu-west-2.amazonaws.com/lmc-data-production/public/profile_pic_placeholder.png&quot;);"></div>-->
<!--                            </div>-->
<!--                            <div Style="display: flex; flex: 3 1 0%; font-size: 14px;">-->
<!--                              <div Style="display: flex; align-items: center;">-->
                                
<!--                                <div>-->
<!--                               <span Style="color: rgb(34, 34, 34);">ada lol</span>-->
<!--                                </div>-->
<!--                              </div>-->
<!--                            </div>-->
<!--                          </td>-->
<!--                          <td Style="display: flex; flex: 1 1 0%; margin-left: 16px; align-items: center;">-->
<!--                            <div Style="display: flex; flex: 3 1 0%; font-size: 14px; color: rgb(153, 153, 153);">-->
<!--                              58 years old on Tuesday 22<sup>nd</sup>&nbsp;&nbsp;Feb-->
<!--                            </div>-->
                           
<!--                          </td>-->
<!--                        </tr>-->
<!--                       <tr>-->
<!--                          <td>-->
<!--                            <div Style="height: 1px; width: 100%; background-color: rgb(221, 221, 221); margin-top: 0px; margin-bottom: 0px;"></div>-->
<!--                          </td>-->
<!--                        </tr>-->
<!--                         <tr Style="display: flex; flex: 1 1 0%; margin-top: 0px; margin-bottom: 0px; align-items: center;">-->
<!--                          <td Style="display: flex; flex: 1 1 0%; align-items: center;">-->
<!--                            <div Style="display: flex; flex: 2 1 0%; font-size: 14px;">-->
<!--<div class="lmc-profile-picture" Style="float: left; margin-left: 3px; background-repeat: no-repeat; background-position: center center; display: flex; align-items: center; justify-content: center; background-image: url(&quot;https://s3.eu-west-2.amazonaws.com/lmc-data-production/public/profile_pic_placeholder.png&quot;);"></div>-->
<!--                            </div>-->
<!--                            <div Style="display: flex; flex: 3 1 0%; font-size: 14px;">-->
<!--                              <div Style="display: flex; align-items: center;">-->
                                
<!--                                <div>-->
<!--                               <span Style="color: rgb(34, 34, 34);">Ted smith</span>-->
<!--                                </div>-->
<!--                              </div>-->
<!--                            </div>-->
<!--                          </td>-->
<!--                          <td Style="display: flex; flex: 1 1 0%; margin-left: 16px; align-items: center;">-->
<!--                            <div Style="display: flex; flex: 3 1 0%; font-size: 14px; color: rgb(153, 153, 153);">-->
<!--                              71 years old on Saturday 2<sup>nd</sup>&nbsp;&nbsp;Apr-->
                             
<!--                            </div>-->
                           
<!--                          </td>-->
<!--                        </tr>-->
<!--                      </tbody>-->
<!--                    </table>-->
<!--                  </div>-->
                   */}
                  <table class="table table-bordered">
                      <thead style={{"backgroundColor":"#1f4970","color":"white"}}>
                          <tr><th>Name</th>
                          <th>Birthday</th>
                          <th>how Old They Will Be </th>
                      </tr></thead>
                      <tbody>
                          <tr>
                              {/* <!--<td><img src="https://s3.eu-west-2.amazonaws.com/lmc-data-production/public/profile_pic_placeholder.png" -->
                              <!--Style="width:60px;"/></td>--> */}
                              <td>asdsa sdfsdfsD</td>
                              <td>30 December</td>
                              <td>69 Years</td>
                          </tr>
                           <tr>
                              {/* <!--<td><img src="https://s3.eu-west-2.amazonaws.com/lmc-data-production/public/profile_pic_placeholder.png" -->
                              <!--Style="width:60px;"/></td>--> */}
                              <td>ada lol</td>
                              <td>22 February</td>
                              <td>85 Years</td>
                          </tr>
                           <tr>
                              {/* <!--<td><img src="https://s3.eu-west-2.amazonaws.com/lmc-data-production/public/profile_pic_placeholder.png" -->
                              <!--Style="width:60px;"/></td>--> */}
                              <td>Ted smith</td>
                              <td>16 March</td>
                              <td>48 Years</td>
                          </tr>
                      </tbody>
                  </table>
                </div>
                <div class="lmc-home-card-footer">
                  <div class="lmc-flex-container">
                    <div Style="align-self: center;">
                      {/* <!--<a class="lmc-glyph-link" href="#" rel="noreferrer" Style="display: inline-block; float: left; margin-top: 0px;" target="_blank"><i class="_sea18i0 octicon octicon-question" Style="padding-right: 6px;"></i>Help</a>--> */}
                    </div>
                    <div Style="max-width: 95px;">
                      <a href="serviceuser-list.php"><button class="_vvlgt62 _17tu3a" type="button">View All</button></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

                <div className="col-xl-6 col-md-6 col-sm-6">
            <div>
              <h2 className="lmc-home-card-title">CARE PLANS AND ASSESSMENTS</h2>
             <div className="lmc-home-card">
                <div className="lmc-home-card-body" Style="height: 250px;">
                     <div Style="max-height: 238px; overflow-y: auto;">
                <Link to="#"><img alt="" src="https://lmc-data-production.s3.eu-west-2.amazonaws.com/public/care-plans-advert.png" Style="height: 200px;"/></Link>
                </div>
              </div>
              </div>
            </div>
                </div>

                
                <div class="col-xl-6 col-md-6 col-sm-6">
            <div>
              <a href="#" Style="display: inline-block; text-decoration: none;">
              <h2 class="lmc-home-card-title">Weekly rota Stats</h2></a>
              <div class="lmc-home-card">
                <div class="lmc-home-card-body" Style="height: 190px;">
                  <p>You haven't added any weekly rota.<a href="#" rel="noreferrer" Style="padding-left: 5px;" target="_blank">Find out more</a></p>
                </div>
                <div class="lmc-home-card-footer">
                  <div class="lmc-flex-container">
                    <div Style="max-width: 145px;">
                       <a href="#"><button class="_vvlgt62 _17tu3a" type="button">View All</button></a>
                    </div>
                    <p Style="margin-bottom: 0px;">No Weekly rota stats today</p>
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
    )
}

export default HomeStatus
