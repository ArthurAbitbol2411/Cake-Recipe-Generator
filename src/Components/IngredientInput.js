import React, { useState } from 'react';

const IngredientInput = ({ onIngredientChange }) => {
    // Track the input values for each ingredient
    const [ingredient1, setIngredient1] = useState('');
    const [ingredient2, setIngredient2] = useState('');

    // Trigger the ingredient search with both ingredients when the button is clicked
    const handleSearchClick = () => {
        onIngredientChange(ingredient1, ingredient2);
    };

    return (
        <div className="IngredientInput-container">
            {/* Input for the first ingredient */}
            <input
                type="text"
                value={ingredient1}
                onChange={(e) => setIngredient1(e.target.value)}
                placeholder="Enter first ingredient (e.g., chocolate)"
            />

            {/* Input for the second ingredient */}
            <input
                type="text"
                value={ingredient2}
                onChange={(e) => setIngredient2(e.target.value)}
                placeholder="Enter second ingredient (optional)"
            />

            {/* Button to initiate search based on entered ingredients */}
            <button onClick={handleSearchClick}>Search by Ingredients</button>
        </div>
    );
};

export default IngredientInput;
