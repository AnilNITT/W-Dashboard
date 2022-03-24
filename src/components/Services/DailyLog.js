import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';
import Navbarone from '../User/Navbarone';
import NavbarTwo from '../User/NavbarTwo';

const DailyLog = () => {
  return(
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
               <li class="breadcrumb-item active" aria-current="page">Daily Notes <Link class="btn btn-primary" to="/addlogs" Style="float:right; margin-top:0px;">Create New</Link> <a class="btn btn-primary" href="#" Style="float:right; margin-right:10px;margin-top:1px; background: #cfcbcb;color: #000;font-size: 13px;border:0px solid #fff; box-shadow: 0 1px 6px 1px rgb(101 31 112 / 78%);"><i class="fa fa-file-pdf-o"></i> Download PDF</a></li>
            </ol>
          </nav>
          <div class="ms-panel">
          
            <div class="ms-panel-body">
                <div class="row">
                 <div class="col-md-7">    
                 <div class="form-group has-search">
    <span class="fa fa-search form-control-feedback"></span>
    <input type="text" class="form-control" placeholder="Search"/>
  </div>
  </div>
  </div>        
                <div class="row">
                
                  <div class="col-md-2">
                    <div class="form-group">
                        <input type="date" name="date1" class="form-control" Style="font-size: 12px;"/>
                    </div>    
                  </div>
                 <div class="col-md-2"> 
                  <div class="form-group">
                        <input type="date" name="date2" class="form-control" Style="font-size: 12px;"/>
                    </div>
                  </div>
                 <div class="filter col-md-8">
                       <div class="dropdown">
  <label class="dropdown-label">Service User</label>
  
  <div class="dropdown-list">
    <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_01"/>
      <label for="checkbox-custom_01" class="checkbox-custom-label">
		  <img alt="" class="_nv9fvh" src="../../assets/img/dashboard/patient-1.jpg"/>  Michael Sullivan</label>
    </div>
    
    <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_02"/>
      <label for="checkbox-custom_02" class="checkbox-custom-label"> 
	  <img alt="" class="_nv9fvh" src="../../assets/img/dashboard/patient-2.jpg"/> Linda Barrett</label>
    </div>
    
    <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_02"/>
      <label for="checkbox-custom_02" class="checkbox-custom-label"> 
	  <img alt="" class="_nv9fvh" src="../../assets/img/dashboard/patient-3.jpg"/> Ronald Jacobs</label>
    </div>
    
    <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_02"/>
      <label for="checkbox-custom_02" class="checkbox-custom-label">
		  <img alt="" class="_nv9fvh" src="../../assets/img/dashboard/patient-4.jpg"/> Mark Hunter</label>
    </div>
     <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_02"/>
      <label for="checkbox-custom_02" class="checkbox-custom-label"> 
	  <img alt="" class="_nv9fvh" src="../../assets/img/dashboard/patient-5.jpg"/> Cristina Groves</label>
    </div>
     <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_02"/>
      <label for="checkbox-custom_02" class="checkbox-custom-label"> 
	  <img alt="" class="_nv9fvh" src="../../assets/img/dashboard/patient-6.jpg"/> Justin Parker</label>
    </div>
  </div>
</div>  
                       <div class="dropdown">
  <label class="dropdown-label">Category</label>
  
  <div class="dropdown-list">
    <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_01"/>
      <label for="checkbox-custom_01" class="checkbox-custom-label">
		  <img alt="" class="_nv9fvh" src="https://lamavietech.ml/wisterias/assets/img/cat-icon/1.png"/> Food And Drinks</label>
    </div>
    
   <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_01"/>
      <label for="checkbox-custom_01" class="checkbox-custom-label">
		  <img alt="" class="_nv9fvh" src="https://lamavietech.ml/wisterias/assets/img/cat-icon/2.png"/> Personal care</label>
    </div>
    
     <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_01"/>
      <label for="checkbox-custom_01" class="checkbox-custom-label">
		  <img alt="" class="_nv9fvh" src="https://lamavietech.ml/wisterias/assets/img/cat-icon/3.png"/> Personal Allowance</label>
    </div>
    
     <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_01"/>
      <label for="checkbox-custom_01" class="checkbox-custom-label">
		  <img alt="" class="_nv9fvh" src="https://lamavietech.ml/wisterias/assets/img/cat-icon/4.png"/> House Work</label>
    </div>
    
     <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_01"/>
      <label for="checkbox-custom_01" class="checkbox-custom-label">
		  <img alt="" class="_nv9fvh" src="https://lamavietech.ml/wisterias/assets/img/cat-icon/5.png"/> Visit Log</label>
    </div>
    
     <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_01"/>
      <label for="checkbox-custom_01" class="checkbox-custom-label">
		  <img alt="" class="_nv9fvh" src="https://lamavietech.ml/wisterias/assets/img/cat-icon/6.png"/> Incident</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_01"/>
      <label for="checkbox-custom_01" class="checkbox-custom-label">
		  <img alt="" class="_nv9fvh" src="https://lamavietech.ml/wisterias/assets/img/cat-icon/7.png"/> Clinical Care</label>
    </div>
    
    <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_01"/>
      <label for="checkbox-custom_01" class="checkbox-custom-label">
		  <img alt="" class="_nv9fvh" src="https://lamavietech.ml/wisterias/assets/img/cat-icon/8.png"/> Health Recordings</label>
    </div>
    
    <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_01"/>
      <label for="checkbox-custom_01" class="checkbox-custom-label">
		  <img alt="" class="_nv9fvh" src="https://lamavietech.ml/wisterias/assets/img/cat-icon/9.png"/> Memory Box</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_01"/>
      <label for="checkbox-custom_01" class="checkbox-custom-label">
		  <img alt="" class="_nv9fvh" src="https://lamavietech.ml/wisterias/assets/img/cat-icon/10.png"/> Activities</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_01"/>
      <label for="checkbox-custom_01" class="checkbox-custom-label">
		  <img alt="" class="_nv9fvh" src="https://lamavietech.ml/wisterias/assets/img/cat-icon/11.png"/> Handover</label>
    </div>
  </div>
</div> 
                       <div class="dropdown">
  <label class="dropdown-label">Entries</label>
  
  <div class="dropdown-list">

    
    <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_02"/>
      <label for="checkbox-custom_02" class="checkbox-custom-label"> 
	  <img alt="" class="_nv9fvh" src="https://lamavietech.ml/wisterias/assets/img/cat-icon/Meal.png"/> Meal</label>
    </div>
    
    <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_02"/>
      <label for="checkbox-custom_02" class="checkbox-custom-label"> 
	  <img alt="" class="_nv9fvh" src="https://lamavietech.ml/wisterias/assets/img/cat-icon/Drink.png"/> Drink</label>
    </div>
    
    <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_02"/>
      <label for="checkbox-custom_02" class="checkbox-custom-label"> 
	  <img alt="" class="_nv9fvh" src="https://lamavietech.ml/wisterias/assets/img/cat-icon/routine.png"/> Walk</label>
    </div>
  </div>
</div>
                       <div class="dropdown">
  <label class="dropdown-label">Logged by</label>
  
  <div class="dropdown-list">
    <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_01"/>
      <label for="checkbox-custom_01" class="checkbox-custom-label">
		  <img alt="" class="_nv9fvh" src="https://s3.eu-west-2.amazonaws.com/lmc-data-production/public/profile_pic_placeholder.png"/> Alan Walker</label>
    </div>
    
    <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_02"/>
      <label for="checkbox-custom_02" class="checkbox-custom-label"> 
	  <img alt="" class="_nv9fvh" src="https://s3.eu-west-2.amazonaws.com/lmc-data-production/public/profile_pic_placeholder.png"/> Angie thead-primary</label>
    </div>
    
    <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_03"/>
      <label for="checkbox-custom_03" class="checkbox-custom-label"> 
	  <img alt="" class="_nv9fvh" src="https://s3.eu-west-2.amazonaws.com/lmc-data-production/public/profile_pic_placeholder.png"/> Smith doe</label>
    </div>
    
    <div class="checkbox">
      <input type="checkbox" name="dropdown-group" class="check checkbox-custom" id="checkbox-custom_04"/>
      <label for="checkbox-custom_04" class="checkbox-custom-label"> 
	  <img alt="" class="_nv9fvh" src="https://s3.eu-west-2.amazonaws.com/lmc-data-production/public/profile_pic_placeholder.png"/> John doe</label>
    </div>
  </div>
</div>
                     </div>
              </div>
               <div>
		<div>
			
		<div class="_1fyzqfi">
		<div>
			<div class="_1vaj4vq">
				<div class="_mva088">
					<div class="_1jcmbl1" id="sort-timeLogged">
						Time Notes
						<div class="_5m9pw8">
							<div Style="display: flex; flex-direction: column; position: relative; bottom: 4px; padding-left: 10px;">
								<span Style="width: 14px; height: 6px; color: rgb(232, 91, 120);"><i class="_sea18i0 octicon octicon-triangle-up"></i></span><span Style="width: 14px; height: 6px; color: rgb(153, 153, 153);"><i class="_sea18i0 octicon octicon-triangle-down"></i></span>
							</div>
						</div>
					</div>
				</div>
				<div class="_10kq099">
					Service User
				</div>
				<div class="_1qwcjwh">
					Notes
				</div>
			</div>
			<div class="_vdin9o"></div>
		</div>
		<div class="_1r6vk35">
			<div class="_11lnn7g">
				08-02-2022 18:21
			</div>
			<div Style="display: flex; margin-right: 12px; min-width: 160px; width: 25%;">
				<div class="_13xlah4 rogiimage">
				<img src="../../assets/img/dashboard/patient-1.jpg" alt="people"/>
				</div><a class="_mq7hg1 _13xlah4" Style="margin-top: 12px; overflow-wrap: anywhere;">Michael Sullivan</a>
			</div>
			<div class="_hx3w64 ">
				<div class="_qhxke6" Style="background-color: #136D97">
					<img alt="" class="_nv9fvh" src="../../assets/img/cat-icon/Meal.png"/></div>
				<div>
					<div class="_jro6t0">
						<span class="_1z11wu9" Style="color: rgb(153, 153, 153);">Alan Walker</span>
					</div><span class="_tm07lf">Michael's want to food, he was feeling hungry.</span>
				</div>
			</div>
		</div>
		<div class="_1r6vk35">
			<div class="_11lnn7g">
				08-02-2022 18:15
			</div>
			<div Style="display: flex; margin-right: 12px; min-width: 160px; width: 25%;">
				<div class="_13xlah4 rogiimage">
					<img src="../../assets/img/dashboard/patient-1.jpg" alt="people"/>
				</div><a class="_mq7hg1 _13xlah4" Style="margin-top: 12px; overflow-wrap: anywhere;">Michael Sullivan</a>
			</div>
			<div class="_hx3w64">
				<div class="_qhxke6" Style="background-color:#4E91C5;">
					<img alt="" class="_nv9fvh" src="../../assets/img/cat-icon/Drink.png"/></div>
				<div>
					<div class="_jro6t0">
						<span class="_1z11wu9" Style="color: rgb(153, 153, 153);">Alan Walker</span>
					</div><span class="_tm07lf">Want to hot drink like coffee, tea or soup.</span>
				</div>
			</div>
		</div>
		<div class="_1r6vk35">
			<div class="_11lnn7g">
				08-02-2022 18:21
			</div>
			<div Style="display: flex; margin-right: 12px; min-width: 160px; width: 25%;">
				<div class="_13xlah4 rogiimage">
				<img src="../../assets/img/dashboard/patient-1.jpg" alt="people"/>
				</div><a class="_mq7hg1 _13xlah4" Style="margin-top: 12px; overflow-wrap: anywhere;">Michael Sullivan</a>
			</div>
			<div class="_hx3w64 ">
				<div class="_qhxke6" Style="background-color: #136D97"><img alt="" class="_nv9fvh" src="../../assets/img/cat-icon/routine.png"/></div>
				<div>
					<div class="_jro6t0">
						<span class="_1z11wu9" Style="color: rgb(153, 153, 153);">Alan Walker</span>
					</div><span class="_tm07lf">Michael's want to routine walk in , he was feeling depressed.</span>
				</div>
			</div>
		</div>
	
		
		<div class="_1r6vk35">
			<div class="_11lnn7g">
				08-02-2022 18:15
			</div>
			<div Style="display: flex; margin-right: 12px; min-width: 160px; width: 25%;">
				<div class="_13xlah4 rogiimage">
					<img src="../../assets/img/dashboard/patient-1.jpg" alt="people"/>
				</div><a class="_mq7hg1 _13xlah4" Style="margin-top: 12px; overflow-wrap: anywhere;">Michael Sullivan</a>
			</div>
			<div class="_hx3w64">
				<div class="_qhxke6" Style="background-color:#4E91C5;"><img alt="" class="_nv9fvh" src="../../assets/img/cat-icon/Drink.png"/></div>
				<div>
					<div class="_jro6t0">
						<span class="_1z11wu9" Style="color: rgb(153, 153, 153);">Alan Walker</span>
					</div><span class="_tm07lf">went to watch a movie after</span>
				</div>
			</div>
		</div>
		<div class="_1r6vk35">
			<div class="_11lnn7g">
				08-02-2022 18:21
			</div>
			<div Style="display: flex; margin-right: 12px; min-width: 160px; width: 25%;">
				<div class="_13xlah4 rogiimage">
				<img src="../../assets/img/dashboard/patient-1.jpg" alt="people"/>
				</div><a class="_mq7hg1 _13xlah4" Style="margin-top: 12px; overflow-wrap: anywhere;">Michael Sullivan</a>
			</div>
			<div class="_hx3w64 ">
				<div class="_qhxke6" Style="background-color: #136D97"><img alt="" class="_nv9fvh" src="../../assets/img/cat-icon/Meal.png"/></div>
				<div>
					<div class="_jro6t0">
						<span class="_1z11wu9" Style="color: rgb(153, 153, 153);">Alan Walker</span>
					</div><span class="_mq7hg1">Mood - very low</span><span class="_tm07lf">Michael's mood level was scored as 1 out of 5, he was feeling depressed,</span>
				</div>
			</div>
		</div>
		<div class="_1r6vk35">
			<div class="_11lnn7g">
				08-02-2022 18:15
			</div>
			<div Style="display: flex; margin-right: 12px; min-width: 160px; width: 25%;">
				<div class="_13xlah4 rogiimage">
					<img src="../../assets/img/dashboard/patient-1.jpg" alt="people"/>
				</div><a class="_mq7hg1 _13xlah4" Style="margin-top: 12px; overflow-wrap: anywhere;">Michael Sullivan</a>
			</div>
			<div class="_hx3w64">
				<div class="_qhxke6" Style="background-color:#4E91C5;"><img alt="" class="_nv9fvh" src="../../assets/img/cat-icon/Drink.png"/></div>
				<div>
					<div class="_jro6t0">
						<span class="_1z11wu9" Style="color: rgb(153, 153, 153);">Alan Walker</span>
					</div><span class="_tm07lf">went to watch a movie after</span>
				</div>
			</div>
		</div>
		<div class="_1r6vk35">
			<div class="_11lnn7g">
				08-02-2022 18:21
			</div>
			<div Style="display: flex; margin-right: 12px; min-width: 160px; width: 25%;">
				<div class="_13xlah4 rogiimage">
				<img src="../../assets/img/dashboard/patient-2.jpg" alt="people"/>
				</div><a class="_mq7hg1 _13xlah4" Style="margin-top: 12px; overflow-wrap: anywhere;">Linda Barrett</a>
			</div>
			<div class="_hx3w64 ">
				<div class="_qhxke6" Style="background-color: #136D97"><img alt="" class="_nv9fvh" src="../../assets/img/cat-icon/Meal.png"/></div>
				<div>
					<div class="_jro6t0">
						<span class="_1z11wu9" Style="color: rgb(153, 153, 153);">Alan Walker</span>
					</div><span class="_mq7hg1">Mood - very low</span><span class="_tm07lf">Michael's mood level was scored as 1 out of 5, he was feeling depressed,</span>
				</div>
			</div>
		</div>
		<div class="_1r6vk35">
			<div class="_11lnn7g">
				08-02-2022 18:15
			</div>
			<div Style="display: flex; margin-right: 12px; min-width: 160px; width: 25%;">
				<div class="_13xlah4 rogiimage">
					<img src="../../assets/img/dashboard/patient-2.jpg" alt="people"/>
				</div><a class="_mq7hg1 _13xlah4" Style="margin-top: 12px; overflow-wrap: anywhere;">Linda Barrett</a>
			</div>
			<div class="_hx3w64">
				<div class="_qhxke6" Style="background-color:#4E91C5;"><img alt="" class="_nv9fvh" src="../../assets/img/cat-icon/Drink.png"/></div>
				<div>
					<div class="_jro6t0">
						<span class="_1z11wu9" Style="color: rgb(153, 153, 153);">Alan Walker</span>
					</div><span class="_tm07lf">went to watch a movie after</span>
				</div>
			</div>
		</div>
		<div class="_1r6vk35">
			<div class="_11lnn7g">
				08-02-2022 18:21
			</div>
			<div Style="display: flex; margin-right: 12px; min-width: 160px; width: 25%;">
				<div class="_13xlah4 rogiimage">
				<img src="../../assets/img/dashboard/patient-3.jpg" alt="people"/>
				</div><a class="_mq7hg1 _13xlah4" Style="margin-top: 12px; overflow-wrap: anywhere;">Ronald Jacobs</a>
			</div>
			<div class="_hx3w64 ">
				<div class="_qhxke6" Style="background-color: #136D97"><img alt="" class="_nv9fvh" src="../../assets/img/cat-icon/Meal.png"/></div>
				<div>
					<div class="_jro6t0">
						<span class="_1z11wu9" Style="color: rgb(153, 153, 153);">Alan Walker</span>
					</div><span class="_mq7hg1">Mood - very low</span><span class="_tm07lf">Michael's mood level was scored as 1 out of 5, he was feeling depressed,</span>
				</div>
			</div>
		</div>
		<div class="_1r6vk35">
			<div class="_11lnn7g">
				08-02-2022 18:15
			</div>
			<div Style="display: flex; margin-right: 12px; min-width: 160px; width: 25%;">
				<div class="_13xlah4 rogiimage">
					<img src="../../assets/img/dashboard/patient-4.jpg" alt="people"/>
				</div><a class="_mq7hg1 _13xlah4" Style="margin-top: 12px; overflow-wrap: anywhere;">Mark Hunter</a>
			</div>
			<div class="_hx3w64">
				<div class="_qhxke6" Style="background-color:#4E91C5;"><img alt="" class="_nv9fvh" src="../../assets/img/cat-icon/Drink.png"/></div>
				<div>
					<div class="_jro6t0">
						<span class="_1z11wu9" Style="color: rgb(153, 153, 153);">Alan Walker</span>
					</div><span class="_tm07lf">went to watch a movie after</span>
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
  );
};

export default DailyLog;
