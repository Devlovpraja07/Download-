// React component definition
function App() {
    // State for the counter
    const [count, setCount] = React.useState(0);

    // State for the input field
    const [inputValue, setInputValue] = React.useState('');

    // Event handler for incrementing the counter
    const increment = () => {
        setCount(count + 1);
    };

    // Event handler for decrementing the counter
    const decrement = () => {
        setCount(count - 1);
    };

    // Event handler for input field changes
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <h1>Mera Pehla Do-File React App</h1>

            <div className="counter-section">
                <h2>Counter Example</h2>
                <p>Count: {count}</p>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>

            <hr style={{ margin: '30px 0', borderColor: '#eee' }} />

            <div className="input-section">
                <h2>Input Field Example</h2>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Kuch likho yahan..."
                />
                <p>Aapne likha: <strong>{inputValue || 'Kuch bhi nahi'}</strong></p>
            </div>

            <hr style={{ margin: '30px 0', borderColor: '#eee' }} />

            <p style={{ fontSize: '0.9em', color: '#888' }}>
                Yeh ek simple React app hai jo do files se chal raha hai.
            </p>
        </div>
    );
}

// React app ko 'root' div mein render karo
// React 18 mein ReactDOM.createRoot use hota hai, lekin CDN setup mein purana ReactDOM.render bhi kaam karega
// Aur createRoot ko alag se import karna padega, jo hamare two-file constraints ko thoda complex kar dega.
// Isliye hum compatibility ke liye ReactDOM.render use kar rahe hain.
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// Note: Agar aap React 18 ka createRoot use karna chahte hain, to code aise hoga:
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
// Lekin iske liye DOM ko import karna padega jo CDN se thoda complex ho jayega bina build tool ke.