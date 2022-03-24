import React from 'react';
// import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';

const Support = () => {
  return (
    <main class='body-content'>
        <Sidebar/>
        <div class="ms-content-wrapper">
            <div class="row">
               <div class="col-md-12">
                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb pl-0">
                        <li class="breadcrumb-item"><a href="#"><i class="material-icons">home</i> Home</a></li>
                       
                        <li class="breadcrumb-item active" aria-current="page">Support</li>
                     </ol>
                  </nav>
                  <div class="ms-panel">
                     <div class="ms-panel-header ms-panel-custome">
                        <h6>Contact us for support</h6>
                        
                     </div>
                     <div class="ms-panel-body">
                         <form class="needs-validation" novalidate="">
                                    <div class="form-row">
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom01">Your Name</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="validationCustom01" placeholder="Enter Your Name" required=""/>

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom01">Email</label>
                                            <div class="input-group">
                                                <input type="email" class="form-control" id="validationCustom01" placeholder="Enter Email Address" required=""/>

                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="form-row">
                                        <div class="col-md-6 mb-2">
                                            <label>Phone</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="validationCustom04" placeholder="Enter Phone Number" required=""/>

                                            </div>
                                        </div>
                                         <div class="col-md-6 mb-2">
                                            <label>Subject</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="validationCustom04" placeholder="Subject" required=""/>

                                            </div>
                                        </div>
                                    </div>
                                    
                                     <div class="form-row">
                                        <div class="col-md-12 mb-2">
                                            <label>Message</label>
                                            <div class="input-group">
                                                <textarea class="form-control"></textarea>

                                            </div>
                                        </div>
                                   </div>
                                   
                                    <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Submit</button>
                                </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    </main>
  );
};

export default Support;
