import './App.css';
import React, { useState, useEffect } from 'react';
import RecipeButton from './Components/RecipeButton';
import RecipeDisplay from './Components/RecipeDisplay';
import IngredientInput from './Components/IngredientInput';
import SavedRecipes from './Components/SavedRecipes';

const App = () => {
    const [recipe, setRecipe] = useState(null); // Stores the currently displayed recipe
    const [savedRecipes, setSavedRecipes] = useState([]); // List of saved recipes
    const [loading, setLoading] = useState(false); // Tracks loading state for API calls

    // Load saved recipes from localStorage when the app first loads
    useEffect(() => {
        const storedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
        setSavedRecipes(storedRecipes);
    }, []);

    // Fetches a dessert recipe that contains one or both specified ingredients
    const fetchRecipe = async (ingredient1 = '', ingredient2 = '') => {
        setLoading(true); // Start loading

        try {
            const maxTries = 60; // Limit on attempts to prevent endless search, and to prevent the bug of not finding a recipe
            let attempts = 0;
            let foundRecipe = null;

            // Loop until a matching recipe is found or attempts are maxed out
            while (attempts < maxTries && !foundRecipe) {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
                const data = await response.json();
                const randomRecipe = data.meals[0];

                // Check if the recipe is a dessert in the API DB
                const isDessert = randomRecipe.strCategory === 'Dessert' || randomRecipe.strMeal.toLowerCase().includes("cake");

                // Check if the recipe includes ingredient1 if I specified an ingredient
                const containsIngredient1 = ingredient1
                    ? Array.from({ length: 20 }).some((_, index) => {
                          const ingredientField = randomRecipe[`strIngredient${index + 1}`];
                          return ingredientField && ingredientField.toLowerCase().includes(ingredient1.toLowerCase());
                      })
                    : true;

                // Check if the recipe includes ingredient2 if i searched for 2 ingredients
                const containsIngredient2 = ingredient2
                    ? Array.from({ length: 20 }).some((_, index) => {
                          const ingredientField = randomRecipe[`strIngredient${index + 1}`];
                          return ingredientField && ingredientField.toLowerCase().includes(ingredient2.toLowerCase());
                      })
                    : true;

                // If it's a dessert and has the required ingredients, set as found recipe
                if (isDessert && containsIngredient1 && containsIngredient2) {
                    foundRecipe = randomRecipe;
                }

                attempts += 1;
            }

            // If a matching recipe is found (with at least one of the two specified ingreidents if the users wanted specific ingredients), update the displayed recipe
            if (foundRecipe) {
                setRecipe(foundRecipe);
            } else {
                alert(`No dessert recipes found containing both "${ingredient1}" and "${ingredient2}" after ${maxTries} tries. Please try different ingredients.`);
                setRecipe(null);
            }
        } catch (error) {
            console.error('Error fetching recipe:', error);
            setRecipe(null); // If there's an error, reset the recipe
        }

        setLoading(false); // End loading
    };

    // Updates the current recipe to a selected saved recipe when clicked
    const handleSelectRecipe = (selectedRecipe) => {
        setRecipe(selectedRecipe);
    };

    // Saves the current recipe to localStorage and the saved recipes list on the bottom of the page
    const saveRecipe = (recipe) => {
        const updatedSavedRecipes = [...savedRecipes, recipe];
        setSavedRecipes(updatedSavedRecipes);
        localStorage.setItem('savedRecipes', JSON.stringify(updatedSavedRecipes));
    };

    return (
        <div className="App">
            <h1>Random Cake Recipe Generator</h1>
            <IngredientInput onIngredientChange={fetchRecipe} />
            <RecipeButton fetchRecipe={() => fetchRecipe()} />
            {loading ? <p>Loading...</p> : <RecipeDisplay recipe={recipe} saveRecipe={saveRecipe} />}
            <SavedRecipes savedRecipes={savedRecipes} onSelectRecipe={handleSelectRecipe} />
        </div>
    );
};

export default App;
