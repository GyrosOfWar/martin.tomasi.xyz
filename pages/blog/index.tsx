import Head from "next/head"
import tw from "twin.macro"
import Layout from "../../components/Layout"
import Link from "next/link"

const loremIpsum =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."

const posts = [
  {
    title: "A sample blog post",
    content: loremIpsum,
  },
  {
    title: "A second blog post",
    content: loremIpsum,
  },
]

const Blog: React.FC = () => {
  return (
    <>
      <Head>
        <title>Blog | Martin Tomasi</title>
      </Head>

      <Layout>
        <div css={tw`my-4 flex items-center justify-between`}>
          <Link href="/">
            <a css={tw`text-blue-400 hocus:text-blue-500`}>&lt; Home</a>
          </Link>
          <h1 css={tw`text-4xl font-bold`}>Blog</h1>
          <span />
        </div>

        <div css={tw`flex flex-col items-center`}>
          {posts.map((post) => (
            <article css={tw`prose mb-4`}>
              <h2 css={tw`font-bold text-lg`}>{post.title}</h2>
              <p>{post.content}</p>
            </article>
          ))}
        </div>
      </Layout>
    </>
  )
}

export default Blog
