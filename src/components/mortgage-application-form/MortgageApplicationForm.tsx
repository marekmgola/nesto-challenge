import { Suspense } from "react";
import { createApplication, getApplication } from "@/utils/api/apiClient";
import { Application, ApplicationSchema } from "@/utils/schemas/application";
import styles from "./mortgage-application-form.module.css";
import ContactForm from "./ContactForm";
import { ApplicationSearchParams } from "@/app/application/page";


interface MortgageApplicationFormProps {
    searchParams: Promise<ApplicationSearchParams>;
    success?: string;
}

async function MortgageApplicationFormContent({
    searchParams,
    success
}: MortgageApplicationFormProps) {
    let application: Application;

    try {
        const params = await searchParams;
        const { productId, applicationId, success } = params;

        if (success === "saved" && applicationId) {
            const response = await getApplication(applicationId);

            application = await response.json();
            const validatedApplication = ApplicationSchema.parse(application);
            application = validatedApplication;
            console.log("application", application)
        } else {
            // Create application with the productId
            if (!productId) {
                throw new Error("Product ID is required");
            }
            const response = await createApplication(parseInt(productId));
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
                    <h2>Error Creating Application</h2>
                    <p>We encountered an error while creating your application. Please try again.</p>
                </div>
            </div>
        );
    }



    return (
        <div className={styles.container}>
            <ContactForm
                application={application}
                showCreatedBanner={!success}
                showSavedBanner={success === "saved"}
            />
        </div>
    );
}

export default function MortgageApplicationForm(props: MortgageApplicationFormProps) {
    return (
        <Suspense fallback={
            <div className={styles.container}>
                <div className={styles.loading}>
                    <div className={styles.spinner}></div>
                </div>
            </div>
        }>
            <MortgageApplicationFormContent {...props} />
        </Suspense>
    );
}
