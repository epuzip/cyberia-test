'use client'

import { getProjectCategories }  from '@/app/api/route';
import  { ProjectCategoryFilter }  from '@/components/projectcategoryfilter';
import styles from '@/styles/projectitem.module.css';

const Filters = async () => {
    const  categories  = await getProjectCategories()
    
    return (
        <div>
            <ProjectCategoryFilter 
                categories={categories} />
        </div>
    )
}
export { Filters }