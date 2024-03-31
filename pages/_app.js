import Layout from '@/components/layout'
import '@/styles/globals.css'

import '@fortawesome/fontawesome-svg-core/styles.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
