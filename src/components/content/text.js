import styles from '@/styles/components/content/text.module.scss'
import { DM_Serif_Text } from 'next/font/google'
const font = DM_Serif_Text({ subsets: ['latin'], weight: "400" })

export default function Text({children, xl, xxl, xxxl, className, style}) {


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
                    
                `}
            >{children}</p>
        </>
    )
}