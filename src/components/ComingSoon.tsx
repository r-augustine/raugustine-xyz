import styles from "./ComingSoon.module.css"

const ComingSoon = () => {
  return (
    <div className={styles.container}>
        <section className={styles.content}>
        <h1 className={styles.title}>Hi! I'm <span className={styles.emphasis}>Ricardo</span>, a FullStack Developer</h1>
        <h4 className={styles.subTitle}>My new portfolio website is coming soon</h4>
        <div className={styles.actions}>
            <a href="/augustine.ricardo.pdf" download className={styles.actionItem}>Download my Resume</a>
            <a href="https://github.com/r-augustine" target="_blank" className={styles.actionItem}>GitHub</a>
            <a href="https://www.linkedin.com/in/r-augustine/" target="_blank" className={styles.actionItem}>LinkedIn</a>
        </div>
        </section>
    </div>
  )
}

export default ComingSoon