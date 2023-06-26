import styles from '@/styles/components/content/h2.module.scss'
import { DM_Serif_Text, Kanit } from 'next/font/google'

const font = DM_Serif_Text({ subsets: ['latin'], weight: "400" })
const kanitFont = Kanit({ subsets: ['latin'], weight: ["700", "900"] })

export default function H2({children, className, title}) {


    return (
        <>
            <h2 className={`${styles.root} ${className && className} ${title && styles.title} ${kanitFont.className}`}>{children}</h2>
        </>
    )
}