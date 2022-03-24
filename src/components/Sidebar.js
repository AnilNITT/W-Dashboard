import React from 'react'
import {Link} from 'react-router-dom';
import $ from "jquery"
import Navbar from "./Navbar";


const Sidebar = () => {

      window.onload=function(){
         $( ".ms-nav-toggler" ).on( "click", function() {
           $( "#ms-nav-options" ).toggleClass( "ms-slide-down", 1000 );
         });
         $( ".ms-aside-toggler" ).on( "click", function() {
           // $( "#ms-side-nav" ).toggleClass( "ms-aside-open", 1000 );
           $( "#ms-side-nav" ).toggleClass( "ms-aside-open", 1000 );
           $( "body" ).toggleClass( "ms-aside-left-open");
           $( ".ms-overlay-left" ).toggleClass( "d-block");
         });
      }

    return (
      <>
      <aside id="ms-side-nav" className="side-nav fixed ms-aside-scrollable ms-aside-left ps--active-y">
     
    <div className="logo-sn ms-d-block-lg">
      <Link className="pl-0 ml-0 text-center" to="/"> 
          <img src="/assets/img/logo.png" alt="logo" /> 
      </Link>
      <Link to="#" className="text-center ms-logo-img-link">
        <img src="/assets/img/doctor-3.jpg" alt="logo"/>
      </Link>
     
      {/* <h6 className="text-center mb-3">Admin</h6> */}
    </div>
     
    <ul className="accordion ms-main-aside fs-14" id="side-nav-accordion">
       
     
      <li className="menu-item">
        <Link to="/">
          <span><i className="material-icons fs-16">dashboard</i>Dashboard</span>
        </Link>
      </li>

      <li className="menu-item">
        <Link to="/#" className="has-chevron" data-toggle="collapse" data-target="#patient" aria-expanded="false" aria-controls="patient">
          <span><i className="fa fa-user"></i>manage Service Users</span>
        </Link>
        <ul id="patient" className="collapse" aria-labelledby="patient" data-parent="#side-nav-accordion">
          <li> <Link to="/add-service-user">Add Service Users</Link> </li>
          <li> <Link to="/serviceuser-list">Service Users</Link> </li>
          {/* <li><Link to="/adddocument">Add Document</Link> </li>
          <li> <Link to="/documentlist">Document List</Link> </li> */}
          <li> <Link to="/service-user-status">Servic User Status</Link> </li>
          <li> <Link to="/service-user-enquiry">Service User Enquiry</Link> </li>
          <li> <Link to="/grouping">Grouping</Link> </li>
        </ul>
      </li>
       
      <li class="menu-item">
        <Link to="/service-user-document">
          <span><i class="fa fa-file" Style="color: #ffffff;background-color: transparent;"></i>Filing Cabinet</span>
        </Link>
      </li>

      <li class="menu-item">
        <a href="#" class="has-chevron" data-toggle="collapse" data-target="#patient1" aria-expanded="false" aria-controls="patient1">
          <span><i class="fas fa-list"></i>Assessments</span>
        </a>
        <ul id="patient1" class="collapse" aria-labelledby="patient1" data-parent="#side-nav-accordion">
           <li> <a href="#">Scored assessment</a> </li>
            <li> <a href="#">General risk assessments</a> </li>
            <li> <a href="#">Risk assessments </a> </li>
            <li> <a href="#">Person centred care plan </a> </li>
            <li> <a href="#">MCA</a> </li>
         
        </ul>
      </li>


      <li class="menu-item">
        <Link to="/vehicle-list">
          <span><i class="fas fa-car"></i>Vehicle Management</span>
        </Link>
      </li>


      <li className="menu-item">
        <Link to="#">
          <span><i className="fa fa-list"></i>Policies and Procedures</span>
        </Link>
      </li>

      <li className="menu-item">
        <a href="#">
          <span><i className="fa fa-list"></i>Admin and General</span>
        </a>
      </li>

      <li className="menu-item">
        <Link to="/calendar">
          <span><i className="fa fa-calendar-days"></i>Calendar</span>
        </Link>
      </li>

      <li className="menu-item">
        <a href="#">
          <span><i className="fa fa-arrow-up"></i>Follow Up</span>
        </a>
      </li>

      <li className="menu-item">
        <a href="#">
          <span><i className="fa fa-list"></i>Handover</span>
        </a>
      </li>

      <li className="menu-item">
        <Link to="/monthlyreview">
          <span><i className="fa fa-star"></i>Monthly Review</span>
        </Link>
      </li>


      <li className="menu-item">
        <Link to="/reception">
          <span><i className="fa fa-tasks"></i> Reception Management </span>
        </Link>
      </li>


       <li className="menu-item">
        <Link to="/messages">
          <span><i className="fa fa-list"></i>Messages</span>
        </Link>
      </li>
     
      <li class="menu-item">
                    <a href="#" class="has-chevron active collapsed" data-toggle="collapse" data-target="#schedule" aria-expanded="false" aria-controls="schedule">
                        
                    <span><i class="fas fa-list-alt"></i>HR</span>
                    </a>
                     <ul id="schedule" class="collapse" aria-labelledby="schedule" data-parent="#side-nav-accordion" style={{}}>
                        <li> <Link to="/employee">Employee</Link> </li>
                        <li> <a href="#">Department</a> </li>
                        <li> <a href="#">Role</a> </li>
                        <li> <Link to="/add-staff">Add Staff</Link> </li>
                        
                    </ul> 
       </li>

       <li className="menu-item">
        <Link to="#">
          <span><i className="fa fa-list"></i>Staff roaster</span>
        </Link>
      </li>
       
       {/* <li className="menu-item">
                    <a href="#" className="has-chevron active collapsed" data-toggle="collapse" data-target="#schedule" aria-expanded="false" aria-controls="schedule">
                    <span><i className="fa fa-list-alt"></i>Schedule</span>
                    </a>
                    <ul id="schedule" className="collapse" aria-labelledby="schedule" data-parent="#side-nav-accordion" Style="">
                        <li> <a href="add-schedule.php">Add Schedule</a> </li>
                        <li> <a href="schedule-list.php">Schedule List</a> </li>
                    </ul>
       </li> */}


      <li className="menu-item">
        <Link to="/logs">
          <span><i className="fa fa-list"></i>Logs</span>
        </Link>
      </li>
      
      <li className="menu-item">
        <Link to="/todolist">
          <span><i className="fa fa-list"></i>Add To Do's</span>
        </Link>
      </li>
    
     
     {/* <li className="menu-item">
                    <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#payment" aria-expanded="false" aria-controls="payment">
                    <span><i className="fa fa-credit-card"></i>Payment</span>
                    </Link>
                    <ul id="payment" className="collapse" aria-labelledby="payment" data-parent="#side-nav-accordion">
                        <li> <Link to="#">Add Payment</Link> </li>
                        <li> <Link to="#">Payment List</Link> </li>
                        <li> <Link to="#">Payment Invoice</Link> </li>
                      </ul>
      </li> */}
                
      
    
    <li className="menu-item">
        <Link to="/keycontacts">
          <span><i className="fa fa-list"></i>Key Contacts</span>
        </Link>
    </li>


     <li className="menu-item">
        <Link to="/support">
          <span><i className="fa fa-list"></i>Support</span>
        </Link>
    </li>

    <li class="menu-item">
        <Link to="/billings" >
          <span><i class="fas fa-cog"></i>Billing &amp; Subscriptions</span>
        </Link>
    </li>

    <li class="menu-item">
        <a href="#">
          <span><i class="fas fa-wrench"></i>Maintenance</span>
        </a>
    </li>

    <li class="menu-item">
        <a href="#" class="has-chevron collapsed" data-toggle="collapse" data-target="#patientset" aria-expanded="false" aria-controls="patientset">
          <span><i class="fas fa-cog"></i>Setting</span>
        </a>
        <ul id="patientset" class="collapse" aria-labelledby="patientset" data-parent="#side-nav-accordion" style={{}}>
           <li> <Link to="/zones">Zones</Link> </li>
        </ul>
    </li>

    <li className="menu-item">
        <Link to="/login">
          <span><i className="fa fa-power-off"></i>Logout</span>
        </Link>
    </li>

    </ul>

    <div class="ps__rail-x" Style="left: 0px; bottom: 0px;">
      <div class="ps__thumb-x" tabindex="0" Style="left: 0px; width: 0px;">
      </div>
    </div>

    <div class="ps__rail-y" Style="top: 0px; height: 625px; right: 0px;">
      <div class="ps__thumb-y" tabindex="0" Style="top: 0px; height: 300px;">
      </div>
    </div>
    
      </aside> 
      <Navbar />

      </>

    )
}

export default Sidebar
