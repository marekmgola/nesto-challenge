"use client"

import { Product } from "@/utils/schemas/product"
import ProductListItem from "../product-list-item/ProductListItem"
import styles from "./product-list.module.css"
import { motion, AnimatePresence } from "framer-motion"
import Spacer from "../spacer/Spacer"

interface ProductListProps {
    products: Product[]
    title: string
    isExpanded: boolean
    productType: "variable" | "fixed"
}

const ProductList = ({ products, title, isExpanded, productType }: ProductListProps) => {
    const firstProduct = products[0]
    const additionalProducts = products.slice(1)

    return (
        <div className={styles.productCard}

        >
            <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{title}</h3>
            </div>

            {/* Always show the first product */}
            <ProductListItem
                key={`${productType}-${firstProduct.id}`}
                product={firstProduct}
                isFirst={true}
            />

            {/* Animate additional products */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            opacity: { duration: 0.2 }
                        }}
                        style={{ overflow: "hidden" }}
                    >
                        {additionalProducts.map((product, index) => (
                            <ProductListItem
                                key={`${productType}-${product.id}`}
                                product={product}
                                isFirst={false}
                            />
                        ))}
                        <Spacer height={12} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ProductList
