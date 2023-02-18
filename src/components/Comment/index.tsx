import styles from "./comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

export const Comment = () => {
    return (
        <div className={styles.comment}>
            <img
                src="https://github.com/jeronimo-mz.png"
                alt="Jeronimo Matavel"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>
                                Jerónimo Matavel <span>(você)</span>
                            </strong>
                            <time>Há cerca de 1h</time>
                        </div>
                        <button title="apagar">
                            <Trash size={24} />
                        </button>
                    </header>
                    <main>Muito bom Devon, parabéns!! 👏👏</main>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir<span>33</span>
                    </button>
                </footer>
            </div>
        </div>
    );
};
