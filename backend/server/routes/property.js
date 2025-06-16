import express from 'express';
import jwt from 'jsonwebtoken';
import Property from '../models/Property.js';
const router = express.Router();

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Token required');
  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).send('Invalid token');
  }
}

router.post('/', verifyToken, async (req, res) => {
  const property = await Property.create({ ...req.body, userId: req.userId });
  res.json(property);
});

router.get('/', async (req, res) => {
  const filters = req.query;
  const properties = await Property.find(filters);
  res.json(properties);
});

router.put('/:id', verifyToken, async (req, res) => {
  const prop = await Property.findById(req.params.id);
  if (prop.userId !== req.userId) return res.status(403).send('Unauthorized');
  const updated = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', verifyToken, async (req, res) => {
  const prop = await Property.findById(req.params.id);
  if (prop.userId !== req.userId) return res.status(403).send('Unauthorized');
  await Property.findByIdAndDelete(req.params.id);
  res.send('Deleted');
});

export default router;