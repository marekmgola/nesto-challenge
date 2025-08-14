"use client"

import { Product } from "@/utils/schemas/product"
import styles from "./product-list-item.module.css"
import Button from "../buttton/Button"

interface ProductListItemProps {
    product: Product
    isFirst: boolean
}

const ProductListItem = ({ product, isFirst, }: ProductListItemProps) => {
    const formatRate = (rate: number) => `${rate.toFixed(2)}%`

    return (
        <>
            {!isFirst && <div className="separator" />}
            <div className={styles.productItem}>
                <p className={styles.productName}>({product.name})</p>
                <div className={styles.rate}>{formatRate(product.rate)}</div>
                <Button variant="secondary" href={`/application?productId=${product.id}`}>
                    Select
                </Button>
            </div>
        </>
    )
}

export default ProductListItem
