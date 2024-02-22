import express from 'express';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import path from'path';
import chatgptmodel from './models/chatgptmodel';

//For env File 
dotenv.config();
import routerchatgpt from './routes/chatgpt';

const app = express();
const port = process.env.PORT || 8000;

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views')) 
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',routerchatgpt);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
