import Head from "next/head"
import tw from "twin.macro"
import Layout from "../../components/Layout"

const Blog: React.FC = () => {
  return (
    <>
      <Head>
        <title>Blog | Martin Tomasi</title>
      </Head>

      <Layout>
        <div css={tw`my-4`}>
          <h1 css={tw`text-4xl font-bold`}>Blog</h1>
        </div>
      </Layout>
    </>
  )
}

export default Blog
