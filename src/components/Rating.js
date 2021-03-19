import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import './Rating.scss';

const Rating = ({value}) => {

    switch (value) {
        case 1:
            
        return (
            <div className= "stars-container"> 
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarRegular} />
                <FontAwesomeIcon icon={faStarRegular} />
                <FontAwesomeIcon icon={faStarRegular} />
                <FontAwesomeIcon icon={faStarRegular} />

            </div>

        
        )
            break;
        case 2:
        
            return (
                <div className= "stars-container"> 
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarRegular} />
                    <FontAwesomeIcon icon={faStarRegular} />
                    <FontAwesomeIcon icon={faStarRegular} />
    
                </div>
    
            
            )
                break;
        case 3:

            return (
                <div className= "stars-container"> 
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarRegular} />
                    <FontAwesomeIcon icon={faStarRegular} />
    
                </div>
    
            
            )
                break;
        case 4:

            return (
                <div className= "stars-container"> 
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarRegular} />
                </div>
    
            
            )
                break;
        case 5:

            return (
                <div className= "stars-container"> 
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
    
                </div>
    
            
            )
                break;

        default:
            break;
    }


};

export default Rating;
