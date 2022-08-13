import Navbar from '../components/Navbar'
import '../styles/globals.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
}, []);
  return <>
  <Navbar/>
  <Component {...pageProps} />
  </>
}

export default MyApp
