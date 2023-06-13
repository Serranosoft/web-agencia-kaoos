import styles from '@/styles/components/content/h2.module.scss'
import { DM_Serif_Text } from 'next/font/google'

const font = DM_Serif_Text({ subsets: ['latin'], weight: "400" })
export default function H2({children, className, title}) {


    return (
        <>
            <h2 className={`${styles.root} ${className && className} ${title && styles.title} ${font.className}`}>{children}</h2>
        </>
    )
}