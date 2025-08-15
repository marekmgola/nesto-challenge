import { Suspense } from "react"
import ApplicationDetails from "@/components/application-details/ApplicationDetails"
import { useTranslations } from "next-intl";
import LoadingMessage from "@/components/loading-message";

interface ApplicationDetailsPageProps {
    params: Promise<{ applicationId: string }>
}

const ApplicationDetailsPage = ({ params }: ApplicationDetailsPageProps) => {
    const t = useTranslations();
    return (
        <div className="page">
            <div className="main">
                <Suspense fallback={
                        <LoadingMessage title={t('application.loadingApplication')}
                            message={t('application.loading.fetchingDetails')} />
                }>
                    <ApplicationDetails params={params} />
                </Suspense>
            </div>
        </div>
    )
}

export default ApplicationDetailsPage
