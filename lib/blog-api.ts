import path from "path"
import fs from "fs/promises"
import matter from "gray-matter"
import remark from "remark"
import html from "remark-html"

const postDirectory = path.join(process.cwd(), "posts")

export interface BlogPost {
  createdOn: string
  slug: string
  content: string
  id: number
  title: string
}

async function loadPost(path: string): Promise<BlogPost> {
  const string = await fs.readFile(path, "utf-8")
  const {data, content: markdown} = matter(string)
  const content = await remark().use(html).process(markdown)
  return {
    createdOn: data.createdOn,
    id: data.id,
    title: data.title,
    slug: path.replace(".md", ""),
    content: content.toString(),
  }
}

async function loadPosts(): Promise<BlogPost[]> {
  const files = await fs.readdir(postDirectory)

  return Promise.all(
    files.map((fileName) => loadPost(path.join(postDirectory, fileName)))
  )
}

class BlogApi {
  posts: BlogPost[]

  constructor(posts: BlogPost[]) {
    this.posts = posts
  }

  getAllSlugs(): string[] {
    return this.posts.map((p) => p.slug)
  }

  getBySlug(slug: string): BlogPost | undefined {
    return this.posts.find((p) => p.slug === slug)
  }

  getAllPosts(): BlogPost[] {
    return this.posts
  }
}

export default async function createBlogApi(): Promise<BlogApi> {
  const posts = await loadPosts()
  return new BlogApi(posts)
}
