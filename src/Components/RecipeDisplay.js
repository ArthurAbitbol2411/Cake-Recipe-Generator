import React from 'react';

const RecipeDisplay = ({ recipe, saveRecipe }) => {
    // Display a message if no recipe is currently loaded
    if (!recipe) return <p>No recipe to display. Click the button to get a random cake recipe!</p>;

    return (
        <div className="RecipeDisplay">
            {/* Recipe name and image */}
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />

            {/* Display ingredients list */}
            <h3>Ingredients:</h3>
            <ul>
                {Array.from({ length: 20 }).map((_, index) => {
                    const ingredient = recipe[`strIngredient${index + 1}`];
                    const measure = recipe[`strMeasure${index + 1}`];
                    return ingredient ? (
                        <li key={index}>{`${ingredient} - ${measure}`}</li>
                    ) : null;
                })}
            </ul>

            {/* Recipe instructions */}
            <h3>Instructions:</h3>
            <p>{recipe.strInstructions}</p>

            {/* Save recipe button */}
            <button onClick={() => saveRecipe(recipe)}>Save Recipe</button>
        </div>
    );
};

export default RecipeDisplay;
