import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { format, formatDistanceToNow } from "date-fns";
import styles from "./post.module.css";
import ptBR from "date-fns/locale/pt-BR";
import { FormEvent, useState } from "react";

type PostProps = {
    author: {
        avatarUrl: string;
        role: string;
        name: string;
    };
    publishedAt: Date;
    content: Array<{
        type: "paragraph" | "link";
        text: string;
    }>;
};

export const Post = ({ author, content, publishedAt }: PostProps) => {
    const [comments, setComments] = useState(["post muito bom!!!"]);
    const [newComment, setNewComment] = useState("");
    const formattedPublishedDate = format(
        publishedAt,
        "d 'de' LLLL 'às' HH:mm'h' ",
        { locale: ptBR }
    );

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    const handleNewComment = (event: FormEvent) => {
        event.preventDefault();
        if (!newComment) return;
        setComments((prev) => [newComment, ...prev]);
        setNewComment("");
    };

    const handleDeleteComent = (commentToDelete: string) => {
        setComments((prev) =>
            prev.filter((comment) => comment !== commentToDelete)
        );
    };

    return (
        <article className={styles.postWrapper}>
            <header className={styles.header}>
                <div className={styles.left}>
                    <Avatar
                        src={author.avatarUrl}
                        alt={author.name}
                        hasBorder
                    />
                    <div>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time
                    dateTime={publishedAt.toISOString()}
                    title={formattedPublishedDate}
                    className={styles.right}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <main className={styles.content}>
                {content.map((content) => {
                    if (content.type === "paragraph") {
                        return <p key={content.text}>{content.text}</p>;
                    }

                    return (
                        <a key={content.text} href="#">
                            {content.text}
                        </a>
                    );
                })}
            </main>
            <form className={styles.commentForm} onSubmit={handleNewComment}>
                <label htmlFor="comment">Deixe seu Comentário</label>
                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map((comment) => (
                    <Comment
                        key={comment}
                        content={comment}
                        onDelete={() => handleDeleteComent(comment)}
                    />
                ))}
            </div>
        </article>
    );
};
