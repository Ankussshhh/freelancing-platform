import Job from '../models/Job.js';

export const createJob = async (req, res) => {
  try {
    const { title, description, budget, deadline } = req.body;
    const job = new Job({
      client: req.user._id,
      title,
      description,
      budget,
      deadline,
    });
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate('client', 'name email');
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
