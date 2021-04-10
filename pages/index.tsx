import Head from "next/head";
import tw from "twin.macro";

export default function Home() {
  return (
    <>
      <Head>
        <title>Martin Tomasi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main css={tw`container ml-auto mr-auto p-1`}>
        <div css={tw`my-4`}>
          <h1 css={tw`text-4xl font-bold`}>Martin Tomasi</h1>
        </div>
        <p css={tw`mb-4`}>Hi, I'm a software developer from Vienna.</p>

        <ul css={tw``}>
          <li>
            <a
              css={tw`text-blue-400 hover:text-blue-500`}
              href="https://github.com/GyrosOfWar"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              css={tw`text-blue-400 hover:text-blue-500`}
              href="https://twitter.com/GyrosOfWar_"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              css={tw`text-blue-400 hover:text-blue-500`}
              href="https://500px.com/p/martintomasi"
            >
              500px
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}
