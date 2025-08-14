"use client"

import { Product } from "@/utils/schemas/product"
import ProductListItem from "./ProductListItem"
import styles from "./product-selector.module.css"

interface ProductListProps {
    products: Product[]
    title: string
    isExpanded: boolean
    productType: "variable" | "fixed"
}

const ProductList = ({ products, title, isExpanded, productType }: ProductListProps) => {
    const displayProducts = isExpanded ? products : [products[0]].filter(Boolean)

    return (
        <div className={styles.productCard}>
            <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{title}</h3>
            </div>

            {displayProducts.map((product, index) => (
                <ProductListItem
                    key={`${productType}-${product.id}`}
                    product={product}
                    isFirst={index === 0}
                    productType={productType}
                />
            ))}
        </div>
    )
}

export default ProductList
