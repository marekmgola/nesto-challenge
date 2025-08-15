
import { Suspense, } from "react"
import ApplicationList from "@/components/application-list/ApplicationList"
import styles from "./page.module.css"
import { useTranslations } from "next-intl";
import Banner from "@/components/banner/Banner";
import SaveBanner from "@/components/save-banner/SaveBanner";

const MyApplicationsPage = ({searchParams } : {
    searchParams: { success?: 'saved' }
}) => {
    const t = useTranslations();

    return (
        <div className="page">

            <SaveBanner />
            <h1 className="title">{t('application.myApplications.title')}</h1>
            <div className="main">
                <Suspense fallback={
                    <div className={styles.loading}>
                        <h2>{t('application.loadingApplications')}</h2>
                        <p>{t('application.loading.fetchingApplications')}</p>
                    </div>
                }>
                    <ApplicationList />
                </Suspense>
            </div>
        </div>
    )
}

export default MyApplicationsPage   