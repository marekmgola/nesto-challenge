"use client"

import { Product } from "@/utils/schemas/product"
import styles from "./product-list-item.module.css"
import Button from "../buttton/Button"
import { useTranslations } from "next-intl"
import { Staatliches } from "next/font/google"
import { ApplicationStatus } from "../mortgage-application-form/MortgageApplicationForm"

interface ProductListItemProps {
    product: Product
    isFirst: boolean
    compact?: boolean
}

const ProductListItem = ({ product, isFirst, compact }: ProductListItemProps) => {
    const formatRate = (rate: number) => `${rate.toFixed(2)}%`
    const t = useTranslations()
    return (
        <>
            {!isFirst && <div className="separator" />}
            <div className={styles.productItem} data-testid="product-item">
                <p className={styles.productName} data-testid="product-name">({product.name})</p>
                <div className={styles.rate} data-testid="product-rate">{formatRate(product.rate)}</div>
                {!compact && (
                    <Button variant="secondary" href={`/application?productId=${product.id}&status=${'NEW' satisfies ApplicationStatus}`} data-testid="select-product">
                        {t('select')}
                    </Button>
                )}
            </div>
        </>
    )
}

export default ProductListItem
