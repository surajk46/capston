import React, { useState }from 'react';


export default function Register() {
 
 return (
    <>
    <form className='container form'>
    <div class="mb-3">
    <label for="userName" class="form-label">First Name</label>
    <input type="text" class="form-control" id="userName"/>
    
  </div>
  <div class="mb-3">
    <label for="userName" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="userName"/>
    
  </div>
  <div class="mb-3">
    <label for="userName" class="form-label">User Name</label>
    <input type="text" class="form-control" id="userName"/>
    
  </div>
    
  <div class="mb-3">
    <label for="userEmail" class="form-label">Email address</label>
    <input type="email" class="form-control" id="userEmail" aria-describedby="emailHelp"/>
  </div>
                            
  
  
  <div class="mb-3">
    <label for="userPassword" class="form-label">Password</label>
    <input type="password" class="form-control" id="userPassword"/>
  </div>

  <div class="mb-3">
    <label for="userPhoneNo" class="form-label">Phone Number</label>
    <input type="number" class="form-control" id="userPhoneNo"/>
  </div>
   


  <button type="submit" class="btn btn-primary">Submit</button>
 
  

  
     
</form>
<h5 align ="center">
  already have an account?
<button type="submit" class="btn btn-primary"><a id="mylink" href="./login">Login</a>
</button></h5>
    </>
  )
}