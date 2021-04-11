import Head from "next/head"
import tw from "twin.macro"
import Layout from "../../components/Layout"
import Link from "next/link"
import createBlogApi, {BlogPost} from "../../lib/blog-api"
import {GetStaticProps} from "next"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCaretLeft} from "@fortawesome/free-solid-svg-icons"
import {formatRelative, parseISO} from "date-fns"

const RelativeDate: React.FC<{date: string}> = ({date}) => {
  const parsed = parseISO(date)
  const now = Date.now()
  return <time dateTime={date}>{formatRelative(parsed, now)}</time>
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogApi = await createBlogApi()
  const posts = blogApi.getAllPosts()
  return {
    props: {
      posts,
    },
  }
}

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

        <div css={tw`flex flex-col items-center`}>
          {posts.map((post) => (
            <article key={post.id} css={tw`mb-4 prose dark:prose-light`}>
              <h2 css={tw`font-bold text-lg`}>{post.title}</h2>
              <span css={tw`text-gray-400`}>
                Created <RelativeDate date={post.createdOn} />
              </span>
              <div dangerouslySetInnerHTML={{__html: post.content}} />
            </article>
          ))}
        </div>
      </Layout>
    </>
  )
}

export default Blog
