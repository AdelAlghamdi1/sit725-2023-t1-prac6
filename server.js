const express = require('express');
const app = express();
const port = process.env.PORT || 8080;


app.use(express.json());

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
