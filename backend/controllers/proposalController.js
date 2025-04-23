import Proposal from '../models/Proposal.js';

export const submitProposal = async (req, res) => {
  const { jobId, message, expectedBudget } = req.body;
  try {
    const proposal = new Proposal({
      job: jobId,
      freelancer: req.user._id,
      message,
      expectedBudget,
    });
    await proposal.save();
    res.status(201).json(proposal);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getJobProposals = async (req, res) => {
  const { jobId } = req.params;
  try {
    const proposals = await Proposal.find({ job: jobId }).populate('freelancer', 'name email');
    res.json(proposals);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
