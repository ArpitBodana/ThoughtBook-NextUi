import Menubar from '../components/Menubar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
         
          <Menubar/>
          <Component {...pageProps} />
        </> 
}

export default MyApp
