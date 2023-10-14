// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const db = require('../models');
const { Comment } = db;

// Create comment
router.post('/', (req, res) => {
  Comment.create(req.body)
    .then(comment => res.status(201).json(comment))
    .catch(err => res.status(400).json(err));
});

// Update comment
router.put('/:id', (req, res) => {
  Comment.update(req.body, { where: { id: req.params.id } })
    .then(() => res.status(204).end())
    .catch(err => res.status(400).json(err));
});

// Delete comment
router.delete('/:id', (req, res) => {
  Comment.destroy({ where: { id: req.params.id } })
    .then(() => res.status(204).end())
    .catch(err => res.status(400).json(err));
});

// Export module
module.exports = router;
