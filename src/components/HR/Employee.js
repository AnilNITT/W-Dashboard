import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';


const Employee = () => {
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
              <li class="breadcrumb-item active">Human Resource</li>
            </ol>
          </nav>
          </div>
        <div class="col-md-12">
            <div class="row boxx">
            <div class="col-md-2">
                    <div class="ms-panel ms-panel-fh">
                      <div class="ms-panel-body clearfix text-center">
                        <h4>Admin</h4>
                        <p>1</p>
                       </div>
                     </div>
               </div>
            <div class="col-md-2">
                    <div class="ms-panel ms-panel-fh">
                      <div class="ms-panel-body clearfix text-center">
                        <h4>Care</h4>
                        <p>0</p>
                       </div>
                     </div>
               </div>
            <div class="col-md-2">
                    <div class="ms-panel ms-panel-fh">
                      <div class="ms-panel-body clearfix text-center">
                        <h4>Management</h4>
                        <p>1</p>
                       </div>
                     </div>
               </div>
            <div class="col-md-2">
                    <div class="ms-panel ms-panel-fh">
                      <div class="ms-panel-body clearfix text-center">
                        <h4>House Keeping</h4>
                        <p>0</p>
                       </div>
                     </div>
               </div>
            <div class="col-md-2">
                    <div class="ms-panel ms-panel-fh">
                      <div class="ms-panel-body clearfix text-center">
                        <h4>Nursing</h4>
                        <p>0</p>
                       </div>
                     </div>
               </div>
            <div class="col-md-2">
                    <div class="ms-panel ms-panel-fh">
                      <div class="ms-panel-body clearfix text-center">
                        <h4>Kitchen</h4>
                        <p>0</p>
                       </div>
                     </div>
               </div>
            <div class="col-md-2">
                    <div class="ms-panel ms-panel-fh">
                      <div class="ms-panel-body clearfix text-center">
                        <h4>Support</h4>
                        <p>0</p>
                       </div>
                     </div>
               </div>
            </div>     
        </div>  
       <div class="col-md-12">
            
          
            <div class="row">
               <div class="col-md-12">
                   <div class="ms-panel ms-panel-fh" Style="height:auto">
                    <div class="ms-panel-header">
                        <h6>Employee</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                         <div class="row">
                                <div class="col-sm-12">
                                    <div class="row">
                                    <div class="col-sm-5">
                               <div class="form-group">
    
                                        <input type="text" class="form-control" id="txtsrch" placeholder="Search By Name"/>
                                    </div>
                                </div>   
                                    <div class="col-sm-5">
                                  <select class="form-control">
          <option>Search by department</option>
          <option>Admin</option>
          <option>Care</option>
          <option>Management</option>
          <option>House Keeping</option>
          <option>Nursing</option>
          <option>Kitchen</option>
          <option>Support</option>
      </select> 
      </div>
                                
                                <div class="col-sm-2">
                                    <div class="form-group">
                                        <button type="button" class="btn btn-success search_btn" onclick="SearchPatients()" id="sbtn1">Search </button>
                                      
                                    </div>
                                </div>
                                    </div>
                                </div>
                              
                               
                            </div>
                    
                    </div>
                    </div>
                    <div class="ms-panel ms-panel-fh" Style="height:auto">
                    
                       <div class="ms-panel-body clearfix"> 
                      <div class="table-responsive">
                                   <div id="data-table-2_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="data-table-2_length"><label>Show <select name="data-table-2_length" aria-controls="data-table-2" class="custom-select custom-select-sm form-control form-control-sm"><option value="12">12</option><option value="25">25</option><option value="30">30</option><option value="-1">Todos</option></select> </label></div></div><div class="col-sm-12 col-md-6"><div id="data-table-2_filter" class="dataTables_filter"><label><input type="search" class="form-control form-control-sm" placeholder="Search Data..." aria-controls="data-table-2"/></label></div></div></div><div class="row"><div class="col-sm-12"><table class="table table-striped thead-primary w-100 dataTable no-footer" id="data-table-2" role="grid" aria-describedby="data-table-2_info">
                                         <thead>
                 <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-sort="ascending" aria-label="First Name: activate to sort column descending" Style="width: 119.75px;">First Name</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Last Name: activate to sort column ascending" Style="width: 117.562px;">Last Name</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Nursing Home: activate to sort column ascending" Style="width: 152.75px;">Nursing Home</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Role: activate to sort column ascending" Style="width: 70.1094px;">Role</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Department: activate to sort column ascending" Style="width: 127.453px;">Department</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Join On: activate to sort column ascending" Style="width: 91.125px;">Join On</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="View: activate to sort column ascending" Style="width: 62.25px;">View</th></tr>
        </thead>
                                   <tbody>
                                    
                                    
                                   
                                  
                               
                                <tr role="row" class="odd">
                                    <td class="sorting_1">John</td>
                                    <td>Doe</td>
                                    <td>Residential Home</td>
                                    <td>Admin</td>
                                    <td>Admin</td>
                                    <td>10/12/2021</td>
                                    <td><a href="employment.php"><img src="images/edit.png" Style="width:24px; border-radius:0px; margin-right:10px;"/></a></td>
                                   </tr><tr role="row" class="even">
                                    <td class="sorting_1">Raonie</td>
                                    <td>Jacoob</td>
                                    <td>Residential Home</td>
                                    <td>Manager</td>
                                    <td>Management</td>
                                    <td>12/12/2021</td>
                                    <td><a href="employment.php"><img src="images/edit.png" Style="width:24px; border-radius:0px; margin-right:10px;"/></a></td>
                                   </tr></tbody>
                                    </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="data-table-2_info" role="status" aria-live="polite">Showing 1 to 2 of 2 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="data-table-2_paginate"><ul class="pagination has-gap"><li class="paginate_button page-item previous disabled" id="data-table-2_previous"><a href="#" aria-controls="data-table-2" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="data-table-2" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item next disabled" id="data-table-2_next"><a href="#" aria-controls="data-table-2" data-dt-idx="2" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
                                </div>
                          
                          
                        </div>
                     </div>
               </div>
           </div>
         </div>
      </div>
    </div>
    </main>
  )
}

export default Employee