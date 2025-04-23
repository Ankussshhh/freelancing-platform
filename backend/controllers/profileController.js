import Profile from '../models/Profile.js';

export const createOrUpdateProfile = async (req, res) => {
  const { bio, skills, experience, portfolioURL } = req.body;
  const profileData = {
    user: req.user._id,
    bio,
    skills: skills?.split(',').map(s => s.trim()),
    experience,
    portfolioURL,
  };

  try {
    let profile = await Profile.findOne({ user: req.user._id });
    if (profile) {
      profile = await Profile.findOneAndUpdate(
        { user: req.user._id },
        { $set: profileData },
        { new: true }
      );
    } else {
      profile = new Profile(profileData);
      await profile.save();
    }
    res.json(profile);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.userId }).populate('user', 'name email');
    if (!profile) return res.status(404).json({ msg: 'Profile not found' });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
