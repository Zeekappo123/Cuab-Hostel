import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Signup() {
  const [fname, setFname] = useState('');
  const [mail, setMail] = useState('');
  const [pword, setPword] = useState('');
  const [cword, setCword] = useState('');
  const [message, setMessage] = useState('');
  const [mess, setMess] = useState('');
  const [mes, setMes] = useState('');

  const validate = (e) => {
    e.preventDefault(); // stop form from refreshing the page
   

       if (pword === '' || cword === '' || mail === '' || fname === '') {
      setMessage('❌ Please fill all fields');
      return;
    }
     else if (cword === pword) {
        window.location.href = '/login'; 
    } else {
      setMessage('❌ Passwords must match');
    }
      };


      const checkMail = (e) => {
        
        const mailvalue = e.target.value;
        setMail(mailvalue);
               
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          if (!emailRegex.test(mail)) {
                setMes('❌ Please enter a valid email address');
          
}

   else{
    setMes('')
   }
      }

 
 const checkPassword = (e) => {
    const val = e.target.value;
    setPword(val);

    if (val.length === 0) {
      setMess('');
    } 

    else if (val.length < 6 || !/[!@#$%^&*()]/.test(val)) {
      setMess('❌ Password must be 6+ characters  \n  Password should contain at least one special character.');
    } 

    else {
      setMess('✅ Strong password');
    }
  };

  return (
    <div> 
      <Header />
      
      <div id='contact'>
        <h3>Create an account</h3>
        <div className='login'>
          <form onSubmit={validate}>
            <label>Full Name</label>
            <input 
              type='text'
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />  
            <br /> <br />  

            <label>Email</label> 
            <input 
              type='email' 
              id='mail'
              value={mail}
              onChange={checkMail}
            />  
            <br /> 
             <p id ='show' >
                {mes}
              </p> 
            
            <br />  

            <label>Password</label>
            <input 
              type='password' 
              id='pass'
              value={pword}
              onChange={checkPassword}
            />  
            <br /> 

             <p className='showMessage' 
               style={{ color: mess.includes('✅') ? 'green' : 'red' }}>
                {mess}
              </p> 

              <br />

            <label>Confirm Password</label> 
            <input 
              type='password' 
              id='word'
              value={cword}
                 onChange={(e) => setCword(e.target.value)}
            />  
            <br /> 

        
              <p className='showMessage' 
                style={{ color: message.includes('✅') ? 'green' : 'red' }}>
                {message}
              </p> <br />



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

export default Signup;
