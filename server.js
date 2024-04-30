const express = require('express');
const app = express();
const mongoose = require('mongoose')
const routes = require('./FormRoute')
const cors = require('cors')

require('dotenv').config();

app.use(cors());
app.use(express.json())

mongoose.set('strictQuery', false);

const PORT = process.env.port || 8000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
    .connect(process.env.MONGODB_LINK)
    .then(() => console.log(`Connected to mongoDB`))
    .catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})