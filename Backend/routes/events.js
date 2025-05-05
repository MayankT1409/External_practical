const express = require('express');
const router = express.Router();
const multer = require('multer');
const Event = require('../model/Event.js');
const auth = require('../middleware/authMiddleware');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.get('/', auth, async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

router.post('/', auth, upload.single('image'), async (req, res) => {
  const event = new Event({
    ...req.body,
    image: req.file ? `/uploads/${req.file.filename}` : null,
    createdBy: req.userId
  });
  await event.save();
  res.status(201).json(event);
});

router.put('/:id', auth, async (req, res) => {
  const updated = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', auth, async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
