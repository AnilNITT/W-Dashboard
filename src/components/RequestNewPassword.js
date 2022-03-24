import React from 'react';
import { Link } from 'react-router-dom';

const RequestNewPassword = () => {
  return(
    <main class="ms-lock-screen" style={{"min-height": "100vh"}}>
    <div class="ms-content-wrapper">
       <img class="ms-user-img  ms-lock-screen-user" src="assets/img/logo.png" alt="logo"/>
       <h2 Style="text-align:center; color:#000;">Request New Password</h2><br/>
       <form method="post" action="#">
          <div class="ms-form-group my-0 mb-0 has-icon fs-14">
             <div class="form-group">
               
             <input type="text" class="ms-form-input" name="username" placeholder="Username or Email Address"/>
            </div>
            
          </div>
          <Link to="#">
          <input type="submit" name="submit" value="Email New Password" class="btn btn-primary"/>
          </Link>
          
       </form>
    </div>
 </main>
  );
};

export default RequestNewPassword;
