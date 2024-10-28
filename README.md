RANDOM CAKE RECIPE GENERATOR

Project Description:


One of my favorite activities to do when I'm bored is baking cakes. However, I often find myself doing the same recepies again and again: I know how to bake them perfectly, and I'm sure me and my friends will like it.
But this started to annoy me. After hundreds of banana breads, chocolate cakes and a couple raspberry tarts, I want to challenge myself and bake different types of cakes to improve my baking skills. And this is how I came up with this web app idea. 
So, I built this Random Cake Recipe Generator. This app is designed to help me break out of my baking routine by offering a new cake recipe at random. I can also choose to find recipes based on specific ingredients, allowing me to experiment more with what I already have at home. Generating a random recipe with all the needed ingredients and instructions in seconds is not only time-efficient but sparks creativity and invites a bit of challenge.
I wanted my app to have 4 main components: 
1: The Recipe button to generate a random recipe
2: The Ingredient button to generate a random recipe using specified ingredients to allow for more creativity and efficiency
3: The Recipe display, with a picture of the cake, the ingredients needed and the baking instructions
4: A "Saved reciped" table, with some recipes you liked in case you want to do them hundreds of times like you used to do before finding my web app!



Setup and Installation:


To set up and run this project on your local machine:
1: Clone the Repository: git clone <repository-url>
cd random-cake-recipe
2: Install Dependencies: Use npm to install required packages.
3: Run the Application: Start the development server using npm start

When on the webpage, you can click on random cake generator to generate a radom recipe. You can also input specific ingredients you want to use at the top of the page. Warning: When inputing ingredients, you may have to try a couple times. As there was a problem with the code (that even ChatGPT couldn't solve) i used an iteration method to find recipes that contained the ingredients. 



API Information:


This app uses the TheMealDB API, a free API that provides a collection of recipes and ingredients, including a category dedicated to desserts (that I used for my project). Here’s how it’s integrated:

Random Recipe Generation: The app fetches a random recipe from the API’s collection, specifically filtering for dessert recipes to focus on cakes and other sweet treats.
Ingredient-Specific Search: The app also supports ingredient-based searches by filtering recipes to find those that contain one or more specified ingredients. This feature allows users to discover recipes that match what they already have in their pantry, or discover new recipes using ingredients that they want to try!



Credits for AI-Generated Code Portions:


I used AI assistance throughout the development process to help generate and troubleshoot specific parts of the code:

Component Structuring and Code Organization: I checked with AI that I could organize the app into modular components that I wanted (RecipeButton, RecipeDisplay, IngredientInput, and SavedRecipes), ensuring a clean and manageable structure. Then, I used AI to generate some parts of the code to ensure they were correct (AI-generated code is labeled in the files)
API Integration and Search Logic: AI provided guidance on how to set up and integrate the TheMealDB API, especially for filtering recipes by ingredients and limiting search attempts for efficiency.
Loop Logic: To resolve a problem I had with ingredient-specific research, AI helped design a loop that iterates through 60 random recipes, maintaining optimal performance for ingredient-based search.
CSS Styling and UI Enhancements: AI provided me with a base style for my web app, and I modified a couple parts such as the colors, alignments and fonts to do it to my liking.