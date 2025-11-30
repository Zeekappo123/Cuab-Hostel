import { useParams,Link } from "react-router-dom";
import hostels from "../hostel.js";
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { useState } from "react";


function HostelDetails() {
  const {id } = useParams();
  const hostel = hostels.find((h) => h.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(null);

  return (


    <div className="details">

                 <Header />

                 <div className="host_details">

                  <div>
                       
                      <div>

                         <img src={hostel.image} alt={hostel.name} />   <br /> <br />

                          <h2>{hostel.name}</h2>  <br /> 

                          <span>{hostel.location} </span>  &nbsp;  &nbsp; &nbsp; 
                          <span>  {hostel.bed} </span> &nbsp;  &nbsp; &nbsp; 
                          <span>{hostel.price}</span> &nbsp;  &nbsp; &nbsp;    <br /> <br />
                        <p>{hostel.description}</p>


                        
                      </div> <br /> 
                       

                         
                         <div id="amenities">
                              <h4>Basic Amenities :</h4>
                              <span>WiFi</span>
                               <span>24/7 Security</span>
                                <span>Water</span>
                         </div>  <br /> 


              


</div>
 


<div>

     
     

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full view" className="modal-image" />
        </div>
      )}




</div>

       
                        
                        
                    


                 </div>
    
    

       <Footer />
    </div>
  );
}

export default HostelDetails;
