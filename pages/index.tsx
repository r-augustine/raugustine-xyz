import Head from "next/head";
import Link from "next/link";
import Container from "../components/Container";
import Section from "../components/Section";
import { getSortedPostsData, Post } from "../lib/posts";
import styles from "../styles/Home.module.css";

interface HomeProps {
  posts: [Post];
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Ricardo Augustine</title>
        <meta
          name="description"
          content="Ricardo Augustine, FullStack Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Section>
          <Container>
            <h1 className={styles.title}>
              Hi I&rsquo;m <span>Ricardo</span>, a FullStack Developer
            </h1>
            <h4 className={styles.subTitle}>
              My new portfolio website is coming soon
            </h4>

            <div className={styles.buttons}>
              <a
                href="/augustine.ricardo.pdf"
                download
                className={styles.button}
              >
                Download my resume
              </a>
              <a
                href="https://github.com/r-augustine"
                rel="noreferrer"
                target="_blank"
                className={styles.button}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/r-augustine/"
                rel="noreferrer"
                target="_blank"
                className={styles.button}
              >
                LinkedIn
              </a>
              <a href="#blog" className={styles.button}>
                Blog
              </a>
            </div>
          </Container>
        </Section>
        <Section id="blog">
          <Container>
            <div className={styles.blogHeader}>
              <h2>My Blog</h2>
            </div>
            <div className={styles.blogPostContainer}>
              {posts.map((post) => (
                <Link
                  href={`/blog/${post.id}`}
                  key={post.id}
                  className={styles.blogPost}
                >
                  <span>{post.title}</span>
                  <span>{post.date}</span>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
