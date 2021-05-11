import { React, useState, useEffect } from 'react';
import { useSelector} from 'react-redux';
import { favoritesSelector } from '../../redux/selectors/selectors';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import FavoritesList from '../../components/FavoritesList';
import Title from '../../components/Title'
import Logic from '../../Logic/meals'

import './styles.scss';

const Favorites = () => {
    
    const [favorites, setFavorites] = useState([]);
    const favoritesSelected = useSelector(favoritesSelector);
    

    useEffect( () => {
        fetchFavorites();
    }, []);

    async function fetchFavorites(){
        const favoritesList = await Logic.getMealsByIds(favoritesSelected);
        setFavorites(favoritesList);
    }
   
    return (
        <>
            <Header />
            <Title name="Your favorites meals" />
            <FavoritesList data={favorites} />
            <Menu />
        </>

    );
}
export default Favorites;