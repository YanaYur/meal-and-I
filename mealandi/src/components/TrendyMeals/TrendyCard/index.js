
import './styles.scss';


const data =   {
    "strMeal": "Baked salmon with fennel & tomatoes",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
    "idMeal": "52959"
};

const TrendyCard = () => {
    return (
        <div key={data.idMeal} className="trendy-card">
            <img className="trendy-card__image" src={data.strMealThumb} alt={data.strMeal}></img>
            <div className="trendy-card__name" >{data.strMeal}
           
            </div>
        </div>
    );
}

export default TrendyCard;