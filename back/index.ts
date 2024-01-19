import express, { Express, Request, Response } from "express";
const app: Express = express();
const port = 8000;

// let's importaing different modules
import router from "./src/routers/router";



// Middlewares
app.use(router);
express.json();





app.listen(port, () => {
    console.log("App is running on ", port, " port");

}); 