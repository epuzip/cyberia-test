'use client'

import { useState, FormData } from 'react';
import styles from '../styles/form.module.css';
import Image from 'next/image';
import { submitFeedback } from '@/app/api/route';
import { Paperclip } from '@phosphor-icons/react';

export default function Form() {
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [message, setMessage] = useState('');
    const [attachment, setAttachment] = useState('');

    return (
        <div className={styles.container}>
            <div className={styles.container_item}>
                <Image src='/Mailbox.svg' alt='Mailbox' width={150} height={140} />
                <h2 className={styles.header}> Расскажите о вашем проекте</h2>
                <p className={styles.text}> Поделитесь с нами информацией, чем мы можем быть полезны:
                реализовать идею или выделить разработчиков для ИТ-команды.
                Чем больше вы нам расскажете - тем продуктивнее будет 
                дальнейшее обсуждение.</p>
            </div>
            <form method='post' className={styles.container_item} onSubmit={submitFeedback}>
                    <label htmlFor="email"></label>
                    <input className={styles.input}
                        value={email}
                        type="email"
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="tel"></label>
                    <input className={styles.input}
                        value={tel}
                        type="tel"
                        placeholder="Телефон"
                        onChange={e => setTel(e.target.value)}
                    />
                    <div className={styles.container_textarea}>
                        <label htmlFor="message">
                            <Paperclip size={32} />
                            <input className={styles.attachment}
                                type="file"
                                value={attachment}
                                onChange={e => setAttachment(e.target.value)}
                            />
                        </label>
                        <textarea className={styles.textarea}
                            value={message}
                            rows={4}
                            placeholder="Сообщение"
                            onChange={e => setMessage(e.target.value)}
                        />
                    </div>
                    <div className={styles.box}>
                        <button className={styles.box_btn} type="submit">Отправить</button>
                        <p className={styles.box_text}>Нажимая "Отправить", Вы даете согласие на обработку персональных данных</p>
                    </div>
                </form>
        </div>
    );
}