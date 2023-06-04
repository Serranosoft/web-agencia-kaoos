import Header from '@/components/header/header'
import '../styles/globals.css'
import '@/styles/aos/aos.scss'
import Aos from '@/components/aos/aos'
import { Nunito_Sans } from 'next/font/google'

const arimo = Nunito_Sans({ subsets: ['latin'], weight: "400" })

export default function App({ Component, pageProps }) {



    return (
        <>
            <Aos />
            <section className={arimo.className}>
                <Header />
                <main>
                    <Component {...pageProps} />
                </main>
            </section>
        </>
    ) 
}
