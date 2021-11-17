import React, { useState } from "react";

function SearchGender({ onClick }) {
    const [gender, setGender] = useState("Pria");
    return (
        <>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="Pria">Pria</option>
                <option value="Wanita">Wanita</option>
            </select>
            <button
                style={{ marginBottom: "20px" }}
                onClick={() => onClick("gender", gender)}
            >
                Search
            </button>
        </>
    );
}

export default SearchGender;
