import dotenv from "dotenv"
dotenv.config()
import express from "express";

const PORT = process.env.PORT

const app = express()
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World! V1')
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})