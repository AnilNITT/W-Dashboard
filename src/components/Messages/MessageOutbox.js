import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';


const MessageOutbox = () => {
  return (
    <main className="body-content">
        <Sidebar/>
        <div class="ms-content-wrapper">
                          <div class="col-md-12">
               <nav aria-label="breadcrumb">
            <ol class="breadcrumb pl-0">
              <li class="breadcrumb-item">
                <a href="#"><i class="material-icons">home</i> Home</a>
              </li>
               <li class="breadcrumb-item active">Messages <a class="btn btn-primary" href="#" Style="float:right; margin-top:0px;" data-toggle="modal" data-target="#createmsg">Create New</a></li>
            </ol>
          </nav>
          </div>
          
          <div class="row">
    <div class="sub_section" Style="width: 100%;">
                <div>

                    <div class="col-sm-12">
                        <div class="dash_sec_ic">
                           
                             <div class="dash_m">
                                <div class="dash_sec_m0">
                                    


                                    <div class="dash_sec_con">
                                        <div class="dash_sec_counts">9</div>
                                        <div class="dash_sec_title">INBOX MESSAGES</div>
                                       
                                    </div>
                                </div>
                            </div>
                            <div class="dash_m">
                                <div class="dash_sec_m0">
                                  
                                    <div class="dash_sec_con">
                                        <div class="dash_sec_counts">5</div>
                                        <div class="dash_sec_title">OUTBOX MESSAGES</div>
                                    </div>
                                </div>
                            </div>
                            <div class="dash_m">
                                <div class="dash_sec_m0">
                                   
                                    <div class="dash_sec_con">
                                        <div class="dash_sec_counts">0</div>
                                        <div class="dash_sec_title">NEW MESSAGES</div>
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
         <div class="ms-panel" Style="margin-bottom:20px;">
                     <div class="col-xl-12 col-md-12" Style="padding-top:10px;">
                     <div class="row">
                                <div class="col-sm-9">
                                    <div class="row">
                                         <div class="col-sm-7">
                                    <input type="text" class="form-control" id="txtsrch" placeholder="Search By Message"/>
                                   </div>
                                    <div class="col-sm-3">
                                   <select class="form-control">
                                        <option>Sort by</option>
                                        <option>Name</option>
                                        <option>Date</option>
                                     </select> 
         
      </div>
                                
                                <div class="col-sm-2">
                                    <div class="form-group">
                                        <button type="button" class="btn btn-success search_btn">Search </button>
                                      
                                    </div>
                                </div>
                                    </div>
                                </div>
                              
                                <div class="col-sm-3">
                                    
                                </div>
                            </div>
                </div> 
                </div>
                <div class="ms-panel ms-email-panel">
                     <div class="col-xl-12 col-md-12">
                     
                          
                      <div class="section_box1_content2" Style="padding: 0px 0px 0px 0px;">
                            <div class="row">
                                <div class="col-sm-12" Style="padding: 0px 0px 0px 15px;">
                                    <div class="tab_menus" Style="float:left;">
                                        <ul>
                                           
                                            <li><Link to="/messages">Inbox</Link></li>
                                            <li class="active"><Link to="/message-outbox" class="active">Outbox</Link></li>
                                          
                                            
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                       
                        </div>
                    <div class="ms-panel-body p-0">
                      
                        {/* <!-- Email Main --> */}
                        <div class="ms-email-main">
                            
                            <div class="ms-email-header">
                                <ul class="ms-email-options">
                                    <li>
                                        <label class="ms-checkbox-wrap">
                                        <input type="checkbox" class="ms-email-check-all" value=""/>
                                        <i class="ms-checkbox-check"></i>
                                        </label>
                                        <div class="dropdown">
                                            <a href="#" class="has-chevron" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Select
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li class="ms-dropdown-list">
                                                    <a class="media p-2" href="#">
                                                        <div class="media-body">
                                                            <span>Mark as read</span>
                                                        </div>
                                                    </a>
                                                    {/* <!--<a class="media p-2" href="#">-->
                                                    <!--    <div class="media-body">-->
                                                    <!--        <span>Flag</span>-->
                                                    <!--    </div>-->
                                                    <!--</a>--> */}
                                                    <a class="media p-2" href="#">
                                                        <div class="media-body">
                                                            <span>Delete</span>
                                                        </div>
                                                    </a>
                                                    {/* <!--<a class="media p-2" href="#">-->
                                                    <!--    <div class="media-body">-->
                                                    <!--        <span>Archive</span>-->
                                                    <!--    </div>-->
                                                    <!--</a>--> */}
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="ms-email-options">
                                    {/* <!--<li><a href="#" class="text-disabled"> <i class="material-icons">refresh</i> Refresh </a></li>-->
                                    <!--<li><a href="#" class="text-disabled"> <i class="material-icons">local_offer</i> Tags </a></li>-->
                                    <!--<li><a href="#" class="text-disabled"> <i class="material-icons">folder</i> Folders </a></li>--> */}
                                </ul>
                            </div>
                            {/* <!-- Email Content --> */}
                            <div class="ms-email-content">
                                <ul class="ms-scrollable ps ps--active-y">
                                    <li class="media ms-email clearfix">
                                        <div class="ms-email-controls">
                                            <label class="ms-checkbox-wrap">
                                            <input type="checkbox" value=""/>
                                            <i class="ms-checkbox-check"></i>
                                            </label>
                                            
                                        </div>
                                        <div class="ms-email-img mr-3 ">
                                            <img src="../../assets/img/dashboard/employee-list/employee-(2).jpg" class="ms-img-round" alt="people"/>
                                        </div>
                                        <div class="media-body ms-email-details">
                                            <span class="ms-email-sender">John Doe</span>
                                            <h6 class="ms-email-subject">Message subject</h6>
                                            <span class="ms-email-time">10/12/2021</span>
                                            <p class="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                        </div>
                                        <div class="dropdown">
                                            <a href="#" class="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="material-icons">more_vert</i>
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-right">
                                                <li class="ms-dropdown-list">
                                                    <a class="media p-2" href="#">
                                                        <div class="media-body">
                                                            <span>Mark as read</span>
                                                        </div>
                                                    </a>
                                                    {/* <!--<a class="media p-2 ms-pin-email" href="#">-->
                                                    <!--    <div class="media-body">-->
                                                    <!--        <span>Flag</span>-->
                                                    <!--    </div>-->
                                                    <!--</a>-->
                                                    <!--<a class="media p-2" href="#">-->
                                                    <!--    <div class="media-body">-->
                                                    <!--        <span>Archive</span>-->
                                                    <!--    </div>-->
                                                    <!--</a>--> */}
                                                    <a class="media p-2" href="#">
                                                        <div class="media-body">
                                                            <span>Delete</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="media ms-email pinned clearfix">
                                        <div class="ms-email-controls">
                                            <label class="ms-checkbox-wrap">
                                            <input type="checkbox" value=""/>
                                            <i class="ms-checkbox-check"></i>
                                            </label>
                                            
                                        </div>
                                        <div class="ms-email-img mr-3 ">
                                            <img src="../../assets/img/dashboard/employee-list/employee-(4).jpg" class="ms-img-round" alt="people"/>
                                        </div>
                                        <div class="media-body ms-email-details">
                                            <span class="ms-email-sender">John Doe</span>
                                            <h6 class="ms-email-subject">Message subject</h6>
                                            <span class="ms-email-time"> <a href="#"><i class="material-icons">attachment</i></a> 10/12/2021</span>
                                            <p class="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                        </div>
                                        <div class="dropdown">
                                            <a href="#" class="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="material-icons">more_vert</i>
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-right">
                                                <li class="ms-dropdown-list">
                                                    <a class="media p-2" href="#">
                                                        <div class="media-body">
                                                            <span>Mark as read</span>
                                                        </div>
                                                    </a>
                                                    {/* <!--<a class="media p-2 ms-pin-email" href="#">-->
                                                    <!--    <div class="media-body">-->
                                                    <!--        <span>Flag</span>-->
                                                    <!--    </div>-->
                                                    <!--</a>-->
                                                    <!--<a class="media p-2" href="#">-->
                                                    <!--    <div class="media-body">-->
                                                    <!--        <span>Archive</span>-->
                                                    <!--    </div>-->
                                                    <!--</a>--> */}
                                                    <a class="media p-2" href="#">
                                                        <div class="media-body">
                                                            <span>Delete</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                   
                                    <li class="media ms-email pinned clearfix">
                                        <div class="ms-email-controls">
                                            <label class="ms-checkbox-wrap">
                                            <input type="checkbox" value=""/>
                                            <i class="ms-checkbox-check"></i>
                                            </label>
                                            
                                        </div>
                                        <div class="ms-email-img mr-3 ">
                                            <img src="../../assets/img/dashboard/employee-list/employee-(5).jpg" class="ms-img-round" alt="people"/>
                                        </div>
                                        <div class="media-body ms-email-details">
                                            <span class="ms-email-sender">John Doe</span>
                                            <h6 class="ms-email-subject">Message subject</h6>
                                            <span class="ms-email-time">10/12/2021</span>
                                            <p class="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                        </div>
                                        <div class="dropdown">
                                            <a href="#" class="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="material-icons">more_vert</i>
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-right">
                                                <li class="ms-dropdown-list">
                                                    <a class="media p-2" href="#">
                                                        <div class="media-body">
                                                            <span>Mark as read</span>
                                                        </div>
                                                    </a>
                                                    {/* <!--<a class="media p-2 ms-pin-email" href="#">-->
                                                    <!--    <div class="media-body">-->
                                                    <!--        <span>Flag</span>-->
                                                    <!--    </div>-->
                                                    <!--</a>-->
                                                    <!--<a class="media p-2" href="#">-->
                                                    <!--    <div class="media-body">-->
                                                    <!--        <span>Archive</span>-->
                                                    <!--    </div>-->
                                                    <!--</a>--> */}
                                                    <a class="media p-2" href="#">
                                                        <div class="media-body">
                                                            <span>Delete</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="media ms-email clearfix">
                                        <div class="ms-email-controls">
                                            <label class="ms-checkbox-wrap">
                                            <input type="checkbox" value=""/>
                                            <i class="ms-checkbox-check"></i>
                                            </label>
                                            
                                        </div>
                                        <div class="ms-email-img mr-3 ">
                                            <img src="../../assets/img/dashboard/employee-list/employee-(7).jpg" class="ms-img-round" alt="people"/>
                                        </div>
                                        <div class="media-body ms-email-details">
                                            <span class="ms-email-sender">John Doe</span>
                                            <h6 class="ms-email-subject">Message subject</h6>
                                            <span class="ms-email-time">10/12/2021</span>
                                            <p class="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                        </div>
                                        <div class="dropdown">
                                            <a href="#" class="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="material-icons">more_vert</i>
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-right">
                                                <li class="ms-dropdown-list">
                                                    <a class="media p-2" href="#">
                                                        <div class="media-body">
                                                            <span>Mark as read</span>
                                                        </div>
                                                    </a>
                                                    {/* <!--<a class="media p-2 ms-pin-email" href="#">-->
                                                    <!--    <div class="media-body">-->
                                                    <!--        <span>Flag</span>-->
                                                    <!--    </div>-->
                                                    <!--</a>-->
                                                    <!--<a class="media p-2" href="#">-->
                                                    <!--    <div class="media-body">-->
                                                    <!--        <span>Archive</span>-->
                                                    <!--    </div>-->
                                                    <!--</a>--> */}
                                                    <a class="media p-2" href="#">
                                                        <div class="media-body">
                                                            <span>Delete</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="media ms-email pinned clearfix">
                                        <div class="ms-email-controls">
                                            <label class="ms-checkbox-wrap">
                                            <input type="checkbox" value=""/>
                                            <i class="ms-checkbox-check"></i>
                                            </label>
                                            
                                        </div>
                                        <div class="ms-email-img mr-3 ">
                                            <img src="../../assets/img/dashboard/employee-list/employee-(2).jpg" class="ms-img-round" alt="people"/>
                                        </div>
                                        <div class="media-body ms-email-details">
                                            <span class="ms-email-sender">John Doe</span>
                                            <h6 class="ms-email-subject">Message subject</h6>
                                            <span class="ms-email-time">10/12/2021</span>
                                            <p class="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                        </div>
                                        <div class="dropdown">
                                            <a href="#" class="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="material-icons">more_vert</i>
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-right">
                                                <li class="ms-dropdown-list">
                                                    <a class="media p-2" href="#">
                                                        <div class="media-body">
                                                            <span>Mark as read</span>
                                                        </div>
                                                    </a>
                                                    {/* <!--<a class="media p-2 ms-pin-email" href="#">-->
                                                    <!--    <div class="media-body">-->
                                                    <!--        <span>Flag</span>-->
                                                    <!--    </div>-->
                                                    <!--</a>-->
                                                    <!--<a class="media p-2" href="#">-->
                                                    <!--    <div class="media-body">-->
                                                    <!--        <span>Archive</span>-->
                                                    <!--    </div>-->
                                                    <!--</a>--> */}
                                                    <a class="media p-2" href="#">
                                                        <div class="media-body">
                                                            <span>Delete</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                <div class="ps__rail-x" Style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" Style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" Style="top: 0px; height: 480px; right: 0px;"><div class="ps__thumb-y" tabindex="0" Style="top: 0px; height: 438px;"></div></div></ul>
                                
                            </div>
                            <div class="ms-panel-header">
                                
                                <ul class="ms-email-pagination">
                                    <li>50-100 of 985</li>
                                    <li class="ms-email-pagination-item"> <a href="#" class="ms-email-pagination-link"> <i class="material-icons">keyboard_arrow_left</i> </a>  </li>
                                    <li class="ms-email-pagination-item "> <a href="#" class="ms-email-pagination-link"> <i class="material-icons">keyboard_arrow_right</i> </a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

        <div class="new_modals">
                <div class="modal fade none-border" id="createmsg" Style="display: none;" aria-hidden="true">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                               <h4 class="modal-title"><strong>Messages</strong></h4>
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
                                                    <label for="exampleInputEmail1">Subject<span class="man_fields1">*</span></label>
                                                    <input type="text" class="form-control" placeholder="Subject"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Content </label>
                                                    <textarea class="form-control" placeholder="Description"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-lg-12">
                                               <label for="exampleInputEmail1">Message Send To </label> <br/>
                                            <label class="checkbox-inline">
        <input type="checkbox" value=""/>User
        </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <label class="checkbox-inline">
      <input type="checkbox" value=""/>Role
    </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <label class="checkbox-inline">
      <input type="checkbox" value=""/>Department
    </label>
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

export default MessageOutbox