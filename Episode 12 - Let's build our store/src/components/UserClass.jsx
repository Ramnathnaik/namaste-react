import React from "react";
import { GITHUB_USER_API } from "../utils/constants";
import UserContext from "../utils/UserContext";

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
        <div className="about-us-user-header flex justify-between">
          <div>
            <h1 className="font-bold text-2xl py-1">{name}</h1>
            <UserContext.Consumer>
              {({ loggedInUser }) => (
                <h2 className="font-semibold text-xl text-gray-500 py-1">
                  {loggedInUser}
                </h2>
              )}
            </UserContext.Consumer>
            <h2 className="font-semibold text-xl text-gray-500 py-1">
              Location: {location}
            </h2>
            <h2 className="font-semibold text-xl text-gray-500 py-1">
              Contact: {contact}
            </h2>
          </div>
          <div>
            <img
              className="profile-img w-24 rounded-full"
              src={avatarUrl}
              alt="profile_img"
            />
          </div>
        </div>
        <h3 className="font-semibold py-1">Tech Stack: {techStack}</h3>
        <h3 className="font-semibold py-1">Working at: {employer}</h3>
        <div className="about-us-user-footer flex justify-between py-1 items-center">
          <p className="font-light">Class based component</p>
          <button
            className="rounded-full shadow-lg hover:shadow-xl px-4 py-2 bg-green-400"
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
