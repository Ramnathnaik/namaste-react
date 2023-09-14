import React from "react";
import { GITHUB_USER_API } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      techStack: "Javascript",
      employer: "LTIMindtree",
      changeTechStackBtn: "Java",
    };
    console.log(this.props.name + ": Child constructor");
  }

  componentDidMount() {
    console.log(this.props.name + ": Child componentDidMount");
  }

  render() {
    const { name, location, contact, avatarUrl } = this.props;
    const { techStack, employer, changeTechStackBtn } = this.state;

    console.log(this.props.name + ": Child render");
    return (
      <div className="about-us-user">
        <div className="about-us-user-header">
          <div>
            <h1>{name}</h1>
            <h2>Location: {location}</h2>
            <h2>Contact: {contact}</h2>
          </div>
          <div>
            <img className="profile-img" src={avatarUrl} alt="profile_img" />
          </div>
        </div>
        <h3>Tech Stack: {techStack}</h3>
        <h3>Working at: {employer}</h3>
        <div className="about-us-user-footer">
          <p>Class based component</p>
          <button
            onClick={() => {
              if (changeTechStackBtn === "Java")
                this.setState({
                  techStack: "Java",
                  changeTechStackBtn: "Javascript",
                });
              else if (changeTechStackBtn === "Javascript")
                this.setState({
                  techStack: "Javascript",
                  changeTechStackBtn: "Java",
                });
            }}
          >
            <b>Change Tech Stack to {changeTechStackBtn}</b>
          </button>
        </div>
      </div>
    );
  }
}

export default UserClass;
