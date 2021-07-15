import Head from "next/head"
import tw from "twin.macro"
import Layout from "../../components/Layout"
import Link from "next/link"
import createBlogApi, {BlogPost} from "../../lib/blog-api"
import {GetStaticProps} from "next"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCaretLeft} from "@fortawesome/free-solid-svg-icons"
import {formatRelative, parseISO} from "date-fns"

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogApi = await createBlogApi()
  const posts = blogApi.getAllPosts()
  return {
    props: {
      posts,
    },
  }
}

const RelativeDate: React.FC<{date: string}> = ({date}) => {
  const parsed = parseISO(date)
  const now = Date.now()
  return <time dateTime={date}>{formatRelative(parsed, now)}</time>
}

const BlogPreview: React.FC<{post: BlogPost}> = ({post}) => (
  <article key={post.id} css={tw`mb-4`}>
    <h2 css={tw`font-bold text-xl hocus:text-gray-300`}>
      <Link passHref href={`/blog/${post.slug}`}>
        <a tw="underline">{post.title}</a>
      </Link>
    </h2>
    <span css={tw`text-gray-400`}>
      <RelativeDate date={post.createdOn} />
    </span>
    <div>{post.preview}&#8230;</div>
  </article>
)

interface Props {
  posts: BlogPost[]
}

const Blog: React.FC<Props> = ({posts}) => {
  return (
    <>
      <Head>
        <title>Blog | Martin Tomasi</title>
      </Head>

      <Layout>
        <div css={tw`my-4 flex items-center justify-between`}>
          <Link href="/">
            <a css={tw`text-blue-400 hocus:text-blue-500 cursor-pointer`}>
              <FontAwesomeIcon icon={faCaretLeft} /> Home
            </a>
          </Link>
          <h1 css={tw`text-4xl font-bold`}>Blog</h1>
          <span />
        </div>

        <div css={tw`flex flex-col`}>
          {posts.map((post) => (
            <BlogPreview post={post} key={post.id} />
          ))}
        </div>
      </Layout>
    </>
  )
}

export default Blog
