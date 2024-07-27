const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDatabase = require('./config/connectDatabase');

dotenv.config({ path : path.join(__dirname, 'config', 'config.env')})

const products = require('./routes/product');
const orders = require('./routes/order');

app.use(cors(
    {
        origin: [""],
        methods: ["POST", "GET"],
        credentials: true
    }
));

connectDatabase();

app.use(express.json());

app.get("/", (req, res) => {
    res.json("Hello");
})

app.use('/api/v1',products);
app.use('/api/v1',orders);

app.listen(process.env.PORT, () => {
    console.log(`Server listening the port at ${process.env.PORT} in ${process.env.NODE_ENV}`);
})
