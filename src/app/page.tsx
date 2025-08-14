import Image from "next/image";
import styles from "./page.module.css";
import ProductSelector from "@/components/poduct-selector/ProductSelector";
import { Suspense } from "react";
import Spinner from "@/components/spinner/Spinnner";

export default async function Home() {
  return (
    <div className="page">
      <div className={styles.header}>
        <Image
          className='hidden-on-big'
          src="/nesto-EN_Secondary.png"
          alt="Nesto Mortgages"
          width={378 / 2}
          height={105.5 / 2}
        />
        <Image
          className='hidden-on-small'
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
        <Suspense fallback={<Spinner />}>
          <ProductSelector />
        </Suspense>
      </main>
    </div>
  );
}
