import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  bio: { type: String },
  skills: [String],
  experience: { type: String },
  portfolioURL: { type: String },
}, {
  timestamps: true,
});

export default mongoose.model('Profile', profileSchema);
