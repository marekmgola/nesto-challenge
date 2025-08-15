"use client"

import { useState } from "react"
import { useGetAllProducts } from "@/utils/api/apiHooks/useGetAllProducts"
import ProductList from "../product-list/ProductList"
import Button from "../buttton/Button"
import styles from "./product-selector.module.css"
import { useTranslations } from "next-intl"

const ProductSelector = () => {
    const { data: products } = useGetAllProducts()
    const [showAll, setShowAll] = useState(false)

    const variableProducts = products.filter((product) => product.type === "VARIABLE").sort((a, b) => a.rate - b.rate)
    const fixedProducts = products.filter((product) => product.type === "FIXED").sort((a, b) => a.rate - b.rate)
    const t = useTranslations('home')
    return (
        <div className={styles.container}>
            <div className={styles.productsGrid}>
                <ProductList
                    products={variableProducts}
                    title={t('bestVariable')}
                    isExpanded={showAll}
                    productType="variable"
                />

                <ProductList
                    products={fixedProducts}
                    title={t('bestFixed')}
                    isExpanded={showAll}
                    productType="fixed"
                />
            </div>

            {/* See all button */}
            <div className={styles.seeAllContainer}>
                <Button
                    variant="primary"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? t("showLess") : t("seeAllProducts")}
                </Button>
            </div>
        </div>
    )
}

export default ProductSelector

