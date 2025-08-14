"use client"

import Link from "next/link"
import styles from "./button.module.css"

interface ButtonProps {
    variant: "select" | "see-all"
    children: React.ReactNode
    href?: string
    onClick?: () => void
    className?: string
}

const Button = ({ variant, children, href, onClick, className }: ButtonProps) => {
    const buttonClassName = variant === "select" ? styles.selectButton : styles.seeAllButton
    const combinedClassName = className ? `${buttonClassName} ${className}` : buttonClassName

    if (variant === "select" && href) {
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        )
    }

    return (
        <button className={combinedClassName} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
