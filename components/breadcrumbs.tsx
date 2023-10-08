"use client"

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '@/styles/breadcrumbs.module.css';


enum LinksEnum {
    projects = 'projects',
    about = 'about',
    services = 'services',
    blog = 'blog',
    contacts = 'contacts',
}

const LinksName = {
    [LinksEnum.projects]: 'Проекты',
    [LinksEnum.about]: 'О нас',
    [LinksEnum.services]: 'Сервисы',
    [LinksEnum.blog]: 'Блог',
    [LinksEnum.contacts]: 'Контакты',
}

const NextBreadcrumb = () => {
    const paths = usePathname()
    const pathNames = paths.split('/').filter(path => path)

    return (
        <>
            {!!pathNames.length && <div>
                <nav className={styles.container}>
                    <Link href={'/'} className={styles.list}>Главная</Link>

                    {pathNames.map((link, index) => {
                        let href = `/${pathNames.slice(0, index + 1).join('/')}`
                        let itemLink = '/' + LinksName[link.toLocaleLowerCase() as LinksEnum]

                        return (
                            <React.Fragment key={index}>
                                <span className={styles.item} >
                                    <Link href={href} className={styles.item}>{itemLink}</Link>
                                </span>
                            </React.Fragment>
                        )
                    })
                    }
                </nav>
            </div>}
        </>

    )
}

export { NextBreadcrumb };