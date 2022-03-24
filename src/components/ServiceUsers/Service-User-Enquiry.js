import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';


const ServiceUserEnquiry = () => {
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
              <li class="breadcrumb-item active">Service User Enquiry <a class="btn btn-primary" href="javascript:void(0)" Style="float:right; margin-top:0px;" data-toggle="modal" data-target="#create">Create New</a></li>
            </ol>
          </nav>
          <div class="ms-panel">
                       
                        <div class="ms-panel-body">
                            <div class="table-responsive">
                                <div id="data-table-2_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="data-table-2_length"><label>Show <select name="data-table-2_length" aria-controls="data-table-2" class="custom-select custom-select-sm form-control form-control-sm"><option value="12">12</option><option value="25">25</option><option value="30">30</option><option value="-1">Todos</option></select> </label></div></div><div class="col-sm-12 col-md-6"><div id="data-table-2_filter" class="dataTables_filter"><label><input type="search" class="form-control form-control-sm" placeholder="Search Data..." aria-controls="data-table-2"/></label></div></div></div><div class="row"><div class="col-sm-12"><table class="table table-striped thead-primary w-100 dataTable no-footer" id="data-table-2" role="grid" aria-describedby="data-table-2_info">
                                 <thead>
                 <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Date &amp;amp; Time: activate to sort column descending" Style="width: 152.516px;">Date &amp; Time</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Service user name: activate to sort column ascending" Style="width: 165.391px;">Service user name</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="DOB: activate to sort column ascending" Style="width: 72.4219px;">DOB</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Funding: activate to sort column ascending" Style="width: 79.375px;">Funding</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Conducted by: activate to sort column ascending" Style="width: 127.234px;">Conducted by</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" Style="width: 84.9219px;">Status</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="View &amp;amp; Edit: activate to sort column ascending" Style="width: 75.9844px;">View &amp; Edit</th></tr>
        </thead>
                                   <tbody>
                                
                                
                                
                                
                                 
                                
                                 
                                
                                
                                
                                 
                                
                               <tr role="row" class="odd">
                                    <td class="sorting_1">08/01/2021 10:00 PM</td>
                                    <td>Ripula Jones</td> 
                                   
                                     <td>23/04/1990</td>
                                   <td></td>
                                   <td>Lorem Ipsum</td>
                                   <td>  <label class="toggleSwitch nolabel" onclick="">
                                    <input type="checkbox" checked=""/>
                                    <span>
                                    <span>Inactive</span>
                                    <span>Active</span>
                                      </span>
                                     <a></a>
                                    </label></td>
                                    <td class="center" width="80">
                                        <a href="#"><img src="images/edit.png" Style="width:24px; border-radius:0px; margin-right:10px;"/></a> 
                                    </td>
                                </tr><tr role="row" class="even">
                                    <td class="sorting_1">08/01/2021 10:00 PM</td>
                                    <td>Ripula Jones</td> 
                                   
                                     <td>23/04/1990</td>
                                   <td></td>
                                   <td>Lorem Ipsum</td>
                                   <td>  <label class="toggleSwitch nolabel" onclick="">
                                    <input type="checkbox" checked=""/>
                                    <span>
                                    <span>Inactive</span>
                                    <span>Active</span>
                                      </span>
                                     <a></a>
                                    </label></td>
                                    <td class="center" width="80">
                                        <a href="#"><img src="images/edit.png" Style="width:24px; border-radius:0px; margin-right:10px;"/></a> 
                                    </td>
                                </tr><tr role="row" class="odd">
                                    <td class="sorting_1">10/10/2021 10:00 PM</td>
                                    <td>Ripula Jones</td>
                                   
                                     <td>23/04/1990</td>
                                   <td></td>
                                   <td>Lorem Ipsum</td>
                                   <td>  <label class="toggleSwitch nolabel" onclick="">
                                    <input type="checkbox" checked=""/>
                                    <span>
                                    <span>Inactive</span>
                                    <span>Active</span>
                                      </span>
                                     <a></a>
                                    </label></td>
                                    <td class="center" width="80">
                                        <a href="#"><img src="images/edit.png" Style="width:24px; border-radius:0px; margin-right:10px;"/></a> 
                                    </td>
                                </tr><tr role="row" class="even">
                                    <td class="sorting_1">10/10/2021 10:00 PM</td>
                                    <td>Ripula Jones</td>
                                   
                                   <td>23/04/1990</td>
                                   <td></td>
                                   <td>Lorem Ipsum</td>
                                   <td>  <label class="toggleSwitch nolabel" onclick="">
                                    <input type="checkbox" checked=""/>
                                    <span>
                                    <span>Inactive</span>
                                    <span>Active</span>
                                      </span>
                                     <a></a>
                                    </label></td>
                                    <td class="center" width="80">
                                        <a href="#"><img src="images/edit.png" Style="width:24px; border-radius:0px; margin-right:10px;"/></a> 
                                    </td>
                                </tr><tr role="row" class="odd">
                                    
                                    <td class="sorting_1">10/12/2021 10:30 PM</td>
                                     <td>Ronak batra</td> 
                                    <td>23/04/1990</td>
                                   <td></td>
                                   <td>Lorem Ipsum</td>
                                   <td>  <label class="toggleSwitch nolabel" onclick="">
                                    <input type="checkbox" checked=""/>
                                    <span>
                                    <span>Inactive</span>
                                    <span>Active</span>
                                      </span>
                                     <a></a>
                                    </label></td>
                                    <td class="center" width="80">
                                        <a href="#"><img src="images/edit.png" Style="width:24px; border-radius:0px; margin-right:10px;"/></a> 
                                    </td>
                                </tr><tr role="row" class="even">
                                    
                                    <td class="sorting_1">10/12/2021 10:30 PM</td>
                                     <td>Ronak batra</td> 
                                    
                                     <td>23/04/1990</td>
                                   <td></td>
                                   <td>Lorem Ipsum</td>
                                   <td>  <label class="toggleSwitch nolabel" onclick="">
                                    <input type="checkbox" checked=""/>
                                    <span>
                                    <span>Inactive</span>
                                    <span>Active</span>
                                      </span>
                                     <a></a>
                                    </label></td>
                                    <td class="center" width="80">
                                        <a href="#"><img src="images/edit.png" Style="width:24px; border-radius:0px; margin-right:10px;"/></a> 
                                    </td>
                                </tr><tr role="row" class="odd">
                                    <td class="sorting_1">12/12/2021 10:00 PM</td>
                                    <td>Jainy Sadanand</td> 
                                    
                                    <td>23/04/1990</td>
                                   <td></td>
                                   <td>Lorem Ipsum</td>
                                   <td>  <label class="toggleSwitch nolabel" onclick="">
                                    <input type="checkbox" checked=""/>
                                    <span>
                                    <span>Inactive</span>
                                    <span>Active</span>
                                      </span>
                                     <a></a>
                                    </label></td>
                                    <td class="center" width="80">
                                        <a href="#"><img src="images/edit.png" Style="width:24px; border-radius:0px; margin-right:10px;"/></a> 
                                    </td>
                                </tr><tr role="row" class="even">
                                    <td class="sorting_1">12/12/2021 10:00 PM</td>
                                    <td>Jainy Sadanand</td> 
                                    
                                    <td>23/04/1990</td>
                                   <td></td>
                                   <td>Lorem Ipsum</td>
                                   <td>  <label class="toggleSwitch nolabel" onclick="">
                                    <input type="checkbox" checked=""/>
                                    <span>
                                    <span>Inactive</span>
                                    <span>Active</span>
                                      </span>
                                     <a></a>
                                    </label></td>
                                    <td class="center" width="80">
                                        <a href="#"><img src="images/edit.png" Style="width:24px; border-radius:0px; margin-right:10px;"/></a> 
                                    </td>
                                </tr><tr role="row" class="odd">
                                    <td class="sorting_1">15/01/2021 10:00 PM</td>
                                     <td>Abudul Mohamad</td> 
                                    
                                     <td>23/04/1990</td>
                                   <td></td>
                                   <td>Lorem Ipsum</td>
                                   <td>  <label class="toggleSwitch nolabel" onclick="">
                                    <input type="checkbox" checked=""/>
                                    <span>
                                    <span>Inactive</span>
                                    <span>Active</span>
                                      </span>
                                     <a></a>
                                    </label></td>
                                    <td class="center" width="80">
                                        <a href="#"><img src="images/edit.png" Style="width:24px; border-radius:0px; margin-right:10px;"/></a> 
                                    </td>
                                </tr><tr role="row" class="even">
                                    <td class="sorting_1">15/01/2021 10:00 PM</td>
                                     <td>Abudul Mohamad</td> 
                                    
                                    <td>23/04/1990</td>
                                   <td></td>
                                   <td>Lorem Ipsum</td>
                                   <td>  <label class="toggleSwitch nolabel" onclick="">
                                    <input type="checkbox" checked=""/>
                                    <span>
                                    <span>Inactive</span>
                                    <span>Active</span>
                                      </span>
                                     <a></a>
                                    </label></td>
                                    <td class="center" width="80">
                                        <a href="#"><img src="images/edit.png" Style="width:24px; border-radius:0px; margin-right:10px;"/></a> 
                                    </td>
                                </tr><tr role="row" class="odd">
                                    <td class="sorting_1">26/05/2021 10:00 PM</td>
                                    <td>Jacky Jones</td>
                                    
                                     <td>23/04/1990</td>
                                   <td></td>
                                   <td>Lorem Ipsum</td>
                                   <td>  <label class="toggleSwitch nolabel" onclick="">
                                    <input type="checkbox" checked=""/>
                                    <span>
                                    <span>Inactive</span>
                                    <span>Active</span>
                                      </span>
                                     <a></a>
                                    </label></td>
                                    <td class="center" width="80">
                                        <a href="#"><img src="images/edit.png" Style="width:24px; border-radius:0px; margin-right:10px;"/></a> 
                                    </td>
                                </tr><tr role="row" class="even">
                                    <td class="sorting_1">26/05/2021 10:00 PM</td>
                                    <td>Jacky Jones</td>
                                    
                                     <td>23/04/1990</td>
                                   <td></td>
                                   <td>Lorem Ipsum</td>
                                   <td>  <label class="toggleSwitch nolabel" onclick="">
                                    <input type="checkbox" checked=""/>
                                    <span>
                                    <span>Inactive</span>
                                    <span>Active</span>
                                      </span>
                                     <a></a>
                                    </label></td>
                                    <td class="center" width="80">
                                        <a href="#"><img src="images/edit.png" Style="width:24px; border-radius:0px; margin-right:10px;"/></a> 
                                    </td>
                                </tr></tbody>
                                </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="data-table-2_info" role="status" aria-live="polite">Showing 1 to 12 of 12 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="data-table-2_paginate"><ul class="pagination has-gap"><li class="paginate_button page-item previous disabled" id="data-table-2_previous"><a href="#" aria-controls="data-table-2" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="data-table-2" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item next disabled" id="data-table-2_next"><a href="#" aria-controls="data-table-2" data-dt-idx="2" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
                            </div>
                        </div>
                    </div>
          </div>
       
    </div>
    
     <div class="new_modals">
                <div class="modal fade none-border" id="createtransfer">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                               <h4 class="modal-title"><strong>Service User Enquiry</strong></h4>
                               <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SavePatients()">Save</button>
                                </div>

                               
                            </div>
                            <div class="row cal_m">
                                <div class="modal_contents">

                                    <div role="form">
                                        <div class="row">
                                            
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Date of transfer <span class="man_fields1">*</span></label>
                                                    <input type="date" class="form-control"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Time <span class="man_fields1">*</span></label>
                                                    <input type="time" class="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-12 col-lg-12">
                                                  <div class="form-group">
                                                    <label for="exampleInputEmail1">Created By</label>
                                                    <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlMerital">
                                                       <option value="">Select Staff</option>
                                       <option value="">John doe</option>
                                       <option value="">Raxon Mary</option>
                                        <option value="">Tokder kelly</option>
                                                    </select></span>
                                                </div>
                                               
                                            </div>
                                         
                                        </div>
                                        <div class="row">
                                           
                                            <div class="col-sm-6 col-lg-6">
                                               <div class="form-group">
                                                <label for="exampleInputEmail1">Transfer location <span class="man_fields1">*</span></label>
                                                  <input type="text" class="form-control" name="transferloaction" placeholder="Location"/> 
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Reason</label>
                                                    <input type="text" class="form-control" placeholder="Reason"/>
                                                </div>
                                            </div>
                                        </div>
                                         <div class="row">
                                             <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Transportation</label>
                                                    <input type="text" class="form-control" placeholder="Transportation"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Equipments</label>
                                                    <input type="text" class="form-control" placeholder="Equipments"/>
                                                </div>
                                            </div>
                                         </div>
                                         <div class="row">
                                             <div class="col-sm-12 col-lg-12">
                                                 <label for="exampleInputEmail1">Expected to return</label>
                                                <div class="input-group form-group">
                                                    
                                                   <div class="yesno"><input type="radio" name="radio" value="Yes" onclick="show1();"/> Yes </div>
                                                   <div class="yesno"><input type="radio" name="radio" value="No" onclick="show2();"/> No </div>
                                                   <div class="yesno"><input type="radio" name="radio" value="TBC" onclick="show2();"/> TBC </div>
                                                   
                                                </div>
                                            </div>
                                         
                                         </div>
                                         
                                            <div id="div1" Style="display:none;">
                                                <div class="row">
                                          <div class="col-sm-12 col-lg-12">
                                            <div class="form-group">
                                             <label for="exampleInputEmail1">Date return</label>
                                               <input type="date" class="form-control"/>
                                               
                                            </div>
                                            </div>
                                            <div class="col-sm-12 col-lg-12">
                                            <div class="form-group">
                                             <label for="exampleInputEmail1">Date of expected to return (Optional)</label>
                                               <input type="date" class="form-control"/>
                                               
                                            </div>
                                            </div>
                                            </div> 
                                          </div>
                                         <div class="row">
                                             <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Notes</label>
                                                 <textarea class="form-control" placeholder="Notes"></textarea>
                                                </div>
                                            </div>
                                        </div>
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

export default ServiceUserEnquiry