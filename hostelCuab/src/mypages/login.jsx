import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add validation here
    navigate('/home');
  };

  return (
    <div>
      <Header />

      <div id='contact'>
        <h3>Login to your account</h3>
        <div className='login'>
          <form onSubmit={handleLogin}>
            <label>Email </label>
            <input 
              type='email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br /> <br />

            <label>Password </label>
            <input 
              type='password' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br /> <br />

            <button type="submit">Login</button>  {/* Button text now shows */}
            <br /> <br />

            <p>No account? <Link to="/register">Create one</Link></p>
          </form>
        </div>
      </div>
      <br /><br />

      <Footer />
    </div>
  )
}

export default Login;
