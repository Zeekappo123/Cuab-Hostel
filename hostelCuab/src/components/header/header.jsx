import "./header.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import logo from "../../assets/images/images.jpeg"

function Header(){
    return(
     
       <div className="header min-w-screen">
            <div>

                 <Link to = "/">
                        <img src={logo} alt="logo"/>
                 </Link>  
                
            </div>

            <div id="links">
                    <Link to = "/home">Home</Link>    
                    <Link to = "/male">Male Hostel</Link>   
                    <Link to = "/female">Female Hostel</Link>      
                    <Link to = "/contact">Contact</Link>    
                    <Link to = "/book">Booking</Link>  
                    

                      
            </div>


             
        </div>
    )
}


export default Header











       