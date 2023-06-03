import styles from '@/styles/components/content/h3.module.scss'
import { DM_Serif_Text } from 'next/font/google'

const font = DM_Serif_Text({ subsets: ['latin'], weight: "400" })
export default function H3({children, className}) {


    return (
        <>
            <h3 className={`${styles.root} ${className && className} ${font.className}`}>{children}</h3>
        </>
    )
}