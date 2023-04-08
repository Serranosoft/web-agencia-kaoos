import styles from '@/styles/components/h1.module.scss'

import { Alegreya, Cormorant_Upright, DM_Serif_Text, Sansita_Swashed } from 'next/font/google'

const pirataOne = Alegreya({ subsets: ['latin'], weight: "600" })

export default function H1({children, style}) {


    return (
        <>
            <h1 className={`${styles.root} ${style && style} ${pirataOne.className}`}>{children}</h1>
        </>
    )
}