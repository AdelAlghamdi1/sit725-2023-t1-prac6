const express = require('express');
const router = express.Router();

let lastResult = null; 


router.post('/addTwoNumbers', function(req, res) {
    const { firstNumber, secondNumber } = req.body;
    const result = firstNumber + secondNumber;

    if (isNaN(result)) {
        return res.status(400).json({ error: "Invalid input", statusCode: 400 });
    } else {
        lastResult = result; 
        return res.status(200).json({ result: result, statusCode: 200 });
    }
});


router.get('/getResult', function(req, res) {
    if (lastResult === null) {
        return res.status(404).json({ error: "No result available", statusCode: 404 });
    } else {
        return res.status(200).json({ result: lastResult, statusCode: 200 });
    }
});

module.exports = router;
