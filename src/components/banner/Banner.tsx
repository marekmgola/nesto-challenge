"use client";

import { useEffect, useState } from "react";
import styles from "./banner.module.css";

interface BannerProps {
    message: string;
    type: "success" | "error" | "info";
    onDismiss?: () => void;
    autoHide?: boolean;
    duration?: number;
}

export default function Banner({
    message,
    type,
    onDismiss,
    autoHide = true,
    duration = 5000
}: BannerProps) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (autoHide) {
            const timer = setTimeout(() => {
                setIsVisible(false);
                onDismiss?.();
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [autoHide, duration, onDismiss]);

    if (!isVisible) return null;

    return (
        <div className={`${styles.banner} ${styles[type]}`}>
            <span className={styles.message}>{message}</span>
            {onDismiss && (
                <button
                    className={styles.closeButton}
                    onClick={() => {
                        setIsVisible(false);
                        onDismiss();
                    }}
                    aria-label="Dismiss banner"
                >
                    ×
                </button>
            )}
        </div>
    );
}
