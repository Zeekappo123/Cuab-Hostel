import './card.css'
import {Link} from 'react-router-dom'


function Card(props){
    return(
      <div>      
        <div className="hostel-card">
          <img src={props.image} alt="Blue Villa Hostel" />

          <div className="card-body">
            <h3>{props.name}</h3>
            <p className="price">{props.price} <span>{props.bed}</span></p>
            <p className="location">{props.location}</p>

            <div className="tags">
              <Link to= {`/hostel/${props.id}`} className='tag' id='tg'>View Details</Link>
              <span className="tag">WiFi</span>
              <span className="tag">Water</span>
              <span className="tag">24/7 Security</span>
            </div>

          </div>

        </div>
      </div>
    )
}




export default Card