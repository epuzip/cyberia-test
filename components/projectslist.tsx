'use client'

import  { ProjectItem } from '@/components/projectItem';
import styles from '@/styles/projects.module.css';
import { getProjects } from '@/app/api/route';


const ProjectsList = async () =>  {

    const { items: items } = await getProjects()

    return (
            <div className={styles.container}>
                {items.map((item: any) => <ProjectItem
                    key={item.id} 
                    img={item.image}
                    title={item.title}
                    description={item.description}
                />)} 
            </div>
    );
}
export { ProjectsList }