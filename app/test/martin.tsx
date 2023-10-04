// про форму обратной связи 


const Input = (props) => {
    const { icon, ...rest } = props
    
    return <div className={'bg-white'}>
        {props.icon}
        <input {...rest} />
    </div>
}

// Работа с API

const HOST = 'http://localhost:1337'

interface Project {
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
    phone: string
    email: string
    message: string
    attachment?: File
}

interface FeedbackResponse {
    message: string
}

export const getProjects = async (): Promise<Project[]> => {
    return fetch(`${HOST}/projects`).then((r) => r.json())
}

export const getProjectCategories = async (): Promise<ProjectCategory[]> => {
    return fetch(`${HOST}/project-categories`).then((r) => r.json())
}

export const submitFeedback = async (payload: FeebackPayload): Promise<FeedbackResponse> => {
    const formData = new FormData()

    formData.append('phone', payload.phone)
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


//
import cn from 'clsx'


//
const Filters = async () => {
    const categories = await getProjectCategories()
    return <div>
        <ProjectCategoryFilter categories={categories} />
    </div>
}

const ProjectCategoryFilter = (props) => {
    const { categories } = props

    const [ filter, setFilter ] = useFilter()

    return <RadioGroup onChange={setFilter} value={filter}>
        {categories.map(({ name, id }) => {
            return <RadioGroup.Options key={category.id}>
                {
                    ({ active, checked }) => {
                        return <div>
                            <span className={ cn(
                                styles.checkbox,
                                checked && styles.checked
                            ) } >{name}</span>
                        </div>
                    }
                }
            </RadioGroup.Options>
        })}
    </RadioGroup>
}

// Компонент Проекты

const Page = async () => {

    const projects = await getProjects()

    return (
        <div className={'mt-10'}>
            <Grid projects={projects} />
        </div>
    )
}