import styles from "./TodoCard.module.css";

export default function TodoCard({ user }) {
    return (
        <div className={styles.card}>
            {user.completed === true && (
                <p
                    style={{
                        textDecorationLine: "line-through",
                        textDecorationStyle: "solid",
                    }}
                >
                    {user.title}
                </p>
            )}
            {user.completed === false && <p>{user.title}</p>}
        </div>
    );
}
