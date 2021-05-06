import { Link } from 'react-router-dom';
import './styles.scss';


const FoundCard = ({ data }) => {
    return (
        <div key={data.idMeal} className="meals-card">
            <Link to={{
                pathname: "/detail",
                search: `?mealId=${data.idMeal}`,
            }}>
                <img className="meals-card__image" src={data.strMealThumb} alt={data.strMeal}></img>
                <div className="meals-card__name" >{data.strMeal}
                </div>
            </Link>
        </div>
    );
}

export default FoundCard;