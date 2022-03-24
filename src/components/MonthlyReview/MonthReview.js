import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';


const MonthReview = () => {
  return (
    <main className="body-content">
        <Sidebar/>
        <div class="ms-content-wrapper">
                          <div class="col-md-12">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb pl-0">
                                <li class="breadcrumb-item"></li>
                               
                                <li class="breadcrumb-item active" aria-current="page">Monthly Reviews</li>
                            </ol>
                        </nav>
                    </div>
                <div class="ms-panel ms-email-panel">
                    <div class="ms-panel-body p-0">
                      
                        {/* <!-- Email Main --> */}
                        <div class="ms-email-main">
                            <div class="ms-panel-header">
                                <h6>Reviews</h6>
                               
                               
                            </div>
                            <div class="ms-email-header">
                                <ul class="ms-email-options">
                                    <li>
                                        <label class="ms-checkbox-wrap">
                                        <input type="checkbox" class="ms-email-check-all" value=""/>
                                        <i class="ms-checkbox-check"></i>
                                        </label>
                                        <div class="dropdown">
                                            <a href="#">
                                            Select
                                            </a>
                                           
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
                                <ul class="ms-scrollable ps">
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
                                            <span><i class="fa fa-star checked"/></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span>
                                            <p class="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
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
                                           <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span>
                                            <p class="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
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
                                            <img src="../../assets/img/dashboard/employee-list/employee-(6).jpg" class="ms-img-round" alt="people"/>
                                        </div>
                                        <div class="media-body ms-email-details">
                                            <span class="ms-email-sender">John Doe</span>
                                           <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span>
                                            <p class="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
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
                                            <img src="../../assets/img/dashboard/employee-list/employee-(8).jpg" class="ms-img-round" alt="people"/>
                                        </div>
                                        <div class="media-body ms-email-details">
                                            <span class="ms-email-sender">John Doe</span>
                                           <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span>
                                            <p class="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
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
                                            <img src="../../assets/img/dashboard/employee-list/employee-(1).jpg" class="ms-img-round" alt="people"/>
                                        </div>
                                        <div class="media-body ms-email-details">
                                            <span class="ms-email-sender">John Doe</span>
                                           <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span>
                                            <p class="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
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
                                            <img src="../../assets/img/dashboard/employee-list/employee-(3).jpg" class="ms-img-round" alt="people"/>
                                        </div>
                                        <div class="media-body ms-email-details">
                                            <span class="ms-email-sender">John Doe</span>
                                            <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span>
                                            <p class="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
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
                                          <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span>
                                            <p class="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
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
                                           <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span>
                                            <p class="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
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
                                            <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span>
                                            <p class="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                        </div>
                                      
                                    </li>
                                <div class="ps__rail-x" Style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" Style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" Style="top: 0px; right: 0px;"><div class="ps__thumb-y" tabindex="0" Style="top: 0px; height: 0px;"></div></div></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </main>
  );
};

export default MonthReview;
