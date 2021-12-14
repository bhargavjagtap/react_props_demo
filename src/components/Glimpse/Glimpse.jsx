import React from 'react'
import './glimpse.css'
import {FaMapMarkerAlt} from "react-icons/fa"

const Glimpse = (props) => {
    return (
      <>
        <section>
        <div className="container bcontent">
        
        <hr />
        <div className="card" style={{width: '500px'}}>
            <div className="row no-gutters">
                <div className="col-sm-5">
                    <img className="image-container" src={props.imageUrl} alt="img"/>
                </div>
                <div className="col-sm-7">
                    <div className="card-body">
                        <div className="row">
                        <p className="card-text col-5 col-md-5"><FaMapMarkerAlt/> {props.location}</p>
                        <a className="card-text col-7 col-md-7" href={props.googleMapsUrl}>View on Maps</a>
                        </div>
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.startDate} - {props.endDate}</p>
                        <p className="card-text">{props.description}</p>
                        {/* <a href="#" className="btn btn-primary">View Profile</a> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
        </section>
      </>
    );
}

export default Glimpse

// title: "Mount Fuji",
//         location: "Japan",
//         googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
//         startDate: "12 Jan, 2021",
//         endDate: "25 Jan, 2021",
//         description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//         imageUrl: "https://unsplash.com/photos/WLxQvbMyfas"

