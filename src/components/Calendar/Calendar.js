import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'


import "@fullcalendar/list/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";


const Calendar = () => {
  return(
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
              <li class="breadcrumb-item active">Calendar </li>
            </ol>
               </nav>
          </div>
          <div class="col-md-12" >
          <FullCalendar 
                              initialView="dayGridMonth"
                              headerToolbar={{
                                right:"prev,next today",
                                center:"title",
                                left:"dayGridMonth,timeGridWeek,timeGridDay"
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

export default Calendar;
