'use client'

import styles from '@/styles/projectfilter.module.css';
import { ProjectCategory } from '@/app/api/route';

type Props = {
    items: ProjectCategory[]
    setActiveFilter: (items: ProjectCategory) => void
}

const ProjectCategoryFilter = ({ items, setActiveFilter }: Props) => (
    <div className={styles.filter}>
        {items.map((item) =>
            <button key={item.id} className={styles.filter_btn} onClick={() => setActiveFilter(item)}>
                {item.name}
            </button>
        )}
    </div>
)

export { ProjectCategoryFilter }