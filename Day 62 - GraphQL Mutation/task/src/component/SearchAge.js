import React, { useState } from "react";

function SearchAge({ onClick }) {
    const [age, setAge] = useState(0);
    return (
        <>
            <input
                placeholder="Masukkan "
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <button
                style={{ marginBottom: "20px" }}
                onClick={() => onClick("age", age)}
            >
                Search
            </button>
        </>
    );
}

export default SearchAge;
