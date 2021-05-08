import { AiOutlineLeft, AiOutlineStar} from 'react-icons/ai'

import './styles.scss';

function loading() {
    return (
        <div>Loading...</div>
    )
}

function detailMeal(data) {
    return (
        <div key={data.idMeal} className="detail-meal">
            <div className="detail-meal__buttons">
             <button type="button" className="back" value="click" ><AiOutlineLeft /></button>
             <button type="button" className="back" value="click" ><AiOutlineStar /></button>
            </div>
            <img className="detail-meal__image" src={data.strMealThumb} alt={data.strMeal}></img>
            <div className="detail-meal__name">{data.strMeal}</div>
            <div className="detail-meal__ingredients">{data.strMeasure1} {data.strIngredient1}</div>
            <div className="detail-meal__ingredients">{data.strMeasure2} {data.strIngredient2}</div>
            <div className="detail-meal__ingredients">{data.strMeasure3} {data.strIngredient3}</div>
            <div className="detail-meal__ingredients">{data.strMeasure4} {data.strIngredient4}</div>
            <div className="detail-meal__ingredients">{data.strMeasure5} {data.strIngredient5}</div>
            <div className="detail-meal__ingredients">{data.strMeasure6} {data.strIngredient6}</div>
            <div className="detail-meal__ingredients">{data.strMeasure7} {data.strIngredient7}</div>
            <div className="detail-meal__ingredients">{data.strMeasure8} {data.strIngredient8}</div>
            <div className="detail-meal__wrapper">
            <div className="detail-meal__instructions">{data.strInstructions}</div>
            </div>
        </div>);

};


const DetailCard = ({data}) => {
   debugger
    return (
        <div className="detail-info">
      
            {data ? detailMeal(data) : loading()}

        </div>
    );
};
export default DetailCard;