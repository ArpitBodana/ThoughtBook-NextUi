import Footer from '../components/Footer'
import Menubar from '../components/Menubar'
import '../styles/globals.css'




function MyApp({ Component, pageProps }) {
  return <>

    <Menubar />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
