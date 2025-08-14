import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Image
          src="/nesto-EN_Secondary.png"
          alt="Nesto Mortgages"
          width={378}
          height={105.5}
        />
      </div>
      <div>

        <p className={styles.description_white}>
          Today’s Best <span className={styles.description_yellow}>Mortgage Rates in Canada</span>
        </p>
      </div>
      <main className={styles.main}>

        <div>


          <div className={styles.ctas}>
            <Link
              className={styles.primary}
              href="/application"
            >
              <Image
                className={styles.logo}
                src="/nesto-EN_Secondary.png"
                alt="Nesto logo"
                width={20}
                height={20}
                title="Nesto logo"
              />
              Apply now
            </Link>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Read our docs
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}
