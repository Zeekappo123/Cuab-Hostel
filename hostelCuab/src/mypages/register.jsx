import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Register(){
  return (
    <div> 
      <Header />
      
      <div id='contact'>
        <div id='find'>
          <h3>Student Registration</h3>
        </div>
        
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
              <select>
                <option>College of Information and Communication Technology</option>
                 <option>College of Arts, Social and Management Sciences</option>
                  <option>College of Environmental Sciences</option>
                   <option>College of Health Sciences</option>
                    <option>College of Natural and Applied Sciences</option>
                    <option>Bola Ajibola College of Law</option>
              </select>
 <br /> <br /> 

 <label>Department</label>
   <select>
                <option> Computer Science</option>
                <option>Accounting</option>
                <option>Anatomy</option>
                <option>Architecture</option>
                <option>Biochemistry</option>
                <option>Business Admin</option>
                <option>Economics/O.R</option>
                <option>Islamic Studies</option>
                <option>Law</option>
                <option>Mass Communication</option>
                <option>Microbiology</option>
                <option>Nursing</option>
                <option>Physiology</option>
                <option>Political Science & I.R</option>
                <option>Archy & Biochem D/E</option>
                

             
              </select>
               <br /> <br /> 

                <label>Level</label>
   <select>
                <option>100</option>
                <option>200</option>
                <option>300</option>
                <option>400</option>
                   <option>500</option>
               
                

             
              </select>
               <br /> <br /> 

               <label>Academic Session</label>
               <input type='number' />
                     <br /> <br /> 

                           <label>Available Room</label>
               <input type='number' />
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
