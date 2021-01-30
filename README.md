# LHL Final Project - Cocktail Sage

## Overview

Cocktail Sage is a website where you can browse or search existing recipes, add their own twist to them or create a new recipe from scratch!

!["CocktailSage - logo"](https://github.com/hermitAT/react-sage/blob/master/docs/logo.png)

#
# Main Features

### Ingredients List
- Cocktail Sage uses a database full of the most popular and widely used ingredients for cocktail recipes. Each ingredient has characteristics regarding alcoholic content, flavour and are sorted into categories to allow users to navigate through these lists with ease.

!["CocktailSage - ingredients"](https://github.com/hermitAT/react-sage/blob/master/docs/create_page_add_ingredient.png)

#
### Creating Recipes
- Users can create recipes from the available ingredients, making sure to include an image, brief description and instructions for how they are to be made. When a new recipe is created, the expected strength of the cocktail is calculated, given the volumes and characteristics of the ingredients used.

!["CocktailSage - create recipe"](https://github.com/hermitAT/react-sage/blob/master/docs/create_page.png)

#
### Editing and reMixing Recipes
- Users can edit their existing recipes and change any number of details about them, adding new ingredients or changing the image or text-based descriptors. In addition, a user can use an existing recipe as a template when creating a new recipe.

!["CocktailSage - edit recipe"](https://github.com/hermitAT/react-sage/blob/master/docs/edit_page.png)

- The user can then make any number of changes to their 'reMix', and they are able to navigate back to the recipe they used as a template directly on the page for their new recipe, allowing users to see the inspiration for this new creation and view the changes over time with each new 'reMix'.

!["CocktailSage - reMix"](https://github.com/hermitAT/react-sage/blob/master/docs/reMix.png)

#
### Home Page
- Guests are greeted with a randomly selected Cocktail of the Day as well as some randomly selected trivia regarding alcohol or cocktails.

!["CocktailSage - home page random and fact"](https://github.com/hermitAT/react-sage/blob/master/docs/home_page_top.png)

- Guests are also shown the best rated alcoholic cocktail and non-alcoholic cocktail.

!["CocktailSage - home page best"](https://github.com/hermitAT/react-sage/blob/master/docs/home_page_bottom.png)

### NavBar
- The NavBar contains buttons to navigate back home, to go the create page, or to go to the search page. Active user information and a link to view their page or logout exist in the far right of the navbar.

!["CocktailSage - navbar"](https://github.com/hermitAT/react-sage/blob/master/docs/navbar.png)

- There is also a dropdown menu that will allow users to browse recipes by their chosen method of filtration (ex. by flavour, by strength or by a given ingredient).

!["CocktailSage - dropmenu flavor"](https://github.com/hermitAT/react-sage/blob/master/docs/dropmenu_flavor.png)
!["CocktailSage - dropmenu ingredient"](https://github.com/hermitAT/react-sage/blob/master/docs/dropmenu_ingredient.png)
!["CocktailSage - dropmenu strength"](https://github.com/hermitAT/react-sage/blob/master/docs/dropmenu_strength.png)
#

### Ingredient Page
- Each ingredient has it's own page, in which a guest can view details and information about a given ingredient as well as have access to a list of links to each of the 5 top rated cocktails containing this ingredient. The 'See More...' button allows users to then view all recipes containing this ingredient, sorted by date created.

!["CocktailSage - ingredient_page"](https://github.com/hermitAT/react-sage/blob/master/docs/ingredient_page.png)

#
### Recipe Card
- When recipes are displayed outside of their specific pages, they are displayed on a smaller card style. This card displays the brief summary, ingredients and the cocktail image but also details on number of favorites, rating, number of comments and what flavour or strength category this recipe falls into.
- Users can navigate to the individual recipe page from this card by using the comments badge or clicking the recipe image, or they can navigate to filter all recipes by the same flavour or strength as the card in question by clickin on those badges.
- Users can add or remove a recipe from their favorites by hitting the favorite badge on the card, and can also give the recipe a rating from 1 to 5 by hitting the rating badge.

!["CocktailSage - recipe card"](https://github.com/hermitAT/react-sage/blob/master/docs/recipe_card.png)

#
### Recipe Page
- As with each ingredient, each recipe page has a page containing more detailed information for this recipe, with instructions and comments being shown as well a breakdown of the rating it has and the number of users who have rated this recipe. The strength is also compared to a common alcoholic drink ('It's like drinking beer!') as well as links to view all recipes with the same flavour or strength as the current recipe you are viewing.
- Users can leave a comment on any given recipe on this page.
- The list of ingredients for each recipe also contains a navigation link to view the specific page for each ingredient in the recipe, allowing for seamless navigation across all parts of the website. If the recipe was a reMix, you can also navigate back to the recipe used as a template to view the cocktail prior to the reMix.

!["CocktailSage - recipe page"](https://github.com/hermitAT/react-sage/blob/master/docs/recipe_page.png)

#
### Search Page
- On the search page user can enter a part of the recipe name and find all recipes containing that query string. Also specific recipes can be added to the search query with the "+ Add ingredient" button.

!["CocktailSage - search_page_barthender1"](https://github.com/hermitAT/react-sage/blob/master/docs/search_page_barthender1.png)

- Search results are ordered by relevance and recipe with the most matches with the query appears first.

!["CocktailSage - search_page_barthender2"](https://github.com/hermitAT/react-sage/blob/master/docs/search_page_barthender2.png)

- Search results are paginated and contents of different pages can be shown by clicking the pages buttons on the bottom.

!["CocktailSage - search_page_pagination"](https://github.com/hermitAT/react-sage/blob/master/docs/search_page_pagination.png)

#
### Browse Page
- A page that displays a large number of recipes in sets of 4, paginated with buttons for each page of recipes populating at the bottom of the page. This page is dynamic and will display all recipes by the given filtration choice, whether it is by flavour, strength or a specific ingredient.

!["CocktailSage - browse_by_page"](https://github.com/hermitAT/react-sage/blob/master/docs/browse_by_page.png)

#
### User Page
- Each user has access to their own page, in which they can view their specific details and all recipes they have created or favorited. Recipes are displayed in same sets of 4 with pagination that is used on the search and browse pages.

!["CocktailSage - user_page"](https://github.com/hermitAT/react-sage/blob/master/docs/user_page.png)

#
## Getting Started
1. Install dependencies with: `npm install`
2. Run the server! `npm start`
3. View the page at `http://localhost:8000/`
4. It's that easy! Now you can dive into the free-flowing navigation of CocktailSage!

#
## Dependencies
- axios: ^0.21.0
- classnames: ^2.2.6
- react: ^17.0.1
- react-dom: ^17.0.1
- react-router-dom: ^5.2.0
- react-scripts: ^4.0.1
- babel-loader: ^8.0.5
- node-sass: ^4.12.0
