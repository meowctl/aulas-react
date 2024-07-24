import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

function Card() {
    let icons = [faHeart, faComment, faPaperPlane];
    let names = ["João", "Maria", "Ana"];

    return (
        <div className="card">
            <img src="https://i.imgur.com/C8Ny9c0.jpeg" alt="Avatar" />
            <div className="flex-start">
                {icons.map((icon, index) => <FontAwesomeIcon key={index} icon={icon} />)}
            </div>
            <ul>
                {names.map((name, index) => <li key={index}>{name}</li>)}
            </ul>
            <div className="container">
                <h4><b>João Doe</b></h4>
                <p>Arquiteto & Engenheiro</p>
            </div>
        </div> 
    );
}

export default Card;