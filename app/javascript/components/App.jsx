import React, { useState } from "react";

function App() {
        const [count, setCount] = useState(0);

        return (
            <>
                <h1>Hello from React {count}</h1>
                <button onClick={()=>setCount(count + 1)}>Increment Count</button>
            </>
        );
}

export default App;
