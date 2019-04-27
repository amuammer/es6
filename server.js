import express from 'express'
import bodyParser from 'body-parser';
let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', (req, res,next) => {
	res.send('Hello World!')
});


app.listen(8000, () => {
    console.log('server started - 8000');
});
