import { useState } from 'react'


import ListPassenger from './ListPassenger'
import PassengerInput from './PassengerInput'

function Home() {


    return (
        <div className="App">
            <h1>Daftar pengunjung</h1>
                <ListPassenger />
                <PassengerInput />
        </div>
    )
}

export default Home;