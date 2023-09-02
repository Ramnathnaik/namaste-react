# Episode 4 - Talk is cheap, show me the code

We will be building a food ordering app like swiggy or zomato.

## Planning

It is the most important step while building an app.

<b>Name:</b> Namaste Food

### Components in app

1. Header
   - Logo
   - NavItems
2. Body
   - Search Bar
   - Resturant Container
     - Resturant Card
3. Footer
   - Copyright
   - Links
   - Address
   - Contact

## Props (Properties)

- If you want to pass some data to component dynamically, we can use React props.
- It is just like passing argument to the functions.

### Passing props to the components

```javascript
<ResturantCard key={resturant.info.id} resturantData={resturant.info} />
```

### Using props

```javascript
const ResturantCard = (props) => {
  const { resturantData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, areaName } =
    resturantData;
};
```

- We can destructure the props in parameters section itself.

```javascript
const ResturantCard = ({ resturantData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, areaName } =
    resturantData;
};
```

## Config Driven UI

- It means, controlling the UI based on the data.

- We can render the card using map.

```javascript
resturantsData.map((resturant) => (
  <ResturantCard key={resturant.info.id} resturantData={resturant.info} />
));
```

- Whenever we use map, filter or reduce always pass key props to the component.

### But why?

- When we don't add the key, if we add or remove an element from the list, React will rerender all the elements as it does not know which element got added.
- When we have a key, it can easily identify which element got added or removed, and only render that particular element.
- This is a huge performance optimization.

## Don't use index as keys. But why?

- As explained earlier, key is added to uniquely identify the element. If we modify the list, the index of the element will change, resulting in confusion of keys.

## keys as id (best) >>>> key as index (last option) >>>> no key (worst)
