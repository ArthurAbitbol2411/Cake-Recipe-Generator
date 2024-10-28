import React from 'react';

const SavedRecipes = ({ savedRecipes, onSelectRecipe }) => {
    if (savedRecipes.length === 0) return <p>No saved recipes.</p>;

    return (
        <div className="SavedRecipes">
            <h3>Saved Recipes</h3>
            <ul>
                {savedRecipes.map((recipe, index) => (
                    <li key={index} onClick={() => onSelectRecipe(recipe)} style={{ cursor: 'pointer' }}>
                        <h4>{recipe.strMeal}</h4>
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SavedRecipes;

