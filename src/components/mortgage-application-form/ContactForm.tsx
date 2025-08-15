"use client";

import { useState } from "react";
import { Application } from "@/utils/schemas/application";
import { updateContactDetails } from "@/app/application/actions";
import { useTranslations } from "next-intl";
import Banner from "@/components/banner/Banner";
import styles from "./contact-form.module.css";
import Form from "next/form";
import Button from "../buttton/Button";
import { ApplicationStatus } from "./MortgageApplicationForm";

interface ContactFormProps {
    application: Application;
    showCreatedBanner: boolean;
    showSavedBanner: boolean;
    status: ApplicationStatus
}

interface ApplicantData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export default function ContactForm({
    application,
    showCreatedBanner,
    showSavedBanner,
    status
}: ContactFormProps) {
    const t = useTranslations();
    const [applicants, setApplicants] = useState<ApplicantData[]>(application.applicants.map(applicant => ({
        firstName: applicant.firstName,
        lastName: applicant.lastName,
        email: applicant.email,
        phone: applicant.phone
    })));
    const [showCreatedMsg, setShowCreatedMsg] = useState(showCreatedBanner);
    const [showSavedMsg, setShowSavedMsg] = useState(showSavedBanner);

    const addApplicant = () => {
        setApplicants([...applicants, { firstName: "", lastName: "", email: "", phone: "" }]);
    };

    const removeApplicant = (index: number) => {
        if (applicants.length > 1) {
            setApplicants(applicants.filter((_, i) => i !== index));
        }
    };

    const updateApplicant = (index: number, field: keyof ApplicantData, value: string) => {
        const updated = [...applicants];
        updated[index] = { ...updated[index], [field]: value };
        setApplicants(updated);
    };
    console.log('renderstat', status)
    const saveButtonDisabled = !applicants.length || !applicants[0].email || !applicants[0].firstName || !applicants[0].lastName || !applicants[0].phone
    return (
        <div className={styles.container}>
            {showCreatedMsg && (
                <Banner
                    message={t('banner.applicationCreated')}
                    type="success"
                    onDismiss={() => setShowCreatedMsg(false)}
                />
            )}

            {showSavedMsg && (
                <Banner
                    message={t('banner.applicationSaved')}
                    type="success"
                    onDismiss={() => setShowSavedMsg(false)}
                />
            )}

            <div className={styles.header}>
                <h1 className={styles.title}>{t('applicationForm.title')}</h1>
                <p className={styles.subtitle}>
                    {t('applicationForm.subtitle')}
                </p>
            </div>

            <Form action={updateContactDetails} className={styles.form}>
                <input
                    type="hidden"
                    name="applicationId"
                    value={application.id}
                />
                <input
                    type="hidden"
                    name="status"
                    value={status}
                />


                {applicants.map((applicant, index) => (
                    <div key={index} className={styles.applicantSection}>
                        <div className={styles.applicantHeader}>
                            <h3>{t('applicationForm.applicant', { number: index + 1 })}</h3>
                            {applicants.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeApplicant(index)}
                                    className={styles.removeButton}
                                >
                                    {t('remove')}
                                </button>
                            )}
                        </div>

                        <div className={styles.fieldsGrid}>
                            <div className={styles.field}>
                                <label htmlFor={`firstName-${index}`}>{t('applicationForm.firstName')}{t('applicationForm.required')}</label>
                                <input
                                    type="text"
                                    id={`firstName-${index}`}
                                    name={`applicants.${index}.firstName`}
                                    value={applicant.firstName}
                                    onChange={(e) => updateApplicant(index, "firstName", e.target.value)}
                                    required
                                    className={styles.input}
                                />
                            </div>

                            <div className={styles.field}>
                                <label htmlFor={`lastName-${index}`}>{t('applicationForm.lastName')}{t('applicationForm.required')}</label>
                                <input
                                    type="text"
                                    id={`lastName-${index}`}
                                    name={`applicants.${index}.lastName`}
                                    value={applicant.lastName}
                                    onChange={(e) => updateApplicant(index, "lastName", e.target.value)}
                                    required
                                    className={styles.input}
                                />
                            </div>

                            <div className={styles.field}>
                                <label htmlFor={`email-${index}`}>{t('applicationForm.email')}{t('applicationForm.required')}</label>
                                <input
                                    type="email"
                                    id={`email-${index}`}
                                    name={`applicants.${index}.email`}
                                    value={applicant.email}
                                    onChange={(e) => updateApplicant(index, "email", e.target.value)}
                                    required
                                    className={styles.input}
                                />
                            </div>

                            <div className={styles.field}>
                                <label htmlFor={`phone-${index}`}>{t('applicationForm.phone')}{t('applicationForm.required')}</label>
                                <input
                                    type="tel"
                                    id={`phone-${index}`}
                                    name={`applicants.${index}.phone`}
                                    value={applicant.phone}
                                    onChange={(e) => updateApplicant(index, "phone", e.target.value)}
                                    required
                                    className={styles.input}
                                    placeholder={t('applicationForm.phonePlaceholder')}
                                />
                            </div>
                        </div>
                    </div>
                ))}

                <div className={styles.actions}>
                    <Button variant="secondary" onClick={addApplicant}>{t('applicationForm.addApplicant')}</Button>
                </div>

                <div className={styles.actions}>
                    <div />
                    <Button variant="primary" type="submit" disabled={saveButtonDisabled}>{status === 'EDIT' ? t('save') : t('finished')}</Button>
                </div>
            </Form>
        </div>
    );
}
