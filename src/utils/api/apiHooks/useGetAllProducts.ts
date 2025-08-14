import { useSuspenseQuery } from "@tanstack/react-query"
import { getProducts } from "../apiClient"
import { GetAllProductsSchema } from "@/utils/schemas/product"


export const useGetAllProducts = () => {
    return useSuspenseQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await getProducts()
            const data = await response.json()
            return GetAllProductsSchema.parse(data)
        }
    })
}