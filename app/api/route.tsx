const HOST = 'https://backend.cyberia.studio/api/v1'

interface Items {
    id: number
    title: string
    slug: string
    project_url?: string
    image: string
    image_dark: string
    description: string
    geo: {
        lat?: number
        lng?: number
    }
    categories: ProjectCategory[]
}

interface ProjectCategory {
    id: number
    name: string
}

interface FeebackPayload {
    tel: string
    email: string
    message: string
    attachment?: File
}

interface FeedbackResponse {
    message: string
}


export const getProjects = async (): Promise<Items[]> => {
    return fetch(`${HOST}/projects`).then((r) => r.json())

}

export const getProjectCategories = async (): Promise<ProjectCategory[]> => {
    return fetch(`${HOST}/project-categories`).then((r) => r.json())
}

export const submitFeedback = async (payload: FeebackPayload): Promise<FeedbackResponse> => {
    let formData = new FormData()

    formData.append('tel', payload.tel)
    formData.append('email', payload.email)
    formData.append('message', payload.message)

    if (payload.attachment) {
        formData.append('attachment', payload.attachment)
    }

    return fetch(`${HOST}/feedbacks`, {
        method: 'POST',
        body: formData
    }).then((r) => r.json())
}

