import express from "express";
import bodyParser from "body-parser";

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.all("*", (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, HEAD, PUT, PATCH, POST, DELETE",
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server started - ${port}`);
});
