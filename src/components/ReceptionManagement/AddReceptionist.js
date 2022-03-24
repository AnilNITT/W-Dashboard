import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';

const AddReceptionist = () => {
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
                        <h6>Add Receptionist</h6>
                        <Link to="/reception" class="btn btn-primary">Receptionist List
                        </Link>
                     </div>
                     <div class="ms-panel-body">
                      
                     <form action="" class="form-horizontal" enctype="multipart/form-data" method="post">
		
		<div class="box-body">
			<div class="form-group row">
				<div class="col-sm-3">
					<label class="control-label" for="inputFirstName">First Name</label><input class="form-control" id="inputFirstName" name="first_name" placeholder="Enter First Name" type="text" value=""/>
				</div>
				<div class="col-sm-3">
					<label class="control-label" for="inputLastName">Last Name</label><input class="form-control" id="inputLastName" name="last_name" placeholder="Enter Last Name" type="text" value=""/>
				</div>
				<div class="col-sm-3">
					<label class="control-label" for="inputSex">Gender</label><select class="form-control" name="sex">
						<option value="">
							Choose Gender
						</option>
						<option value="male">
							Male
						</option>
						<option value="female">
							Female
						</option>
						<option value="other">
							Other
						</option>
					</select>
				</div>
				<div class="col-sm-3">
					<label class="control-label" for="inputBloodType">Blood Type</label><select class="form-control" name="blood_type" required="">
						<option>
							Choose Blood Type
						</option>
						<option>
							A+
						</option>
						<option>
							A-
						</option>
						<option>
							B+
						</option>
						<option>
							B-
						</option>
						<option>
							AB+
						</option>
						<option>
							AB-
						</option>
						<option>
							0-
						</option>
						<option>
							0+
						</option>
					</select>
				</div>
			</div>
			<div class="form-group row">
				<div class="col-sm-3">
					<label class="control-label" for="inpputBirthDate">Birth Date</label><input class="form-control" id="birth_date" name="birth_date" placeholder="yyyy-mm-dd" type="text" value=""/>
				</div>
				<div class="col-sm-3">
					<label class="control-label" for="inputAddress">Address</label><input class="form-control" id="inputAddress" name="address" placeholder="Enter Address" type="text" value=""/>
				</div>
				<div class="col-sm-3">
					<label class="control-label" for="inputAddress2">Address 2</label><input class="form-control" id="inputAddress2" name="address2" placeholder="Enter Address 2" type="text" value=""/>
				</div>
				<div class="col-sm-3">
					<label class="control-label" for="zipCode">Street</label><input class="form-control" id="street" name="street" placeholder="Enter Street" type="text" value=""/>
				</div>
				<div class="col-sm-3">
					<label class="control-label" for="zipCode">Zip Code</label><input class="form-control" id="zipCode" name="zipcode" placeholder="Enter Zip Code" type="text" value=""/>
				</div>
				<div class="col-sm-3">
					<label class="control-label" for="inputCity">City</label><input class="form-control" id="inputCity" name="city" placeholder="Enter City" type="text" value=""/>
				</div>
				<div class="col-sm-3">
					<label class="control-label" for="province">Province</label><input class="form-control" id="province" name="city" placeholder="Enter Province" type="text" value=""/>
				</div>
				<div class="col-sm-3">
					<label class="control-label" for="inputState">State</label><input class="form-control" id="inputState" name="state" placeholder="Enter State" type="text" value=""/>
				</div>
				<div class="col-sm-3">
					<label class="control-label" for="inputPhoneNumber">Phone Number</label><input class="form-control" id="inputPhoneNumber" name="phone_number" placeholder="Enter Phone Number" type="number" value=""/>
				</div>
				<div class="col-sm-3">
					<label for="inputFile">Profile picture</label><input id="inputFile" name="picture" type="file"/>
				</div>
			</div>

			<div class="form-group row">
				<div class="col-sm-12">
					<label>Enter other informations</label>
					<textarea class="form-control" name="other_info" placeholder="Enter other informations" rows="5"></textarea>
				</div>
			</div>

			<hr/>
			<div class="form-group row">
				<div class="col-sm-6">
					<label class="control-label" for="inputEmail">E-mail</label><input class="form-control" id="inputEmail" name="email" placeholder="Enter E-mail" type="text" value=""/>
				</div>
				<div class="col-sm-6">
					<label class="control-label" for="inputPassword">Password</label><input class="form-control" id="inputPassword" name="password" placeholder="Enter Password" type="text"/>
				</div>
			</div>
			<hr class="info"/>
		</div>
		<div class="box-footer">
			<button class="btn btn-primary" type="submit">Submit</button>
		</div>
	</form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    </main>
  );
};

export default AddReceptionist;
