export default function Header({ text }) {
    return (
        <div
            style={{
                padding: "5px 10px",
                margin: "0 0 20px 0",
                border: "2px solid lightgray",
            }}
        >
            <h1>{text}</h1>
        </div>
    );
}
