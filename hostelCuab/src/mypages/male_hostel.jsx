import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Card from "../components/card/card"
import HostelGrid from '../components/HostelGrid'
const hostel = [
  {
    id: 1,
    image: 'bowlsant.webp',
    name:"OKELEYE",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 2,
    image: 'bowlsant.webp',
    name:"DANGOTE",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 3,
    image: 'bowlsant.webp',
    name:"TIJANI FOLAWIYO",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 4,
    image: 'bowlsant.webp',
    name:"SAUDI",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 5,
    image: 'bowlsant.webp',
    name:"MAHRUF",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 6,
    image: 'bowlsant.webp',
    name:"ZAKARIYYAH",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 7,
    image: 'bowlsant.webp',
    name:"LATEEF ADEGBITE",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 8,
    image: 'bowlsant.webp',
    name:"PG",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 9,
    image: 'bowlsant.webp',
    name:"BUNGALOW 1",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 10,
    image: 'bowlsant.webp',
    name:"BUNGALOW 2",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  },
  {
    id: 11,
    image: 'bowlsant.webp',
    name:"BUNGALOW 3",
    price:"150,000",
    bed:"4 beds",
    location:"opposite main library"
  }
]


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
                    <HostelGrid  
                    data={hostel.filter(item => item.id < 7 )} 
                  />
                  </div>
                  <br />

             </div>




            <div className='host'>
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