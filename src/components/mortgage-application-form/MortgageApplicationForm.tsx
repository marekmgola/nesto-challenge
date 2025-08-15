import { Suspense } from "react";
import { createApplication, getApplication } from "@/utils/api/apiClient";
import { Application, ApplicationSchema } from "@/utils/schemas/application";
import styles from "./mortgage-application-form.module.css";
import ContactForm from "./ContactForm";
import { getTranslations } from "next-intl/server";
import { ApplicationSearchParams } from "@/app/(applications)/application/page";


export type ApplicationStatus = 'NEW' | 'EDIT';

interface MortgageApplicationFormProps {
    params: ApplicationSearchParams;
}

async function MortgageApplicationFormContent({
    params,
}: MortgageApplicationFormProps) {
    const t = await getTranslations();
    let application: Application;

    const { productId, applicationId, status } = params;
    try {
        if (status === "NEW" && productId) {
            const response = await createApplication(Number(productId));

            application = await response.json();
            const validatedApplication = ApplicationSchema.parse(application);
            application = validatedApplication;

        } else {
            // Create application with the productId
            if (!applicationId) {
                throw new Error("Application ID is required");
            }
            const response = await getApplication(applicationId);

            if (!response.ok) {
                throw new Error("Failed to create application");
            }

            application = await response.json();

            const validatedApplication = ApplicationSchema.parse(application);
            application = validatedApplication;

            if (!application) {
                throw new Error("Failed to create application");
            }
        }
    } catch (error) {
        console.error("Error creating application:", error);
        return (
            <div className={styles.container}>
                <div className={styles.error}>
                    <h2>{t('applicationForm.error.title')}</h2>
                    <p>{t('applicationForm.error.message')}</p>
                </div>
            </div>
        );
    }


    return (
        <div className={styles.container}>
            <ContactForm
                application={application}
                status={status || 'NEW'}
            />
        </div>
    );
}

export default function MortgageApplicationForm({ searchParams }: { searchParams: ApplicationSearchParams }) {
    return (
        <Suspense fallback={
            <div className={styles.container}>
                <div className={styles.loading}>
                    <div className={styles.spinner}></div>
                </div>
            </div>
        }>
            <MortgageApplicationFormContent params={searchParams} />
        </Suspense>
    );
}
