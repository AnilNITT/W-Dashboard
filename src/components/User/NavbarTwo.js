import React from 'react';
import {Link} from 'react-router-dom';


const NavbarTwo = () => {
  return(
    <div class="col-md-12">
    <div class="ms-panel">

<div class="ms-panel-body" Style="padding: 0px;">
  <div class="section_box1_content2">
         <div class="row">
             <div class="col-sm-12" Style="padding-left: 30px;">
                 <div class="tab_menus" Style="float:left;">
                     <ul>
                         <li><Link to="/service-user-detail">Service User</Link></li>
                         <li><Link to="/dailylog">Daily Notes</Link></li>
                         <li><Link to="/service-user-chart">Charts</Link></li>
                         <li><Link to="/service-user-document">Documents</Link></li>
                         <li><Link to="#">Support Plan</Link></li>
                         <li><Link to="#">Medication</Link></li>
                     </ul>
                 </div>
             </div>
         </div>
     </div>
     </div>
     </div>
      <div class="clearfix"></div>
</div>
  );
};

export default NavbarTwo;
