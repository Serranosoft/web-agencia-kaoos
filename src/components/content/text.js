import styles from '@/styles/components/text.module.scss'

export default function Text({children, xl, xxl, style}) {


    return (
        <>
            <p 
            className={
                `
                    ${styles.root} 
                    ${xl === true ? styles.xl : ''}
                    ${xxl === true ? styles.xxl : ''}
                    ${style ? style : ''}
                    
                `}>{children}</p>
        </>
    )
}