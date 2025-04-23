import { useState } from "react";
import axios from "axios";

function ApplyForm({ jobId }) {
  const [form, setForm] = useState({ message: "", expectedBudget: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "http://localhost:5000/api/proposals",
        {
          jobId,
          ...form,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Proposal submitted!");
    } catch (err) {
      alert(err.response?.data?.msg || "Error sending proposal");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="message"
        placeholder="Your message"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="expectedBudget"
        placeholder="Expected Budget"
        onChange={handleChange}
        required
      />
      <button type="submit">Send Proposal</button>
    </form>
  );
}

export default ApplyForm;
