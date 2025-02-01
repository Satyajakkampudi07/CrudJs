const express = require('express');
const mongoose = require('mongoose');
const Developer = require('./models/Developer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());


mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Developers')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));


app.get('/developers', async (req, res) => {
    try {
        const developers = await Developer.find();
        res.send(developers);
    } catch (err) {
        res.status(500).send({ error: 'Failed to fetch developers' });
    }
});


app.get('/developers/:id', async (req, res) => {
    try {
        const developer = await Developer.findById(req.params.id);
        if (!developer) {
            return res.status(404).send({ error: 'Developer not found' });
        }
        res.send(developer);
    } catch (err) {
        res.status(500).send({ error: 'Failed to fetch developer' });
    }
});


app.post('/developers', async (req, res) => {
    try {
        const developer = new Developer(req.body);
        await developer.save();
        res.status(201).send(developer);
    } catch (err) {
        console.error(err);
        res.status(400).send({ error: 'Failed to create developer' });
    }
});


app.put('/developers/:id', async (req, res) => {
    try {
        const developer = await Developer.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true, 
        });
        if (!developer) {
            return res.status(404).send({ error: 'Developer not found' });
        }
        res.send(developer);
    } catch (err) {
        res.status(400).send({ error: 'Failed to update developer' });
    }
});


app.delete('/developers/:id', async (req, res) => {
    try {
        const developer = await Developer.findByIdAndDelete(req.params.id);
        if (!developer) {
            return res.status(404).send({ error: 'Developer not found' });
        }
        res.send({ message: 'Developer deleted successfully' });
    } catch (err) {
        res.status(500).send({ error: 'Failed to delete developer' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
