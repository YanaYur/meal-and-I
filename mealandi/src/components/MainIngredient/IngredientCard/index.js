import './styles.scss';

const data = {
    "strMeal": "Honey Teriyaki Salmon",
    "strMealThumb": process.env.REACT_APP_IMG_URL_BASE+"Chicken-Small.png",
    "idMeal": "52773"
};

const IngredientCard = () => {
    return (
        <div key={data.idMeal} className="ingredient-card">
            <img className="ingredient-card__image" src={data.strMealThumb} alt={data.strMeal}></img>
        </div>
    );
}

export default IngredientCard;