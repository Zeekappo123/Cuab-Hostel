import Header from '../components/header/header'
import Footer from '../components/footer/footer'


function Contact(){
    return (
        <div>
             
             <Header />

      
             <div id='contact'>
                    
                    <h3>Contact Us</h3>
                    <div className='login'>
                         
                           <form>
                        <label>Full Name </label> <br /> <br />
                        <input type='name'/>  <br /> <br />  

                            <label>Email </label> <br /> <br />
                        <input type='email'/>  <br /> <br />  

                            <label>Message </label> <br /> <br />
                       <textarea></textarea>  <br /> <br />

                       <button>Send Messaage</button>

                    </form>
                    </div>
                  
             </div>
              <br /> <br />



             < Footer />
        </div>
    )
}


export default Contact;