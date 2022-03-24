import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';


const UserList = () => {
    return (
        <main className="body-content">
            <Sidebar/>
            <div class="ms-content-wrapper">
            <div class="row">
                <div class="col-md-12">
                    <nav aria-label="breadcrumb">
            <ol class="breadcrumb pl-0">
              <li class="breadcrumb-item">
                <a href="#"><i class="material-icons">home</i> Home</a>
              </li>
              <li class="breadcrumb-item active">Service Users <a class="btn btn-primary" href="add-service-user.php" Style="float:right; margin-top:0px;">Create New</a></li>
            </ol>
                </nav></div>
                <div class="section_box1">
                        <div class="section_box1_content2">
                            <div class="row">
                                <div class="col-sm-9">
                                    <div class="row">
                                         <div class="col-sm-3">
                                    <input type="text" class="form-control" id="txtsrch" placeholder="Search by keyword"/>
                                   </div>
                                    <div class="col-sm-3">
                                  <select class="form-control">
          <option>Search by Location</option>
          <optgroup label="Residential Home">

        <option value="First floor">First floor</option>
        <option value="Second floor">Second floor</option>
        <option value="Third floor">Third floor</option>
    </optgroup>
    <optgroup label="Nursing Home">
       <option value="First floor">First floor</option>
        <option value="Second floor">Second floor</option>
        <option value="Third floor">Third floor</option>
         <option value="Fourth floor">Fourth floor</option>
    </optgroup>
    
      </select> 
         
      </div>
                                <div class="col-sm-3">
                               <div class="form-group">
    
                                        <input type="text" class="form-control" id="txtsrch" placeholder="Search by names (A-Z)"/>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="form-group">
                                        <button type="button" class="btn btn-success search_btn" onclick="SearchPatients()" id="sbtn1">Search </button>
                                      
                                    </div>
                                </div>
                                    </div>
                                </div>
                              
                                <div class="col-sm-3">
                                    <div class="tab_menus">
                                        <ul>
                                            <li><a href="javascript:void(0)" onclick="PrePatient(2)" id="tab2">Pre - Admissions Search</a></li>
                                            
                                            {/* <!--<li><a href="add-service-user.php" class="btn btn-primary">Create New</a></li>--> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" Style="margin-top:10px;">
                     <div class="col-lg-12" Style="margin-bottom:20px;">
                         <div id="list1" class="dropdown-check-list" tabindex="100">
        <span class="anchor">Select Status</span>
        <ul id="items" class="items">
            <li><input type="checkbox"/> Active (4)</li>
            <li><input type="checkbox"/> Inactive (0)</li>
            <li><input type="checkbox"/> Hospitalized (0)</li>
            <li><input type="checkbox"/> Deceased (0)</li>
            <li><input type="checkbox"/> Discharged (0)</li>
           
        </ul>
    </div>
                     </div>
                       <div class="col-lg-12" Style="margin-bottom:20px;">
                         <div id="list2" class="dropdown-check-list" tabindex="100">
        <span class="anchor">Select Grouping</span>
        <ul id="items1" class="items">
            <li><input type="checkbox"/> My Test Zones</li>
            <li><input type="checkbox"/> ABC Zone</li>
           
           
        </ul>
    </div>
                     </div>
                        
                     <div class="col-lg-3 col-md-3 col-sm-6">
                     <a href="service-user-detail.php">      
          <div class="ms-card">
           
            <div class="ms-card-body">
              <div class="media fs-14">
                <div class="mr-2 align-self-center">
                  <img src="../../assets/img/dashboard/patient-1.jpg" alt="people"/>
                </div>
                <div class="media-body">
                  <p class=" my-1 text-disabled"><strong>Name:</strong> Michael Sullivan</p>
                  <p class=" my-1 text-disabled"><strong>DOB:</strong> 22-12-1999 (32 Years)</p>
                  
                    <p class=" my-1 text-disabled"><strong>ID:</strong> A306578555</p>
                     <p class=" my-1 text-disabled"><strong>Location:</strong> 102 B, Vijay Nagar</p>
                </div>
              </div>
            </div>

          </div>
                      </a> 
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
             <a href="service-user-detail.php">    
          <div class="ms-card">
            <div class="ms-card-body">
              <div class="media fs-14">
                <div class="mr-2 align-self-center">
                  <img src="../../assets/img/dashboard/patient-2.jpg" alt="people"/>
                </div>
                <div class="media-body">
                  
                 <p class=" my-1 text-disabled"><strong>Name:</strong> Linda Barrett</p>
                  <p class=" my-1 text-disabled"><strong>DOB:</strong> 12-12-1999 (40 Years)</p>
                   
                    <p class=" my-1 text-disabled"><strong>ID:</strong> D478657555</p>
                     <p class=" my-1 text-disabled"><strong>Location:</strong> 106 C, Patel Nagar</p>
                </div>
              </div>
            </div>
          </div>
          </a>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
             <a href="service-user-detail.php">    
          <div class="ms-card">
            <div class="ms-card-body">
              <div class="media fs-14">
                <div class="mr-2 align-self-center">
                  <img src="../../assets/img/dashboard/patient-3.jpg" alt="people"/>
                </div>
                <div class="media-body">
                 
                   <p class=" my-1 text-disabled"><strong>Name:</strong> Ronald Jacobs</p>
                   <p class=" my-1 text-disabled"><strong>DOB:</strong> 10-10-2001 (38 Years)</p>
                    <p class=" my-1 text-disabled"><strong>ID:</strong> C998659555</p>
                     <p class=" my-1 text-disabled"><strong>Location:</strong>  205 D, Raj Nagar</p>
                </div>
              </div>
            </div>
          </div>
          </a>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
             <a href="service-user-detail.php">    
          <div class="ms-card">
            <div class="ms-card-body">
              <div class="media fs-14">
                <div class="mr-2 align-self-center">
                  <img src="../../assets/img/dashboard/patient-4.jpg" alt="people"/>
                </div>
                <div class="media-body">
               
                   <p class=" my-1 text-disabled"><strong>Name:</strong> Mark Hunter</p>
                   <p class=" my-1 text-disabled"><strong>DOB:</strong> 27-03-1996 (45 Years)</p>
                   <p class=" my-1 text-disabled"><strong>ID:</strong> Q008659555</p>
                     <p class=" my-1 text-disabled"><strong>Location:</strong> 416 D, Malwa Nagar</p>
                </div>
              </div>
            </div>
          </div>
          </a>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
             <a href="service-user-detail.php">    
          <div class="ms-card">
            <div class="ms-card-body">
              <div class="media fs-14">
                <div class="mr-2 align-self-center">
                  <img src="../../assets/img/dashboard/patient-5.jpg" alt="people"/>
                </div>
                <div class="media-body">
                
                   <p class=" my-1 text-disabled"><strong>Name:</strong> Cristina Groves</p>
                   <p class=" my-1 text-disabled"><strong>DOB:</strong> 23-03-1997 (44 Years)</p>
                   <p class=" my-1 text-disabled"><strong>ID:</strong> P508659555</p>
                     <p class=" my-1 text-disabled"><strong>Location:</strong> 416 D, Malwa Nagar</p>
                </div>
              </div>
            </div>
          </div>
          </a>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
             <a href="service-user-detail.php">    
          <div class="ms-card">
            <div class="ms-card-body">
              <div class="media fs-14">
                <div class="mr-2 align-self-center">
                  <img src="../../assets/img/dashboard/patient-6.jpg" alt="people"/>
                </div>
                <div class="media-body">
                  
                  <p class=" my-1 text-disabled"><strong>Name:</strong> Justin Parker</p>
                  <p class=" my-1 text-disabled"><strong>DOB:</strong> 05-04-2002 (37 Years)</p>
                   <p class=" my-1 text-disabled"><strong>ID:</strong> K908659005</p>
                     <p class=" my-1 text-disabled"><strong>Location:</strong> 109 G, Galaxy Wave</p>
                </div>
              </div>
            </div>
          </div>
          </a>
        </div>
        </div>
                </div>
            </div>
            
        </main>
    )
}

export default UserList
