import { Component } from "react";

class PassengerInput extends Component {
    state = {
        nama: "",
        umur: "",
        jenisKelamin: "Pria",
        editing: true
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const formIsNotEmpty = this.state.nama && this.state.umur && this.state.jenisKelamin
        if (formIsNotEmpty) {
            const newData = {
                nama: this.state.nama,
                umur: this.state.umur,
                jenisKelamin: this.state.jenisKelamin
            }
            this.props.tambahPengunjung(newData);
            this.setState({
                nama: "",
                umur: "",
                jenisKelamin: "Pria"
            })
        } else {
            alert("Data masih ada yang kosong")
        }
    }

    handleBukaInput = () => {
        this.setState({
            editing: false
        })
    }
    handleTutupInput = () => {
        this.setState({
            editing: true
        })
    }

    render() {
        const viewMode = {};
        const editMode = {};

        if (this.state.editing){
            viewMode.display = 'none'
        } else {
            editMode.display = 'none'
        }

        return (
            <div>
                <div onSubmit={() => {}} style={viewMode}>
                    <p>Masukkan Nama Anda</p>
                    <input type="text" placeholder="Nama anda..." value={this.state.nama} name="nama" onChange={this.onChange}></input>
                    
                    <p>Masukkan Umur Anda</p>
                    <input type="text" placeholder="Umur anda..." value={this.state.umur} name="umur" onChange={this.onChange}></input>
                    
                    <p>Masukkan Jenis Kelamin Anda</p>
                    <select onChange={this.onChange} name="jenisKelamin">
                        <option value="Pria" selected>Pria</option>
                        <option value="Wanita">Wanita</option>
                    </select>

                    <button onClick={this.handleSubmit}>Submit</button>
                    <button onClick={this.handleTutupInput}>Selesai</button>
                </div>
                <button onClick={this.handleBukaInput} style={editMode}>Masukkan nama Penumpang</button>
            </div>
        )
    }
}

export default PassengerInput;