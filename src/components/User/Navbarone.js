import React from 'react';
import {Link} from 'react-router-dom';

const Navbarone = () => {
  return(
    <div class="col-md-12" Style="margin-bottom:10px;margin-top:50px;">
    <div class="ms-panel">

    <div class="ms-panel-body" Style="padding: 0px;">
                <div class="profile_menu">
                    <span class="menu"></span>
                    <div class="top-menu top-menu1"><ul>
                           
                            <li id="l1"><Link to="/service-user-detail">Profile </Link></li>
                            <li id="l2"><Link to="/medical">Medical</Link></li>
                            <li id="l3"><Link to="/transfer">Transfer</Link></li>
                            <li id="l4"><Link to="/diary">Diary</Link></li>
                            <li id="l5"><Link to="/assessment">Assessments</Link></li>
                            <li id="l6"><Link to="/bodymap">Body Map</Link></li>
                            <li id="l14"><Link to="/infection">Infection</Link></li>
                            <li id="l7"><Link to="/careplan">Careplan</Link></li>
                            <li id="l8"><Link to="/risk">Risk</Link></li>
                            <li id="l10"><Link to="/accident-incident">Accident &amp; Incident</Link></li>
                            <li id="l13"><Link to="/vital">Vitals </Link></li>
                            <li id="l12"><Link to="/contacts">Contacts</Link></li>
                            <li id="l11"><Link to="/summary">Summary </Link></li>
                        
                        </ul></div>

                    
                </div>
                </div>
                </div>
                <div class="clearfix"></div>
            </div>
  );
};

export default Navbarone;
