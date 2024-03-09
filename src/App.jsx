import Button from "./components/button";

const App = () => {
  return (
    <div>
      <h1>Hello from React</h1>

      <Button
        disabled={false}
        initialButtonText="Click me!"
        initialButtonColor="orange"
      />
    </div>
  );
};

export default App;
