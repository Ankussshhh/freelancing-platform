import { useEffect, useState } from "react";
import axios from "axios";

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await axios.get("http://localhost:5000/api/jobs");
      setJobs(res.data);
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Available Jobs</h2>
      {jobs.map((job) => (
        <div key={job._id}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <p>Budget: ₹{job.budget}</p>
          <p>Deadline: {new Date(job.deadline).toLocaleDateString()}</p>
          <p>Posted by: {job.client.name}</p>
          <ApplyForm jobId={job._id} />
        </div>
      ))}
    </div>
  );
}

export default JobList;
