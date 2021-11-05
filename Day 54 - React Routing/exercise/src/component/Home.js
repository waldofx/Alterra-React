import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import ListPassenger from './ListPassenger'
import PassengerInput from './PassengerInput'

const initialValue = [
    {
        id: uuidv4(),
        nama: 'Yoga',
        umur: 20,
        jenisKelamin: 'Pria'
    },
    {
        id: uuidv4(),
        nama: 'Ria',
        umur: 19,
        jenisKelamin: 'Wanita'
    },
    {
        id: uuidv4(),
        nama: 'Fahmi',
        umur: 25,
        jenisKelamin: 'Pria'
    },
    {
        id: uuidv4(),
        nama: 'Lala',
        umur: 21,
        jenisKelamin: 'Wanita'
    },
    {
        id: uuidv4(),
        nama: 'Ivan',
        umur: 25,
        jenisKelamin: 'Pria'
    }
]

function Home() {
    const [data, setData] = useState(initialValue)

    const hapusPengunjung = id => {
        setData((oldData) => oldData.filter(item => {
            return item.id !== id;
        }))
    }

    const tambahPengunjung = (newUser) => {
        const newData = {id: uuidv4(), ...newUser};
        setData((oldData) => [...oldData, newData]);
    }

    return (
        <div className="App">
            <h1>Daftar pengunjung</h1>
                <ListPassenger data={data} hapusPengunjung={hapusPengunjung}/>
            <PassengerInput tambahPengunjung={tambahPengunjung}/>
        </div>
    )
}

export default Home;