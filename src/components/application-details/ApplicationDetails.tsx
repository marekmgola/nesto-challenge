"use client"

import { useGetApplication } from "@/utils/api/apiHooks/useGetApplication"
import Button from "../buttton/Button"
import styles from "./application-details.module.css"
import { use } from "react"
import { useGetAllProducts } from "@/utils/api/apiHooks/useGetAllProducts"
import ProductListItem from "../product-list-item/ProductListItem"
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { ApplicationStatus } from "../mortgage-application-form/MortgageApplicationForm"

interface ApplicationDetailsProps {
    params: Promise<{
        applicationId: string
    }>
}

const ApplicationDetails = ({ params }: ApplicationDetailsProps) => {
    const { applicationId } = use(params)
    const { data: application } = useGetApplication(applicationId)
    const { data: products } = useGetAllProducts()
    const t = useTranslations();
    const locale = useLocale();
    const product = products?.find(p => p.id === application.productId)
    return (
        <div className={styles.applicationDetails}>
            <div className={styles.header}>
                <div className={styles.titleSection}>
                    <h1 className="">{t('applicationDetails.title')}</h1>
                    <span className={`${styles.applicationType} ${styles[application.type.toLowerCase()]}`}>
                        {application.type}
                    </span>
                </div>
                <div className={styles.actions}>
                    <Button
                        variant="secondary"
                        href="/my-applications"
                    >
                        {t('applicationDetails.backToApplications')}
                    </Button>
                    <Button
                        variant="primary"
                        href={`/application?applicationId=${application.id}&status=${"EDIT" satisfies ApplicationStatus}`}
                    >
                        {t('applicationDetails.editApplication')}
                    </Button>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>{t('applicationDetails.applicationInfo')}</h2>
                    <div className={styles.infoGrid}>
                        <div className={styles.infoItem}>
                            <label className={styles.label}>{t('applicationDetails.applicationId')}</label>
                            <span className={styles.value}>{application.id}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <label className={styles.label}>{t('applicationDetails.type')}</label>
                            <span className={styles.value}>{application.type}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <label className={styles.label}>{t('applicationDetails.created')}</label>
                            <span className={styles.value}>
                                {new Date(application.createdAt).toLocaleDateString(locale, {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </span>
                        </div>
                        {application.productId && (
                            <div className={styles.infoItem}>
                                <label className={styles.label}>{t('applicationDetails.product')}</label>
                                <span className={styles.value}>
                                    {product ? <ProductListItem compact product={product} isFirst={false} /> : application.productId}
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {application.applicants.length > 0 && (
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t('applicationDetails.applicants')}</h2>
                        <div className={styles.applicantsList}>
                            {application.applicants.map((applicant, index) => (
                                <div key={index} className={styles.applicantCard}>
                                    <h3 className={styles.applicantName}>
                                        {applicant.firstName} {applicant.lastName}
                                    </h3>
                                    <div className={styles.applicantInfo}>
                                        <div className={styles.infoItem}>
                                            <label className={styles.label}>{t('applicationDetails.email')}</label>
                                            <span className={styles.value}>{applicant.email}</span>
                                        </div>
                                        <div className={styles.infoItem}>
                                            <label className={styles.label}>{t('applicationDetails.phone')}</label>
                                            <span className={styles.value}>{applicant.phone}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ApplicationDetails
