'use client'

import styles from '@/styles/page.module.css'


export default function Contacts() {
    return (
        <main className={styles.main}>
            <ul>
                <li>+7 499 679 45 79</li>
                <li><a href="mailto:hello@cyberia.ru">
                    hello@cyberia.ru</a>
                </li>
                <li>Аносова 36, оф.1</li>
            </ul>
        </main>
    )
}