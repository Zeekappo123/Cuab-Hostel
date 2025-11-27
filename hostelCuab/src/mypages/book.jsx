import Header from '../components/header/header'
import Footer from '../components/footer/footer'


function Book(){
    return (
        <div>
             
             <Header />

      
             <div id='contact'>
                    
                    <h3 id='find'>Reserve a Room</h3> <br />
                
                <div className='login'>
                       <form>
                       

             
                         <h2>Student Information</h2>
                        <label>Full Name </label>
                        <input type='name'/>  <br /> <br />  

                            <label>Email </label> 
                        <input type='email'/>  <br /> <br />  

                              <label>Phone Number </label> 
                        <input type='tel'/>  <br /> <br />  

              
                    

                            <h2>Booking Details</h2>
                            <label>Select Hostel </label> 
                       <select>
                         <option>OKELEYE -150,000</option>
                           <option>DANGOTE -150,000</option>
                             <option>BUNGALOW 1 -150,000</option>
                               <option>U-SHAPED -150,000</option>
                                 <option>AMOTA -150,000</option>
                                   <option>DNATATA -150,000</option>  
                                   <option>LATEEF -150,000</option>
                                     <option>MARBLE -150,000</option>
                                       <option>HAMEEDAH -150,000</option>
                                         <option>IQRA -150,000</option>  <option>OKELEYE -150,000</option>

                        
                        </select> <br /> <br />

                          <label>Room Type </label> 
                       <select>
                         <option>Single</option>
                           <option>Double</option>

                        
                        </select> <br /> <br />

                          <label>Start Date  </label> 
                        <input type='date'/>  <br /> <br />  
        

                     
                 
                             <h2>Document</h2>
                              
                              <label>IMASA Number  </label> 
                        <input type='number'/>  <br /> <br />  

                              <label>Parent Forum Number  </label>
                        <input type='number'/>  <br /> <br />  


                              <label>Upload Copy of School Fees Receipt  </label> 
                        <input type='file'/>  <br /> <br />  
      



                       <button>Confirm Booking</button>

                    </form>
                </div>
                   
             </div>
              <br /> <br />



             < Footer />
        </div>
    )
}


export default Book;