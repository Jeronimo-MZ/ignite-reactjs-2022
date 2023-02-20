import styles from "./comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";
type CommentProps = {
    content: string;
    onDelete: () => void;
};
export const Comment = ({ content, onDelete }: CommentProps) => {
    return (
        <div className={styles.comment}>
            <Avatar
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
                        <button title="apagar" onClick={onDelete}>
                            <Trash size={24} />
                        </button>
                    </header>
                    <main>{content}</main>
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
