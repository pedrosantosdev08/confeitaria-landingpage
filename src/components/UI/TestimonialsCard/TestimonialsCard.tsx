import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import "./TestimonialsCard.css"

type TestimonialsCardProps = {
    message: string,
    nameClient: string,
    address: string,
}

export function TestimonialsCard({message, nameClient, address}:TestimonialsCardProps){
    return(
        <div className="testimonials-card">
            <div className="testimonials-stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            
            <p className="testimonials-message">"{message}"</p>
            
            <div className="testimonials-info">
                <p className="client-name">{nameClient}</p>
                <p className="client-address">{address}</p>
            </div>
        </div>
    )
}