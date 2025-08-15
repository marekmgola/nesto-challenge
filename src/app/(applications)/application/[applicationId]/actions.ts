"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { updateApplication } from "@/utils/api/apiClient";
import { ContactFormSchema } from "@/utils/schemas/contactForm";
import { ApplicationStatus } from "@/components/mortgage-application-form/MortgageApplicationForm";

export async function updateContactDetails(formData: FormData) {
    try {
        // Parse form data
        const applicationId = formData.get("applicationId") as string;
        const status = formData.get("status") as string;

        // Get all applicants from form data
        const applicants = [];
        let index = 0;

        while (formData.get(`applicants.${index}.firstName`)) {
            applicants.push({
                firstName: formData.get(`applicants.${index}.firstName`) as string,
                lastName: formData.get(`applicants.${index}.lastName`) as string,
                email: formData.get(`applicants.${index}.email`) as string,
                phone: formData.get(`applicants.${index}.phone`) as string,
            });
            index++;
        }

        // Validate data
        const validatedData = ContactFormSchema.parse({
            applicationId,
            applicants,
        });

        // Update application
        const response = await updateApplication({
            id: validatedData.applicationId,
            applicants: validatedData.applicants,
        });

        if (!response.ok) {
            throw new Error("Failed to update application");
        }

        // Revalidate and redirect with success message
        revalidatePath(`/application?applicationId=${applicationId}`);
        revalidatePath(`/my-applications`);
        revalidatePath(`/application/${applicationId}`);
        if (status === 'NEW') {
            redirect(`/?status=${"NEW" satisfies ApplicationStatus}`);
        } else {
            redirect(`/my-applications?success=saved`);
        }
    } catch (error) {
        console.error("Error updating contact details:", error);
        throw error;
    }
}
