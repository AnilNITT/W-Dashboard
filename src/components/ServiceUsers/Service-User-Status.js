import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';

const ServiceUserStatus = () => {
  return (
    <main className="body-content">
        <Sidebar/>
        <div class="ms-content-wrapper">
            <div class="row">
                <div class="col-md-12" Style="padding: 0px;">
                    <nav aria-label="breadcrumb">
            <ol class="breadcrumb pl-0">
              <li class="breadcrumb-item">
                <a href="#"><i class="material-icons">home</i> Home</a>
              </li>
              <li class="breadcrumb-item active">Service User Status </li>
            </ol>
                </nav></div>
                <div class="tab">
    <button class="tablinks active" onclick="openCity(event, 'active')" id="defaultOpen">Active</button>
  <button class="tablinks" onclick="openCity(event, 'inactive')">Inactive(8)</button>
   <button class="tablinks" onclick="openCity(event, 'discharged')">Discharged(7)</button>
  <button class="tablinks" onclick="openCity(event, 'hispitalise')">Hospitalised </button>
  <button class="tablinks" onclick="openCity(event, 'desease')">Deceased</button>
   <button class="tablinks" onclick="openCity(event, 'preadmission')">Pre-admission</button>
 
</div>

                  <div id="active" class="tabcontent" Style="display: block;">
              
                    <div class="row" Style="margin-top:10px;">
                      <div class="col-lg-12 col-md-12 col-sm-12"> 
                    <h4 Style="color: #651f70;font-size: 16px;font-weight: bold;text-transform: uppercase;font-family: 'Poppins', sans-serif !important;">Active</h4>  
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
                  <div id="inactive" class="tabcontent" Style="display: none;">
              
                    <div class="row" Style="margin-top:10px;">
                    <div class="col-lg-12 col-md-12 col-sm-12"> 
                    <h4 Style="color: #651f70;font-size: 16px;font-weight: bold;text-transform: uppercase;font-family: 'Poppins', sans-serif !important;">Incative</h4>  
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
                  <img src="../../assets/img/dashboard/patient-5.jpg" alt="people"/>
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
                  <img src="../../assets/img/dashboard/patient-4.jpg" alt="people"/>
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
                  <img src="../../assets/img/dashboard/patient-3.jpg" alt="people"/>
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
                  <img src="../../assets/img/dashboard/patient-1.jpg" alt="people"/>
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
                  <img src="../../assets/img/dashboard/patient-8.jpg" alt="people"/>
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
                  <div id="hispitalise" class="tabcontent" Style="display: none;">
              
                    <div class="row" Style="margin-top:10px;">
                      <div class="col-lg-12 col-md-12 col-sm-12"> 
                    <h4 Style="color: #651f70;font-size: 16px;font-weight: bold;text-transform: uppercase;font-family: 'Poppins', sans-serif !important;">Hospitalised</h4>  
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
                  <div id="desease" class="tabcontent" Style="display: none;">
              
                    <div class="row" Style="margin-top:10px;">
                         <div class="col-lg-12 col-md-12 col-sm-12"> 
                    <h4 Style="color: #651f70;font-size: 16px;font-weight: bold;text-transform: uppercase;font-family: 'Poppins', sans-serif !important;">Deceased</h4>  
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
        
        </div>
                  </div>
                  <div id="discharged" class="tabcontent" Style="display: none;">
              
                    <div class="row" Style="margin-top:10px;">
                         <div class="col-lg-12 col-md-12 col-sm-12"> 
                    <h4 Style="color: #651f70;font-size: 16px;font-weight: bold;text-transform: uppercase;font-family: 'Poppins', sans-serif !important;">Discharged</h4>  
                    </div>
                   <div class="col-lg-3 col-md-3 col-sm-6">
                     <a href="service-user-detail.php">      
          <div class="ms-card">
           
            <div class="ms-card-body">
              <div class="media fs-14">
                <div class="mr-2 align-self-center">
                  <img src="../../assets/img/dashboard/patient-8.jpg" alt="people"/>
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
                  <img src="../../assets/img/dashboard/patient-5.jpg" alt="people"/>
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
                  <img src="../../assets/img/dashboard/patient-2.jpg" alt="people"/>
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
                  <img src="../../assets/img/dashboard/patient-6.jpg" alt="people"/>
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
    
        </div>
                  </div> 
                  <div id="preadmission" class="tabcontent" Style="display: none;">
              
                    <div class="row" Style="margin-top:10px;">
                      <div class="col-lg-12 col-md-12 col-sm-12"> 
                    <h4 Style="color: #651f70;font-size: 16px;font-weight: bold;text-transform: uppercase;font-family: 'Poppins', sans-serif !important;">Pre-admission</h4>  
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
            </div>
    </main>
    )
}

export default ServiceUserStatus