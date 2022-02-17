import express from 'express';
import bodyParser from 'body-parser'
import recipeRoutes from './routes/recipes.js'

const app = express();

app.use(bodyParser.json());

const PORT = 5000;

app.use('/recipes', recipeRoutes);

app.get('/', (req, res) => res.send('Home Page'));

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`))