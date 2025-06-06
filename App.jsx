const { useState } = React;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Welcome to My Simple React Website</h1>
      <p>This website is built with React in just 2 files.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <p>You clicked {count} times.</p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);