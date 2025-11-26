import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Register(){
  return (
    <div> 
      <Header />
      
      <div id='contact'>
        <h3>Student Registration</h3>
        <div className='login'>
          <form >
            <h2>Personal Information</h2>

            <label>Matriculation Number</label>
            <input 
              type='number'
            />  
            <br /> <br />  

            <label>Surname</label> 
            <input 
              type='name' 
            />  

 <br /> <br /> 

              <label>First Name</label> 
            <input 
              type='name' 
            /> 
 <br /> <br /> 

              <label>Other Names</label> 
            <input 
              type='name' 
            /> 

 <br /> <br /> 

<div className="gender-line">
  <label>Gender:</label>


     Male:<input type="radio" name="gender" value="male" /> 
 
     Female:<input type="radio" name="gender" value="female" />

</div>


            <br /><br />


              <label>Phone Number</label> 
            <input 
              type='number' 
            /> 

 <br /> <br /> 


              <label>Email Address</label> 
            <input 
              type='email' 
            /> 

 <br /> <br /> 



            <label>Password</label>
            <input 
              type='password' 

            />  
            <br /> 

          

              <br />

            <label>Confirm Password</label> 
            <input 
              type='password' 
           
            />  
            <br /> 

        <h2>Academic Information</h2> <br />


              <label>College</label> 
              <select id='college'>
                <option>College of Information and Communication Technology</option>
                 <option>College of Arts, Social and Management Sciences</option>
                  <option>College of Environmental Sciences</option>
                   <option>College of Health Sciences</option>
                    <option>College of Natural and Applied Sciences</option>
                    <option>Bola Ajibola College of Law</option>
              </select>

 <br /> <br /> 
    



            <button type='submit'>Sign Up</button>  
            <br /> <br />

            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>




        </div>
      </div>

      <br /> <br />
      <Footer />
    </div>
  );
}

export default Register;
