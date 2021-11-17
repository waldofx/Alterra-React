import { useEffect, useState } from "react";
import "./Home.css";

function PassengerInput(props) {
    const { nama, umur, jenis_kelamin, id } = props.data;
    const [state, setState] = useState({
        nama: "",
        umur: "",
        jenis_kelamin: "Pria",
        editing: true,
    });

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        if (state.nama.trim() && state.umur && state.jenis_kelamin) {
            const umur = state.umur;
            if (umur >= 75 || umur <= 12) {
                alert("Umur tidak sesuai");
            } else {
                const newData = {
                    nama: state.nama,
                    umur: state.umur,
                    jenis_kelamin: state.jenis_kelamin,
                };
                props.onAdd(newData);
                setState({
                    ...state,
                    nama: "",
                    umur: "",
                    jenis_kelamin: "Pria",
                });
            }
        } else {
            alert("Data masih ada yang kosong");
        }
    };

    const handleUpdate = () => {
        if (state.nama.trim() && state.umur && state.jenis_kelamin) {
            const umur = state.umur;
            if (umur >= 75 || umur <= 12) {
                alert("Umur tidak sesuai");
            } else {
                const newData = {
                    id: id,
                    nama: state.nama,
                    umur: state.umur,
                    jenis_kelamin: state.jenis_kelamin,
                };
                props.onUpdate(newData);
                setState({
                    ...state,
                    nama: "",
                    umur: "",
                    jenis_kelamin: "Pria",
                });
            }
        } else {
            alert("Data masih ada yang kosong");
        }
    };

    const handleBukaInput = () => {
        setState({
            ...state,
            editing: false,
        });
    };

    const handleTutupInput = () => {
        setState({
            ...state,
            editing: true,
        });
    };

    useEffect(() => {
        setState((prev) => {
            return { ...prev, nama, umur, jenis_kelamin };
        });
    }, [nama, umur, jenis_kelamin]);

    useEffect(() => {
        console.log("effect");
        setState((prev) => {
            return { ...prev, editing: props.isOpen };
        });
    }, [props.isOpen]);

    let viewMode = {};
    let editMode = {};

    if (state.editing) {
        viewMode.display = "none";
    } else {
        editMode.display = "none";
    }

    return (
        <div>
            <div onSubmit={handleSubmit} style={viewMode}>
                <p>Masukkan Nama Anda</p>
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nama anda ..."
                    value={state.nama}
                    name="nama"
                    onChange={onChange}
                />
                <p>Masukkan Umur Anda</p>
                <input
                    type="number"
                    className="input-text"
                    placeholder="Umur anda ..."
                    value={state.umur}
                    name="umur"
                    onChange={onChange}
                />
                <p>Masukkan Jenis Kelamin Anda</p>
                <select
                    value={state.jenis_kelamin}
                    onChange={onChange}
                    name="jenis_kelamin"
                >
                    <option value="Pria">Pria</option>
                    <option value="Wanita">Wanita</option>
                </select>
                <p></p>
                <button onClick={handleUpdate} style={{ marginRight: "10px" }}>
                    Update
                </button>
                <button onClick={handleSubmit}>Submit</button>
                <button
                    onClick={handleTutupInput}
                    style={{ marginLeft: "10px" }}
                >
                    Selesai
                </button>
            </div>
            <button
                className="inputan"
                onClick={handleBukaInput}
                style={editMode}
            >
                Masukkan Nama Pelanggan
            </button>
        </div>
    );
}

export default PassengerInput;
