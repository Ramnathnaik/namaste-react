import { GITHUB_USER_API } from "../utils/constants";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import ShimmerCard from "./ShimmerCard";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    console.log("Parent componentDidMount");
    const data = await fetch(GITHUB_USER_API);
    const jsonData = await data.json();
    this.setState({
      userInfo: jsonData,
    });
  }

  render() {
    console.log("Parent render");

    if (!this.state.userInfo?.login) {
      return <ShimmerCard />;
    }

    const { login, avatar_url } = this.state.userInfo;

    return (
      <div className="about-div flex justify-center">
        <div className="w-[600px] p-5 m-4 rounded-xl border-solid border-gray-400 shadow-lg">
          <UserClass
            name={login}
            location={"Bangalore"}
            contact={"@ramnathnaik447"}
            avatarUrl={avatar_url}
          />
        </div>
      </div>
    );
  }
}

export default About;
