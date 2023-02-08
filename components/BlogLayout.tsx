import Link from "next/link";
import React, { ReactNode } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Container from "./Container";

interface BlogProps {
  children: ReactNode | Array<ReactNode>;
}
let style = {
  back: {
    display: "inline-flex",
    alignItems: "center",
    padding: "1rem 2rem 1rem 0",
  },
  arrow: {
    marginRight: "0.5rem",
  },
};

const BlogLayout = ({ children }: BlogProps) => {
  return (
    <section className="blog-layout">
      <Container>
        <div>
          <Link href="/" style={style.back}>
            <FaArrowLeft style={style.arrow} />
            <span>Back to Home</span>
          </Link>
        </div>
        {children}
      </Container>
    </section>
  );
};

export default BlogLayout;
