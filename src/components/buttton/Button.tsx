"use client"

import Link from "next/link"
import styles from "./button.module.css"

interface ButtonProps {
    variant?: "secondary" | "primary"
    children: React.ReactNode
    href?: string
    onClick?: () => void
    loading?: boolean
    className?: string
    disabled?: boolean
    type?: "button" | "submit"
   'data-testid'?: string
}

const Button = ({ variant = 'primary', children, href, onClick, type, className, disabled, "data-testid" : dataId}: ButtonProps) => {
    const buttonClassName = variant === "secondary" ? styles.secondaryButton : styles.primaryButton
    const disabledClassName = disabled ? styles.disabled : ""
    if (href) {
        return (
            <Link data-testid={dataId} href={disabled ? "#" : href || "#"} className={`${buttonClassName} ${className || ''} ${disabledClassName}`} >
                {children}
            </Link>
        )
    }

    return (
        <button data-testid={dataId} className={`${buttonClassName} ${className || ''}`} onClick={disabled ? undefined : onClick} type={disabled ? undefined : type} disabled={disabled} >
            {children}
        </button>
    )
}

export default Button
