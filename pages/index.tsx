import {
  fa500px,
  faGithub,
  faLastfm,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Head from "next/head"
import tw from "twin.macro"
import Link from "next/link"
import Layout from "../components/Layout"
import {faQuoteRight} from "@fortawesome/free-solid-svg-icons"

const linkData = [
  {
    icon: faGithub,
    text: "GitHub",
    url: "https://github.com/GyrosOfWar",
  },
  {
    icon: fa500px,
    text: "500px",
    url: "https://500px.com/p/martintomasi",
  },
  {
    icon: faTwitter,
    text: "Twitter",
    url: "https://twitter.com/GyrosOfWar_",
  },
  {
    icon: faLastfm,
    text: "Last.fm",
    url: "https://www.last.fm/user/GyrosOfWar",
  },
]

const ExternalLink = tw.a`text-blue-400 p-2 w-full text-center 
  hocus:(bg-blue-400 text-white) transition border 
  border-blue-400 flex justify-between items-center`

export default function Home() {
  return (
    <>
      <Head>
        <title>Martin Tomasi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout centered>
        <div css={tw`my-4`}>
          <h1 css={tw`text-4xl font-bold`}>Martin Tomasi</h1>
        </div>
        <p css={tw`text-lg mb-4`}>Hi, I'm a software developer from Vienna.</p>

        <ul css={tw`flex flex-col text-lg gap-2 w-full md:w-64 text-center`}>
          <li>
            <Link href="/blog">
              <ExternalLink css={tw`cursor-pointer`}>
                <FontAwesomeIcon icon={faQuoteRight} size="lg" />
                <span>Blog</span>
              </ExternalLink>
            </Link>
          </li>
          {linkData.map(({icon, text, url}) => (
            <li key={text}>
              <ExternalLink href={url}>
                <FontAwesomeIcon icon={icon} size="lg" />
                <span>{text}</span>
              </ExternalLink>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  )
}
