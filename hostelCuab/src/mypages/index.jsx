import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Card from '../components/card/card';  
import {Link} from 'react-router-dom'


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

                <Card id={1} image = 'bowlsant.webp' name="Okeleye" price="150,000" bed="4 beds"
                   location="opposite main library" />
                       
                <Card id={6} image = 'bowlsant.webp' name="Zakarriyyah" price="150,000" bed="4 beds"
                   location="opposite main library" />

                <Card id={7} image = 'bowlsant.webp' name="Lateef Adegbite" price="150,000" bed="4 beds"
                    location="opposite main library" />
           </div>  <br /> <br />  


             <div className='cards'>
            
                     
                             <Card id = {18} image = 'female.jpeg' name="Modupe" price="150,000" bed="4 beds"
                          location="opposite main library" />

                              <Card id={12} image = 'female.jpeg' name="Marble" price="150,000" bed="4 beds"
                          location="opposite main library" />

                              <Card id = {15}image = 'female.jpeg' name="Dantata" price="150,000" bed="4 beds"
                          location="opposite main library" />

           </div>
      
  <br />   

           <Footer />
        </div>
    )
}


export default Home;
