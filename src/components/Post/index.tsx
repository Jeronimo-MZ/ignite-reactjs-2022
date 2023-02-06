import styles from "./post.module.css";
export const Post = () => {
    const ONE_HOUR = 1000 * 60 * 60;
    const ONE_HOUR_AGO = new Date(Date.now() - ONE_HOUR);
    return (
        <article className={styles.postWrapper}>
            <header className={styles.header}>
                <div className={styles.left}>
                    <div className={styles.imgWrapper}>
                        <img
                            src="https://github.com/jeronimo-mz.png"
                            alt="Jerónimo Matavel"
                        />
                    </div>
                    <div>
                        <strong>Jerónimo Matavel</strong>
                        <span>Desenvolvedor Web</span>
                    </div>
                </div>
                <time
                    dateTime={ONE_HOUR_AGO.toISOString()}
                    title={ONE_HOUR_AGO.toLocaleString()}
                    className={styles.right}
                >
                    Publicado há 1h
                </time>
            </header>
            <main className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>
                    Acabei de subir mais um projeto no meu portifa. É um projeto
                    que fiz no NLW Return, evento da Rocketseat. O nome do
                    projeto é DoctorCare 🚀
                </p>
                <p>
                    👉 <a href="#">jane.design/doctorcare</a>
                </p>
                <p className={styles.tags}>
                    <a href="#">#novoprojeto</a>
                    <a href="#">#nlw</a>
                    <a href="#">#rocketseat</a>
                </p>
            </main>
        </article>
    );
};
