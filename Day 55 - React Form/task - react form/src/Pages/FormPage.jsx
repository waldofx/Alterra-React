import React, { useRef, useState } from "react";
import style from "./FormPage.module.css";

const baseData = {
    nama: "",
    email: "",
    handphone: "",
    pendidikan: "",
    kelas: 0,
    harapan: "",
};

const baseErrors = {
    nama: "",
    email: "",
    handphone: "",
    pendidikan: "",
    kelas: "",
};

const regexCharacters = /^[A-Za-z ]*$/;
const regexNumbers = /^[-+]?[0-9]+$/;

function FormCodingBootcamp() {
    const [data, setData] = useState(baseData);
    const [errors, setErrors] = useState(baseErrors);
    const photoRef = useRef();

    function setError(name, message) {
        setErrors((prev) => ({ ...prev, [name]: message }));
    }

    function changeHandler(e) {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "nama") {
            if (!regexCharacters.test(value)) {
                setError(name, "Nama Lengkap Harus Berupa Huruf!");
            } else {
                setError(name, "");
            }
        }

        if (name === "email") {
            if (value.length > 0 && !value.includes("@")) {
                setError(name, "Email tidak sesuai (kurang @)!");
            } else if (value.length > 0 && !value.includes(".")) {
                setError(name, "Email tidak sesuai (kurang domain)!");
            } else {
                setError(name, "");
            }
        }

        if (name === "handphone") {
            if (value.length > 0 && !regexNumbers.test(value)) {
                setError(name, "No Handphone Tidak Sesuai (hanya angka)!");
            } else if (value.length < 9 || value.length > 14) {
                setError(
                    name,
                    "No Handphone Tidak Sesuai (wajib 9-14 character length)!"
                );
            } else {
                setError(name, "");
            }
        }

        if (name === "pendidikan") {
            setError(name, "");
        }
        setData((prev) => ({ ...prev, [name]: value }));
    }

    function handleChangeSelectTag(e) {
        setData({ ...data, kelas: e.target.value });
        console.log("data: ", data);
    }

    function submitHandler(e) {
        e.preventDefault();
        let isValid = true;
        // nama
        if (!regexCharacters.test(data.nama)) {
            setError(
                "nama",
                "Name can only contain lowercase and uppercase characters!"
            );
            isValid = false;
        } else if (data.nama.trim().length === 0) {
            setError("nama", "Name must be at least 3 characters length!");
            isValid = false;
        }

        // email
        if (!data.email.includes("@")) {
            setError("email", "Please enter valid email address (includes @)!");
            isValid = false;
        } else if (!data.email.includes(".")) {
            setError(
                "name",
                "Please enter valid email address (includes domain)!"
            );
            isValid = false;
        }
        console.log(data.handphone);
        console.log(data.handphone.trim().length === 0);
        // handphone
        if (data.handphone.trim().length === 0) {
            console.log("atas");
            setError("handphone", "This field can't be empty!");
            isValid = false;
        } else if (
            data.handphone.length > 0 &&
            !regexNumbers.test(data.handphone)
        ) {
            setError(
                "handphone",
                "Please ebnter a valid phone number (only contain numbers)!"
            );
            isValid = false;
        } else if (data.handphone.length < 9 || data.handphone.length > 14) {
            setError(
                "hanphone",
                "Please enter a valid phone number (must be at 9-14 character length)!"
            );
            isValid = false;
        }

        // pendidikan
        if (data.pendidikan === "") {
            setError("pendidikan", "Please choose one of the option!");
            isValid = false;
        }

        if (isValid) {
            const keys = Object.keys(errors);
            isValid = isValid && keys.every((key) => errors[key] === "");
            if (isValid) {
                alert(`Data pendaftar ${data.nama} Berhasil diterima!`);
            } else {
                alert("Data pendaftar tidak sesuai!");
            }
        } else {
            alert("Data pendaftar tidak sesuai!");
        }
    }

    function resetHandler() {
        setData(baseData);
        setErrors(baseErrors);
    }
    return (
        <div className={style.container}>
            <h1>Pendaftaran Peserta Coding Bootcamp</h1>
            <form onSubmit={submitHandler}>
                <div className={style.formControl}>
                    <label>Nama Lengkap:</label>
                    <input
                        onChange={changeHandler}
                        value={data.nama}
                        name="nama"
                        type="text"
                        minLength="3"
                        maxLength="50"
                    />
                    <p className={style.error}>{errors.nama}</p>
                </div>
                <div className={style.formControl}>
                    <label>Email:</label>
                    <input
                        onChange={changeHandler}
                        value={data.email}
                        name="email"
                        type="text"
                    />
                    <p className={style.error}>{errors.email}</p>
                </div>
                <div className={style.formControl}>
                    <label>No. Handphone:</label>
                    <input
                        onChange={changeHandler}
                        value={data.handphone}
                        name="handphone"
                        type="text"
                    />
                    <p className={style.error}>{errors.handphone}</p>
                </div>
                <div className={style.formControl}>
                    <label>Latar Belakang Pendidikan:</label>
                    <label>
                        <input
                            onChange={changeHandler}
                            value="IT"
                            name="pendidikan"
                            type="radio"
                            checked={data.pendidikan === "IT" ? true : false}
                        />
                        IT
                    </label>
                    <label>
                        <input
                            onChange={changeHandler}
                            value="Non IT"
                            name="pendidikan"
                            type="radio"
                            checked={
                                data.pendidikan === "Non IT" ? true : false
                            }
                        />
                        Non IT
                    </label>
                    <p className={style.error}>{errors.pendidikan}</p>
                </div>
                <div className={style.formControl}>
                    <label>Kelas Coding yang Dipilih:</label>
                    <select value={data.kelas} onChange={handleChangeSelectTag}>
                        <option value="0">Pilih Salah Satu Program</option>
                        <option value="1">Coding Backend with Golang</option>
                        <option value="2">Coding Frontend with ReactJS</option>
                        <option value="3">Fullstack Developer</option>
                    </select>
                    <p className={style.error}>{errors.kelas}</p>
                </div>
                <div className={style.formControl}>
                    <label>Foto Surat Kesungguhan:</label>
                    <input ref={photoRef} name="foto" type="file" />
                    <p className={style.error}>{}</p>
                </div>
                <div className={style.formControl}>
                    <label>Harapan Untuk Coding Bootcamp ini:</label>
                    <textarea
                        onChange={changeHandler}
                        name="harapan"
                        value={data.harapan}
                        rows="6"
                        placeholder="optional"
                    ></textarea>
                </div>
                <div className={style.actions}>
                    <button
                        className={style.submit}
                        type="submit"
                        onClick={submitHandler}
                    >
                        Submit
                    </button>
                    <button
                        className={style.reset}
                        type="button"
                        onClick={resetHandler}
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormCodingBootcamp;
