import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { format, formatDistanceToNow } from "date-fns";
import styles from "./post.module.css";
import ptBR from "date-fns/locale/pt-BR";

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
    const formattedPublishedDate = format(
        publishedAt,
        "d 'de' LLLL 'às' HH:mm'h' ",
        { locale: ptBR }
    );

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });
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
            <form className={styles.commentForm}>
                <label htmlFor="comment">Deixe seu Comentário</label>
                <textarea name="comment" placeholder="Deixe um comentário" />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
};
