import { AppProps } from 'next/dist/next-server/lib/router/router'
import { GlobalStyles } from 'twin.macro'

const App = ({ Component, pageProps }: AppProps) => (
  <div>
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
)

export default App
