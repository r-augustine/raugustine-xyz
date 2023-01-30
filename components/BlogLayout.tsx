import React, { ReactNode } from "react";

interface BlogProps {
  children: ReactNode | Array<ReactNode>;
}

const BlogLayout = ({ children }: BlogProps) => {
  return <section className="container">{children}</section>;
};

export default BlogLayout;
