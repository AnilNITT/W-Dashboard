import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';

const Reception = () => {
  return(
    <main className="body-content">
        <Sidebar/>
        <div class="ms-content-wrapper">
            <div class="row">
               <div class="col-md-12">
                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb pl-0">
                        <li class="breadcrumb-item"><a href="#"><i class="material-icons">home</i> Home</a></li>
                      
                        <li class="breadcrumb-item active" aria-current="page">Reception Management</li>
                     </ol>
                  </nav>
               </div>
               <div class="col-xl-12 col-md-12">
                  <div class="ms-panel">
                    <div class="ms-panel-header ms-panel-custome">
                        <h6>Receptionist List</h6>
                        <Link to="/addreception" class="btn btn-primary">Add Receptionist
                        </Link>
                     </div>
                     <div class="ms-panel-body">
                      
                      <div id="data-table-2_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="data-table-2_length"><label>Show <select name="data-table-2_length" aria-controls="data-table-2" class="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> </label></div></div><div class="col-sm-12 col-md-6"><div id="data-table-2_filter" class="dataTables_filter"><label><input type="search" class="form-control form-control-sm" placeholder="Search Data..." aria-controls="data-table-2"/></label></div></div></div><div class="row"><div class="col-sm-12"><table class="table table-striped thead-primary w-100 dataTable no-footer" id="data-table-2" role="grid" aria-describedby="data-table-2_info">
                                 <thead>
			<tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-sort="ascending" aria-label="ID: activate to sort column descending" Style="width: 16.0312px;">ID</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="First Name: activate to sort column ascending" Style="width: 76.5312px;">First Name</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Last Name: activate to sort column ascending" Style="width: 74.9219px;">Last Name</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Gender: activate to sort column ascending" Style="width: 52.3281px;">Gender</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="E-mail: activate to sort column ascending" Style="width: 158.109px;">E-mail</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Address: activate to sort column ascending" Style="width: 59.6094px;">Address</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" Style="width: 51.3906px;">Status</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Phone Number: activate to sort column ascending" Style="width: 104.734px;">Phone Number</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="View &amp;amp; Edit: activate to sort column ascending" Style="width: 80.3438px;">View &amp; Edit</th></tr>
		</thead>
                <tbody>
			    
		<tr role="row" class="odd">
				<td class="sorting_1">47</td>
				<td>Receptionist</td>
				<td>Receptionist</td>
				<td>Male</td>
				<td>receptionist@example.com</td>
				<td>Address</td>
				<td>
					<a href="#"><i class="fa fa-circle text-danger off"></i> <span id="status-chat">Offline</span></a>
				</td>
				<td>12345678</td>
				<td>
					<a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> 
				</td>
			</tr></tbody>
                                </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="data-table-2_info" role="status" aria-live="polite">Showing 1 to 1 of 1 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="data-table-2_paginate"><ul class="pagination has-gap"><li class="paginate_button page-item previous disabled" id="data-table-2_previous"><a href="#" aria-controls="data-table-2" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="data-table-2" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item next disabled" id="data-table-2_next"><a href="#" aria-controls="data-table-2" data-dt-idx="2" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    </main>
  );
};

export default Reception;
