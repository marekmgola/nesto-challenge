import Image from "next/image";
import styles from "./footer.module.css";
import { useTranslations } from "next-intl";;

export default function Footer() {
    const t = useTranslations();
    return (
        <footer className={styles.footer}>
            <div className={styles.logoSection}>
                <Image
                    width={12}
                    height={12}
                    src="/nestoIcon-Secondary.png"
                    alt={t('alt.nestoLogo')}
                    title={t('alt.nestoLogo')}
                    className={styles.logo}
                />
            </div>
            <div className={styles.linksSection}>
                <a href="/about">
                    <Image width={24} height={24} src="/about.svg" alt={t('alt.aboutIcon')} />
                    {t('nav.aboutUs')}
                </a>
                <a href="/my-applications">
                    <Image width={24} height={24} src="/document.svg" alt={t('alt.documentIcon')} />
                    {t('nav.myApplications')}
                </a>
                <a href="/career">
                    <Image width={24} height={24} src="/career.svg" alt={t('alt.careerIcon')} />
                    {t('nav.careers')}
                </a>
            </div>
            <div className={styles.logoSection}>
                <Image
                    width={12}
                    height={12}
                    src="/nestoIcon-Secondary.png"
                    alt={t('alt.nestoLogo')}
                    title={t('alt.nestoLogo')}
                    className={styles.logo}
                />
            </div>
        </footer>
    );
}