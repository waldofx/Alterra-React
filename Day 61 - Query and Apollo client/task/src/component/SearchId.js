import React, { useState } from "react";

function SearchId({ onClick }) {
    const [id, setId] = useState(0);
    return (
        <>
            <input
                placeholder="Masukkan id"
                type="number"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <button
                style={{ marginBottom: "20px" }}
                onClick={() => onClick("id", id)}
            >
                Search
            </button>
        </>
    );
}

export default SearchId;
