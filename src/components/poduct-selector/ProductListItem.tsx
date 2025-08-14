"use client"

import Link from "next/link"
import { Product } from "@/utils/schemas/product"
import styles from "./product-selector.module.css"

interface ProductListItemProps {
    product: Product
    isFirst: boolean
}

const ProductListItem = ({ product, isFirst, }: ProductListItemProps) => {
    const formatRate = (rate: number) => `${rate.toFixed(2)}%`

    return (
        <>
            {!isFirst && <div className={styles.productSeparator} />}
            <div className={styles.productItem}>
                <p className={styles.productName}>({product.name})</p>
                <div className={styles.rate}>{formatRate(product.rate)}</div>
                <Link href={`/application?productId=${product.id}`} className={styles.selectButton}>
                    Select this product
                </Link>
            </div>
        </>
    )
}

export default ProductListItem
