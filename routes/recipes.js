import express from 'express';
import {
    getRecipe,
    getRecipes,
    postRecipe,
    updateRecipe
} from '../controllers/recipes.js'

const router = express.Router();

// Declare GET route to get all recipes
router.get('/', getRecipes)

// GET route to get a recipe by name
router.get('/:name', getRecipe)

// POST route to create new recipe
router.post('/', postRecipe)

// create PUT route to update a recipe, if recipe does not exist, return 'recipe does not exist'
router.put('/:name', updateRecipe)

export default router;