'use client'

import { ProjectItem } from '@/components/projectItem';
import styles from '@/styles/projects.module.css';
import { Items, getProjects } from '@/app/api/route';
import { useEffect, useState } from 'react';

type Props = {
    items: Items[]
}

const ProjectsList = ({ items }: Props) => {
    return (
        <div className={styles.container}>
            {items.map((item) => <ProjectItem
                key={item.id}
                img={item.image}
                title={item.title}
                description={item.description}
            />)}
        </div>
    );
}
export { ProjectsList }