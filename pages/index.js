import Head from 'next/head'
import Image from 'next/image'
import React, {useState} from 'react';
import styles from '../styles/Home.module.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function Home() {
    const [phoneNumber, setPhoneNumber] = useState();
    const [sourceType, setSourceType] = useState('gutenberg');
    const [sourceText, setSourceText] = useState('');
    const [gutenbergUrl, setGutenbergUrl] = useState('');

    return (
        <div className={styles.container}>
            <Head>
                <title>Text books to myself</title>
                <meta name="description" content="Text books to myself, paragraph by paragraph, over time"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Text 💬️ 📖 Books
                </h1>
                <p><em>We will text you books, paragraph by paragraph, over time!</em></p>

                <div className={styles.description}>
                    <div className={styles.sectionTitle}>
                        <span className={styles.numberCircle}>1</span> Enter your phone number
                    </div>
                    <div style={{color: '#666', fontSize: 'smaller'}}><em>We'll send you a text to confirm, and you can
                        opt out
                        at any time.</em></div>

                    <div style={{padding: '10px'}}>
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={phoneNumber}
                            onChange={setPhoneNumber}/>
                    </div>
                </div>
                <div className={styles.description}>
                    <div className={styles.sectionTitle}>
                        <span className={styles.numberCircle}>2</span> What would you like us to text you?
                    </div>
                    <div style={{color: '#666', fontSize: 'smaller'}}><em>We'll text you a tiny chunk each day.</em>
                    </div>
                    <div>
                        <div><label><input type={'radio'} id={"opt_project_gutenberg"} value={"gutenberg"}
                                           defaultChecked={true}
                                           onChange={e => setSourceType(e.target.value)}
                                           name={"text_source"}/> A Project
                            Gutenberg URL (plain text): <input style={{width: '100%'}} value={gutenbergUrl}
                                                               placeholder={"eg https://www.gutenberg.org/files/1342/1342-0.txt"}
                                                               onChange={e => setGutenbergUrl(e.target.value)}/></label>
                        </div>
                        <div>
                            <label><input type={'radio'} id={"opt_custom_source"} value={"custom"}
                                          onChange={e => setSourceType(e.target.value)}
                                          name={"text_source"}/> Custom source
                                text: <textarea style={{width: '100%'}} value={sourceText}
                                                onChange={e => setSourceText(e.target.value)}
                                                placeholder={'Paste some text'}/></label>
                        </div>
                    </div>
                </div>
                <div className={styles.description}>
                    <div className={styles.sectionTitle}>
                        <span className={styles.numberCircle}>3</span> How much should we text you?
                    </div>
                    <div>
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
