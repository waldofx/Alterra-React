import ListItem from "./ListItem";
const ListPassenger = (props) => {
    if (props.data.length === 0) {
        return <p>Not Found</p>;
    }
    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
                <thead bgcolor="red">
                    <tr>
                        <th>Nama</th>
                        <th>Umur</th>
                        <th>Jenis Kelamin</th>
                        <th bgcolor="white" className="removeBorder"></th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item) => (
                        <ListItem
                            key={item.id}
                            data={item}
                            onEdit={props.onEdit}
                            hapusPengunjung={props.onDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListPassenger;
