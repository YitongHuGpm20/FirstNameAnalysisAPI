import express, { query } from 'express';
import meaningRoutes from './routes/meanings.js';

const app = express();
const PORT = 5000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/meanings', meaningRoutes);

app.get('/', (req, res) => res.send('Hello from homepage!'));

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));