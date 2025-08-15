import { useSuspenseQuery } from "@tanstack/react-query"
import { getApplication } from "../apiClient"
import { ApplicationSchema } from "@/utils/schemas/application"

export const useGetApplication = (applicationId: string) => {
    return useSuspenseQuery({
        queryKey: ["application", applicationId],
        queryFn: async () => {
            const response = await getApplication(applicationId)
            const data = await response.json()

            return ApplicationSchema.parse(data)
        }
    })
}
