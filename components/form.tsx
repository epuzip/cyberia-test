'use client'

import { ChangeEvent, useState } from 'react';
import styles from '../styles/form.module.css';
import Image from 'next/image';
import { submitFeedback } from '@/app/api/route';
import { Paperclip } from '@phosphor-icons/react';

export default function Form() {
    const [file, setFile] = useState<File>();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            tel: e.target.tel.value,
            email: e.target.email.value,
            message: e.target.msg.value,
            attachment: file,
        }
        console.log(data)

        submitFeedback(data)
    }

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

            <form method='post' className={styles.container_item} onSubmit={onSubmit}>
                <label htmlFor="email"></label>
                <input className={styles.input}
                    name='email'
                    type="email"
                    placeholder="Email"
                />
                <label htmlFor="tel"></label>
                <input className={styles.input}
                    type="tel"
                    name='tel'
                    placeholder="Телефон"
                />
                <div className={styles.container_textarea}>
                    <label htmlFor="message">
                        <Paperclip size={32} />
                        <input className={styles.attachment}
                            type="file"
                            name='file'
                            onChange={handleFileChange}
                        />
                    </label>
                    <textarea className={styles.textarea}
                        rows={4}
                        name='msg'
                        placeholder="Сообщение"
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