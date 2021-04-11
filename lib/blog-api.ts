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
  preview: string
}

function getPostPreview(markdown: string): string {
  const words = markdown.split(/\s+/).filter((c) => c.trim().length > 0)
  return  words.slice(0, 25).join(" ")
}

async function loadPost(filePath: string): Promise<BlogPost> {
  const string = await fs.readFile(filePath, "utf-8")
  const {data, content: markdown} = matter(string)
  const content = await remark().use(html).process(markdown)
  const preview = getPostPreview(markdown)
  const slug = path.basename(filePath).replace(".md", "")

  return {
    createdOn: data.createdOn,
    id: data.id,
    title: data.title,
    content: content.toString(),
    slug,
    preview,
  }
}

async function loadPosts(): Promise<BlogPost[]> {
  const files = await fs.readdir(postDirectory)
  const posts = await Promise.all(
    files.map((fileName) => loadPost(path.join(postDirectory, fileName)))
  )
  posts.sort((p1, p2) => p2.createdOn.localeCompare(p1.createdOn))
  return posts
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
