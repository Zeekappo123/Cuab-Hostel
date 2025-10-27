import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Card from "../components/card/card"




function MaleHostel(){
    return (
        <div>
             

             <Header />


             <div id='find'>
                <h1>Male Hostels</h1>
                <p>Explore both general and private male hostels available for students. </p> <br />
                <br /> <br />    
             </div>

             <br /> <br />     


             <div className='host'>
                <h2>General Male Hostel</h2>

                    <div className='cards'>

                         <Card  id={1} image = 'bowlsant.webp' name="OKELEYE" price="150,000" bed="4 beds"
                          location="opposite main library" />
                       
                          <Card id={2} image = 'bowlsant.webp' name="DANGOTE" price="150,000" bed="4 beds"
                          location="opposite main library" />

                        <Card id={3} image = 'bowlsant.webp' name="TIJANI FOLAWIYO" price="150,000" bed="4 beds"
                          location="opposite main library" />
                    </div>  <br /> <br />  


                     <div className='cards'>

                         <Card id={4} image = 'bowlsant.webp' name="SAUDI" price="150,000" bed="4 beds"
                          location="opposite main library" />
                       
                          <Card id={5} image = 'bowlsant.webp' name="MAHRUF" price="150,000" bed="4 beds"
                          location="opposite main library" />

                    </div>  <br /> <br />  



             </div>




             <div className='host'>
                <h2>Private Male Hostel</h2>

                    <div className='cards'>

                         <Card  id={6}image = 'bowlsant.webp' name="ZAKARIYYAH" price="150,000" bed="4 beds"
                          location="opposite main library" />
                       
                          <Card id={7} image = 'bowlsant.webp' name="LATEEF ADEGBITE" price="150,000" bed="4 beds"
                          location="opposite main library" />

                        <Card  id={8}image = 'bowlsant.webp' name="PG" price="150,000" bed="4 beds"
                          location="opposite main library" />
                    </div>  <br /> <br />  


                     <div className='cards'>

                         <Card  id={9}image = 'bowlsant.webp' name="BUNGALOW 1" price="150,000" bed="4 beds"
                          location="opposite main library" />
                       
                          <Card id={10}image = 'bowlsant.webp' name="BUNGALOW 2" price="150,000" bed="4 beds"
                          location="opposite main library" />


                           
                          <Card id={11} image = 'bowlsant.webp' name="BUNGALOW 3" price="150,000" bed="4 beds"
                          location="opposite main library" />

                    </div>  <br /> <br />  

 

             </div>










             <Footer />
        </div>
    )
}


export default MaleHostel;