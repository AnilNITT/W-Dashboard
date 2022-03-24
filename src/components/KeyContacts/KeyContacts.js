import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar';


const KeyContacts = () => {
  return(
    <main class='body-content'>
        <Sidebar/>
        <div class="ms-content-wrapper">
            <div class="row">
               <div class="col-md-12">
                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb pl-0">
                        <li class="breadcrumb-item"><Link to="/"><i class="material-icons">home</i></Link></li>
                       
                        <li class="breadcrumb-item active" aria-current="page">Key Contacts</li>
                     </ol>
                  </nav>
                  <div class="ms-panel">
                     <div class="ms-panel-header ms-panel-custome">
                        <h6>Key Contacts</h6>
                        
                     </div>
                     <div class="ms-panel-body">
                        <div class="table-responsive">
                           <div id="data-table-2_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="data-table-2_length"><label>Show <select name="data-table-2_length" aria-controls="data-table-2" class="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> </label></div></div><div class="col-sm-12 col-md-6"><div id="data-table-2_filter" class="dataTables_filter"><label><input type="search" class="form-control form-control-sm" placeholder="Search Data..." aria-controls="data-table-2"/></label></div></div></div><div class="row"><div class="col-sm-12"><table id="data-table-2" class="table table-striped thead-primary w-100 dataTable no-footer" role="grid" aria-describedby="data-table-2_info">
                            <thead>
                                <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Contact Name: activate to sort column descending" Style="width: 129.641px;">Contact Name</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Email Id: activate to sort column ascending" Style="width: 124.875px;">Email Id</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Phone Number: activate to sort column ascending" Style="width: 136.5px;">Phone Number</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Address: activate to sort column ascending" Style="width: 199.188px;">Address</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="View &amp;amp; Edit: activate to sort column ascending" Style="width: 106.797px;">View &amp; Edit</th></tr></thead>  

                            <tbody>
                              
                              
                               
                              
                              
                            <tr role="row" class="odd">
                                <td class="sorting_1">Ani Gones</td>
                                <td>test4@gmail.com</td>
                                <td>6548791236</td>
                                <td>222, lorem Ipsum, jJhf</td>
                                <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a></td>
                              </tr><tr role="row" class="even">
                                <td class="sorting_1">Ilusa herris</td>
                                <td>test2@gmail.com</td>
                                <td>7569845213</td>
                                <td>410, lorem Ipsum, Foperds</td>
                                <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a></td>
                              </tr><tr role="row" class="odd">
                                <td class="sorting_1">John Doe</td>
                                <td>test1@gmail.com</td>
                                <td>8779779999</td>
                                <td>124, lorem Ipsum, jJhf</td>
                                <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a></td>
                              </tr><tr role="row" class="even">
                                <td class="sorting_1">Mithun Hgop</td>
                                <td>test5@gmail.com</td>
                                <td>8745685684</td>
                                <td>502, lorem Ipsum, jJhf</td>
                                <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a></td>
                              </tr><tr role="row" class="odd">
                                <td class="sorting_1">Ranbba holke</td>
                                <td>test3@gmail.com</td>
                                <td>9877778888</td>
                                <td>302, lorem Ipsum, Wsdd</td>
                                <td><a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a></td>
                              </tr></tbody> 
                           </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="data-table-2_info" role="status" aria-live="polite">Showing 1 to 5 of 5 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="data-table-2_paginate"><ul class="pagination has-gap"><li class="paginate_button page-item previous disabled" id="data-table-2_previous"><a href="#" aria-controls="data-table-2" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="data-table-2" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item next disabled" id="data-table-2_next"><a href="#" aria-controls="data-table-2" data-dt-idx="2" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    </main>
  );
};

export default KeyContacts;
