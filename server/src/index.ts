import express from "express";
import cors from "cors";
import "dotenv/config";

import routes from "./routes.js";

const app = express();

app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

app.use(express.json());

app.use(routes)

app.listen(8080, () =>
    console.log(`Server is listening on http://localhost:${8080}`)
);
