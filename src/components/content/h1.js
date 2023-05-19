import styles from '@/styles/components/h1.module.scss'

import { DM_Serif_Text } from 'next/font/google'

const pirataOne = DM_Serif_Text({ subsets: ['latin'], weight: "400" })

export default function H1({children, style}) {


    return (
        <>
            <h1 className={`${styles.root} ${style && style} ${pirataOne.className} aos-effect3-observer aos-effect3-el`}>{children}</h1>
        </>
    )
}