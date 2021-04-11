import {AppProps} from "next/dist/next-server/lib/router/router"
import tw, {GlobalStyles} from "twin.macro"
import "@fortawesome/fontawesome-svg-core/styles.css"
import {css, Global} from "@emotion/react"

const App = ({Component, pageProps}: AppProps) => (
  <div>
    <GlobalStyles />
    <Global
      styles={css`
        body {
          ${tw`dark:(bg-gray-900 text-white)`}
        }
      `}
    />
    <Component {...pageProps} />
  </div>
)

export default App
