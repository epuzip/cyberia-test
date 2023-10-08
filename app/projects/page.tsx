'use client'

import Form from '@/components/form';
import { ProjectsList } from '@/components/projectslist';
import styles from '@/styles/projects.module.css';
import { ProjectCategoryFilter } from '@/components/projectcategoryfilter';
import { useEffect, useMemo, useState } from 'react';
import { Items, ProjectCategory, getProjectCategories, getProjects } from '../api/route';

export default function Page() {
    const [projects, setProjects] = useState<Items[]>([])
    const [categories, setCategories] = useState<ProjectCategory[]>([])
    const [activeFilter, setActiveFilter] = useState<ProjectCategory>()

    const projectsFiltered = useMemo(() => projects.filter((project) =>
        activeFilter ? project.categories.map(({ id }) => id).includes(activeFilter.id) : true
    ), [projects, activeFilter])

    const init = async () => {
        const { items: projects } = await getProjects()
        const { items: categories } = await getProjectCategories()

        setProjects(projects)
        setCategories(categories)
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <div>
            <h1 className={styles.header}>Проекты</h1>

            <ProjectCategoryFilter items={categories} setActiveFilter={setActiveFilter} />

            <ProjectsList items={projectsFiltered} />

            <Form />
        </div>
    );
}
