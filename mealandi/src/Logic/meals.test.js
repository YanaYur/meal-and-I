import {getMainIngredients, getRandomMeal,getTrendyMeals} from './meals.js';

test('fetch list of ingredients', async () => {
    // Arranges

    // Act 
    const res = await getMainIngredients();


    // Assert
    expect(res).toHaveLength(10);

});

test('fetch trendy meals', async ()=>{
    // Arranges

    // Act 
    const res = await getTrendyMeals();

    // Assert
    expect(typeof res).toBe('object');

});

test('fetch random meal', async ()=>{
    // Arranges

    // Act 
    const res= await getRandomMeal();
    // Assert
    
    expect(typeof res).toBe('object');
})