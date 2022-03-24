import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';

const AddDocument = () => {
    return (
        <main className="body-content">
            <Sidebar/>
            <div className="ms-content-wrapper">
            <div className="row">
               <div className="col-md-12">
                  <nav aria-label="breadcrumb">
                     <ol className="breadcrumb pl-0">
                        <li className="breadcrumb-item"><Link to="#"><i className="material-icons">home</i> Home</Link></li>
                       
                        <li className="breadcrumb-item active" aria-current="page">Add Document</li>
                     </ol>
                  </nav>
               </div>
               <div className="col-xl-12 col-md-12">
                  <div className="ms-panel">
                     <div className="ms-panel-header ms-panel-custome">
                        <h6>Add Document</h6>
                        <Link to="/documentlist" className="ms-text-primary">Document List
                        </Link>
                     </div>
                     <div className="ms-panel-body">
                     <form className="needs-validation" method="post">
    
        <div className="form-group row">
            <label className="col-2 col-form-label" for="patient_id">Patient ID <i className="text-danger">*</i></label>
            <div className="col-10">
                <input className="form-control" id="patient_id" name="patient_id" Style="height:35px" placeholder="Patient ID" type="text" value=""/>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-2 col-form-label" for="attach_file">Attach File <i className="text-danger">*</i></label>
            <div className="col-10">
                <input id="attach_file" name="attach_file"  type="file"/> <input  id="hidden_attach_file" name="hidden_attach_file" type="hidden" value=""/>
                <p className="hide alert" id="upload-progress"></p>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-2 col-form-label" for="doctor_id">Doctor Name</label>
            <div className="col-10">
                <select aria-hidden="true" className="form-control" Style="height:35px">
                    <option selected="selected" value="">
                        Select Doctor
                    </option>
                    <option value="3">
                        Willam Carlos
                    </option>
                    <option value="4">
                        Adward Chapman
                    </option>
                    <option value="14">
                        Dr Aikenhead
                    </option>
                    <option value="15">
                        Dr Truluck
                    </option>
                    <option value="16">
                        Dr Bonebrake
                    </option>
                    <option value="17">
                        David willy
                    </option>
                    <option value="18">
                        Marry lan
                    </option>
                    <option value="19">
                        Harlin willy
                    </option>
                    <option value="20">
                        Adward Henry
                    </option>
                    <option value="21">
                        Alan Walker
                    </option>
                    <option value="22">
                        John Doye
                    </option>
                </select>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-2 col-form-label" for="description">Description</label>
            <div className="col-10">
                
                <textarea className="form-control" name="description" placeholder="Description" rows="7"></textarea>
            </div>
        </div>
        <div className="form-group row">
             <div className="col-12 text-right">
        
                           <button className="btn btn-primary mt-4 d-inline w-20" type="submit">Add Document</button>
               </div>
          </div>                 
    </form>

                     </div>
                  </div>
               </div>
            </div>
         </div>
        </main>
    )
}

export default AddDocument
