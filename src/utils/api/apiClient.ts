import { Applicant, Application } from "../schemas/application";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("X-Nesto-Candidat", "Marek Gola");

const defaultOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",

};

export const getProducts = async (options: RequestInit = {}) =>
    fetch("https://nesto-fe-exam.vercel.app/api/products", { ...defaultOptions, ...options })


export const createApplication = async (productId: number, options: RequestInit = {}) =>
    fetch("https://nesto-fe-exam.vercel.app/api/applications", {
        ...defaultOptions,
        method: "POST",
        body: JSON.stringify({ productId }),
        ...options,
        next: {
            revalidate: 60 * 60, // 1 hour
            tags: ["products"]
        }
    })

export const getApplication = async (applicationId: string, options: RequestInit = {}) =>
    fetch(`https://nesto-fe-exam.vercel.app/api/applications/${applicationId}`, {
        ...defaultOptions,
        method: "GET",
        ...options,
        next: {
            revalidate: 60 * 60, // 1 hour
            tags: ["products"]
        }
    })

type UpdateApplication = Partial<Application> & Pick<Application, "id"> & { applicants?: Partial<Applicant>[] }

export const updateApplication = async (application: UpdateApplication, options: RequestInit = {}) =>
    fetch(`https://nesto-fe-exam.vercel.app/api/applications/${application.id}`, {
        ...defaultOptions,
        method: "PUT",
        body: JSON.stringify(application),
        ...options
    })


