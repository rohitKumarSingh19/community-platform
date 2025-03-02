import mongoose from 'mongoose';
const DiscussionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });
const Discussion = mongoose.model('Discussion', DiscussionSchema);
export default Discussion;
