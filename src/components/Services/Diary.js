import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar';
import Navbarone from '../User/Navbarone';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'
import NavbarTwo from '../User/NavbarTwo';

const Diary = () => {
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
               <NavbarTwo/>
               <div class="col-md-12">
               <nav aria-label="breadcrumb">
            <ol class="breadcrumb pl-0">
              <li class="breadcrumb-item">
                <a href="#"><i class="material-icons">home</i> Home</a>
              </li>
              <li class="breadcrumb-item active">Diary </li>
            </ol>
               </nav>
          </div>
          <div class="col-md-12" >
          <FullCalendar 
                              initialView="timeGridWeek"
                              headerToolbar={{
                                right:"prev,next today",
                                center:"title",
                                left:"timeGridWeek,timeGridDay"
                                }}
                              // plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                              plugins={[dayGridPlugin, timeGridPlugin,  interactionPlugin]}
                              editable={true}
                              selectable={true}
                              selectMirror={true}
                              dayMaxEvents={true}
                              initialEvents={[
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-01-29T00:00:00+00:00","end":"2022-01-29T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57","url":"invoice.php"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-02-27T00:00:00+00:00","end":"2022-02-27T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice.php"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-02-20T00:00:00+00:00","end":"2022-02-20T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57","url":"invoice.php"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-02-28T00:00:00+00:00","end":"2022-02-28T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57","url":"invoice.php"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-02-23T00:00:00+00:00","end":"2022-02-23T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57","url":"invoice.php"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-04-22T00:00:00+00:00","end":"2022-04-22T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice.php"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-04-23T00:00:00+00:00","end":"2022-04-23T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice.php"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-04-24T00:00:00+00:00","end":"2022-04-24T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice.php"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-04-23T00:00:00+00:00","end":"2022-04-23T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice.php"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-04-29T00:00:00+00:00","end":"2022-04-29T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57","url":"invoice.php"},
                                {"id":1,"title":"rach","allDay":false,"start":"2022-04-27T00:00:00+00:00","end":"2022-04-27T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57","url":"invoice.php"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-04-29T00:00:00+00:00","end":"2022-04-29T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice.php"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-04-30T00:00:00+00:00","end":"2022-04-30T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice.php"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-05-01T00:00:00+00:00","end":"2022-05-01T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice.php"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-05-02T00:00:00+00:00","end":"2022-05-02T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice.php"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-05-03T00:00:00+00:00","end":"2022-05-03T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57","url":"invoice.php"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-05-04T00:00:00+00:00","end":"2022-05-04T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice.php"},
                                {"id":1,"title":"lesley born","allDay":false,"start":"2022-05-05T00:00:00+00:00","end":"202-05-05T00:00:00+00:00","color":"#eaecfb","textColor":"#2643e9","url":"invoice.php"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-05-08T00:00:00+00:00","end":"2022-05-08T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice.php"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-05-06T00:00:00+00:00","end":"2022-05-06T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57","url":"invoice.php"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-05-10T00:00:00+00:00","end":"2022-05-10T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice.php"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-11-19T00:00:00+00:00","end":"2022-11-19T00:00:00+00:00","color":"#eaecfb","textColor":"#2643e9","url":"invoice.php"}
                              ]}
          />
          </div>   




            </div>
            </div>
    </main>
  );
};

export default Diary;
