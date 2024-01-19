import express, { Express, Request, Response } from "express";
const router = express.Router();



router.get('/', (req: Request, res: Response) => {
    res.send("Aayush basnet");
});


export default router;