import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PostJob() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    budget: "",
    deadline: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.post("http://localhost:5000/api/jobs", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Job posted successfully!");
      navigate("/jobs");
    } catch (err) {
      alert(err.response?.data?.msg || "Error posting job");
    }
  };

  return (
    <div>
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
        />
        <input
          name="budget"
          type="number"
          placeholder="Budget"
          onChange={handleChange}
          required
        />
        <input name="deadline" type="date" onChange={handleChange} required />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default PostJob;
