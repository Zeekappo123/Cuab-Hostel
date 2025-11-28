import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import HostelGrid from '../components/HostelGrid'
import bowlsant from "../assets/images/bowlsant.webp"


const hostel = [
  {
    id: 12,
    image: bowlsant,
    name:"MARBLE",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 13,
    image: bowlsant,
    name:"HAMEEDAH",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 14,
    image: bowlsant,
    name:"AMOTA",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 15,
    image: bowlsant,
    name:"DANTATA",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 16,
    image: bowlsant,
    name:"GBADELA",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 17,
    image: bowlsant,
    name:"IQRA",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 18,
    image: bowlsant,
    name:"MODUPE",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 19,
    image: bowlsant,
    name:"U-SHAPED",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 20,
    image: bowlsant,
    name:"BOWLSANT 1",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 21,
    image: bowlsant,
    name:"BOWLSANT 2",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 22,
    image: bowlsant,
    name:"BOWLSANT 3",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 23,
    image: bowlsant,
    name:"TROPICANA",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 24,
    image: bowlsant,
    name:"OUTSIDE",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 25,
    image: bowlsant,
    name:"BUNGALOW 3",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  }
]

function FemHostel(){
    return (
        <div>
             

             <Header />


            <div id='find' className='flex flex-col items-center justify-center'>
                <h1>Female Hostels</h1>
                <p>Explore both general and private female hostels available for students. </p> <br />
                <br /> <br />    
            </div>

            <br /> <br />  
            <div className='host flex flex-col items-center justify-center'>
                <h2>General Female Hostel</h2>

                  <div className='cards'>
                    <HostelGrid  
                      data={hostel.filter(item => item.id < 19)} 
                    />
                  
                  </div>
                  <br />

             </div>




             <div className='host flex flex-col items-center justify-center'>
                <h2>Private Female Hostel</h2>

                <div className='cards'>
                  <HostelGrid 
                    data={hostel.filter(item => item.id>18)} 
                  />
                
                </div>
                  <br />

             </div>

             <Footer />
        </div>
    )
}


export default FemHostel;