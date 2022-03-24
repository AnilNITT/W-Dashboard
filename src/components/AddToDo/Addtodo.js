import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';

const Addtodo = () => {
  return(
    <main className="body-content">
        <Sidebar/>
        <div class="ms-content-wrapper">
            <div class="row">
               <div class="col-md-12">
                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb pl-0">
                        <li class="breadcrumb-item"><a href="#"><i class="material-icons">home</i> Home</a></li>
                      
                        <li class="breadcrumb-item active" aria-current="page">Create Task</li>
                     </ol>
                  </nav>
               </div>
               <div class="col-xl-12 col-md-12">
                  <div class="ms-panel">
                     
                     <div class="ms-panel-body">
                        <form class="needs-validation" novalidate="">
                       
	
                       <div id="firstdiv">
                           <center> 
                           <h4>Choose a Category</h4><br/>
                           </center>
                             <div Style="display: flex; flex-wrap: wrap; justify-content: center; margin: 50px 0px 0px auto;">
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		    <label>
		        <input type="radio" name="radio1" onclick="show2()" style={{"display":"none"}}/>
			<img src="../../assets/img/cat-icon/1.png" alt="people" Style="background:#136D97"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Food And Drinks</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show2();" Style="display:none;"/>
			<img src="../../assets/img/cat-icon/2.png" alt="people" Style="background:#4E91C5"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Personal care</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show2();" Style="display:none;"/>
		<img src="../../assets/img/cat-icon/3.png" alt="people" Style="background:#76B2D7"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px; text-align: center; word-break: break-word;">  Personal Allowance</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show2();" Style="display:none;"/>
		<img src="../../assets/img/cat-icon/4.png" alt="people" Style="background:#B2D0E8"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px; text-align: center; word-break: break-word;"> House Work</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show2();" Style="display:none;"/>
		<img src="../../assets/img/cat-icon/5.png" alt="people" Style="background:#136D97"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Visit Log</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show2();" Style="display:none;"/>
		<img src="../../assets/img/cat-icon/6.png" alt="people" Style="background:#4E91C5"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Incident</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show2();" Style="display:none;"/>
		<img src="../../assets/img/cat-icon/7.png" alt="people" Style="background:#76B2D7"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Clinical Care</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show2();" Style="display:none;"/>
		<img src="../../assets/img/cat-icon/8.png" alt="people" Style="background:#B2D0E8"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Health Recordings</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show2();" Style="display:none;"/>
		<img src="../../assets/img/cat-icon/9.png" alt="people" Style="background:#136D97"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Memory Box</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show2();" Style="display:none;"/>
		<img src="../../assets/img/cat-icon/10.png" alt="people" Style="background:#4E91C5"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Activities</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show2();" Style="display:none;"/>
		<img src="../../assets/img/cat-icon/11.png" alt="people" Style="background:#B2D0E8"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Handover</span>
			</label>
		</div>
	 </div>  
                       </div>     
                       <div id="seconddiv" Style="display:none;">
                            <div class="ms-panel-header ms-panel-custome text-center">
                        <h6 Style="text-transform:capitalize; font-size:20px;">Food &amp; Drinks</h6>
                      
                     </div> 
                        <h6 Style="text-align:center; margin-top:20px;">Choose an Item</h6>
                            <div Style="display: flex; flex-wrap: wrap; justify-content: center; margin: 50px 0px 0px auto;">
                               
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		    <label>
		        <input type="radio" name="radio1" onclick="show3();" Style="display:none;"/>
			<img src="../../assets/img/cat-icon/Meal.png" alt="people" Style="background:#136D97"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Meal</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show3();" Style="display:none;"/>
			<img src="../../assets/img/cat-icon/Drink.png" alt="people" Style="background:#136D97"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Drink</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show3();" Style="display:none;"/>
		<img src="../../assets/img/cat-icon/Snack.png" alt="people" Style="background:#136D97"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px; text-align: center; word-break: break-word;"> Snack</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show3();" Style="display:none;"/>
		<img src="../../assets/img/cat-icon/Pudding.png" alt="people" Style="background:#136D97"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px; text-align: center; word-break: break-word;"> Pudding</span>
			</label>
		</div>
		</div>
                      

                     </div>
                       <div id="thirddiv" Style="display:none;">
                            <div class="ms-panel-header ms-panel-custome">
                        <h6 Style="text-transform:capitalize; font-size:20px;">Food &amp; Drinks / Meal</h6>
                       
                     </div>    
                           <div class="form-row" Style="margin-top:30px;">
                                <div class="offset-md-3 col-md-6">
                              <div class="row">
                               <div class="col-md-12 mb-3">
                                 <label for="validationCustom005">Title</label>
                                 <div class="input-group">
                                    <input type="text" class="form-control" value="Meal"/>

                                 </div>
                              </div>
                              <div class="col-md-12 mb-3">
                                 <label>Description</label>
                                 <div class="input-group">
                                   <textarea class="form-control" Style="height:100px;"></textarea>

                                 </div>
                              </div>
                              
                              <div class="col-md-12 mb-3">
                                  <a href="#" class="btn btn-primary mt-4 d-inline w-20" id="next1">Next</a>
                              </div>    
                             </div>
                             </div>
                         
                             
                           </div>
                        

                     </div></form>
                     <div id="fourdiv" Style="display:none;">
                            <div class="ms-panel-header ms-panel-custome">
                        <h6 Style="text-transform:capitalize; font-size:20px;">Food &amp; Drinks / Meal</h6>
                       
                     </div>    
                           <div class="form-row" Style="margin-top:30px;">
                                <div class="offset-md-3 col-md-6">
                              <div class="row">
                               <div class="col-md-12 mb-3 text-center">
                                 <h6>When is a good time to start?</h6>
                                
                              </div>
                              <div class="col-md-6 mb-3">
                                 <label>Date</label>
                                  <div class="input-group">
                                    <input type="date" class="form-control" id="validationCustom003" required=""/>

                                 </div>
                              </div>
                              <div class="col-md-6 mb-3">
                                 <label>Time</label>
                                  <div class="input-group">
                                    <input type="time" class="form-control" id="validationCustom003" required=""/>

                                 </div>
                              </div>
                                <div class="col-md-12 mb-3">
                               <div class="input-group">        
                              <label for="chkPassport">
                                  <input type="checkbox" id="recurring" value="recurring"/>
                                   Recurring?
                              </label>
                              </div>
                              </div>
                              <div class="col-md-12 mb-3" id="showrecurring" Style="display:none;">
                                <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Daily</option>
                                       <option value="">Weekly</option>
                                       <option value="">Fornightly</option>
                                        <option value="">Monthly</option>
                                       
                                    </select>

                                 </div>
                                
                              </div>
                              
                              <div class="col-md-12 mb-3">
                                  <a href="#" class="btn btn-primary mt-4 d-inline w-20" id="next2">Next</a>
                              </div>    
                             </div>
                             </div>
                         
                             
                           </div>
                        

                     </div>
                     <div id="fivediv" Style="display:none;">
                            <div class="ms-panel-header ms-panel-custome">
                        <h6 Style="text-transform:capitalize; font-size:20px;">Food &amp; Drinks / Meal</h6>
                       
                     </div>    
                           <div class="form-row" Style="margin-top:30px;">
                                <div class="offset-md-3 col-md-6">
                              <div class="row">
                               <div class="col-md-12 mb-3 text-center">
                                 <h6>Who's it for?</h6>
                                
                              </div>
                              <div class="col-md-6 mb-3">
                                 <div class="yesno"><input type="radio" name="radio" onclick="showservice();" value="" checked=""/> Service Users </div>
                              </div>
                              <div class="col-md-6 mb-3">
                                 <div class="yesno"><input type="radio" name="radio" onclick="showcarer();" value=""/> Carers </div>
                              </div>
                             
                              <div class="col-md-12 mb-3" id="serviceuserdiv">
                                <div class="form-group">
                                    <label>Assign Service User</label>
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option>Select Service User</option>
                                        <option value="">Michael Sullivan</option>
                                       <option value="">Linda Barrett</option>
                                       <option value="">Ronald Jacobs</option>
                                        
                                       
                                    </select>

                                 </div>
                                
                              </div>
                               <div class="col-md-12 mb-3" id="carerdiv" Style="display:none;">
                                <div class="from-group">
                                     <label>Assign Carer</label>
                                    <select class="form-control" id="validationCustom230" required="">
                                         <option>Select Carer</option>
                                        <option value="">John  Doe</option>
                                       <option value="">Andy Smith</option>
                                       <option value="">Jenifer</option>
           
                                       
                                    </select>

                                 </div>
                                
                              </div>
                              <div class="col-md-12 mb-3">
                               <label>Require a second signature?</label>
                                  </div>
                              <div class="col-md-6 mb-3">
                                 <div class="yesno"><input type="radio" name="radio" value=""/> Yes </div>
                              </div>
                              <div class="col-md-6 mb-3">
                                 <div class="yesno"><input type="radio" name="radio" value=""/> No </div>
                              </div>
                              
                              <div class="col-md-12 mb-3">
                               <label>Require carer to add a daily log after completing?</label>
                                  </div>
                              <div class="col-md-6 mb-3">
                                 <div class="yesno"><input type="radio" name="radio" value=""/> Yes </div>
                              </div>
                              <div class="col-md-6 mb-3">
                                 <div class="yesno"><input type="radio" name="radio" value=""/> No </div>
                              </div>
                              
                              <div class="col-md-12 mb-3">
                                   <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Add Task</button>
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
  );
};

export default Addtodo;
