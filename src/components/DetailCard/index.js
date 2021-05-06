import { AiOutlineLeft, AiOutlineStar} from 'react-icons/ai'

import './styles.scss';

function loading() {
    return (
        <div>Loading...</div>
    )
}

function detailMeal(meal) {
    return (
        <div key={meal.idMeal} className="detail-meal">
             <button type="button" className="back" value="click" ><AiOutlineLeft /></button>
             <button type="button" className="back" value="click" ><AiOutlineStar /></button>
            <img className="detail-meal__image" src={meal.strMealThumb} alt={meal.strMeal}></img>
            <div className="detail-meal__name">{meal.strMeal}</div>
            <div className="detail-meal__ingredients">{meal.strMeasure1} {meal.strIngredient1}</div>
            <div className="detail-meal__ingredients">{meal.strMeasure2} {meal.strIngredient2}</div>
            <div className="detail-meal__ingredients">{meal.strMeasure3} {meal.strIngredient3}</div>
            <div className="detail-meal__ingredients">{meal.strMeasure4} {meal.strIngredient4}</div>
            <div className="detail-meal__ingredients">{meal.strMeasure5} {meal.strIngredient5}</div>
            <div className="detail-meal__instructions">{meal.strInstructions}</div>
        </div>);

};


const DetailCard = ({ data }) => {
   
    return (
        <div className="detail-info">

            {data ? detailMeal(data) : loading()}

        </div>
    );
};
export default DetailCard;