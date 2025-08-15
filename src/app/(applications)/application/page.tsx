import { Suspense } from "react";
import MortgageApplicationForm, { ApplicationStatus } from "@/components/mortgage-application-form/MortgageApplicationForm";
import { getUserLocale } from "@/i18n/locale";
import { getTranslations } from "next-intl/server";

export type ApplicationSearchParams = { productId?: string; status?: ApplicationStatus, applicationId?: string };

interface ApplicationPageProps {
    searchParams: Promise<ApplicationSearchParams>;
}

export default async function ApplicationPage({
    searchParams,
}: ApplicationPageProps) {
    const t = await getTranslations();
    const params = await searchParams;
    const { productId, applicationId } = params;

    if (!productId && !applicationId) {
        return (
            <div className="page">
                <div className="main">
                    <h1>Error</h1>
                    <p>Product ID is required to create an application.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="page">
            <Suspense fallback={
                <div className="main">
                    <h1 className="title">{t('application.loading.fetchingDetails')}</h1>
                    <p>Creating your mortgage application...</p>
                </div>
            }>
                <MortgageApplicationForm searchParams={params} />
            </Suspense>
        </div>
    );
}