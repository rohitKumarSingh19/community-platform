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
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects' });
  }
};
