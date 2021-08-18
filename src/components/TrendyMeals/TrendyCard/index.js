import { Link } from 'react-router-dom';
import './styles.scss';


const TrendyCard = ({ data }) => {
    return (

        <div className="trendy-card">
            <Link to={{
                pathname: "/detail",
                search: `?mealId=${data.idMeal}`,
            }}>
                <img className="trendy-card__image" src={data.strMealThumb} alt={data.strMeal}></img>
                <div className="trendy-card__name" ><p>{data.strMeal}</p>
                </div>
            </Link>
        </div>
    );
}

export default TrendyCard;