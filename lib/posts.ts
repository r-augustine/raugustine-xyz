import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  id: string,
  title: string,
  date: string,
  content: string
}

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName): Post => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read marddown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      content: "",
      title: matterResult.data?.title,
      date: matterResult.data?.date,
    };
  });

  console.log({allPostsData})

  // Sort posts by date
  return allPostsData.sort((a: Post, b: Post) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    }

    return -1;
  });
}

export function getAllPostsIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id: string) : Promise<Post> {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    content: matterResult.content, 
    title: matterResult.data?.title,
    date: matterResult.data?.date
  }
}
