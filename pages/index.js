import Head from 'next/head'
import Image from 'next/image'
import React, {useState} from 'react';
import styles from '../styles/Home.module.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function Home() {
    const [phoneNumber, setPhoneNumber] = useState();

    return (
        <div className={styles.container}>
            <Head>
                <title>Text books to myself</title>
                <meta name="description" content="Text books to myself, paragraph by paragraph, over time"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Text ☎️ Books 📖
                </h1>
                <p><em>We will text you books, paragraph by paragraph, over time!</em></p>

                <div className={styles.description}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <span className={styles.numberCircle}>1</span> Enter your phone number (we'll verify this
                        later):
                    </div>
                    <div>
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={phoneNumber}
                            onChange={setPhoneNumber}/>
                    </div>
                </div>

            </main>

            <footer className={styles.footer}>
                <div style={{flexGrow: 1}}/>
                By
                <a
                    href="https://www.linkedin.com/in/sarah-jochum-916476b8/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Sara Jochum
                </a>
                &
                <a
                    href="https://www.linkedin.com/in/jacobbrazeal"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Jacob Brazeal
                </a>
                <div style={{flexGrow: 1}}/>

            </footer>
        </div>
    )
}
