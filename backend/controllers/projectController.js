import Project from '../models/Project.js';

export const createProject = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }

    const newProject = new Project({
      title,
      description,
      createdBy: req.user.userId // The user that creates the project
    });

    await newProject.save();

    res.json({ message: 'Project Created', project: newProject });
  } catch (error) {
    res.status(500).json({ message: 'Error creating project' });
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate('members','name email');//only include name and email
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects' });
  }
};

// ✅ New: Join Project
export const joinProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const userId = req.user.userId;

    const project = await Project.findById(projectId);
    if (!project) return res.status(404).json({ message: 'Project not found' });

    if (project.members && project.members.includes(userId)) {
      return res.status(400).json({ message: 'You already joined this project' });
    }

    project.members = [...(project.members || []), userId]; // Initialize if undefined
    await project.save();

    res.status(200).json({ message: 'You joined the project successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error joining project' });
  }
};