import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logoContainer}>
                <Image
                    className={styles.logo}
                    src="/nestoIcon-Primary.png"
                    alt="Nesto logo"
                    title="Nesto logo"
                    width={24}
                    height={24}
                    priority
                />
            </div>
            <a
                href="https://www.nesto.ca/about-us/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    aria-hidden
                    src="/about.svg"
                    alt="About icon"
                    width={16}
                    height={16}
                />
                About us
            </a>
            <Link
                href="/application"
            >
                <Image
                    aria-hidden
                    src="/document.svg"
                    alt="Document icon"
                    width={16}
                    height={16}
                />
                My Applications
            </Link>
            <a
                href="https://ats.rippling.com/en-CA/nesto/jobs/d79eaaf5-acbf-4744-aa32-b8d651c0a15e"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    aria-hidden
                    src="/career.svg"
                    alt="Career icon"
                    width={16}
                    height={16}
                />
                Careers
            </a>
            <div className={styles.logoContainer}>
                <Image
                    className={styles.logo}
                    src="/nestoIcon-Primary.png"
                    alt="Nesto logo"
                    title="Nesto logo"
                    width={24}
                    height={24}
                    priority
                />
            </div>
        </footer>
    )
}