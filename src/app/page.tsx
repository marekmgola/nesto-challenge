import Image from "next/image";
import styles from "./page.module.css";
import ProductSelector from "@/components/poduct-selector/ProductSelector";
import { Suspense } from "react";
import Spinner from "@/components/spinner/Spinnner";
import { getTranslations } from "next-intl/server";
import { ApplicationStatus } from "@/components/mortgage-application-form/MortgageApplicationForm";
import Banner from "@/components/banner/Banner";
import Button from "@/components/buttton/Button";

export default async function Home({ searchParams }: { searchParams: Promise<{ status: ApplicationStatus }> }) {
  const t = await getTranslations();
  const { status } = await searchParams
  return (
    <div className="page">
      {status === 'NEW' ?
        <Banner
          message={t('banner.applicationSaved')}
          type="success"
          autoHide
        />
        : null}
      <div className={styles.header}>
        <Image
          className='hidden-on-big'
          src="/nesto-EN_Secondary.png"
          alt={t('alt.nestoMortgages')}
          width={378 / 2}
          height={105.5 / 2}
        />
        <Image
          className='hidden-on-small'
          src="/nesto-EN_Secondary.png"
          alt={t('alt.nestoMortgages')}
          width={378}
          height={105.5}
        />
      </div>
      <div>

        <p className={styles.description_white}>
          {t('home.title_1')}<span className={styles.description_yellow}>{t('home.title_2')}</span>
        </p>
      </div>
      <main className={styles.main}>
        <Suspense fallback={<Spinner />}>
          <ProductSelector />
        </Suspense>
        <div className='center'>
        {
          status === 'NEW' ?
            <Button variant="secondary" href="/my-applications">See my applications</Button>
            : null
          }
          </div>
      </main>
    </div>
  );
}
