import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Card from "../components/card/card"



function FemHostel(){
    return (
        <div>
             

             <Header />


             <div id='find'>
                <h1>Female Hostels</h1>
                <p>Explore both general and private female hostels available for students. </p> <br />
                     <br /> <br />    
             </div>

             <br /> <br />  


             <div className='host'>
                <h2>General Female Hostel</h2>

                    <div className='cards'>

                         <Card id={12} image = 'female.jpeg' name="MARBLE" price="150,000" bed="2 beds"
                          location="opposite main library" />
                       
                          <Card id={13} image = 'female.jpeg' name="HAMEEDAH" price="150,000" bed="4 beds"
                          location="opposite main library" />

                        <Card id={14} image = 'female.jpeg' name="AMOTA" price="150,000" bed="6 beds"
                          location="opposite main library" />
                    </div>  <br /> <br />  


                     <div className='cards'>

                         <Card id={15} image = 'female.jpeg' name="DANTATA" price="150,000" bed="4 beds"
                          location="opposite main library" />
                       
                          <Card id={16} image = 'female.jpeg' name="GBADELA" price="150,000" bed="4 beds"
                          location="opposite main library" />

                    </div>  <br /> <br />  



             </div>




             <div className='host'>
                <h2>Private Female Hostel</h2>

                    <div className='cards'>

                         <Card id={17} image = 'female.jpeg' name="IQRA" price="150,000" bed="3 beds"
                          location="opposite main library" />
                       
                          <Card id={18} image = 'female.jpeg' name="MODUPE" price="150,000" bed="2 beds"
                          location="opposite main library" />

                        <Card id={19}  image = 'female.jpeg' name="U-SHAPED" price="150,000" bed="4beds"
                          location="opposite main library" />
                    </div>  <br /> <br />  


                     <div className='cards'>

                         <Card id={20} image = 'female.jpeg' name="BOWLSANT 1" price="150,000" bed="4beds"
                          location="opposite main library" />
                       
                          <Card id={21}  image = 'female.jpeg' name="BOWLSANT 2" price="150,000" bed="4beds"
                          location="opposite main library" />


                           
                          <Card id={22}  image = 'female.jpeg' name="BOWLSANT 3" price="150,000" bed="4beds"
                          location="opposite main library" />

                    </div>  <br /> <br />  



                     <div className='cards'>

                         <Card id={23}  image = 'female.jpeg' name="TROPICANA" price="150,000" bed="4beds"
                          location="opposite main library" />
                       
                          <Card id={24} image = 'female.jpeg' name="OUTSIDE" price="150,000" bed="4beds"
                          location="opposite main library" />


                           
                          <Card id={25} image = 'female.jpeg' name="CICOT" price="150,000" bed="4beds"
                          location="opposite main library" />

                    </div>  <br /> <br />  



             </div>










             <Footer />
        </div>
    )
}


export default FemHostel;