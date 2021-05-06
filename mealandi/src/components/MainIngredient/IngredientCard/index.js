import './styles.scss';
import { Link } from 'react-router-dom';

const IMAGE_BASE_URL = process.env.REACT_APP_IMG_URL_BASE;

const IngredientCard = ({ data }) => {
    const imgUrl = `${IMAGE_BASE_URL}${data.strIngredient}-Small.png`;

    return (
        <div key={data.idMeal} className="ingredient-card">
            <Link to={{
                pathname: "/search",
                search: `?ingredient=${data.strIngredient}`,
            }}>
                <img className="ingredient-card__image" src={imgUrl} alt={data.strIngredient}></img>
            </Link >
        </div >
    );
}

export default IngredientCard;