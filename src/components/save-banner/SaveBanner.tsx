'use client';
import { useEffect, useState } from "react";
import Banner from "../banner/Banner";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function SaveBanner() {
    const [showSavedMsg, setShowSavedMsg] = useState(false);
    const searchParams = useSearchParams()
    const success = searchParams.get('success');
    const t = useTranslations();
    useEffect(() => {
        if (success === 'saved') {
            setShowSavedMsg(true);
        }
    }, [success]);

  return (
        showSavedMsg && (
            <Banner
                message={t('banner.applicationSaved')}
                type="success"
                onDismiss={() => setShowSavedMsg(false)}
            />
        )
    );
}