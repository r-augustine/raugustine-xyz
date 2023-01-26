import React, { ReactNode } from "react";
import { getAllPostsIds, getPostData, Post } from "../../lib/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  dracula,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import BlogLayout from "../../components/BlogLayout";

interface CodeBlockProps {
  language: string;
  value: ReactNode;
}

// const CodeBlock = ({ language, value }: CodeBlockProps) => {
//   return (
//     <div className="code-block">
//       <SyntaxHighlighter language={language} style={vscDarkPlus}>
//         {value}
//       </SyntaxHighlighter>
//     </div>
//   );
// };

interface PostProps {
  post: Post;
}

const Post = ({ post }: PostProps) => {
  return (
    <BlogLayout>
      <h1>{post.title}</h1>
      <ReactMarkdown
        children={post.content}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                //@ts-ignore
                style={dracula}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </BlogLayout>
  );
};

export default Post;

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  // Fetch necessary data for the blog post using params.id
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}
