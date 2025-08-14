"use client"

import { useState } from "react"
import { useGetAllProducts } from "@/utils/api/apiHooks/useGetAllProducts"
import ProductList from "./ProductList"
import Button from "./Button"
import styles from "./product-selector.module.css"

const ProductSelector = () => {
    const { data: products } = useGetAllProducts()
    const [showAll, setShowAll] = useState(false)

    const variableProducts = products.filter((product) => product.type === "VARIABLE").sort((a, b) => a.rate - b.rate)
    const fixedProducts = products.filter((product) => product.type === "FIXED").sort((a, b) => a.rate - b.rate)

    return (
        <div className={styles.container}>
            <div className={styles.productsGrid}>
                <ProductList
                    products={variableProducts}
                    title="Best variable"
                    isExpanded={showAll}
                    productType="variable"
                />

                <ProductList
                    products={fixedProducts}
                    title="Best fixed"
                    isExpanded={showAll}
                    productType="fixed"
                />
            </div>

            {/* See all button */}
            <div className={styles.seeAllContainer}>
                <Button
                    variant="see-all"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? "Show less" : "See all products"}
                </Button>
            </div>
        </div>
    )
}

export default ProductSelector

