import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { Source_Code_Pro } from '@next/font/google'
import styles from '../styles/Home.module.css'

const source_code_pro = Source_Code_Pro({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ricardo Augustine</title>
        <meta name="description" content="Ricardo Augustine, FullStack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={source_code_pro.className}>
        <section className={styles.container}>
          <div className={styles.content}>
              <h1 className={styles.title}>Hi I'm <span>Ricardo</span>, a FullStack Developer</h1>
              <h4 className={styles.subTitle}>My new portfolio website is coming soon</h4>

              <div className={styles.buttons}>
                <a href="" className={styles.button}>Download my resume</a>
                <a href="https://github.com/r-augustine" target="_blank" className={styles.button}>github</a>
                <a href="https://www.linkedin.com/in/r-augustine/" target="_blank" className={styles.button}>linkedin</a>
              </div>
          </div>
        </section>
      </main>
    </>
  )
}
