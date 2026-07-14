import profile from "../assets/profile.jpeg";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img src={profile} alt="" />
      <h2>Dharan Kumar</h2>
      <p>Frontend Developer</p>
    </div>
  );
};

export default ProfileCard;