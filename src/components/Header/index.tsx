import styles from "./header.module.css";
import IgniteLogo from "../../assets/ignite-logo.svg";
export function Header() {
    return (
        <header className={styles.header}>
            <img src={IgniteLogo} alt="ignite logo" />
            <strong>Ignite Feed</strong>
        </header>
    );
}
