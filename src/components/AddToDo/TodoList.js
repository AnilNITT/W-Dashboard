import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';


const TodoList = () => {
    return (
        <main className="body-content">
         <Sidebar/>
         <div class="ms-content-wrapper">
            <div class="row">
               <div class="col-md-12">
                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb pl-0">
                        <li class="breadcrumb-item"><a href="#"><i class="material-icons">home</i> Home</a></li>
                       
                        <li class="breadcrumb-item active" aria-current="page">To-do List</li>
                     </ol>
                  </nav>
                  <div class="ms-panel">
                     <div class="ms-panel-header ms-panel-custome">
                        <h6>To-do List</h6>
                        <Link to="/addtodo" class="btn btn-primary">Add To-do</Link>
                     </div>
                     <div class="ms-panel-body">
                        <div class="table-responsive">
                           <div class="table-responsive">
                           <div id="data-table-2_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="data-table-2_length"><label>Show <select name="data-table-2_length" aria-controls="data-table-2" class="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> </label></div></div><div class="col-sm-12 col-md-6"><div id="data-table-2_filter" class="dataTables_filter"><label><input type="search" class="form-control form-control-sm" placeholder="Search Data..." aria-controls="data-table-2"/></label></div></div></div><div class="row"><div class="col-sm-12"><table id="data-table-2" class="table table-striped thead-primary w-100 dataTable no-footer" role="grid" aria-describedby="data-table-2_info">
                            <thead>
                                <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Title: activate to sort column descending" Style="width: 541.484px;">Title</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Type: activate to sort column ascending" Style="width: 31.6406px;">Type</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Doctor/Carers: activate to sort column ascending" Style="width: 93.375px;">Doctor/Carers</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Start Date: activate to sort column ascending" Style="width: 92.5469px;">Start Date</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="How Often: activate to sort column ascending" Style="width: 70px;">How Often</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="View &amp;amp; Edit: activate to sort column ascending" Style="width: 75.9844px;">View &amp; Edit</th></tr></thead>  

                            <tbody>
                              
                               
                              
                               
                            <tr role="row" class="odd">
                                
                                <td class="sorting_1"><strong>Body mapo for Lol</strong><br/>
                                mark mody maps check for bruises or any cuts as he is being discharged from the hospital</td>
                                <td>Home</td>
                                <td>Justin Parker</td>
                                <td>03-12-2021 19:05</td>
                                <td>Once</td>
                                <td> <a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a></td>
                              </tr><tr role="row" class="even">
                                
                                <td class="sorting_1"><strong>Body mapo for ted</strong><br/>
                                mark mody maps check for bruises or any cuts as he is being discharged from the hospital</td>
                                <td>Home</td>
                                <td>Justin Parker</td>
                                <td>03-12-2021 19:05</td>
                                <td>Daily</td>
                                <td> <a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a></td>
                              </tr><tr role="row" class="odd">
                                
                                <td class="sorting_1"><strong>Body mapo for ted</strong><br/>
                                mark mody maps check for bruises or any cuts as he is being discharged from the hospital</td>
                                <td>Home</td>
                                <td>Justin Parker</td>
                                <td>03-12-2021 19:05</td>
                                <td>Daily</td>
                                <td> <a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a></td>
                              </tr><tr role="row" class="even">
                                
                                <td class="sorting_1"><strong>Body mapo for ted</strong><br/>
                                mark mody maps check for bruises or any cuts as he is being discharged from the hospital</td>
                                <td>Home</td>
                                <td>Justin Parker</td>
                                <td>03-12-2021 19:05</td>
                                <td>Daily</td>
                                <td> <a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a></td>
                              </tr></tbody> 
                           </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="data-table-2_info" role="status" aria-live="polite">Showing 1 to 4 of 4 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="data-table-2_paginate"><ul class="pagination has-gap"><li class="paginate_button page-item previous disabled" id="data-table-2_previous"><a href="#" aria-controls="data-table-2" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="data-table-2" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item next disabled" id="data-table-2_next"><a href="#" aria-controls="data-table-2" data-dt-idx="2" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
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

export default TodoList
