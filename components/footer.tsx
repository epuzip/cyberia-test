import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.container_item}>
                <Image className={styles.logo} src='/logo_footer.svg' alt='Logo' width={200} height={40} />
                <p className={styles.link}>Web and machine learning developing company</p>
            </div>
            <div className={styles.container_item}>
                <p className={styles.link}>+7 499 679 45 79</p>
                <p className={styles.link}>hello@cyberia.ru</p>
                <p className={styles.link}>Аносова 36, оф.1</p>
            </div>
            <div className={styles.container_item}>
                <Link className={styles.link} href='/'>Главная</Link>
                <Link className={styles.link} href='/about'>О нас</Link>
                <Link className={styles.link} href='/services'>Услуги</Link>
            </div>
            <div className={styles.container_item}>
                <Link className={styles.link} href='/projects'>Проекты</Link>
                <Link className={styles.link} href='/blog'>Блог</Link>
                <Link className={styles.link} href='/contacts'>Контакты</Link>
            </div>
            <div className={styles.container_item}>
                <p className={styles.text}>2022, digital-агенство Cyberia</p>
                <p className={styles.text}>Положение о защите персональных данных</p>
                <p className={styles.text}>Политика в отношении обработки </p>
                <p className={styles.text}>и защиты персональных данных</p>
                <p className={styles.text}>Оферта оказания услуг</p>
            </div>
        </footer>
    );
};

export { Footer };