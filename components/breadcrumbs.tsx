"use client"

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '@/styles/breadcrumbs.module.css';
import cn from 'clsx';

type BreadCrumbProps = {
    homeElement: ReactNode,
    separator: ReactNode,
    containerClasses?: string,
    listClasses?: string,
    activeClasses?: string,
    capitalizeLinks?: boolean
}

const NextBreadcrumb = ({homeElement, separator, containerClasses, listClasses, activeClasses, capitalizeLinks}: BreadCrumbProps) => {

    const paths = usePathname()
    const pathNames = paths.split('/').filter( path => path )

    return (
        <div>
            <nav className={styles.containerClasses}>
                <ol className={styles.listClasses}><Link href={'/'}>{homeElement}</Link></ol>
                {pathNames.length > 0 && separator}
                {pathNames.map( (link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`
                    let item = paths === href ? `${listClasses} ${activeClasses}` : styles.list
                    let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
                    return (
                        <React.Fragment key={index}>
                            <ol className={styles.item} >
                                <Link href={href}>{itemLink}</Link>
                            </ol>
                            {pathNames.length !== index + 1 && separator}
                        </React.Fragment>
                    )
                })
            }
            </nav>
        </div>
    )
}

export { NextBreadcrumb };