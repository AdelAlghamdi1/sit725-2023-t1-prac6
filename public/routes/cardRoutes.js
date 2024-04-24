import express from 'express';
import Card from '../models/cards.js';

const router = express.Router();

router.get('/getAllCards', async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ message: "Error fetching cards", error: error });
    }
});

router.post('/addCard', async (req, res) => {
    const newCard = new Card({
        title: req.body.title,
        image: req.body.image,
        link: req.body.link,
        description: req.body.description
    });

    try {
        const savedCard = await newCard.save();
        res.status(201).json({ message: "Card added successfully", card: savedCard });
    } catch (error) {
        res.status(400).json({ message: "Error saving card", error: error });
    }
});

export default router;