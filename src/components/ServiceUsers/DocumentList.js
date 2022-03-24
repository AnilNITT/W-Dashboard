import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';
import Navbarone from '../User/Navbarone';
import NavbarTwo from '../User/NavbarTwo';

const DocumentList = () => {
    return (
        <main className="body-content">
             <Sidebar/>
            <div className="ms-content-wrapper">
            <div className="row">
               <Navbarone/>
               <NavbarTwo/>
               <div class="col-md-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb pl-0">
                            <li class="breadcrumb-item">
                                <a href="#"><i class="material-icons">home</i> Home</a>
                            </li>
                            <li class="breadcrumb-item active">Document List <a class="btn btn-primary" href="#" Style="float:right; margin-top:0px;" data-toggle="modal" data-target="#createdoc">Create New</a></li>
                        </ol>
                    </nav>
                    <div class="ms-panel">
                        
                        <div class="ms-panel-body">
                            <div class="table-responsive">
                                <h5 Style="color:#651f70">Care plan</h5>
                                <table class="table table-striped thead-primary w-100" Style="border-top: 2px solid #651f70;">
                       
                                   <tbody>
                                <tr Style="border-bottom:1px solid #ddd">
                                   
                                    <td><i class="fa-regular fa-file" Style="font-size:36px;"></i> Document1 <span class="badge badge-success">02/08/2022</span></td>
                                   
                                   
                                    <td class="center" width="150">
                                        <a href="#" class="btn view" Style="font-size:12px; padding:7px;"> <i class="fa fa-download"></i> Download</a>
                                         <a href="#" data-toggle="modal" data-target="#editdoc" class="btn btn-primary" Style="font-size:12px; padding:7px;"><i class="fa fa-edit"></i>Edit</a>
                                          <a href="#" class="btn btn-danger" Style="font-size:12px; padding:7px;"> <i class="fa fa-trash"></i>Delete</a>
                                    </td>
                                </tr>
                                <tr>
                                   
                                    <td><i class="fa-regular fa-file" Style="font-size:36px;"></i> Document1 <span class="badge badge-success">03/08/2022</span></td>
                                   
                                   
                                    <td class="center" width="150">
                                         <a href="#" class="btn view" Style="font-size:12px; padding:7px;"><i class="fa fa-download"></i> Download</a>
                                         <a href="#" data-toggle="modal" data-target="#editdoc" class="btn btn-primary" Style="font-size:12px; padding:7px;"><i class="fa fa-edit"></i>Edit</a>
                                          <a href="#" class="btn btn-danger" Style="font-size:12px; padding:7px;"><i class="fa fa-trash"></i>Delete</a>
                                    </td>
                                </tr>
                               
                               
                                </tbody>
                                </table>
                                
                                 <h5 Style="color:#651f70">Incident Reports</h5>
                                 <table class="table table-striped thead-primary w-100" Style="border-top: 2px solid #651f70;">
                       
                                   <tbody>
                                <tr Style="border-bottom:1px solid #ddd">
                                   
                                    <td><i class="fa-regular fa-file" Style="font-size:36px;"></i> Document1 <span class="badge badge-success">01/08/2022</span></td>
                                   
                                   
                                   <td class="center" width="150">
                                         <a href="#" class="btn view" Style="font-size:12px; padding:7px;"><i class="fa fa-download"></i> Download</a>
                                         <a href="#" data-toggle="modal" data-target="#editdoc" class="btn btn-primary" Style="font-size:12px; padding:7px;"><i class="fa fa-edit"></i>Edit</a>
                                          <a href="#" class="btn btn-danger" Style="font-size:12px; padding:7px;"><i class="fa fa-trash"></i>Delete</a>
                                    </td>
                                </tr>
                                
                                <tr Style="border-bottom:1px solid #ddd">
                                   
                                    <td><i class="fa-regular fa-file" Style="font-size:36px;"></i> Document2 <span class="badge badge-success">12/08/2021</span></td>
                                   
                                   
                                   <td class="center" width="150">
                                         <a href="#" class="btn view" Style="font-size:12px; padding:7px;"><i class="fa fa-download"></i> Download</a>
                                         <a href="#" data-toggle="modal" data-target="#editdoc" class="btn btn-primary" Style="font-size:12px; padding:7px;"><i class="fa fa-edit"></i>Edit</a>
                                          <a href="#" class="btn btn-danger" Style="font-size:12px; padding:7px;"><i class="fa fa-trash"></i>Delete</a>
                                    </td>
                                </tr>
                               
                                </tbody>
                                </table>
                                
                                 <h5 Style="color:#651f70">Visit Log</h5>
                                 <table class="table table-striped thead-primary w-100" Style="border-top: 2px solid #651f70;">
                       
                                   <tbody>
                                <tr>
                                    <td><i class="fa-regular fa-file" Style="font-size:36px;"></i> Document1 <span class="badge badge-success">01/08/2022</span></td>
                                   <td class="center" width="150">
                                         <a href="#" class="btn view" Style="font-size:12px; padding:7px;"><i class="fa fa-download"></i> Download</a>
                                         <a href="#" data-toggle="modal" data-target="#editdoc" class="btn btn-primary" Style="font-size:12px; padding:7px;"><i class="fa fa-edit"></i>Edit</a>
                                          <a href="#" class="btn btn-danger" Style="font-size:12px; padding:7px;"><i class="fa fa-trash"></i>Delete</a>
                                    </td>
                                </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div class="new_modals">
                <div class="modal fade none-border" id="createdoc" Style="display: none;" aria-hidden="true">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                               <h4 class="modal-title"><strong>Add Document</strong></h4>
                               <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SavePatients()">Save</button>
                                </div>

                               
                            </div>
                            <div class="row cal_m">
                                <div class="modal_contents">

                                    <div role="form">
                                        <div class="row">
                                            
                                            <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Document Title<span class="man_fields1">*</span></label>
                                                     <input class="form-control" name="documenttitle" type="text" value=""/>
                                                </div>
                                            </div>
                                             <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Folder<span class="man_fields1">*</span></label>
                                                     <select class="form-control">
                   <option>Select Folder</option>
                   <option>Users guide</option>
                   <option>care plan</option>
                   <option>Mar sheets</option>
                   <option>Body maps </option>
                   <option>Incidents reports</option>
                   <option>Visit log </option>
               </select>
                                                </div>
                                            </div>
                                            
                                            <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Upload document<span class="man_fields1">*</span></label>
                                                     <input type="file" class="form-control" name="uploaddoc"/> 
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Upload date </label>
                                                    <input class="form-control" name="date" type="date"/>
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

export default DocumentList
