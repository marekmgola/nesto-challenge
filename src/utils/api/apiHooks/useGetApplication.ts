import { useSuspenseQuery } from "@tanstack/react-query"
import { getApplication } from "../apiClient"
import { ApplicationSchema } from "@/utils/schemas/application"

export const useGetApplication = (applicationId: string) => {
    return useSuspenseQuery({
        queryKey: ["application", applicationId],
        queryFn: async () => {
            console.log("fetching application", applicationId)
            const response = await getApplication(applicationId)
            const data = await response.json()
            console.log(data)
            return ApplicationSchema.parse(data)
        }
    })
}
