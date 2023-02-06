import styles from "./sidebar.module.css";
import { PencilSimpleLine } from "phosphor-react";
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
            <div className={styles.profile}>
                <div className={styles.imgWrapper}>
                    <img
                        src="https://github.com/jeronimo-mz.png"
                        alt="Jerónimo Matavel"
                    />
                </div>
                <strong>Jerónimo Matavel</strong>
                <span>Desenvolvedor Web</span>
            </div>
            <footer className={styles.profile}>
                <a href="#">
                    <PencilSimpleLine size={"2rem"} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}
