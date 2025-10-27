import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import {Link} from 'react-router-dom'


function Signup(){
    return (
        <div> 
            <Header />
           


             <div id='contact'>
                    
                    <h3>Create an account</h3>
                    <div className='login'>
                      <form>
                        <label>Full Name </label> 
                        <input type='name'/>  <br /> <br />  

                        <label>Email </label> 
                        <input type='email'/>  <br /> <br />  

                        <label>Password  </label>
                        <input type='password'/>  <br /> <br />  

                        <label> Confirm Password </label> 
                        <input type='password'/>  <br /> <br />  


                   

                        <button>Sign Up</button> <br /> <br />


                        <p>Already have an account?     <Link to="/login">Login</Link>     </p>


               

                      </form>
                    </div>
                  
             </div>
              <br /> <br />

                    <Footer />

        </div>
    )
}





export default Signup;