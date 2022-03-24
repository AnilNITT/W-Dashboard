import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';

const AddStaff = () => {
  return (
        <main className="body-content">
            <Sidebar/>
            <div class="ms-content-wrapper">
                <div class="row">
                    <div class="col-md-12">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb pl-0">
                                <li class="breadcrumb-item"><a href="#"><i class="material-icons">home</i> Home</a></li>
                           
                                <li class="breadcrumb-item active" aria-current="page">Add Staff</li>
                            </ol>
                        </nav>
                    </div>
                    <div class="col-xl-12 col-md-12">
                        <div class="ms-panel">
                            
                            <div class="ms-panel-body">
                                <form class="needs-validation" novalidate="">
                                    <div class="form-row">
                                       
                                        
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom001">Select Staff</label>
                                            <div class="input-group">
                                                <select class="form-control">
                                                    <option>Select Staff</option>
                                                    <option>Oatleigt Care Ltd.</option>
                                                    <option>Homeland Ltd.</option>
                                                    <option>Oatland LLP</option>
                                                    <option>All homes</option>
                                                    
                                                </select>

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom001">First Name</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="validationCustom001" placeholder="Enter First Name" required=""/>

                                            </div>
                                        </div>
                                    
                                    
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom2">Last Name</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="validationCustom2" placeholder="Enter Last Name" required=""/>

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-2">
                                            <label for="validationCustom003">Address</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="validationCustom003" placeholder="Address" required=""/>

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom2">Country</label>
                                            <div class="input-group">
                                                <select class="form-control">
                                                   <option>Select Country</option>
                                                   <option>United State</option>
                                                   <option>India</option>
                                                   <option>Ireland</option>
                                                   <option>Russia</option>
                                                   
                                                </select>

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom2">County</label>
                                            <div class="input-group">
                                                <select class="form-control">
                                                   <option>Select County</option>
                                                   <option>test</option>
                                                </select>

                                            </div>
                                        </div>
                                         <div class="col-md-6 mb-3">
                                            <label for="validationCustom2">Gender</label>
                                            <div class="input-group">
                                                <select class="form-control">
                                                   <option>Select Gender</option>
                                                   <option>Male</option>
                                                   <option>Female</option>
                                                </select>

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-2">
                                            <label for="validationCustom003">Date of Birth</label>
                                            <div class="input-group">
                                                <input type="date" class="form-control" id="validationCustom003" required=""/>

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-2">
                                            <label for="validationCustom003">GINB No</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="validationCustom003" placeholder="GINB No" required=""/>

                                            </div>
                                        </div>
                                        
                                         <div class="col-md-6 mb-2">
                                            <label for="validationCustom003">Home Phone Number</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="validationCustom003" placeholder="Home Phone Number" required=""/>

                                            </div>
                                        </div>
                                         <div class="col-md-6 mb-2">
                                            <label for="validationCustom003">Mobile Number</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="validationCustom003" placeholder="Mobile Number" required=""/>

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-2">
                                            <label for="validationCustom003">Email</label>
                                            <div class="input-group">
                                                <input type="email" class="form-control" id="validationCustom003" placeholder="Email" required=""/>

                                            </div>
                                        </div>
                                         <div class="col-md-6 mb-3">
                                            <label for="validationCustom2">User Role</label>
                                            <div class="input-group">
                                                <select class="form-control">
                                                   <option>Select Role</option>
                                                   <option>Admin</option>
                                                   <option>Care</option>
                                                   <option>Management</option>
                                                   <option>House Keeping</option>
                                                   <option>Nursing</option>
                                                   <option>Kitchen</option>
                                                   <option>Support</option>
                                                </select>

                                            </div>
                                        </div>
                                         <div class="col-md-6 mb-3">
                                            <label for="validationCustom2">Access Branch</label>
                                            <div class="input-group">
                                                <select class="form-control">
                                                   <option>Select Branch</option>
                                                   <option>Nursing Home</option>
                                                   <option>Rsidential Home</option>
                                                  
                                                </select>

                                            </div>
                                        </div>
                                         <div class="col-md-6 mb-3">
                                            <label>Select Location</label>
                                            <ul class="ms-list d-flex">
                                                <li class="ms-list-item pl-0">
                                                    <label class="ms-checkbox-wrap">
                                                    <input type="radio" name="checkExample" value=""/>
                                                    <i class="ms-checkbox-check"></i>
                                                    </label>
                                                    <span> Residential Home </span>
                                                </li>
                                                <li class="ms-list-item">
                                                    <label class="ms-checkbox-wrap">
                                                    <input type="radio" name="checkExample" value=""/>
                                                    <i class="ms-checkbox-check"></i>
                                                    </label>
                                                    <span> Nursing Home </span>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <!-- <div class="col-md-6 mb-3">-->
                                        <!--    <label >Status</label>-->
                                        <!--    <ul class="ms-list d-flex">-->
                                        <!--        <li class="ms-list-item pl-0">-->
                                        <!--            <label class="ms-checkbox-wrap">-->
                                        <!--            <input type="radio" name="radioExample" value="">-->
                                        <!--            <i class="ms-checkbox-check"></i>-->
                                        <!--            </label>-->
                                        <!--            <span> Active </span>-->
                                        <!--        </li>-->
                                        <!--        <li class="ms-list-item">-->
                                        <!--            <label class="ms-checkbox-wrap">-->
                                        <!--            <input type="radio" name="radioExample" value="">-->
                                        <!--            <i class="ms-checkbox-check"></i>-->
                                        <!--            </label>-->
                                        <!--            <span> Inactive </span>-->
                                        <!--        </li>-->
                                        <!--    </ul>-->
                                        <!--</div>--> */}
                                        
                                         <div class="col-md-12  mb-3">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Note </label>
                                                    <textarea class="form-control" placeholder="Note"></textarea>
                                                </div>
                                            </div>
                                    </div>
                                    <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Save</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
  )
}

export default AddStaff