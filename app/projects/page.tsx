'use client'

import  Form  from '@/components/form';
import { ProjectsList } from '@/components/projectslist';
import styles from '@/styles/projects.module.css';
import { ProjectCategoryFilter } from '@/components/projectcategoryfilter';


export default function Page() {

    return (
        <div>
            <h1 className={styles.header}>Проекты</h1>
            
            <ProjectsList />
            <Form />
        </div>
    );
}
