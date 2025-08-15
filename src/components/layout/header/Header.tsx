import styles from "@/app/page.module.css";
import LocaleSwitcher from "@/components/locale-switcher/LocaleSwitcher";

export default function Header() {
    return (
        <header className={styles.header}>
            <LocaleSwitcher />
        </header>
    )
}