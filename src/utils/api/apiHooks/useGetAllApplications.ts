import { useSuspenseQuery } from "@tanstack/react-query"
import { getAllApplications } from "../apiClient"
import { ApplicationSchema } from "@/utils/schemas/application"
import z from "zod"


export const useGetAllApplications = () => {
    return useSuspenseQuery({
        queryKey: ["applications"],
        queryFn: async () => {
            const response = await getAllApplications()
            const data = await response.json()
            return z.array(ApplicationSchema).parse(data)
        }
    })
}
