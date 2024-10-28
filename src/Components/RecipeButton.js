import React from 'react';

const RecipeButton = ({ fetchRecipe }) => {
    // Button triggers fetching a new random recipe when clicked
    return (
        <button onClick={fetchRecipe}>
            Get a Random Cake Recipe!
        </button>
    );
};

export default RecipeButton;

