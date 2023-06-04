import styles from '@/styles/components/content/text.module.scss'

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
                    ${className ? className : ''}
                    
                `}
            >{children}</p>
        </>
    )
}