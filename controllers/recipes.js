import pkg from "express/lib/response.js"
const { req, res } = pkg;
import { readFile } from 'fs/promises';
const recipes = JSON.parse(
    await readFile(
        new URL('../data.json', import.meta.url)
    )
);

export const getRecipes = (req, res) => {
    res.send(recipes);
};

export const getRecipe = (req, res) => {
    const { name } = req.params;
    res.send(JSON.stringify(recipes.recipes.find(recipe => recipe.name === name)));
    if(recipe) {
    } else {
        res.status(404).send({error: 'Recipe Not Found.'})
    }
}

export const postRecipe = (req, res) => { 
    const recipe = req.body;
    const { name } = req.params;
    if (recipes.recipes.find(recipe => recipe.name === name)) {
        res.status(400).send({ error: 'Recipe already exists' })
    } else {
        recipes.recipes.push(recipe);
        res.send(recipe);
    }
};

export const updateRecipe = (req, res) => { 
    const { name } = req.params;
    const recipe = req.body;
    const index = recipes.recipes.findIndex(recipe => recipe.name ===name);
    if(index === -1) {
        res.status(404).send({ error: 'Recipe not found.'})
    } else {
        recipes.recipes[index] = recipe;
        res.send(recipe);
    }
}

