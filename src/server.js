import express from 'express'
import bodyParser from 'body-parser';
let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.all('*',function(req,res,next){
  console.log(req.method+' '+req.url);
  res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader(
     'Access-Control-Allow-Methods',
     'GET, HEAD, PUT, PATCH, POST, DELETE'
   );

   res.setHeader(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept,authorization'
   );
    next();
});

app.get('/', (req, res,next) => {
	res.send('Hello World!')
});


app.listen(8000, () => {
    console.log('server started - 8000');
});
