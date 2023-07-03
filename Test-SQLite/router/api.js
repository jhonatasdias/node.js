const express = require('express');
const router = express.Router();

// Rota GET para a API
router.get('/:resource', (req, res) => {
    const { resource } = req.params;
    res.json({ resource });
})

// Rota POST para a API
router.post('/:resource', (req, res) => {
    const { resource } = req.params;
    const { data } = req.body;
    res.json({ resource, data });
});

// Rota PUT para a API
router.put('/:resource/:id', (req, res) => {
    const { resource, id } = req.params;
    const { data } = req.body;
    res.json({ resource, id, data });
});

module.exports = router;