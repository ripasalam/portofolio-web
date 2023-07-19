import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Aos from 'aos'
import { useEffect } from 'react'
//import aos style
import 'aos/dist/aos.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // here you can add your aos options
    Aos.init({
      offset: 100,
    });
  }, []);
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
