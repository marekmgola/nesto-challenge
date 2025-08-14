"use client";

import { useState } from "react";
import { Application } from "@/utils/schemas/application";
import { updateContactDetails } from "@/app/application/actions";
import Banner from "@/components/banner/Banner";
import styles from "./contact-form.module.css";
import Form from "next/form";
import Button from "../buttton/Button";

interface ContactFormProps {
    application: Application;
    showCreatedBanner: boolean;
    showSavedBanner: boolean;
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
    showSavedBanner
}: ContactFormProps) {
    const [applicants, setApplicants] = useState<ApplicantData[]>(application.applicants.map(applicant => ({
        firstName: applicant.firstName,
        lastName: applicant.lastName,
        email: applicant.email,
        phone: applicant.phone
    })));
    const [showCreatedMsg, setShowCreatedMsg] = useState(showCreatedBanner);
    const [showSavedMsg, setShowSavedMsg] = useState(showSavedBanner);
    const [finishButtonDisabled, setFinishButtonDisabled] = useState(!application.applicants[0].firstName || !application.applicants[0].lastName || !application.applicants[0].email || !application.applicants[0].phone);

    const addApplicant = () => {
        setApplicants([...applicants, { firstName: "", lastName: "", email: "", phone: "" }]);
        setFinishButtonDisabled(true);
    };

    const removeApplicant = (index: number) => {
        if (applicants.length > 1) {
            setApplicants(applicants.filter((_, i) => i !== index));
            setFinishButtonDisabled(true);
        }
    };

    const updateApplicant = (index: number, field: keyof ApplicantData, value: string) => {
        const updated = [...applicants];
        updated[index] = { ...updated[index], [field]: value };
        setApplicants(updated);
        setFinishButtonDisabled(true);
    };

    return (
        <div className={styles.container}>
            {showCreatedMsg && (
                <Banner
                    message="Application created!"
                    type="success"
                    onDismiss={() => setShowCreatedMsg(false)}
                />
            )}

            {showSavedMsg && (
                <Banner
                    message="Application saved!"
                    type="success"
                    onDismiss={() => setShowSavedMsg(false)}
                />
            )}

            <div className={styles.header}>
                <h1 className={styles.title}>We just need a few details</h1>
                <p className={styles.subtitle}>
                    Please provide contact information for all applicants
                </p>
            </div>

            <Form action={updateContactDetails} className={styles.form}>
                <input
                    type="hidden"
                    name="applicationId"
                    value={application.id}
                />

                {applicants.map((applicant, index) => (
                    <div key={index} className={styles.applicantSection}>
                        <div className={styles.applicantHeader}>
                            <h3>Applicant {index + 1}</h3>
                            {applicants.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeApplicant(index)}
                                    className={styles.removeButton}
                                >
                                    Remove
                                </button>
                            )}
                        </div>

                        <div className={styles.fieldsGrid}>
                            <div className={styles.field}>
                                <label htmlFor={`firstName-${index}`}>First Name *</label>
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
                                <label htmlFor={`lastName-${index}`}>Last Name *</label>
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
                                <label htmlFor={`email-${index}`}>Email *</label>
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
                                <label htmlFor={`phone-${index}`}>Phone Number *</label>
                                <input
                                    type="tel"
                                    id={`phone-${index}`}
                                    name={`applicants.${index}.phone`}
                                    value={applicant.phone}
                                    onChange={(e) => updateApplicant(index, "phone", e.target.value)}
                                    required
                                    className={styles.input}
                                    placeholder="(555) 123-4567"
                                />
                            </div>
                        </div>
                    </div>
                ))}

                <div className={styles.actions}>
                    <Button variant="secondary" onClick={addApplicant}>+ Add Another Applicant</Button>
                </div>

                <div className={styles.actions}>
                    <Button variant="primary" type="submit">Save</Button>
                    <Button variant="secondary" href="/" className={styles.doneButton} disabled={finishButtonDisabled}>Finished</Button>
                </div>
            </Form>
        </div>
    );
}
