import styles from '@/styles/components/content/text.module.scss'
import { DM_Serif_Text, Kanit } from 'next/font/google'
const font = DM_Serif_Text({ subsets: ['latin'], weight: "400" })
const kanitFont = Kanit({ subsets: ['latin'], weight: ["700", "900"] })

export default function Text({children, xl, xxl, xxxl, className, style, kanit}) {


    return (
        <>
            <p
            style={style}
            className={
                `
                    ${styles.root} 
                    ${xl === true ? styles.xl : ''}
                    ${xxl === true ? styles.xxl : ''}
                    ${xxxl === true ? styles.xxxl : ''}
                    ${xxxl === true ? font.className : ''}
                    ${className ? className : ''}
                    ${kanit === true ? kanitFont.className : ''}
                    
                `}
            >{children}</p>
        </>
    )
}