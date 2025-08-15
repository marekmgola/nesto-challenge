
import { Suspense, } from "react"
import ApplicationList from "@/components/application-list/ApplicationList"
import { useTranslations } from "next-intl";
import SaveBanner from "@/components/save-banner/SaveBanner";
import LoadingMessage from "@/components/loading-message";

const MyApplicationsPage = () => {
    const t = useTranslations();

    return (
        <div className="page">

            <SaveBanner />
            <h1 className="title">{t('application.myApplications.title')}</h1>
            <div className="main">
                <Suspense fallback={
                        <LoadingMessage title={t('application.loadingApplication')}
                            message={t('application.loading.fetchingDetails')} />
                }>
                    <ApplicationList />
                </Suspense>
            </div>
        </div>
    )
}

export default MyApplicationsPage   