import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';

const AddVehicle = () => {
  return (
    <main className="body-content">
        <Sidebar/>
        <div class="ms-content-wrapper">
            <div class="row">
               <div class="col-md-12">
                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb pl-0">
                        <li class="breadcrumb-item"><a href="#"><i class="material-icons">home</i> Home</a></li>
                      
                        <li class="breadcrumb-item active" aria-current="page">Vehicle Management</li>
                     </ol>
                  </nav>
               </div>
               <div class="col-xl-12 col-md-12">
                  <div class="ms-panel">
                    <div class="ms-panel-header ms-panel-custome">
                        <h6>Add Car Details</h6>
                        {/* <!--<a href="reception-management.php" class="btn btn-primary">Receptionist List-->
                        <!--</a>--> */}
                     </div>
                     <div class="ms-panel-body">
                      
                     <form action="" class="form-horizontal" enctype="multipart/form-data" method="post">
		
		<div class="box-body">
			<div class="form-group row">
				<div class="col-sm-6">
					<label class="control-label">Car Registration Number</label>
					<input class="form-control" name="regno" type="text"/>
				</div>
				<div class="col-sm-6">
					<label class="control-label" for="inputLastName">Upload  Photo</label>
					<input class="form-control" name="vehicleimage" type="file"/>
				</div>
				<div class="col-sm-6">
					<label class="control-label">Make</label>
				<input class="form-control" name="make" type="text"/>
				</div>
				<div class="col-sm-6">
					<label class="control-label">Model</label>
				<input class="form-control" name="model" type="text"/>
				</div>
				<div class="col-sm-6">
					<label class="control-label">Derivative</label>
				<input class="form-control" name="derivative" type="text"/>
				</div>
				<div class="col-sm-6">
					<label class="control-label">Engine Size</label>
				<input class="form-control" name="enginesize" type="text"/>
				</div>
				<div class="col-sm-6">
					<label class="control-label">Fuel Type</label>
				<input class="form-control" name="fueltype" type="text"/>
				</div>
				<div class="col-sm-6">
				<label class="control-label">Year</label>
				<input class="form-control" name="fueltype" type="text"/>
				</div>
			   	<div class="col-sm-6">
				<label class="control-label">Insurance (Valid From)</label>
				<input class="form-control" name="ivalidfrom" type="date"/>
				</div>
				<div class="col-sm-6">
				<label class="control-label">Insurance (Valid To)</label>
				<input class="form-control" name="ivalidto" type="date"/>
				</div>
			    <div class="col-sm-6">
				<label class="control-label">Road Tax (Valid From)</label>
				<input class="form-control" name="rvalidfrom" type="date"/>
				</div>
				<div class="col-sm-6">
				<label class="control-label">Road Tax Renewal date</label>
				<input class="form-control" name="rvalidto" type="date"/>
				</div>
				<div class="col-sm-6">
				<label class="control-label">MOT (Valid From)</label>
				<input class="form-control" name="mvalidfrom" type="date"/>
				</div>
				<div class="col-sm-6">
				<label class="control-label">MOT (Expiry date)</label>
				<input class="form-control" name="mexpirydate" type="date"/>
				</div>
				<div class="col-sm-6">
				<label class="control-label">Service date</label>
				<input class="form-control" name="servicedate" type="date"/>
				</div>
				<div class="col-sm-6">
				<label class="control-label">Next Service date</label>
				<input class="form-control" name="nextservicedate" type="date"/>
				</div>
			</div>
			
		</div>
		<div class="box-footer">
			<button class="btn btn-primary" type="submit">Save</button>
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

export default AddVehicle