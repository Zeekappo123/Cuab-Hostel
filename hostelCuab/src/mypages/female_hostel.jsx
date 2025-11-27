import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import HostelGrid from '../components/HostelGrid'
import Card from "../components/card/card"

const hostel = [
  {
    id: 12,
    image: 'bowlsant.webp',
    name:"MARBLE",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 13,
    image: 'bowlsant.webp',
    name:"HAMEEDAH",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 14,
    image: 'bowlsant.webp',
    name:"AMOTA",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 15,
    image: 'bowlsant.webp',
    name:"DANTATA",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 16,
    image: 'bowlsant.webp',
    name:"GBADELA",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 17,
    image: 'bowlsant.webp',
    name:"IQRA",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 18,
    image: 'bowlsant.webp',
    name:"MODUPE",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 19,
    image: 'bowlsant.webp',
    name:"U-SHAPED",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 20,
    image: 'bowlsant.webp',
    name:"BOWLSANT 1",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 21,
    image: 'bowlsant.webp',
    name:"BOWLSANT 2",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 22,
    image: 'bowlsant.webp',
    name:"BOWLSANT 3",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 23,
    image: 'bowlsant.webp',
    name:"TROPICANA",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 24,
    image: 'bowlsant.webp',
    name:"OUTSIDE",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 25,
    image: 'bowlsant.webp',
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


            <div id='find'>
                <h1>Female Hostels</h1>
                <p>Explore both general and private female hostels available for students. </p> <br />
                     <br /> <br />    
            </div>

            <br /> <br />  
            <div className='host'>
                <h2>General Female Hostel</h2>

                  <div className='cards'>
                    <HostelGrid  
                      data={hostel.filter(item => item.id < 19)} 
                    />
                  
                  </div>
                  <br />

             </div>




             <div className='host'>
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