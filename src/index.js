import express from "express";
import {router} from "./routes/payment.js";

const app = express();
app.use(router);

app.listen(3000);
console.log("Server on port", 3000);
