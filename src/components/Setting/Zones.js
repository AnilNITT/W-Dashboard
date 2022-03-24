import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar'

const Zones = () => {
  return (
    <main className='body-content' >
        <Sidebar/>
        <div className="ms-content-wrapper">
        <div class="row">
                
                <div class="col-md-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb pl-0">
                            <li class="breadcrumb-item">
                                <Link to="/"><i class="material-icons">home</i> Home</Link>
                            </li>
                            <li class="breadcrumb-item active">Zones <a class="btn btn-primary" href="#" data-toggle="modal" data-target="#addzones" Style="float:right; margin-top:0px;">Add Zones</a></li>
                        </ol>
                    </nav>
                    <div class="ms-panel">
                        
                        <div class="ms-panel-body">
                            <div class="table-responsive">
                                <h5>My Test Zones</h5>
                                <table class="table table-striped thead-primary w-100" Style="border-top:2px solid #ddd">
                       
                                   <tbody>
                                <tr>
                                   
                                    <td><img src="../../assets/img/dashboard/patient-1.jpg" alt="people" class="rogiimages"/> Michael Sullivan </td>
                                   
                                   
                                    <td class="center" width="150">
                                       
                                         <a href="#" class="btn btn-secondary"><i class="fa fa-edit"></i>Edit</a>
                                          <a href="#" class="btn btn-danger"> <i class="fa fa-trash"></i>Delete</a>
                                    </td>
                                </tr>
                                 <tr>
                                   
                                    <td><img src="../../assets/img/dashboard/patient-2.jpg" alt="people" class="rogiimages"/> Linda Barrett </td>
                                   
                                   
                                    <td class="center" width="150">
                                       
                                        <a href="#" class="btn btn-secondary"><i class="fa fa-edit"></i>Edit</a>
                                          <a href="#" class="btn btn-danger"> <i class="fa fa-trash"></i>Delete</a>
                                    </td>
                                </tr>
                               
                               
                                </tbody>
                                </table>
                                
                                <h5>ABC Zone</h5>
                                 <table class="table table-striped thead-primary w-100" Style="border-top:2px solid #ddd">
                       
                                   <tbody>
                                <tr>
                                   
                                    <td><img src="../../assets/img/dashboard/patient-3.jpg" alt="people" class="rogiimages"/> Ronald Jacobs </td>
                                   
                                   
                                    <td class="center" width="150">
                                       
                                         <a href="#" class="btn btn-secondary"><i class="fa fa-edit"></i>Edit</a>
                                          <a href="#" class="btn btn-danger"> <i class="fa fa-trash"></i>Delete</a>
                                    </td>
                                </tr>
                                <tr>
                                   
                                    <td><img src="../../assets/img/dashboard/patient-4.jpg" alt="people" class="rogiimages"/> Mark Hunter </td>
                                   
                                   
                                    <td class="center" width="150">
                                       
                                         <a href="#" class="btn btn-secondary"><i class="fa fa-edit"></i>Edit</a>
                                          <a href="#" class="btn btn-danger"> <i class="fa fa-trash"></i>Delete</a>
                                    </td>
                                </tr>
                                
                               
                               
                                </tbody>
                                </table>
                                
                                 <h5>Unassigned</h5>
                                 <table class="table table-striped thead-primary w-100" Style="border-top:2px solid #ddd">
                       
                                   <tbody>
                                <tr>
                                   
                                    <td><img src="../../assets/img/dashboard/patient-5.jpg" alt="people" class="rogiimages"/> Cristina Groves </td>
                                   
                                   
                                    <td class="center" width="150">
                                       
                                         {/* <!--<a href="#" class="btn btn-secondary"><i class="fa fa-edit"></i>Edit</a>-->
                                         <!-- <a href="#" class="btn btn-danger"> <i class="fa fa-trash"></i>Delete</a>--> */}
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
        <div class="modal fade" id="addzones" role="dialog" Style="display: none;" aria-hidden="true">
    <div class="modal-dialog">
    
      {/* <!-- Modal content--> */}
      <div class="modal-content">
        <div class="modal-header">
             <h4 class="modal-title"><strong>Add a new Zone</strong></h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
          
         
        </div>
        <div class="modal-body">
          <form>
              <div class="row">
                                            
                                            <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Title<span class="man_fields1">*</span></label>
                                                    <input type="text" class="form-control" placeholder="Title"/>
                                                </div>
                                            </div>
                                             <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Select User<span class="man_fields1">*</span></label>
                                                    <select class="form-control">
                                                        <option>Select User</option>
                                                        <option>Ronald Jacobs</option>
                                                        <option>Mark Hunter</option>
                                                         <option>Michael Sullivan</option>
                                                    </select>
                 
                                                </div>
                                            </div>
                                              
                                             <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                   
                                                    <input type="submit" name="submit" value="Save" class="btn btn btn-success"/>
                                                </div>
                                            </div>
                                        </div>
          </form>
        </div>
        
      </div>
      
    </div>
  </div>
    </main>  
        )
}

export default Zones