import React, { useState } from "react";

function SearchName({ onClick }) {
    const [name, setName] = useState("");
    return (
        <>
            <input
                placeholder="Masukkan nama"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button
                style={{ marginBottom: "20px" }}
                onClick={() => onClick("name", name)}
            >
                Search
            </button>
        </>
    );
}

export default SearchName;
