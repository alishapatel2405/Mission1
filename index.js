const express = require('express');
const app = express();
app.use(express.json());

app.post('/car-value', (req, res) => {
    const { model, year } = req.body;
    if (!model || typeof model !== 'string' || !Number.isInteger(year) || year < 0) {
        return res.status(400).json({ error: 'there is an error' }); //if model is not string, not an integer (pos num) and its not above 0 then throw error//
    }

    const value = calculateCarValue(model, year);
    res.json({ car_value: value });
});

function calculateCarValue(model, year) {
    const alphabetPositionSum = model.toUpperCase().split('').reduce((sum, char) => { //makes it to uppercase for 26 values max & reduces/deltes spaces//
        const position = char.charCodeAt(0) - 'A'.charCodeAt(0) + 1; //implementing business value in mission 1 - calc position//
        return sum + (position >= 1 && position <= 26 ? position : 0);
    }, 0);
    return (alphabetPositionSum * 100) + year;
}

module.exports = app; 
