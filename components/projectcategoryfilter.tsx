'use client'

import { useEffect, useState } from 'react';
import styles from '@/styles/projectfilter.module.css';
import { useRecoilState } from 'recoil';
import React, { ReactNode } from 'react';
import cn from 'clsx';


const ProjectCategoryFilter = (props:any) => {
    const { categories } = props
    const [ filtered, setFiltered ] = useState()

    return <button onChange={setFiltered} value={filtered}>
        {categories.map(({ name, id }) => {
            return <div key={category.id}>
                {
                    ({ active, checked }) => {
                        return <div>
                            <span className={ cn(
                                styles.checkbox,
                                checked && styles.checked
                            )}>{name}</span>
                        </div>
                    }
                }
            </div>
        })}
    </button>
}
export { ProjectCategoryFilter }