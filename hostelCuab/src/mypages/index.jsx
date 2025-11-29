import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Card from '../components/card/card';  
import {Link} from 'react-router-dom'
import dangote from "../assets/images/dangote.jpeg"
import saudi from "../assets/images/saudi.jpeg"
import bungalow from "../assets/images/bungalow.jpeg"
import modupe from "../assets/images/modupe.jpeg"
import toyin from "../assets/images/toyin.jpeg"
import dantata from "../assets/images/dantata.jpeg"


function Home(){
    return (
        <div className='container'>
           <Header />

           <div id='find'>
            <h1>Find & Book Campus Hostels Easily</h1>
            <p>Browse verified hostels for male & female students. Compare prices, 
                view details and reserve your room online.</p> <br/> 

                 <button id='but' >
                    <Link to="/male"> Male Hostels</Link>
                 </button>
                 
                 <button id='fem'>
                       <Link to="/female"> Female Hostels</Link>
                </button>
                  <br /> <br />      <br /> <br />     

           </div>   <br /> <br />  

           

           <div className='cards'>

                <Card id={1} image = {dangote} name="DANGOTE" price="150,000" bed="4 beds"
                   location="opposite main library" />
                       
                <Card id={3} image = {saudi} name="SAUDI" price="150,000" bed="4 beds"
                   location="opposite main library" />

                <Card id={8} image = {bungalow} name="BUNGALOW" price="150,000" bed="4 beds"
                    location="opposite main library" />
           </div>  <br /> <br />  


             <div className='cards'>
            
                     
                             <Card id = {16} image = {modupe} name="MODUPE" price="150,000" bed="4 beds"
                          location="opposite main library" />

                              <Card id={10} image = {toyin} name="OLUWATOYIN" price="150,000" bed="4 beds"
                          location="opposite main library" />

                              <Card id = {13}image = {dantata} name="DANTATA" price="150,000" bed="4 beds"
                          location="opposite main library" />

           </div>
      
  <br />   

           <Footer />
        </div>
    )
}


export default Home;
