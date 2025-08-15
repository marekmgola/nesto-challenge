import styles from "@/app/page.module.css";
import LocaleSwitcher from "@/components/locale-switcher/LocaleSwitcher";

export default function Header() {
    return (
        <header className={styles.header}>
            <div style={{
                display: 'flex',
                flex: 1,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <div />
                <LocaleSwitcher />
            </div>
        </header>
    )
}