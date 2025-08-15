"use client"

import { useGetAllApplications } from "@/utils/api/apiHooks/useGetAllApplications"
import ApplicationListItem from "../application-list-item/ApplicationListItem"
import styles from "./application-list.module.css"
import { useTranslations } from "next-intl";

const ApplicationList = () => {
    const { data: applications } = useGetAllApplications()
    const t = useTranslations()

    if (!applications || applications.length === 0) {
        return (
            <div className={styles.emptyState}>
                <h2>{t('applicationList.noApplications.title')}</h2>
                <p>{t('applicationList.noApplications.message')}</p>
            </div>
        )
    }

    return (
        <div className={styles.applicationList}>
            {applications.map((application) => (
                <ApplicationListItem key={application.id} application={application} />
            ))}
        </div>
    )
}

export default ApplicationList
