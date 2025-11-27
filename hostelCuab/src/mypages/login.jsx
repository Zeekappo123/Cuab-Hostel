import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import {Link} from 'react-router-dom'


function Login(){
    return (
        <div>
           
           <Header />
 
            <div id='contact'>
                <h3 id='find'>Login to your account</h3>
                <div className='login'>
                    <form>
                        <label>Email </label> 
                        <input type='email'/>  <br /> <br />  
                        <label>Password </label> 
                        <input type='password'/>  <br /> <br /> 
                        <Link to="/home">
                            <button>Login</button> <br />  <br />
                        </Link> 
                          
                        <p>No account? <Link to="/signup">Create one</Link> </p>
                    </form>
                </div>
            </div>
            <br /> <br />

           <Footer />
        </div>
    )
}


export default Login;