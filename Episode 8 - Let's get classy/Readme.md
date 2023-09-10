# Episode 8 - Let's get classy

## React class based components

- It is a class which extends React.Component class and has a render method which will return some piece of JSX.

```jsx
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, location, contact } = this.props;
    return (
      <div className="about-us-user">
        <h1>{name}</h1>
        <h2>Location: {location}</h2>
        <h2>Contact: {contact}</h2>
        <p>Class based component</p>
      </div>
    );
  }
}

export default UserClass;
```

### How to pass the props

- We need to pass props in the same way how we do it for Funcation based component.
- The receiving side is a bit different.
- We need to receive in the constructor and also call the <b>super(props).</b>

```javascript
constructor(props) {
    super(props);
  }
```

- To access it use as below

```jsx
{
  this.props.name;
}
```

Note: [Why super(props) is called?](https://overreacted.io/why-do-we-write-super-props/)

## State variables in Class based component

- Constructor is the <b>best place</b> to create state variable.
- Hooks are the latest concepts. We don't have hooks in class based components.
- Below is the way to create state variable.

```javascript
this.state = {
  techStack: "Javascript",
  employer: "LTIMindtree",
};
```

- Here <b>this.state</b> is a reserved keyword.
- To access the state variables, do as follows

```jsx
{
  this.state.employer;
}
```

Note: Never update the state variables directly

- React provides a method called <b>setState()</b>
- We can pass the object with the key value pair which we want to update.
- It will only update that particular state variable without affecting other state variable.

## Life cycle of React Class based component

- When the class is instantiated, constructor is called first and then the render method will be called.
- Class component gives one more method called <b>componentDidMount()</b>
- componentDidMount() will be called once the render() method is called.

### Why do we use componentDidMount() ?

- It is used for making API calls.

## React Lifecycle methods - How does it work?

- React is faster because of two phases.

1. Render phase
2. Commit phase

- If there are 2 children React will batch these 2 children's Render phase (Done for optimization).
- Commit phase takes time as it includes DOM manupulation as it's the most expensive operation. Hence the render phase of component is batched.

[React Lifecycle method diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## How to make API calls with componentDidMount()

- To make API call with componentDidMount() we need to make it as async.

```javascript
async componentDidMount() {
  const data = await fetch("<API-CALL>");
  const jsonData = await data.json();
}
```

- Once we get the data, we can update the state variables to update the UI.
- Once the state variables are called the update cycle starts.

### Below is the mounting cycle

1. Constructor
2. Render
3. HTML
4. componentDidMount()

### Below is the update life cycle

1. Render (API data)
2. HTML (API data)
3. componentDidUpdate()

### Below is the unmount life cycle

- When the component is about to disapper from the UI this life cycle will start.
- It has a single method called:

1. componentWillUnmount()

- It will be called when we leave the page.

```javascript
componentDidMount() {
  this.timer = setInterval(()=>console.log('Hello'), 3000);
}

componentWillUnmount() {
  clearInterval(this.timer);
}
```

- In functional component, if we write setInterval inside useEffect() it will not stop even if we go to other component.

### How do I stop it?

- In useEffect() we can return a function which will be called when the component unmounts.

```javascript
useEffect() {
  const timer = setInterval(()=> console.log('Hello'), 3000);

  return () => {
    clearInterval(timer);
  }
}
```

Note: [Why can't we make useEffect async?](https://dev.to/sanjampreetsingh/why-async-callback-cannot-happen-in-react-useeffect-hook-ff#:~:text=Why%20async%20callbacks%20cannot%20be%20used%20in%20useEffect,function%20or%20nothing%20at%20all.)
