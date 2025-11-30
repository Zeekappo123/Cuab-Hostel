import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import HostelGrid from '../components/HostelGrid'
import bungalow from "../assets/images/bungalow.jpeg"
import dangote from "../assets/images/dangote.jpeg"
import mahruf from "../assets/images/mahruf.jpeg"
import saudi from "../assets/images/saudi.jpeg"
import tijani from "../assets/images/tijani.jpeg"
import bowlsant from "../assets/images/bowlsant.webp";


const hostel = [
  {
    id: 1,
    image: dangote,
    name:"DANGOTE",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },

  {
    id: 2,
    image: tijani,
    name:"TIJANI FOLAWIYO",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },

  {
    id: 3,
    image: saudi,
    name:"SAUDI",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },

  {
    id: 4,
    image: mahruf,
    name:"MAHRUF",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },

  {
    id: 5,
    image: bowlsant,
    name:"ZAKARIYYAH",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },

  {
    id: 6,
    image: bowlsant,
    name:"LATEEF ADEGBITE",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },

  {
    id: 7,
    image: bowlsant,
    name:"PG",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  
  {
    id: 8,
    image: bungalow,
    name:"BUNGALOW ",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  }

]


function MaleHostel(){

    return (
        <div>
             

             <Header />


             <div id='find' className='flex flex-col items-center justify-center'>
                <h1>Male Hostels</h1>
                <p>Explore both general and private male hostels available for students. </p> <br />
                <br /> <br />    
             </div>

             <br /> <br />     


             <div className='host flex flex-col items-center justify-center'>
                <h2>General Male Hostel</h2>

                  <div className='cards'>
                    <HostelGrid  
                    data={hostel.filter(item => item.id < 7 )} 
                  />
                  </div>
                  <br />

             </div>




            <div className='host flex flex-col items-center justify-center'>
                <h2>Private Male Hostel</h2>

                <div className='cards'>
                  <HostelGrid  
                    data={hostel.filter(item => item.id>6 )} 
                  />
                  </div>
                  <br />

            </div>










             <Footer />
        </div>
    )
}


export default MaleHostel;