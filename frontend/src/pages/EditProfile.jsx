import { useState } from "react";
import axios from "axios";

function EditProfile() {
  const [form, setForm] = useState({
    bio: "",
    skills: "",
    experience: "",
    portfolioURL: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.post("http://localhost:5000/api/profiles", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Profile saved!");
    } catch (err) {
      alert(err.response?.data?.msg || "Error saving profile");
    }
  };

  return (
    <div>
      <h2>Edit Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <textarea name="bio" placeholder="Short Bio" onChange={handleChange} />
        <input
          name="skills"
          placeholder="Skills (comma separated)"
          onChange={handleChange}
        />
        <textarea
          name="experience"
          placeholder="Experience"
          onChange={handleChange}
        />
        <input
          name="portfolioURL"
          placeholder="Portfolio URL"
          onChange={handleChange}
        />
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}

export default EditProfile;
