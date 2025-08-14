import { NextRequest } from "next/server";
import { Applicant, Application } from "../schemas/application";

const myHeaders = new Headers();
myHeaders.append("Accept", "*/*");
myHeaders.append("X-Nesto-Candidat", "Marek Gola");
myHeaders.append("Cookie", "nestoToken=64e4c740-6681-47eb-bbb1-cc207c389db2");

const defaultOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",

};

export const getProducts = async (options: RequestInit = {}) =>
    fetch("https://nesto-fe-exam.vercel.app/api/products", { ...defaultOptions, ...options })


export const createApplication = async (productId: number, options: RequestInit = {}) =>
    fetch("https://nesto-fe-exam.vercel.app/api/applications", {
        method: "POST", ...defaultOptions, ...options, body: JSON.stringify({ productId }), next: {
            revalidate: 60 * 60, // 1 hour
            tags: ["products"]
        }
    })

export const getApplication = async (applicationId: string, options: RequestInit = {}) =>
    fetch(`https://nesto-fe-exam.vercel.app/api/applications/${applicationId}`, {
        method: "GET", ...defaultOptions, ...options, next: {
            revalidate: 60 * 60, // 1 hour
            tags: ["products"]
        }
    })

type UpdateApplication = Partial<Application> & Pick<Application, "id"> & { applicants?: Partial<Applicant>[] }

export const updateApplication = async (application: UpdateApplication, options: RequestInit = {}) =>
    fetch(`https://nesto-fe-exam.vercel.app/api/applications/${application.id}`, { method: "PUT", ...defaultOptions, ...options, body: JSON.stringify(application) })


