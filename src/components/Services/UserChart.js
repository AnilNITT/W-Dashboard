import React from 'react'
import Sidebar from '../Sidebar';
import {Link} from 'react-router-dom';
import Navbarone from '../User/Navbarone';
import NavbarTwo from '../User/NavbarTwo';


const UserChart = () => {
    return (
        <main className="body-content">
            <Sidebar/>
            <div className="ms-content-wrapper">
      			<div className="row">
					  <Navbarone/>
					  <NavbarTwo/>

					  <div class="col-md-12">
         
		 <div class="ms-panel">
		 
		   <div class="ms-panel-body chart">
				 <div Style="margin: 0px auto; height: 100%;">
	   <div>
		   <div class="Row" Style="display: flex; flex-wrap: wrap; margin: 45px auto 50px; max-width: 1080px;">
			   <div Style="min-height: 1px; padding-left: 0px; padding-right: 0px; width: 50%;">
				   <div Style="margin-right: 24px;">
					   <div>
					   
							   <div class="Row" Style="display: flex; flex-wrap: wrap; margin-left: -10px; margin-right: -10px; margin-bottom: 35px;">
							   <div Style="min-height: 1px; padding-left: 10px; padding-right: 10px; width: 100%;">
								   <div Style="width: 100%;">
									   <div Style="display: flex; justify-content: space-between;">
										   <div Style="min-height: 34px;">
											   <h2 Style="margin-bottom: 6px;">Food &amp; Drink</h2>
										   </div>
										   <div></div>
									   </div>
									   <div class="lmc-theme-gradient" Style="height: 2px; margin-bottom: 8px; margin-top: 0px; width: 100%;"></div>
								   </div>
									  <a href="chart-detail.php">
									  <div>
									   <div class="lmc-list-item" Style="display: flex; flex-direction: column; justify-content: space-between; padding: 8px 16px; cursor: pointer;">
										   <div class="lmc-list-item-header" Style="display: flex; justify-content: space-between; flex-direction: row;">
											   <div class="lmc-list-item-link-container" Style="align-items: center; display: flex; cursor: pointer; margin-right: 12px; flex: 1 1 0%;">
												   <div class="_qhxke6" Style="background-color:#4E91C5;"><img alt="" class="_nv9fvh" src="../../assets/img/cat-icon/Drink.png"/></div>
												   <div class="lmc-list-item-parent-link" Style="display: flex; flex-direction: column; padding-left: 10px;">
													   <span class="lmc-list-item-link" Style="font-weight: bold; font-size: 16px;">Drink</span><span Style="color: rgb(153, 153, 153); font-size: 12px;">21/12/21 • 15:45</span><span Style="font-size: 14px;">0 ml last 24h</span>
												   </div>
											   </div>
										   </div>
									   </div>
								   </div>
								   </a>
								   <a href="chart-detail.php">
								   <div>
									   <div class="lmc-list-item" Style="display: flex; flex-direction: column; justify-content: space-between; padding: 8px 16px; cursor: pointer;">
										   <div class="lmc-list-item-header" Style="display: flex; justify-content: space-between; flex-direction: row;">
											   <div class="lmc-list-item-link-container" Style="align-items: center; display: flex; cursor: pointer; margin-right: 12px; flex: 1 1 0%;">
												   <div class="_qhxke6" Style="background-color: #136D97"><img alt="" class="_nv9fvh" src="../../assets/img/cat-icon/Meal.png"/></div>
												   <div class="lmc-list-item-parent-link" Style="display: flex; flex-direction: column; padding-left: 10px;">
													   <span class="lmc-list-item-link" Style="font-weight: bold; font-size: 16px;">Food</span><span Style="color: rgb(153, 153, 153); font-size: 12px;">21/12/21 • 15:45</span><span Style="font-size: 14px;">0 portions in 24h</span>
												   </div>
											   </div>
										   </div>
									   </div>
								   </div>
								   </a>
							   </div>
						   </div>
						   
						   
						   <div class="Row" Style="display: flex; flex-wrap: wrap; margin-left: -10px; margin-right: -10px; margin-bottom: 35px;">
							   <div Style="min-height: 1px; padding-left: 10px; padding-right: 10px; width: 100%;">
								   <div Style="width: 100%;">
									   <div Style="display: flex; justify-content: space-between;">
										   <div Style="min-height: 34px;">
											   <h2 Style="margin-bottom: 6px;">Health Recording</h2>
										   </div>
										   <div></div>
									   </div>
									   <div class="lmc-theme-gradient" Style="height: 2px; margin-bottom: 8px; margin-top: 0px; width: 100%;"></div>
								   </div>
								   <div>
									   <div class="lmc-list-item" Style="display: flex; flex-direction: column; justify-content: space-between; padding: 8px 16px; cursor: pointer;">
										   <div class="lmc-list-item-header" Style="display: flex; justify-content: space-between; flex-direction: row;">
											   <div class="lmc-list-item-link-container" Style="align-items: center; display: flex; cursor: pointer; margin-right: 12px; flex: 1 1 0%;">
											   <div class="_qhxke6" Style="background-color: #B2D0E8"><img alt="" class="_nv9fvh" src="../../assets/img/cat-icon/Mood.png"/></div>
			   <div>
												   <div class="lmc-list-item-parent-link" Style="display: flex; flex-direction: column; padding-left: 10px;">
													   <span class="lmc-list-item-link" Style="font-weight: bold; font-size: 16px;">Mood</span><span Style="color: rgb(153, 153, 153); font-size: 12px;">11/11/2021 • 19:38</span><span Style="font-size: 14px;">Lorum Ipsum</span>
												   </div>
											   </div>
										   </div>
									   </div>
								   </div>
								   <div>
									   <div class="lmc-list-item" Style="display: flex; flex-direction: column; justify-content: space-between; padding: 8px 16px; cursor: pointer;">
										   <div class="lmc-list-item-header" Style="display: flex; justify-content: space-between; flex-direction: row;">
												   <div class="lmc-list-item-link-container" Style="align-items: center; display: flex; cursor: pointer; margin-right: 12px; flex: 1 1 0%;">
											   <div class="_qhxke6" Style="background-color: #76B2D7"><img alt="" class="_nv9fvh" src="../../assets/img/cat-icon/Mobility.png"/></div>
			   <div>
												   <div class="lmc-list-item-parent-link" Style="display: flex; flex-direction: column; padding-left: 10px;">
													   <span class="lmc-list-item-link" Style="font-weight: bold; font-size: 16px;">Mobility</span><span Style="color: rgb(153, 153, 153); font-size: 12px;">12/12/20121 • 18:50</span><span Style="font-size: 14px;">Lorum Ipsum</span>
												   </div>
											   </div>
										   </div>
										   </div>
									   </div>
								   </div>
								   <div>
									   <div class="lmc-list-item" Style="display: flex; flex-direction: column; justify-content: space-between; padding: 8px 16px; cursor: pointer;">
										   <div class="lmc-list-item-header" Style="display: flex; justify-content: space-between; flex-direction: row;">
										   <div class="lmc-list-item-link-container" Style="align-items: center; display: flex; cursor: pointer; margin-right: 12px; flex: 1 1 0%;">
											   <div class="_qhxke6" Style="background-color: #B2D0E8"><img alt="" class="_nv9fvh" src="../../assets/img/cat-icon/Temperature.png"/></div>
			   <div>
												   <div class="lmc-list-item-parent-link" Style="display: flex; flex-direction: column; padding-left: 10px;">
													   <span class="lmc-list-item-link" Style="font-weight: bold; font-size: 16px;">Temperature</span><span Style="color: rgb(153, 153, 153); font-size: 12px;">01/02/2022 • 18:50</span><span Style="font-size: 14px;">Lorum Ipsum</span>
												   </div>
											   </div>
										   </div>
										   </div>
									   </div>
								   </div>
								   <div>
									   <div class="lmc-list-item" Style="display: flex; flex-direction: column; justify-content: space-between; padding: 8px 16px; cursor: pointer;">
										   <div class="lmc-list-item-header" Style="display: flex; justify-content: space-between; flex-direction: row;">
										   <div class="lmc-list-item-link-container" Style="align-items: center; display: flex; cursor: pointer; margin-right: 12px; flex: 1 1 0%;">
											   <div class="_qhxke6" Style="background-color: #76B2D7"><img alt="" class="_nv9fvh" src="../../assets/img/cat-icon/Blood Pressure.png"/></div>
			   <div>
												   <div class="lmc-list-item-parent-link" Style="display: flex; flex-direction: column; padding-left: 10px;">
													   <span class="lmc-list-item-link" Style="font-weight: bold; font-size: 16px;">Blood Pressure</span><span Style="color: rgb(153, 153, 153); font-size: 12px;">11/02/2022 • 15:30</span><span Style="font-size: 14px;">Lorum Ipsum</span>
												   </div>
											   </div>
										   </div>
										   </div>
									   </div>
								   </div>
								   
								  <div>
									   <div class="lmc-list-item" Style="display: flex; flex-direction: column; justify-content: space-between; padding: 8px 16px; cursor: pointer;">
										   <div class="lmc-list-item-header" Style="display: flex; justify-content: space-between; flex-direction: row;">
										   <div class="lmc-list-item-link-container" Style="align-items: center; display: flex; cursor: pointer; margin-right: 12px; flex: 1 1 0%;">
											   <div class="_qhxke6" Style="background-color: #4E91C5"><img alt="" class="_nv9fvh" src="../../assets/img/cat-icon/Heart Rate.png"/></div>
			   <div>
												   <div class="lmc-list-item-parent-link" Style="display: flex; flex-direction: column; padding-left: 10px;">
													   <span class="lmc-list-item-link" Style="font-weight: bold; font-size: 16px;">Heart Rate</span><span Style="color: rgb(153, 153, 153); font-size: 12px;">11/02/2022 • 15:30</span><span Style="font-size: 14px;">Lorum Ipsum</span>
												   </div>
											   </div>
										   </div>
										   </div>
									   </div>
								   </div>
								   
									<div>
									   <div class="lmc-list-item" Style="display: flex; flex-direction: column; justify-content: space-between; padding: 8px 16px; cursor: pointer;">
										   <div class="lmc-list-item-header" Style="display: flex; justify-content: space-between; flex-direction: row;">
										   <div class="lmc-list-item-link-container" Style="align-items: center; display: flex; cursor: pointer; margin-right: 12px; flex: 1 1 0%;">
											   <div class="_qhxke6" Style="background-color: #B2D0E8"><img alt="" class="_nv9fvh" src="../../assets/img/cat-icon/Covide 19.png"/></div>
			   <div>
												   <div class="lmc-list-item-parent-link" Style="display: flex; flex-direction: column; padding-left: 10px;">
													   <span class="lmc-list-item-link" Style="font-weight: bold; font-size: 16px;">Covide 19</span><span Style="color: rgb(153, 153, 153); font-size: 12px;">11/02/2022 • 15:30</span><span Style="font-size: 14px;">Lorum Ipsum</span>
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
			   </div>
			   <div Style="min-height: 1px; padding-left: 0px; padding-right: 0px; width: 50%;">
				   <div Style="margin-right: 24px;">
					   <div>
						   <div class="Row" Style="margin-left: -10px; margin-right: -10px; margin-bottom: 35px;">
							   <div Style="min-height: 1px; padding-left: 10px; padding-right: 10px; width: 100%;">
								   <div Style="width: 100%;">
									   <div Style="display: flex; justify-content: space-between;">
										   <div Style="min-height: 34px;">
											   <h2 Style="margin-bottom: 6px;">Incident</h2>
										   </div>
										   <div></div>
									   </div>
									   <div class="lmc-theme-gradient" Style="height: 2px; margin-bottom: 8px; margin-top: 0px; width: 100%;"></div>
								   </div>
								   <div>
									   <div class="lmc-list-item" Style="display: flex; flex-direction: column; justify-content: space-between; padding: 8px 16px; cursor: pointer;">
										   <div class="lmc-list-item-header" Style="display: flex; justify-content: space-between; flex-direction: row;">
											   <div class="lmc-list-item-link-container" Style="align-items: center; display: flex; cursor: pointer; margin-right: 12px; flex: 1 1 0%;">
											   <div class="_qhxke6" Style="background-color: #136D97"><img alt="" class="_nv9fvh" src="../../assets/img/cat-icon/assault.png"/></div>
			   <div>
												   <div class="lmc-list-item-parent-link" Style="display: flex; flex-direction: column; padding-left: 10px;">
													   <span class="lmc-list-item-link" Style="font-weight: bold; font-size: 16px;">Assault</span><span Style="color: rgb(153, 153, 153); font-size: 12px;">11/11/2021 • 19:38</span><span Style="font-size: 14px;">Lorum Ipsum</span>
												   </div>
											   </div>
										   </div>
									   </div>
								   </div>
								   <div>
									   <div class="lmc-list-item" Style="display: flex; flex-direction: column; justify-content: space-between; padding: 8px 16px; cursor: pointer;">
										   <div class="lmc-list-item-header" Style="display: flex; justify-content: space-between; flex-direction: row;">
												   <div class="lmc-list-item-link-container" Style="align-items: center; display: flex; cursor: pointer; margin-right: 12px; flex: 1 1 0%;">
											   <div class="_qhxke6" Style="background-color: #4E91C5"><img alt="" class="_nv9fvh" src="../../assets/img/cat-icon/behaviour.png"/></div>
			   <div>
												   <div class="lmc-list-item-parent-link" Style="display: flex; flex-direction: column; padding-left: 10px;">
													   <span class="lmc-list-item-link" Style="font-weight: bold; font-size: 16px;">Behaviour</span><span Style="color: rgb(153, 153, 153); font-size: 12px;">12/12/20121 • 18:50</span><span Style="font-size: 14px;">Lorum Ipsum</span>
												   </div>
											   </div>
										   </div>
										   </div>
									   </div>
								   </div>
								   <div>
									   <div class="lmc-list-item" Style="display: flex; flex-direction: column; justify-content: space-between; padding: 8px 16px; cursor: pointer;">
										   <div class="lmc-list-item-header" Style="display: flex; justify-content: space-between; flex-direction: row;">
										   <div class="lmc-list-item-link-container" Style="align-items: center; display: flex; cursor: pointer; margin-right: 12px; flex: 1 1 0%;">
											   <div class="_qhxke6" Style="background-color: #76B2D7"><img alt="" class="_nv9fvh" src="../../assets/img/cat-icon/illness.png"/></div>
			   <div>
												   <div class="lmc-list-item-parent-link" Style="display: flex; flex-direction: column; padding-left: 10px;">
													   <span class="lmc-list-item-link" Style="font-weight: bold; font-size: 16px;">Illness</span><span Style="color: rgb(153, 153, 153); font-size: 12px;">01/02/2022 • 18:50</span><span Style="font-size: 14px;">Lorum Ipsum</span>
												   </div>
											   </div>
										   </div>
										   </div>
									   </div>
								   </div>
								   <div>
									   <div class="lmc-list-item" Style="display: flex; flex-direction: column; justify-content: space-between; padding: 8px 16px; cursor: pointer;">
										   <div class="lmc-list-item-header" Style="display: flex; justify-content: space-between; flex-direction: row;">
										   <div class="lmc-list-item-link-container" Style="align-items: center; display: flex; cursor: pointer; margin-right: 12px; flex: 1 1 0%;">
											   <div class="_qhxke6" Style="background-color: #4E91C5"><img alt="" class="_nv9fvh" src="../../assets/img/cat-icon/injury.png"/></div>
			   <div>
												   <div class="lmc-list-item-parent-link" Style="display: flex; flex-direction: column; padding-left: 10px;">
													   <span class="lmc-list-item-link" Style="font-weight: bold; font-size: 16px;">Injury</span><span Style="color: rgb(153, 153, 153); font-size: 12px;">11/02/2022 • 15:30</span><span Style="font-size: 14px;">Lorum Ipsum</span>
												   </div>
											   </div>
										   </div>
										   </div>
									   </div>
								   </div>
							   </div>
						   </div>
						   <div>
							   <div Style="width: 100%; margin-top:20px;">
								   <div Style="display: flex; justify-content: space-between;">
										   <div Style="width: 100%;">
									   <div Style="display: flex; justify-content: space-between;">
										   <div Style="min-height: 34px;">
											   <h2 Style="margin-bottom: 6px;">No Recorded Data</h2>
										   </div>
										   <div></div>
									   </div>
									   <div class="lmc-theme-gradient" Style="height: 2px; margin-bottom: 8px; margin-top: 0px; width: 100%;"></div>
								   </div>
									   <div></div>
								   </div>
								   
							   </div>
							   <div Style="padding-top: 4px; padding-bottom: 4px;">
								   <a href="#" Style="color: rgb(34, 34, 34);">Blood Glucose</a>
							   </div>
							   <div Style="padding-top: 4px; padding-bottom: 4px;">
								   <a href="#" Style="color: rgb(34, 34, 34);">Blood Oxygen</a>
							   </div>
							   <div Style="padding-top: 4px; padding-bottom: 4px;">
								   <a href="#" Style="color: rgb(34, 34, 34);">Blood Pressure</a>
							   </div>
							   <div Style="padding-top: 4px; padding-bottom: 4px;">
								   <a href="#" Style="color: rgb(34, 34, 34);">Heart Rate</a>
							   </div>
							   <div Style="padding-top: 4px; padding-bottom: 4px;">
								   <a href="#" Style="color: rgb(34, 34, 34);">MUST</a>
							   </div>
							   <div Style="padding-top: 4px; padding-bottom: 4px;">
								   <a href="#" Style="color: rgb(34, 34, 34);">Re-positioning</a>
							   </div>
							   <div Style="padding-top: 4px; padding-bottom: 4px;">
								   <a href="#" Style="color: rgb(34, 34, 34);">Respiratory Rate</a>
							   </div>
							   <div Style="padding-top: 4px; padding-bottom: 4px;">
								   <a href="#" Style="color: rgb(34, 34, 34);">Waterlow</a>
							   </div>
							   <div Style="padding-top: 4px; padding-bottom: 4px;">
								   <a href="#" Style="color: rgb(34, 34, 34);">Weight</a>
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
	 </div>
        
     			</div>
    		</div>
        </main>
    )
}

export default UserChart
