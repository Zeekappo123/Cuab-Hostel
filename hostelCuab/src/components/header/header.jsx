import "./header.css";
import { Link } from "react-router-dom";

function Header(){
    return(
     
       <div className="header">
            <div>

                 <Link to = "/">
                        <img src="/images.jpeg" alt="logo"/>
                 </Link>  
                
            </div>

            <div id="links">
                    <Link to = "/">Home</Link>    
                    <Link to = "/male">Male Hostel</Link>   
                    <Link to = "/female">Female Hostel</Link>    
                    <Link to = "/book">Booking</Link>     
                    <Link to = "/contact">Contact</Link>    
                    <button>
                          <Link to = "/login">Login</Link>  
                    </button>  
                      
            </div>


             
        </div>
    )
}


export default Header











       