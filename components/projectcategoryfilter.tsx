'use client'

import { useEffect, useState } from 'react';
import styles from '@/styles/projectfilter.module.css';
import { useRecoilState } from 'recoil';
import React, { ReactNode } from 'react';
import cn from 'clsx';
import {Filters} from '@/components/projectfilter'
import { getProjectCategories }  from '@/app/api/route';

const ProjectCategoryFilter = async () => {
    const  { categories }  = await getProjectCategories()

    
    const [ filtered, setFiltered ] = useState()

    return (
        <div onChange={setFiltered} value={filtered}>
            { categories.items.map((category) => <Filters key={category.id}
                    {
                        ({ active, checked }) => {
                            return <button>
                                <span className={ cn(
                                    styles.checkbox,
                                    checked && styles.checked
                                )}>{category.name}</span>
                            </button>
                        }
                    }
                />
            )}
        </div>
    )
}
export { ProjectCategoryFilter }