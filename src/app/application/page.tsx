import { Suspense } from "react";
import MortgageApplicationForm from "@/components/mortgage-application-form/MortgageApplicationForm";

export type ApplicationSearchParams = { productId?: string; success?: 'created' | 'saved'; applicationId?: string };

interface ApplicationPageProps {
    searchParams: Promise<ApplicationSearchParams>;
}

export default async function ApplicationPage({ searchParams }: ApplicationPageProps) {
    const params = await searchParams;
    const { productId, success, applicationId } = params;

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
                    <h1 className="title">Loading...</h1>
                    <p>Creating your mortgage application...</p>
                </div>
            }>
                <MortgageApplicationForm searchParams={searchParams} success={success} />
            </Suspense>
        </div>
    );
}