import { useState } from "react";

const User = (props) => {
  const { name, location, contact } = props;
  const [techStack] = useState("Javascript");
  const [employer] = useState("LTIMindtree");

  return (
    <div className="about-us-user">
      <div className="about-us-user-header">
        <div>
          <h1>{name}</h1>
          <h2>Location: {location}</h2>
          <h2>Contact: {contact}</h2>
        </div>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/30190133?v=4"
            alt="profile_img"
          />
        </div>
      </div>
      <h3>Tech Stacks: {techStack}</h3>
      <h3>Working at: {employer}</h3>
      <p>Functional based component</p>
    </div>
  );
};

export default User;
