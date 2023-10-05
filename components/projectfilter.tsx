'use client'

import { getProjectCategories }  from '@/app/api/route';
import  { ProjectCategoryFilter }  from '@/components/projectcategoryfilter';
import styles from '@/styles/projectitem.module.css';

const Filters =  ( props ) => {
    //const  categories  = await getProjectCategories()
    const { id, name } = props
    
    return (
        <div key={id}>
            <button>{name}</button>
        </div>
    )
}
export { Filters }