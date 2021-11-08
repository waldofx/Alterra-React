import React, { useState, useRef } from "react";
import styles from "./FormBuku.module.css";

function FormPage2() {
    const dataKosong = {
        judul: "",
        pengarang: "",
        cetakan: "",
        tahunTerbit: 0,
        kotaTerbit: "",
        harga: 0,
    };

    const [data, setData] = useState(dataKosong);
    const fotoSampul = useRef(null);
    const [errMsg, setErrMsg] = useState("");
    const regex = /^[A-Za-z ]*$/;

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "pengarang") {
            if (regex.test(value)) {
                setErrMsg("");
            } else {
                setErrMsg("Nama Pengarang Harus Berupa Huruf");
            }
        }

        setData({
            ...data,
            [name]: value,
        });
        console.log("data : ", data);
    };

    const handleSubmit = (event) => {
        if (errMsg !== "") {
            alert("Terdapat data yang tidak sesuai");
        } else {
            alert(`Data buku "${data.judul}" berhasil diterima`);
        }
        resetData();
        event.preventDefault();
    };

    const resetData = () => {
        setData(dataKosong);
        setErrMsg("");
    };
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Formulir Buku Baru</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Judul:
                    <input
                        type="text"
                        name="judul"
                        className={styles.input}
                        value={data.judul}
                        onChange={handleInput}
                        required
                    />
                </label>
                <label>
                    Pengarang:
                    <input
                        type="text"
                        name="pengarang"
                        className={styles.input}
                        value={data.pengarang}
                        onChange={handleInput}
                        required
                    />
                </label>
                <label>
                    Cetakan:
                    <input
                        type="text"
                        name="cetakan"
                        className={styles.input}
                        value={data.cetakan}
                        onChange={handleInput}
                    />
                </label>
                <label>
                    Tahun Terbit:
                    <input
                        type="number"
                        name="tahunTerbit"
                        className={styles.input}
                        value={data.tahunTerbit}
                        onChange={handleInput}
                    />
                </label>
                <label>
                    Kota Terbit:
                    <input
                        type="text"
                        name="kotaTerbit"
                        className={styles.input}
                        value={data.kotaTerbit}
                        onChange={handleInput}
                    />
                </label>
                <label>
                    Harga:
                    <input
                        type="number"
                        name="harga"
                        className={styles.input}
                        value={data.harga}
                        onChange={handleInput}
                    />
                </label>
                <label>
                    Foto Sampul:
                    <input
                        type="file"
                        className={styles.input}
                        ref={fotoSampul}
                    />
                </label>
                <span className={styles.errorMessage}>{errMsg}</span>
                <input type="submit" value="Submit" />
                <button className={styles.buttonReset} onClick={resetData}>
                    Reset
                </button>
            </form>
        </>
    );
}

export default FormPage2;
