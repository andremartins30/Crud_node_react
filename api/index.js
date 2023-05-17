const express = require('express');
const userRoutes = require('./routes/users')
const cors = require('cors');
const port = 8800


const app = express();

app.use(express.json());
app.use(cors());

app.use('/', userRoutes)

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});

