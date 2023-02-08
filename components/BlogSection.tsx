import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/BlogSection.module.css";
import { Post } from "../lib/posts";
import Container from "./Container";
interface Props {
  posts: Array<Post>;
}

const BlogSection = ({ posts }: Props) => {
  return (
    <section id="blog" className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2>My Blog</h2>
        </div>
        <div className={styles.posts}>
          {posts.map((post) => (
            <BlogItem post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
};

interface BlogItemProps {
  post: Post;
}

const BlogItem = ({ post }: BlogItemProps) => {
  return (
    <Link href={`/blog/${post.id}`} key={post.id} className={styles.post}>
      <span>{post.title}</span>
      <span className={styles.subTitle}>{post.date}</span>
    </Link>
  );
};

export default BlogSection;
