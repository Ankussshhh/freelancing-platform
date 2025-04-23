import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewProfile() {
  const { userId } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/profiles/${userId}`
      );
      setProfile(res.data);
    };
    fetchProfile();
  }, [userId]);

  return profile ? (
    <div>
      <h2>{profile.user.name}'s Profile</h2>
      <p>
        <strong>Email:</strong> {profile.user.email}
      </p>
      <p>
        <strong>Bio:</strong> {profile.bio}
      </p>
      <p>
        <strong>Skills:</strong> {profile.skills.join(", ")}
      </p>
      <p>
        <strong>Experience:</strong> {profile.experience}
      </p>
      {profile.portfolioURL && (
        <p>
          <strong>Portfolio:</strong>{" "}
          <a href={profile.portfolioURL} target="_blank">
            View
          </a>
        </p>
      )}
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default ViewProfile;
