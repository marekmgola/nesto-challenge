"use client"

import { Application } from "@/utils/schemas/application"
import Button from "../buttton/Button"
import styles from "./application-list-item.module.css"
import Form from "next/form"
import { useTranslations } from "next-intl";

interface ApplicationListItemProps {
    application: Application
}

const ApplicationListItem = ({ application }: ApplicationListItemProps) => {
    const t = useTranslations()
    return (
        <div className={styles.applicationItem}>
            <div className={styles.applicationInfo}>
                <div className={styles.applicationHeader}>
                    <h3 className={styles.applicationId}>{t('applicationList.applicationNumber', { id: application.id.slice(-8) })}</h3>
                    <span className={`${styles.applicationType} ${styles[application.type.toLowerCase()]}`}>
                        {application.type}
                    </span>
                </div>
                <div className={styles.applicationDetails}>
                    <p className={styles.createdAt}>
                        {t('applicationList.created', { date: new Date(application.createdAt).toLocaleDateString() })}
                    </p>
                    {application.productId && (
                        <p className={styles.productId}>{t('applicationList.productId', { id: application.productId })}</p>
                    )}
                    {application.applicants.length > 0 && (
                        <p className={styles.applicants}>
                            {t('applicationList.applicants', { names: application.applicants.map(a => `${a.firstName} ${a.lastName}`).join(', ') })}
                        </p>
                    )}
                </div>
            </div>
            <div className={styles.applicationActions}>
                <Button
                    variant="secondary"
                    className={styles.actionButton}
                    href={`/application/${application.id}`}
                >
                    {t('applicationList.viewDetails')}
                </Button>
                <Form action={`/application`}>
                    <input type="hidden" name="applicationId" value={application.id} />
                    <input type="hidden" name="status" value="edit" />
                    <Button
                        variant="primary"
                        type="submit"
                        className={styles.actionButton}
                    >
                        {t('edit')}
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default ApplicationListItem
