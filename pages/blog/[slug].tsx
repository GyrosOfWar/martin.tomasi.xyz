import {GetStaticPaths, GetStaticProps} from "next"
import Layout from "../../components/Layout"
import createBlogApi, {BlogPost} from "../../lib/blog-api"

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const blogApi = await createBlogApi()
  const post = blogApi.getBySlug((ctx.params?.slug as string) || "")
  return {
    props: {
      post: post === undefined ? null : post,
      notFound: post === undefined,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogApi = await createBlogApi()
  const paths = blogApi.getAllSlugs().map((slug) => ({
    params: {
      slug,
    },
  }))

  return {
    fallback: false,
    paths,
  }
}

interface Props {
  post: BlogPost | null
  notFound: boolean
}

const BlogPostView: React.FC<Props> = ({post}) => {
  return (
    <Layout>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </Layout>
  )
}

export default BlogPostView
