import { useSelector, useDispatch } from "react-redux";
import { hapusPengunjung } from "../store/passengerSlice";
import ListItem from "./ListItem";

const ListPassenger = (props) => {
    const passengers = useSelector((state) => state.passenger.passengers)
    const dispatch = useDispatch();
    return(
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}> 
                <thead>
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                </thead>
                <tbody>
                    {passengers.map((passenger) => <ListItem 
                        key={passenger.id} 
                        item={passenger} 
                        hapusPengunjung={() => 
                            {dispatch(hapusPengunjung(passenger.id))
                            }}
                        />
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ListPassenger;