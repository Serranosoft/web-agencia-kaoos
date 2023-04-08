import styles from '@/styles/components/h1.module.scss'

import { Cormorant_Upright, Sansita_Swashed, Schoolbell } from 'next/font/google'

const pirataOne = Sansita_Swashed({ subsets: ['latin'], weight: "700" })

export default function H1({children, style}) {


    return (
        <>
            <h1 className={`${styles.root} ${style && style} ${pirataOne.className}`}>{children}</h1>
        </>
    )
}