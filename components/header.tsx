import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/header.module.css'


const Header = () => {
    return (
        <header>
            <div className={styles.navigator}>
                <Image className={styles.logo} src='/LOGO.svg' alt='Logo' width={150} height={30} />
                <Link className={styles.link} href='/'>Главная</Link>
                <Link className={styles.link} href='/about'>О нас</Link>
                <Link className={styles.link} href='/services'>Услуги</Link>
                <Link className={styles.link} href='/projects'>Проекты</Link>
                <Link className={styles.link} href='/blog'>Блог</Link>
                <Link className={styles.link} href='/contacts'>Контакты</Link>
            </div>
        </header>
    );
};

export { Header };