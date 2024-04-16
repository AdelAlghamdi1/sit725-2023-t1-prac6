const express = require('express');
const router = express.Router();

router.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req, res) {
    const firstNumber = parseInt(req.params.firstNumber);
    const secondNumber = parseInt(req.params.secondNumber);
    const result = firstNumber + secondNumber;

    if (isNaN(result)) {
        return res.status(400).json({ result: null, statusCode: 400 });
    } else {
        return res.status(200).json({ result: result, statusCode: 200 });
    }
});

module.exports = router;

