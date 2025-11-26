import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from './mypages/index.jsx'
import Male from './mypages/male_hostel.jsx'
import Female from './mypages/female_hostel.jsx'
import Book from './mypages/book.jsx'
import Contact from './mypages/contact.jsx'
import Login from './mypages/login.jsx'
import Register from './mypages/register.jsx'
import SignUp from './mypages/signup.jsx'
import HostelDetails from './mypages/host_details.jsx';


function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path='' element = {<Home />}/>
           <Route path='home' element = {<Home />}/>
            <Route path='male' element = {<Male />}/>
             <Route path='female' element = {<Female />}/>
              <Route path='book' element = {<Book />}/>
               <Route path='contact' element = {<Contact />}/>
                  <Route path='signup' element = {<SignUp />}/>
                <Route path='login' element = {<Login />}/>
                          <Route path='register' element = {<Register />}/>
                <Route path="hostel/:id" element={<HostelDetails />} />



        </Routes>
      </Router>
    </div>
  )
}


export default App;