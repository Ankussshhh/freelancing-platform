import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewProposals() {
  const [proposals, setProposals] = useState([]);
  const { jobId } = useParams();

  useEffect(() => {
    const fetchProposals = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `http://localhost:5000/api/proposals/${jobId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setProposals(res.data);
    };
    fetchProposals();
  }, [jobId]);

  return (
    <div>
      <h2>Proposals</h2>
      {proposals.map((p) => (
        <div key={p._id}>
          <p>
            <strong>Freelancer:</strong> {p.freelancer.name} (
            {p.freelancer.email})
          </p>
          <p>
            <strong>Message:</strong> {p.message}
          </p>
          <p>
            <strong>Expected Budget:</strong> ₹{p.expectedBudget}
          </p>
          <p>Status: {p.status}</p>
        </div>
      ))}
    </div>
  );
}

export default ViewProposals;
