import { Suspense } from "react"
import ApplicationDetails from "@/components/application-details/ApplicationDetails"
import styles from "./page.module.css"
import { useTranslations } from "next-intl";

interface ApplicationDetailsPageProps {
    params: Promise<{ applicationId: string }>
}

const ApplicationDetailsPage = ({ params }: ApplicationDetailsPageProps) => {
    const t = useTranslations();
    return (
        <div className="page">
            <div className="main">
                <Suspense fallback={
                    <div className={styles.loading}>
                        <h1 className="title">{t('application.loadingApplication')}</h1>
                        <p>{t('application.loading.fetchingDetails')}</p>
                    </div>
                }>
                    <ApplicationDetails params={params} />
                </Suspense>
            </div>
        </div>
    )
}

export default ApplicationDetailsPage
