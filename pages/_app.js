import { ChakraProvider } from '@chakra-ui/provider'
import Layout from '../components/layouts/main.js'
import theme from '../libs/theme'
import Fonts from '../components/fonts.js'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
