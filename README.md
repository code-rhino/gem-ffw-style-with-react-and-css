# Style with React and CSS

[Video](https://vimeo.com/928472459/41d23ecbb7?share=copy)

In this tutorial, we'll explore how to style React components. We begin with a simple React application that includes a "Greeting" component. This component accepts two props: `name` and `mood`, and renders a greeting message based on these props.

```jsx
function Greeting({name, mood}) {
    return (
        <div>
            <p>Hello, {name}! You seem to be in a {mood} mood today.</p>
        </div>
    );
}
```

We have two instances of the "Greeting" component in our app, greeting "Alex" who is "happy", and "Jordan" who is "thoughtful".

```jsx
function App() {
  return (
    <div className="app-container">
      <Greeting name="Alex" mood="happy" />
      <Greeting name="Jordan" mood="thoughtful" />
    </div>
  );
}
```

To style these components, we first discuss imported styles, which involve defining styles in an external CSS file and importing them into our component.

In our CSS file, we define styles for `.greeting-container` and `.greeting-message` classes. The `.greeting-container` class is styled with padding, a border radius, and margin, while `.greeting-message` receives a specific font size and margin setting.

```css
.greeting-container {
    padding: 20px;
    border-radius: 5px;
    margin: 20px 0;
}

.greeting-message {
    font-size: 1.2rem;
    margin: 0;
}
```

We then apply these classes in our "Greeting" component using the `className` attribute, showcasing the changes in padding, margin, and font size.

```jsx
function Greeting({name, mood}) {
    return (
        <div className='greeting-container'>
            <p className='greeting-message'>Hello, {name}! You seem to be in a {mood} mood today.</p>
        </div>
    );
}
```

Next, we introduce inline styles to dynamically change the background color of the greeting container based on the `mood` prop. We define a `containerStyle` variable inside the "Greeting" component, using a ternary operator to assign a different background color depending on the `mood` prop.

```jsx
function Greeting({name, mood}) {
    const containerStyle = {
        backgroundColor: mood === 'happy' ? '#ffdfba' : '#b0c4de'
    };

    return (
        <div className='greeting-container' style={containerStyle}>
            <p className='greeting-message'>Hello, {name}! You seem to be in a {mood} mood today.</p>
        </div>
    );
}
```

With these changes, the "Greeting" component's background color now dynamically changes based on the `mood` prop, demonstrating the flexibility of inline styles for dynamic styling in React components.

