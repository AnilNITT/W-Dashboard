import React from 'react'
import { Link } from 'react-router-dom'

const SelectOption = () => {
  return (
    <main className='body-content' Style="padding-left:0px;">
        
        <nav className="navbar ms-navbar">
      
      <div className="ms-aside-toggler ms-toggler pl-0" data-target="#ms-side-nav" data-toggle="slideLeft">
        {/* <span className="ms-toggler-bar" style={{"background-color":"blue"}}></span>
        <span className="ms-toggler-bar" style={{"background-color":"blue"}}></span>
        <span className="ms-toggler-bar" style={{"background-color":"blue"}}></span> */}
      </div>
      
      <div className="logo-sn logo-sm ms-d-block-sm">
        <Link className="pl-0 ml-0 text-center navbar-brand mr-0" to="/">
          <img src="/assets/img/logo.png" alt="logo" /> </Link>
      </div>
     
      <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">

      <li className="ms-nav-item  ms-d-none" Style="padding-right: 250px;">
             <span id="ct" Style="color: #7d7d7d;font-size: 16px;font-weight: 600;">Friday,31th December 2021,7:11:14 PM</span>
      </li>
              
      <li className="ms-nav-item  ms-d-none" Style="width: 120px;">
      </li>
              
      <li class="ms-nav-item dropdown">
          <a href="#" class="text-disabled ms-has-notification" id="notificationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-envelope" Style="font-size: 20px;"></i></a>
          <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="notificationDropdown">
            <li class="dropdown-menu-header">
              <h6 class="dropdown-header ms-inline m-0"><span class="text-disabled">You have 3 New Email</span></h6>
             
            </li>
            <li class="dropdown-divider"></li>
            <li class="ms-scrollable ms-dropdown-list ps">
              <a class="media p-2" href="#">
                <div class="media-body">
                  <span><strong>New User</strong></span>
                  <p>I feel great thank Team!</p>
                  <p class="fs-10 my-1 text-disabled"><i class="material-icons">access_time</i> Now </p>
                </div>
              </a>
              <a class="media p-2" href="#">
                <div class="media-body">
                  <span><strong>You have newly registered users</strong></span>
                  <p class="fs-10 my-1 text-disabled"><i class="material-icons">access_time</i> 45 minutes ago</p>
                </div>
              </a>
              <a class="media p-2" href="#">
                <div class="media-body">
                  <span><strong>Your account was logged in from an unauthorized IP</strong></span>
                   <p class="fs-10 my-1 text-disabled"><i class="material-icons">access_time</i> 1 day ago</p>
                </div>
              </a>
              

            <div class="ps__rail-x" Style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" Style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" Style="top: 0px; right: 0px;"><div class="ps__thumb-y" tabindex="0" Style="top: 0px; height: 0px;"></div></div></li>
            <li class="dropdown-divider"></li>
            <li class="dropdown-menu-footer text-center">
              <a href="#">View all Email</a>
            </li>
          </ul>
      </li>


    <li className="ms-nav-item dropdown">
          <a href="#" className="text-disabled ms-has-notification" id="notificationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-bell">
            </i></a>
          <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="notificationDropdown">
            <li className="dropdown-menu-header">
              <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Notifications</span></h6>
              <span className="badge badge-pill badge-info">4 New</span>
            </li>
            <li className="dropdown-divider"></li>
            <li className="ms-scrollable ms-dropdown-list ps">
              <a className="media p-2" href="#">
                <div className="media-body">
                  <span>12 ways to improve your crypto dashboard</span>
                  <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 30 seconds ago</p>
                </div>
              </a>
              <a className="media p-2" href="#">
                <div className="media-body">
                  <span>You have newly registered users</span>
                  <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 45 minutes ago</p>
                </div>
              </a>
              <a className="media p-2" href="#">
                <div className="media-body">
                  <span>Your account was logged in from an unauthorized IP</span>
                  <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 2 hours ago</p>
                </div>
              </a>
              <a className="media p-2" href="#">
                <div className="media-body">
                  <span>An application form has been submitted</span>
                  <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 1 day ago</p>
                </div>
              </a>
            <div className="ps__rail-x" Style="left: 0px; bottom: 0px;"><div className="ps__thumb-x" tabindex="0" Style="left: 0px; width: 0px;"></div></div><div className="ps__rail-y" Style="top: 0px; right: 0px;"><div className="ps__thumb-y" tabindex="0" Style="top: 0px; height: 0px;"></div></div></li>
            <li className="dropdown-divider"></li>
            <li className="dropdown-menu-footer text-center">
              <a href="#">View all Notifications</a>
            </li>
          </ul>
    </li>

    <li class="ms-nav-item dropdown">
          <a href="#" class="text-disabled setting ms-has-notification" id="notificationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog" Style="font-size: 24px;"></i></a>
           <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="notificationDropdown">
            <li class="dropdown-menu-header">
              <h6 class="dropdown-header ms-inline m-0"><span class="text-disabled">Setting</span></h6>
             
            </li>
            <li class="dropdown-divider"></li>
            <li class="ms-scrollable ms-dropdown-list ps">
              <a class="media p-2" href="#">
                <div class="media-body">
                  <span>Manage my alerts</span><br/><br/>
                 <label><input type="radio" name="radio" value="7 days before"/> 7 days before</label><br/>
                  <label><input type="radio" name="radio" value="7 days before"/> 14 days</label><br/>
                  <label><input type="radio" name="radio" value="7 days before"/> a Month</label><br/>
                </div>
                 
              </a>
              <a class="media p-2" href="#">
                <div class="media-body">
                  <span>Manage my notification</span>
                </div>
              </a>
             
            <div class="ps__rail-x" Style="left: 0px; bottom: 0px;">
              <div class="ps__thumb-x" tabindex="0" Style="left: 0px; width: 0px;">
              </div>
            </div>
            <div class="ps__rail-y" Style="top: 0px; right: 0px;">
              <div class="ps__thumb-y" tabindex="0" Style="top: 0px; height: 0px;">
              </div>
            </div>
            </li>
            
          </ul>
        </li>
    <li className="ms-nav-item ms-nav-user dropdown">
          <Link to="#" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img className="ms-user-img ms-img-round float-right" src="/assets/img/doctor-3.jpg" alt="people"/> </Link>
          <ul className="dropdown-menu dropdown-menu-right user-dropdown" aria-labelledby="userDropdown">
            <li className="dropdown-menu-header">
              <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Welcome, Admin</span></h6>
            </li>
            <li className="dropdown-divider"></li>
            <li className="ms-dropdown-list">
              <Link className="media fs-14 p-2" to="#"> <span>
                <i className="fa fa-user mr-2"></i> Profile</span> </Link>
             
            </li>
           
            
            <li className="dropdown-menu-footer">
              <Link to="/login" className="media fs-14 p-2" > <span>
                <i className="fa fa-power-off mr-2"></i> Logout</span> </Link>
            </li>
          </ul>
    </li>

    </ul>
      
      
      <div className="ms-toggler ms-d-block-sm pr-0 ms-nav-toggler" data-toggle="slideDown" data-target="#ms-nav-options">
        {/* <span className="ms-toggler-bar " style={{"background-color":"blue"}}></span>
        <span className="ms-toggler-bar " style={{"background-color":"blue"}}></span>
        <span className="ms-toggler-bar " style={{"background-color":"blue"}}></span> */}
      </div>

        </nav>

        <div class="ms-content-wrapper" Style="padding:70px;">
       <div class="row">
    <div class="sub_section" Style="width: 100%;">
                <div>

                    <div class="offset-md-1 col-md-10" Style="margin-top: 10%;">
                        <div class="dash_sec_ic">
                           
                           
                            <div class="dash_m" Style="width:50%">
                                <Link to="/">
                                <div class="dash_sec_m0"  Style="height:80px">
                                  {/* <div class="dash_sec_con"> */}
                                        <div class="dash_sec_title" Style="font-size: 22px;line-height: inherit;">Residential Home</div>
                                </div></Link>
                            </div>
                             
                            <div class="dash_m" Style="width:50%">
                            <Link to="/"><div class="dash_sec_m0" Style="height:80px;">
                                  
                                    {/* <div class="dash_sec_con"> */}
                                    <div>
                                       
                                        <div class="dash_sec_title" Style="font-size: 22px;line-height: inherit;">Nursing Home</div>
                                    </div>
                                </div></Link>
                            </div>

                             <div class="dash_m" Style="width:25%">
                              
                            </div>
                            
                            <div class="dash_m" Style="width:50%">
                               <a href="#"><div class="dash_sec_m0" Style="height:80px">
                                  
                                    {/* <div class="dash_sec_con"> */}
                                    <div>
                                       
                                        <div class="dash_sec_title" Style="font-size: 22px;line-height: inherit;">Admin And General</div>
                                    </div>
                                </div></a>
                            </div>
                            
                            <div class="dash_m" Style="width:25%">
                              
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
                </div>

               
    </div>
  </div>
       
   
 </div>
    </main>
    )
}

export default SelectOption