'use client'

import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/header.module.css'
import React, { useState } from 'react';
import { List } from '@phosphor-icons/react';

const Header = () => {
    const [isOpen, setOpen] = useState();

    return (
        <header className={styles.header}>
            <span><Image className={styles.header_logo} src='/LOGO.svg' alt='Logo' width={150} height={30} /></span>
            <nav className={`header_nav ${isOpen ? 'active' : ''}`}>
                <ul className={styles.header_list}>
                    <Link className={styles.header_link} href='/'>Главная</Link>
                    <Link className={styles.header_link} href='/about'>О нас</Link>
                    <Link className={styles.header_link} href='/services'>Услуги</Link>
                    <Link className={styles.header_link} href='/projects'>Проекты</Link>
                    <Link className={styles.header_link} href='/blog'>Блог</Link>
                    <Link className={styles.header_link} href='/contacts'>Контакты</Link>
                </ul>
            </nav>
            <button className={styles.header_button} isActive={isOpen} onClick={() => setOpen(!isOpen)}>
                <List size={32} />
            </button>
        </header>
    );
};

export { Header };