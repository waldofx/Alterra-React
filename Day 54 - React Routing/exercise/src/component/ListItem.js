import {useHistory} from 'react-router-dom'

function ListItem ({item, hapusPengunjung}) {
    const history = useHistory();
    function action () {
    history.push({
            pathname: "/profile/" + item.nama,
            state: item,
        });
    }

    return(
        <tr>
            <td onClick={action}>{item.nama}</td>
            <td>{item.umur}</td>
            <td>{item.jenisKelamin}</td>
            <td style={{border: 0}}>
                <button onClick={()=> hapusPengunjung(item.id)}>Hapus</button>
            </td>
        </tr>
    )
}

export default ListItem;