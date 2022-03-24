import React from 'react'
import {Link} from 'react-router-dom';


const Login = () => {
    return (
        <main className="ms-lock-screen" style={{"min-height": "100vh"}}>
        <div className="ms-content-wrapper" >
           <img className="ms-user-img  ms-lock-screen-user" src="/assets/img/logo.png" alt="logo"/>
           <h2 Style="text-align:center; color:#000;">LOGIN</h2><br/>
           <form method="post" action="/">
              <div className="ms-form-group my-0 mb-0 has-icon fs-14">
                 <div className="form-group">
                   
                 <input type="text" className="ms-form-input" name="username" placeholder="username"/>
                </div>
                <div className="form-group">
                 <input type="password" className="ms-form-input" name="password" placeholder="password"/>
                </div>
                <div class="form-group">
                  <input type="text" class="ms-form-input" name="password" placeholder="home Id"/>
                 </div>
              </div>
           </form>
           <Link to="/select-option" style={{"padding":"5px"}}>
            <input type="submit" name="submit" value="Login" className="btn btn-primary"/>
           </Link>
            <Link to="/requestnewpassword" className="btn btn-primary" Style="background-color: #1f4970; border-color: #1f4970;"> Request New Password</Link>
        </div>
     </main>
    )
}

export default Login
