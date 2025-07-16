import mongoose from 'mongoose';
const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  members:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}]
}, { timestamps: true });
const Project = mongoose.model('Project', ProjectSchema);

export default Project;
