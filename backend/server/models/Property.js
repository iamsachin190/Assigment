import mongoose from 'mongoose';

const PropertySchema = new mongoose.Schema({
  userId: String,
  title: String,
  city: String,
  rent: Number,
  type: String,
  description: String,
});

export default mongoose.model('Property', PropertySchema);