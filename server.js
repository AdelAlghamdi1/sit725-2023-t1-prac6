const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use(express.static('public'));

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

