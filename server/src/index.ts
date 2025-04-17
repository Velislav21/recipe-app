import express from 'express';
import cors from 'cors'
import 'dotenv/config'
const app = express();

app.use(cors({
    origin: '*',  
    credentials: true,
}))

app.use(express.json())

app.get("/", (req, res) => {
    res.send({message: "works"})
})

app.listen(8080, () => console.log(`Server is listening on http://localhost:${8080}`)) // !TODO .env ??