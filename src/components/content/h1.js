import styles from '@/styles/components/content/h1.module.scss'

import { DM_Serif_Text, Kanit } from 'next/font/google'

const font = DM_Serif_Text({ subsets: ['latin'], weight: "400" })
const kanitFont = Kanit({ subsets: ['latin'], weight: ["700", "900"] })

export default function H1({children, className, title, kanit}) {


    return (
        <>
            <h1 className={`${styles.root} ${title && styles.title} ${font.className} ${className && className} ${kanit ? kanitFont.className : ''}`}>{children}</h1>
        </>
    )
}