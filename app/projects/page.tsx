'use client'

import  Form  from '@/components/form';
import { ProjectsList } from '@/components/projectslist';
import styles from '@/styles/projects.module.css';
import { Filters } from '@/components/projectfilter';


export default function Page() {

    return (
        <div>
            <h1 className={styles.header}>Проекты</h1>
            <Filters />
            <ProjectsList />
            <Form />
        </div>
    );
}
